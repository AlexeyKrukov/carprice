import React, { Component } from 'react';
import { SubItems } from './_blocks'
import './styles.scss';

class List extends Component {

    render() {
        return (
            (this.props.view === 'rows') ? <div>
                {
                    this.props.data.map((elem, index) => {
                        return (
                            <div className="list__row">
                                <div className="list__row_top">
                                    <span className="list__inline-text" style={{ marginLeft: '10px', color: '#009b9b' }}>{++index}</span>
                                    <span className="list__inline-text">{elem.title}</span>
                                    <SubItems subitems={elem.attributes} />
                                </div>
                                <span className="list__description">{elem.description}</span>
                            </div>
                        )
                    })
                }
                <div className="list__delimiter" />
            </div>
            :<div>
                    {
                        this.props.data.map((elem, index) => {
                            return (
                                <div className={((index + 1) % 3 === 0) ? "list__block_last" : "list__block"}>
                                    <div className="list__block_top">
                                        <span className="list__inline-text">{elem.title}</span>
                                        <span className="list__inline-text" style={{ float: 'right', color: '#009b9b', marginRight: '15px' }}>{++index}</span>
                                    </div>
                                    <SubItems subitems={elem.attributes} view="blocks" />
                                    <span className="list__description" style={{ marginLeft: '0' }}>{elem.description}</span>
                                </div>
                            )
                        })
                    }
                    <div className="list__delimiter" />
            </div>
        )
    }
}
export default List;
