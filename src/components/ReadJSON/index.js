import React, { Component } from 'react';

class ReadJSON extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataSource: []
    }
  }

  componentDidMount(){
    return fetch('https://demo.open990.com/advanced_search?ein=411357750')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ 
          dataSource: responseJson.matches,
        });
      })
      .catch((error) => {
        console.error(error);
      });
      
    }
    
    render() {
      console.log(this.state.dataSource)
    return(
      
      <div>
          {this.state.dataSource.map(function(item, i){
            return (
              <div key={i}>
                <p>Name: {item.name}</p>
                <p>EIN: {item.ein}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ReadJSON;