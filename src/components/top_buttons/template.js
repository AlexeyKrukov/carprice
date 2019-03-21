import React, { Component } from 'react';
import './styles.scss';

class TopButtons extends Component {

    render() {
        return (
            <div>
                <div className="topButtons__top">
                    <div className="topButtons__button" style={{marginRight: '10px'}} onClick={this.props.addToStart}>ДОБАВИТЬ В НАЧАЛО</div>
                    <div className="topButtons__button" onClick={this.props.addToEnd}>ДОБАВИТЬ В КОНЕЦ</div>
                </div>
                <div className="topButtons__bottom">
                    <div className="topButtons__button" style={{marginRight: '10px'}} onClick={this.props.removeFirst}>УДАЛИТЬ ПЕРВЫЙ</div>
                    <div className="topButtons__button" onClick={this.props.removeLast}>УДАЛИТЬ ПОСЛЕДНИЙ</div>
                </div>
            </div>
        );
    }
}
export default TopButtons;
