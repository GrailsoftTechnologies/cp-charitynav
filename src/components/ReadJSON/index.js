import React, { Component } from 'react';

class ReadJSON extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      dataSource: []
    }
  }

  componentDidMount(){
    return fetch('https://s3.amazonaws.com/irs-form-990/index_2017.json')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({ 
          dataSource: responseJson.Filings2017[0],
        });
      })
      .catch((error) => {
        console.error(error);
      });
      
    }
    
    render() {
      let item = this.state.dataSource;
    return(
      <div>
        <div >
          <p>Name: {item.OrganizationName}</p>
          <p>EIN: {item.EIN}</p>
        </div>
      </div>
    );
  }
}

export default ReadJSON;