import * as actions from './actions';
import reducer from './reducer';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

describe('llamando al modulo action', () => {

	const middlewares = [thunk] // add your middlewares like `redux-thunk`
	const mockStore = configureMockStore(middlewares);

	const responseMessage = {

		body: {
			data: [{
				title: 'thread 1',
				description: 'thread 1',
			}, {
				title: 'thread 2',
				description: 'thread 2',
			}],

			headers: {
				'content-type': 'application/json'
			},

			status: 200,
		}
	};


	describe('cargando los threads', () => {

		afterEach(() => {
			fetchMock.reset()
			fetchMock.restore()
		})

		xit('cuando la peticion es cumplida', () => {
			fetchMock
				.getOnce('/', responseMessage);

				const store = mockStore({data: []});


				return store.dispatch(actions.loadThreads())
					.then( () => {
						console.log(store.getActions())
					})

		});


	});

	describe('function loadThreadsRequest', () => {

		it('debe retornar  forum-app/LOAD_THREADS_REQUEST', () => {

			const action = actions.loadThreadsRequest();

			expect(action.type).toBe("forum-app/LOAD_THREADS_REQUEST");

		});

	});

	describe('function loadThreadsSuccess', () => {

		it('loadThreadsSuccess debe retornar el action creator con la propiedad payload ', () => {

			const threads = [{
				title: 'foo',
				body: 'bar'
			}];

			const action = actions.loadThreadsSuccess(threads);

			expect(action.payload).toBe(threads);

		});

	});

	describe('function loadThreadsFailure', () => {

		it('loadThreadsFailure should return a Error ', () => {

			const error = new Error('error al cargar los topicos');

			const action = actions.loadThreadsFailure(error);

			expect(action.payload).toBe(error);

		});

	});


});