import reducer from './reducer';
import * as actions from './actions';


const initialState = {
	threads: [],
	isLoading: false,
	errorMessage: null
};


describe('Testeando reducer', () => {

	describe('accion de request', () => {

		it('cuando recibe la accion request', () => {


			const action = actions.loadThreadsRequest();

			const state = reducer(initialState, action);


			expect(state.isLoading).toBe(true);

			expect(state.threads).toEqual(expect.arrayContaining([]));

			expect(state.errorMessage).toBe(null);


		});

	});


	describe('accion de success', () => {

		it('cuando recibe la accion de success', () => {


			const threads = [{
				title: 'foo',
				body: 'bar'
			}];

			const action = actions.loadThreadsSuccess(threads);

			const state = reducer(initialState, action);


			expect(state.isLoading).toBe(false);

			expect(state.threads).toEqual(expect.arrayContaining(threads));

			expect(state.errorMessage).toBe(null);


		});

	});

	describe('accion de failure', () => {

		it('cuando recibe la accion de failure', () => {


			const error = new Error('error al cargar los topicos');

			const action = actions.loadThreadsFailure(error);

			const state = reducer(initialState, action);
			

			expect(state.isLoading).toBe(false);

			expect(state.threads).toEqual(expect.arrayContaining([]));

			expect(state.errorMessage).toBe(error.message);
			

		});

	});

});