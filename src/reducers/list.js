import data from './data'
const initialState = {
    data,
    view: 'rows'
};

export default (state = initialState, action) => {

    switch (action.type) {
        case 'ADD_TO_START':
            let newState = {};
            Object.assign(newState, state);
            const last_elem = state.data.data[newState.data.data.length - 1];
            let array = state.data.data.slice();
            array.unshift(last_elem);
            newState.data.data = array;
            return newState;
        case 'ADD_TO_END':
            newState = {};
            Object.assign(newState, state);
            const first_elem = state.data.data[0];
            array = state.data.data.slice();
            array.push(first_elem);
            newState.data.data = array;
            return newState;
        case 'REMOVE_FIRST':
            newState = {};
            Object.assign(newState, state);
            array = state.data.data.slice();
            array.shift();
            newState.data.data = array;
            return newState;
        case 'REMOVE_LAST':
            newState = {};
            Object.assign(newState, state);
            array = state.data.data.slice();
            array.pop();
            newState.data.data = array;
            return newState;
        case 'SEND_OBJECT':
            newState = {};
            Object.assign(newState, state);
            array = state.data.data.slice();
            array.push(action.payload);
            newState.data.data = array;
            return newState;
        case 'SET_VIEW_ROWS':
            newState = {};
            Object.assign(newState, state);
            newState.view = 'rows';
            return newState;
        case 'SET_VIEW_LIST':
            newState = {};
            Object.assign(newState, state);
            newState.view = 'list';
            return newState;
        default:  return {
            ...state
        };
    }
};
