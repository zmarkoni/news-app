import { FETCH_SOURCES } from '../actions/sources';

const initialState = {
	sources: null,
};

const sources = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_SOURCES:
			return {
				...state,
				sources: action.sources,
			};
		default:
			return state;
	}
};

export default sources;
