import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Constants } from 'expo';

// You can import from local files
import AssetExample from './components/LoginForm';

// or any pure javascript modules available in npm

export default class App extends React.Component {
  render() {
    return (
     <ScrollView>
      <View style={styles.container}>
        
          <AssetExample />
              
      </View>
   </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
 
  }
});
