// Libraries
import React, {Component, Fragment, createContext} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';
import Hooks from '../pages/Hooks/Hooks';

// Style
import './Home.css';
import GlobalProvider from '../context/context';




class Home extends Component {
    render(){
        return(
            <Router>                           
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">YouTube</Link>
                        <Link to="/hooks">Hooks</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:PostID" component={DetailPost}/>
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YouTubeCompPage}/>
                    <Route path="/hooks" component={Hooks}/>
                </Fragment> 
            </Router>                        
        )
    }
}

export default GlobalProvider(Home);
