import { connect } from 'react-redux';
import Template from './template';
import {sendObject} from "../../actions/list";

const mapDispatchToProps = (dispatch) => ({
    sendObject(object) {
        return dispatch(sendObject(object));
    }
});

export default connect(
    null,
    mapDispatchToProps
)(Template);
