import { connect } from 'react-redux';
import { addToStart, addToEnd, removeFirst, removeLast } from "../../actions/list";
import Template from './template';

const mapDispatchToProps = (dispatch) => ({
    addToStart() {
        return dispatch(addToStart());
    },
    addToEnd() {
        return dispatch(addToEnd());
    },
    removeFirst() {
        return dispatch(removeFirst());
    },
    removeLast() {
        return dispatch(removeLast());
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Template);
