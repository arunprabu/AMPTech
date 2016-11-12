import React from 'react';
import ReactDOM from 'react-dom';

import {Router, Route, browserHistory, IndexRoute} from "react-router";


import Layout from "./components/layout";
import Home from "./components/home";
import Post from "./components/post";


class App extends React.Component {
  render(){
    return (
    	<Router history={browserHistory}>
    		<Route path="/" component={Layout}>
    			<IndexRoute component={Home} />
    			<Route path={"home"} component={Home} />
    			<Route path={"post"} component={Post} />
    			<Route path={"post/:id"} component={Post} />
    		</Route>
    	</Router>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));