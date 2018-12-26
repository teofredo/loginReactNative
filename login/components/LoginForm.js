import * as React from 'react';
import { Text, View, StyleSheet, Image,KeyboardAvoidingView } from 'react-native';

import FormText from './FormText';

export default class LoginForm extends React.Component {
  render() {
    return (
      <KeyboardAvoidingView behavior="position">
      <View style={styles.container}>
        <Image style={styles.logo} source={require('../assets/Logo.png')} />
            <FormText />
      </View>
      </KeyboardAvoidingView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 20,
  },
  logo: {
    height: 190,
    width: 277,
   
    
  }
});
