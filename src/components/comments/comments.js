import React, {Component} from 'react';
import {commentServices} from "../../services";
import {Comment} from "../comment/comment";

class Comments extends Component {

    constructor(props) {
        super(props);
        this.state ={comments: []}
    }
    componentDidMount() {
        commentServices.getAll().then(({data})=> this.setState({comments: data}))
    }

    render() {
        return (
            <div>
                {this.state.comments.map(comment => <Comment key={comment.id} comment={comment}/>)}
            </div>
        );
    }
}

export {Comments};