export const LOAD_THREADS_REQUEST = 'forum-app/LOAD_THREADS_REQUEST';

export const LOAD_THREADS_SUCCES = 'forum-app/LOAD_THREADS_SUCCESS';

export const LOAD_THREADS_FAILURE = 'forum-app/LOAD_THREADS_FAILURE';


export function loadThreads() {


	return dispatch => {


		const url = '/threads';


		dispatch(loadThreadsRequest());


		fetch(url)
			.then(response => {

				if (!response.ok) {

					throw new Error(`Error en la peticion ${response.statusText}`);

				}

				return response.json();

			})
			.then(threads => {
				dispatch(loadThreadsSuccess(threads.data));

			})
			.catch((error) => {

				dispatch(loadThreadsFailure(error));

			})
	};

}

export function loadThreadsRequest() {

	return {
		type: LOAD_THREADS_REQUEST,
	}

}

export function loadThreadsSuccess(threads) {
	return {
		type: LOAD_THREADS_SUCCES,
		payload: threads,
	}

}

export function loadThreadsFailure(error) {

	return {
		type: LOAD_THREADS_FAILURE,
		payload: error,
		error: true,
	}

}
