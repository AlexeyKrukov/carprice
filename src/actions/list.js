export const addToStart = () => ({
    type: 'ADD_TO_START'
});
export const addToEnd = () => ({
    type: 'ADD_TO_END'
});
export const removeFirst = () => ({
    type: 'REMOVE_FIRST'
});
export const removeLast = () => ({
    type: 'REMOVE_LAST'
});
export const sendObject = (object) => ({
    type: 'SEND_OBJECT',
    payload: object
});
export const setViewRows = () => ({
    type: 'SET_VIEW_ROWS'
});
export const setViewList = () => ({
    type: 'SET_VIEW_LIST'
});
