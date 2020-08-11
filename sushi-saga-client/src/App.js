import React, { Component } from 'react';
import SushiContainer from './containers/SushiContainer';
import Table from './containers/Table';

// Endpoint!
const API = "http://localhost:3000/sushis/"

class App extends Component {

  state = {
    sushis: [],
    first: 0,
    balance: 100
  }

  eatSushi = (sushi) =>
  {
    if(this.state.balance >= sushi.price)
    {
      sushi.eaten = true;
      this.updateSushi(sushi)
    }
  }
  
  updateSushi = (sushi) =>
  {
    this.setState({balance: this.state.balance - sushi.price})
    const sushis = this.state.sushis.map(sush => {
      return sushi.id === sush.id ? sushi : sush
    })
    this.setState({sushis})
  }

  OLDeatSushi = (sushi) =>
  {
    if(this.state.balance >= sushi.price)
    {
      //not sure if patching makes sense here
      //it would only make sense if balance is also tracked in the db
      // sushi.eaten = true;
      // fetch(API + sushi.id,this.configObj(sushi,"PATCH"))
      // .then(r => r.json())
      // .then(json => this.updateSushi(json))
    }
    
  }


  configObj = (sushi,method) =>
  {
    return {
      method,
      headers:
      {
        "Content-Type": 'application/json',
        "accept": 'application/json'
      },
      body: JSON.stringify(sushi)
    }
  }

  firstPlusFour = () =>
  {
    const {first,sushis} = this.state
    let newFirst;
    if(first + 4 >= sushis.length)
      newFirst = 0;
    else
      newFirst = first + 4;
    this.setState({first: newFirst})

  }  

  componentDidMount()
  {
    fetch(API)
    .then(r => r.json())
    .then(json => this.setState({sushis: json}))
  }

  render() {
    const {sushis,first,balance} = this.state
    return (
      <div className="app">
        <SushiContainer sushis={sushis.slice(first,first+4)} moreClicked={this.firstPlusFour} sushiClicked={this.eatSushi}/>
        <Table sushis={sushis.filter(sush => sush.eaten)} balance={balance}/>
      </div>
    );
  }
}

export default App;