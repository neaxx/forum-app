import * as actions from './actions';
import reducer from './reducer';

import configureMockStore from 'redux-mock-store'
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';


describe('test fetch ', () => {

	const middlewares = [thunk] // add your middlewares like `redux-thunk`
	const mockStore = configureMockStore(middlewares);
	const fetch = jest.fn();
	const responseMessage = {

		data: [{
			title: 'thread 1',
			description: 'thread 1',
		}, {
			title: 'thread 2',
			description: 'thread 2',
		}],

	};

	describe('testing api', () => {
		beforeEach(() => {
			fetch.resetMocks()
		})

/*		it('calls google and returns data to me', () => {
			fetch.mockResponseOnce(JSON.stringify(responseMessage))

			//assert on the response
			actions.loadThreads().then(res => {
				expect(res.data[0]).toEqual({
					title: 'thread 1',
					description: 'thread 1',
				})
			})

			//assert on the times called and arguments given to fetch
			expect(fetch.mock.calls.length).toEqual(1)
			expect(fetch.mock.calls[0][0]).toEqual('https://google.com')
		})*/
	})


})