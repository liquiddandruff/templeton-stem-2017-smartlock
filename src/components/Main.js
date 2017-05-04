import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Login from '../components/login';

class Main extends Component {
  static navigationOptions = {
    header: null,
  }

  constructor(props) {
    super(props);
    this.state = {
      wifiLockAddr: "https://jsonplaceholder.typicode.com/posts",
    };
    this.testFetch();
  }

  testFetch() {
    return fetch(this.state.wifiLockAddr)
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(responseJson);
        this.setState({
          response: responseJson,
        });
        return responseJson;
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    var printthis = this.state.response ? this.state.response[0].body : "none";
    return (
      <View>
        <Text>Helo Native Boilerplate</Text>
        <Text>{printthis}</Text>
        <Login/>
      </View>
    );
  }
}

export default Main;
