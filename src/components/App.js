import React, { Component } from 'react';
import TableTop from 'tabletop';

class App extends Component {
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    TableTop.init({
      key: '1lQrEsJpAUGwWI9mSpTTUkP3fjR6n53nAlU8vdiqEqWw',
      callback: googleData => {
        this.setState({
          data: googleData
        }, () => console.log('updated state', this.state.data))
      },
      simpleSheet: true
    })
  }
  
  render() {
    const { data } = this.state;
    return (
      <div className='main-container'>
        {
          data.map(obj => (
            <div key={obj.Employee}>
              <p>{obj.Employee}</p>
              <p>{obj.favDog}</p>
              <img src={obj.img} alt={obj.favDog} />
            </div>
          ))
        }
      </div>
    )
  }
};

export default App;