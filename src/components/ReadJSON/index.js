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
        console.log(typeof(responseJson));
        
        this.setState({ 
          dataSource: responseJson.charities,
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    return(
      <div>
          {this.state.dataSource.map(function(item, i){
            return (
              <div>
                <p key={i}>Name: {item.name}</p>
                <p key={i}>EIN: {item.ein}</p>
              </div>
            );
          })}
      </div>
    );
  }
}

export default ReadJSON;