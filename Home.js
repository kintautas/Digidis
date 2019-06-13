import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

class HomeScreen extends React.Component {


    static navigationOptions = {
      title: 'Home',
    };
    render() {
      const config = {
        velocityThreshold: 0.3,
        directionalOffsetThreshold: 80
      };

      const sum = this.props.navigation.getParam('sum');

      return (

        <GestureRecognizer  style={styles.container}
        onSwipeLeft={() => this.props.navigation.navigate('Table')} config={config}
>
        <View >
            <Text style={styles.fontStyles}>Suma: { sum }</Text>
        </View>
        </GestureRecognizer>
      )
    }
  }


  const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
      justifyContent: 'center',
      alignItems:  'center'
    } ,
    fontStyles: {
      fontSize: 50,
      fontWeight: 'bold',
    }
  });

  export default HomeScreen