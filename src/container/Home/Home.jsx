// Libraries
import React, {Component, Fragment, createContext} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

// pages
import Product from '../pages/Product/Product';
import LifeCycleComp from '../pages/LifeCycleComp/LifeCycleComp';
import BlogPost from '../pages/BlogPost/BlogPost';
import YouTubeCompPage from '../pages/YouTubeCompPage/YouTubeCompPage';
import DetailPost from '../pages/BlogPost/DetailPost/DetailPost';

// Style
import './Home.css';

export const RootContext = createContext();
const Provider = RootContext.Provider;


class Home extends Component {

    state = {
        // showComponent: true 
        totalOrder: 5
    }
    
    render(){
        return(
            <Router>               
            <Provider value={this.state}>
                <Fragment>
                    <div className="navigation">
                        <Link to="/">Blog Post</Link>
                        <Link to="/product">Product</Link>
                        <Link to="/lifecycle">LifeCycle</Link>
                        <Link to="/youtube-component">YouTube</Link>
                    </div>
                    <Route path="/" exact component={BlogPost} />
                    <Route path="/detail-post/:PostID" component={DetailPost}/>
                    <Route path="/product" component={Product} />
                    <Route path="/lifecycle" component={LifeCycleComp} />
                    <Route path="/youtube-component" component={YouTubeCompPage}/>
                </Fragment> 
            </Provider>                            
            </Router>                        
        )
    }
}

export default Home;
