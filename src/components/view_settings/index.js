import { connect } from 'react-redux';
import Template from './template';
import { setViewRows, setViewList } from "../../actions/list";

const mapDispatchToProps = (dispatch) => ({
    setViewRows() {
        return dispatch(setViewRows());
    },
    setViewList() {
        return dispatch(setViewList());
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Template);
