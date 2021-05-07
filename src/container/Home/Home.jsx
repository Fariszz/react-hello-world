import React, {Component} from 'react';
import YouTubeComp from '../../component/YouTubeComp/YouTubeComp';
import Product from '../Product/Product';

class Home extends Component {
    render(){
        return(
            <div>
            <p>Youtube</p>
            <hr />
                <YouTubeComp time="7.12" title="Lebron" desc="5x ditonton, 1 hari yang lalu"/>
                <YouTubeComp time="8.02" title="Curry" desc="10x ditonton, 2 hari yang lalu"/>
                <YouTubeComp time="5.04" title="Doncic" desc="40x ditonton, 3 hari yang lalu"/>
                <YouTubeComp time="2.19" title="Harden" desc="30x ditonton, 4 hari yang lalu"/>
                <YouTubeComp />
                <p>counter</p>
                <hr />
                <Product />
            </div>            
            
        )
    }
}

export default Home;