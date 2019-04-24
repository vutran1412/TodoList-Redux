import React from 'react';

export class TodoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id: Math.floor(Math.random() * 100),
            title: "",
            body: ""
        }
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    updateTitle(e) {
        this.setState(
            { title: e.target.value }
        )
    }
    updateBody(e) {
        this.setState(
            { body: e.target.value }
        )
    }

    handleSubmit(e) {
        e.preventDefault();
        // debugger
        
        this.props.receiveTodo(this.state);
        
        this.setState({
            id: Math.floor(Math.random() * 100),
            title: "",
            body: ""
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="title">Title
                    <input 
                        type="text" 
                        value={this.state.title} 
                        onChange={this.updateTitle.bind(this)} />
                </label>
                <label htmlFor="body">Body
                    <input 
                        type="text" 
                        value={this.state.body}
                        onChange={ this.updateBody.bind(this) } />
                </label>
                <input type="submit"/>
            </form>
        )
    }
}

