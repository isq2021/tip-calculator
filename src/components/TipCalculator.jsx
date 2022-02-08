import React, { Component } from 'react';
import Input from './input';
import Select from './select';

export default class TipCalculator extends Component {
    constructor(props){
        super(props)
        this.state = ({
            billAmount: 0,
            service:0.3,
            numOfPeople: 1,
            tip: 0,
            option: [0.3,0.2,0.15,0.1]

        })
    }

    onChangeBillamount =(e) =>{
        let amount = isNaN(e.target.value) ? 0 : e.target.value
        this.setState({
            billAmount:amount
        })

       

    }

    onChangeService =(e) =>{
        this.setState({
            service:e.target.value
        })

    }
    HandleNumOfPeople = (e) => {
        this.setState({
            numOfPeople:e.target.value
        })

    }
    CalculateTheTip =(e) =>{
        e.preventDefault();
        const tip = (this.state.service * this.state.billAmount)/this.state.numOfPeople
        this.setState({tip})


    }



  render() {
    return (
        <>
        <form onSubmit={this.CalculateTheTip} >
            <div>
                <h1>How much they could pay?</h1>
                <Input  step= "0.5" min ='0' value={this.state.billAmount} onChange ={ this.onChangeBillamount}/>

            </div>
            <div>
                <Select value={this.state.service} onChange ={ this.onChangeService} option = {this.state.option} />
            </div>
            <div>
                <p>Number of people</p>
                <input type="number"  min ='1' value ={this.state.numOfPeople} onChange ={this.HandleNumOfPeople} />
            </div>
            <button>Calculate</button>
            
        </form>
        <h2> {this.state.tip}</h2>
        </>
        )
  }
}
