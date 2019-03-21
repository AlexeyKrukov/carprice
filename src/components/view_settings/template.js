import React, { Component } from 'react';
import './styles.scss';

class ViewSettings extends Component {
    render() {
        return (
            <div className="viewSettings">
                <p className="viewSettings__objectsList">Список объектов</p>
                <button onClick={this.props.setViewList}>Список</button>
                <button onClick={this.props.setViewRows}>Строки</button>
            </div>
        )
    }
}
export default ViewSettings;
