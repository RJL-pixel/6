import React, {Component} from 'react';
import Posts from "./components/posts/posts";
import {Comments} from "./components";

class App extends Component {
    render() {
        return (
            <div>
                <Posts/>
                <Comments/>
            </div>
        );
    }
}

export default App;