import React, {Component, Fragment} from 'react';
import './LifeCycleComp.css';
import {connect} from 'react-redux';
import { GlobalConsumer } from '../../context/context';


class LifeCycleComp extends Component{
    
    constructor(props){
        super(props)
        this.state ={
            count: 1
        }

        console.log('constructor')
    }

    static getDerivedStateFromProps(props, state){
        console.log("get DerivedStateFromProps")
    }

    componentDidMount(){
        console.log("ComponentidMount")
        // setTimeout(() => {
        //     this.setState({
        //         count: 2
        //     })
        // }, 5000)
    }

    shouldComponentUpdate(nextProps, nextState){        
        console.group("shouldComponentUpdate")
        // console.log("nextProps", nextProps)
        console.log("nextState",nextState)
        console.log("this state", this.state)
        console.groupEnd()
        if (nextState.count >= 4) {
            return false;
        }
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log("getSnapShotBeforeUpdate")
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log("componentDidUpdate")
    }

    componentWillUnmount(){
        console.log("ComponentWillUnmount")
    }

    changeCount = () => {
        this.setState ({
            count: this.state.count +1
        })
    }

    render(){
        console.log("render")
        return(   
            <Fragment>
                <p>Halaman LifeCycle</p>         
                <hr />
                <button className="btn" onClick={this.changeCount}>Component button {this.state.count}</button>
                <hr />

                <p>Total Order : {this.props.state.totalOrder}</p>
            </Fragment>                        
        )
    }
}

// const mapStateToProps = state =>{
//     return {
//         order: state.totalOrder
//     }
// }
export default GlobalConsumer(LifeCycleComp);
// export default connect(mapStateToProps) (LifeCycleComp);