import React, { Component,Fragment } from 'react';
import Counter from './Counter';

class CardProduct extends Component{

    state = {
        order: 4,
        name: 'Faris'
    }

    handleCounterChange = (newValue) => {
        this.props.onCounterChange(newValue);
    }

    handlePlus = () =>{
        this.setState({
            order: this.state.order + 1
        }, () => {
            this.handleCounterChange(this.state.order);
        })                
    }

    handleMinus = () =>{        
        if (this.state.order > 0) {
            this.setState({
                order: this.state.order - 1
            }, () => {
                this.handleCounterChange(this.state.order);
            })    
        }        
        
    }
    render(){
        return(
            <div className="card">
                <div className="img-thumb-prod">
                    <img src="https://img-global.cpcdn.com/recipes/a1f24057e82b4939/680x482cq70/ayam-bumbu-merah-foto-resep-utama.jpg" alt="" width="400"/>
                </div>
                <p className="product-title">Daging ayam Berbumbu Rasa Original</p>
                <p className="product-price">Rp. 410.000</p>     
                <Counter onCounterChange={(value) => this.props.onCounterChange(value)}/>           
            </div>                        
        )
    }
}

export default CardProduct;