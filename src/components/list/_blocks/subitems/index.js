import React, { Component } from 'react';
import './styles.scss';

class SubItems extends Component {
    render() {
        return (
            <div className={this.props.view === 'blocks' ? "subitems-blocks" : "subitems"}>
                {
                    this.props.subitems.map(elem => {
                        return (
                            <span className="subitems__text">{elem}</span>
                        )
                    })
                }
            </div>
        );
    }
}

export default SubItems;
