const LOAD_THREADS_REQUEST = 'forum-app/LOAD_THREADS_REQUEST';
const LOAD_THREADS_SUCCES = 'forum-app/LOAD_THREADS_SUCCESS';
const LOAD_THREADS_FAILURE = 'forum-app/LOAD_THREADS_FAILURE';

export function loadThreadsRequest(){

	return {

		type: LOAD_THREADS_REQUEST,

	}

}

export function loadThreadsSuccess(threads){

	return {

		type: LOAD_THREADS_SUCCESS,
		payload:threads,

	}

}

export function loadThreadsFailure(error){

	return {

		type: LOAD_THREADS_FAILURE,
		error:true,
		payload:error,
		
	}

}