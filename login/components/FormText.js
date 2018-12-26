import * as React from 'react';
import {
  AppRegistry,
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';

export default class FormText extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      btnState: true,
    };
  }

  onEmail(email) {
    this.setState({ email: email });
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (reg.test(email) === false) {
      this.setState({ emailError: 'not correct format for email address' });
    } else {
      this.setState({ emailError: '' });
    }
  }

  onPassword(password) {
    this.setState({ password: password });
    if (password.length < 6 || password.length > 12) {
      this.setState({
        passwordError: 'please use at least 6 - 12 characters',
      });
    } else {
      this.setState({ passwordError: '' });
    }
  }

  onEnd() {
    let e = this.state.emailError;
    let p = this.state.passwordError;
    if (e === '' && p === '') {
      this.setState({ btnState: false });
    } else {
      this.setState({ btnState: true });
    }
  }
  onLogin() {
    Alert.alert('Success!');
  }

  render() {
    const { btnState } = this.state;

    return (
      <View style={styles.container}>
        <Text style={styles.textStyle}>Email</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Input email address"
          returnKeyType="Next"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          onChangeText={email => this.onEmail(email)}
          onEndEditing={this.onEnd.bind(this)}
        />
        <Text style={styles.errorText}>{this.state.emailError}</Text>

        <Text style={styles.textStyle}>Password</Text>
        <TextInput
          style={styles.textBox}
          placeholder="Input password"
          returnKeyType="Go"
          secureTextEntry={true}
          onChangeText={password => this.onPassword(password)}
          onEndEditing={this.onEnd.bind(this)}
        />
        <Text style={styles.errorText}>{this.state.passwordError}</Text>
       
        <TouchableOpacity
          style={styles.buttonContainer}
          onPress={this.onLogin.bind(this)}
          disabled={btnState}>
          {this.state.buttonState}
          <Text style={styles.buttonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 2,
    paddingTop: 150,
  },
  errorText: {
    fontSize: 12,
    color: '#ff0033',
  },
  textStyle: {
    fontFamily: 'sans-serif-condensed',
    fontSize: 22,
    fontWeight: 'bold',
    fontColor: '#141414',
  },
  textBox: {
    borderColor: '#8a2be2',
    borderWidth: 1,
    borderRadius: 4,
    height: 40,
    width: 340,
    paddingHorizontal: 10,
    fontSize: 18,
  },
  buttonContainer: {
    backgroundColor: '#8a2be2',
    alignItems: 'center',
    justifyContent: 'center',
    height: 40,
    borderRadius: 4,
    marginTop: 30,
  },
  buttonText: {
    color: '#ffffff',
    fontFamily: 'sans-serif-condensed',
    fontSize: 26,
    fontWeight: 'bold',
  },
});
