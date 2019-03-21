import React, { Component } from 'react';
import './styles.scss';

class AddForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addItemsCount: ['item']
        };
        this.addItem = this.addItem.bind(this);
        this.sendObject = this.sendObject.bind(this);
    }

    render() {
        return (
            <div className="addForm">
                <p>Добавить новый объект</p>
                <span>Заголовок*</span>
                <input type="text" ref="title" />
                {this.state.addItemsCount.map((item, index) => {
                    return (
                        <div>
                            <span>Добавить пункт</span>
                            <input type = "text" onBlur={this.addItem} ref={"item".concat(index)}/>
                        </div>
                );
                })
                }
                <span>Описание</span>
                <input type="text" ref="description" />
                <button onClick={this.sendObject}>ДОБАВИТЬ</button>
            </div>
        )
    }
    addItem() {
        const items = this.state.addItemsCount;
        for (let i = 0; i < this.state.addItemsCount.length; i++) {
            const key = `item${i}`;
            if(this.refs[key].value === '') {
                return;
            }
        }
        items.push('item');
        this.setState({
            addItemsCount: items
        });
    }
    sendObject() {
        const title = this.refs.title.value;
        const description = this.refs.description.value;
        const attributes = [];
        for (let i = 0; i < this.state.addItemsCount.length; i++) {
            const key = `item${i}`;
            if(this.refs[key].value !== '') {
                attributes.push(this.refs[key].value);
                this.refs[key].value = '';
            }
        }
        this.refs.title.value = '';
        this.refs.description.value = '';
        const obj = {
            title,
            attributes,
            description
        };
        this.setState({
            addItemCount: ['item']
        });
        this.props.sendObject(obj);
    }
}
export default AddForm;
