import React, {Component} from 'react';
import {posrServices} from "../../services";
import {Post} from "../post/post";

class Posts extends Component {

    constructor(props) {
        super(props);
        this.state ={posts: []}
    }
    componentDidMount() {
        posrServices.getAll().then(({data})=> this.setState({posts: data}))
    }

    render() {
        return (
            <div>
                {this.state.posts.map(post => <Post key={post.id} post={post}/>)}
            </div>
        );
    }
}

export default Posts;