import React, {Component} from 'react';
// import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
// import Product from '../Product/Product';
// import LifeCycleComp from '../LifeCycleComp/LifeCycleComp';
import BlogPost from '../BlogPost/BlogPost';

class Home extends Component {

    state = {
        showComponent: true
    }

    componentDidMount(){
        // setTimeout(() => {
        //     this.setState({
        //         showComponent: false
        //     })
        // }, 15000)

    }

    render(){
        return(
            <div>
            {/* <p>Youtube</p>
            <hr />
                <YouTubeComp time="7.12" title="Lebron" desc="5x ditonton, 1 hari yang lalu"/>
                <YouTubeComp time="8.02" title="Curry" desc="10x ditonton, 2 hari yang lalu"/>
                <YouTubeComp time="5.04" title="Doncic" desc="40x ditonton, 3 hari yang lalu"/>
                <YouTubeComp time="2.19" title="Harden" desc="30x ditonton, 4 hari yang lalu"/>
                <YouTubeComp />
                <p>counter</p>
                <hr />
                <Product /> */}
                {/* <p>LifeCycle Component</p>
                <hr />
                {
                    this.state.showComponent ?
                    <LifeCycleComp />
                    : null
                } */}

                <p>Blog Post</p>
                <hr />
                <BlogPost />
                
            </div>            
            
        )
    }
}

export default Home;