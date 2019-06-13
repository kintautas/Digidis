import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Row extends React.Component {
    constructor(props) {
        super(props)
    }


render() {
    return(
        <View style={styles.row}>
            <Text style={styles.column} >
                {this.props.title}
            </Text>
            <Text style={styles.column} >
                {this.props.amount}
            </Text>
            <Text style={styles.column} >
                {this.props.date}
            </Text>
            <Button  style={styles.column} onPress={() => this.props.actionEdit()} title="Edit"/>
            <Button  style={styles.column} onPress={() => this.props.actionDelete()} title="Delete"/>
        </View>
    )
}
}

const styles = StyleSheet.create({
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    column: {
      width: '20%',
      textAlign: 'center',
      borderWidth: 0.5,
      borderColor: 'black'
    }
  });

  export default Row