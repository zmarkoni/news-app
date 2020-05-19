import { SET_SOURCES } from '../actions/sources';

const initialState = {
	sources: [],
};

const sources = (state = initialState, action) => {
	switch (action.type) {
		case SET_SOURCES:
			return {
				...state,
				articles: action.data,
			};
		default:
			return state;
	}
};

export default sources;
