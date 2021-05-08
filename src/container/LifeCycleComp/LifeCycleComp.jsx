import React, {Component} from 'react';
import './LifeCycleComp.css';

class LifeCycleComp extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            count: 1
        }

        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){

    }

    componentDidMount(){
        setTimeout(() => {
            this.setState({
                count: 2
            })
        }, 3000)
    }

    shouldComponentUpdate(nextProps, nextState){
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){

    }

    componentWillUnmount(){

    }

    render(){
        return(
            <button className="btn">Component button {this.state.count}</button>
        )
    }
}

export default LifeCycleComp;