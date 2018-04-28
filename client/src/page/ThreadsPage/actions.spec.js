import * as actions from './actions';

describe('CALL action module', () => {

	describe('function loadThreadsRequest', () => {

		it('return  forum-app/LOAD_THREADS_REQUEST', () => {

			const action = actions.loadThreadsRequest();

			expect(action.type).toBe("forum-app/LOAD_THREADS_REQUEST");

		});

	});

	describe('function loadThreadsSuccess', () => {

		it('loadThreadsSuccess return action create with payload ', () => {

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


