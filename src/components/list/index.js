import { connect } from 'react-redux';
import Template from './template';

const mapStateToProps = (store) => {
    return {
        data: store.list.data.data,
        view: store.list.view
    }
};

export default connect(
    mapStateToProps,
    null
)(Template);
