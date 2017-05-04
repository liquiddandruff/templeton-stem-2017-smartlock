import React, { Component } from 'react';
import {
  View, 
  TextInput,
  Text 
} from 'react-native';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wifiLockAddr: "https://jsonplaceholder.typicode.com/posts",
      text: "",
    };
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
    return (
      <View>
        <Text>Helo Native Boilerplate</Text>
        <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 300}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
      </View>
    );
  }
}

export default Login;
