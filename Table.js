import React from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

import Row from './Row.js'



class TableScreen extends React.Component {
    constructor(props) { 
      super(props); 
      this.state = { 
        rows: [
        ],
        text1: '',
        text2: '',
        mode: 'new',
        editIndex: -1
      }    
        // Bind the this context to the handler function
      this.deleteHandler = this.deleteHandler.bind(this);
      this.editHandler = this.editHandler.bind(this);

    }  

    addRow() {
      console.log("function")
      this.setState(prevState => ({
        rows: [...prevState.rows, {title: this.state.text1, amount: this.state.text2, date: new Date().toDateString()}]
      ,
        text1: '',
        text2: ''}        
      ))
        
    }

    deleteHandler(index) {
      var array = [...this.state.rows]; // make a separate copy of the array
          if (index !== -1) {
        array.splice(index, 1);
        this.setState({rows: array});
      }
    }

    editHandler(index) {
      this.setState({text1 : this.state.rows[index].title})
      this.setState({text2 : this.state.rows[index].amount})
      this.setState({mode : 'edit'})
      this.setState({ editIndex: index })
    }

    doneEditing() {

      let newArray = [...this.state.rows];
      newArray[this.state.editIndex].title = this.state.text1;
      newArray[this.state.editIndex].amount = this.state.text2;

      this.setState({rows: newArray});
      this.setState({mode : 'new'})
      this.setState({text1: '', text2: ''})
    }

    returnToHome() {
      var sum = 0;
      this.state.rows.forEach(el => {
        sum = sum + parseInt(el.amount)
      })
      this.props.navigation.navigate('Home', {sum : sum} )
    }

    static navigationOptions = {
      title: 'Welcome',
    };
    render() {
      const {navigate} = this.props.navigation;
      return (
        <GestureRecognizer  style={styles.container}
        onSwipeRight={() => this.returnToHome()}>
        <View>
            <View>
              <View style={styles.row}>
                <Text style={styles.header}>
                  Title
                </Text>
                <Text style={styles.header}>
                  Amount
                </Text>
                <Text  style={styles.header}>
                  Date
                </Text>
                <Text style={styles.fullWidth}>

                </Text>
              </View>

              {
                this.state.rows.map((el,index) => 
                  <Row key={index} 
                    actionDelete={() => this.deleteHandler(index)} 
                    actionEdit={() => this.editHandler(index)}
                    title={el.title} amount={el.amount} date={el.date}></Row>
                )
              }
            </View>
            <Text>Title</Text>
            <TextInput style={styles.input} 
              onChangeText={(text1) => this.setState({text1})}
              value={this.state.text1}
              >

        </TextInput>
            <Text>Amount</Text>  
            <TextInput style={styles.input}
                         onChangeText={(text2) => this.setState({text2})}
                         value={this.state.text2}
            ></TextInput>
            {
              this.state.mode == 'new' ? <Button onPress={() => this.addRow()} title="Add"></Button> :
                  <Button onPress={() => this.doneEditing()} title="Done editig"></Button>
            }

        </View>


        </GestureRecognizer>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      resizeMode: 'cover', // or 'stretch'
    },
    row: {
      display: 'flex',
      flexDirection: 'row'
    },
    column: {
      width: '20%',
      textAlign: 'center',
      borderWidth: 0.5,
      borderColor: 'black',
      backgroundColor: 'grey'
    },
    fullWidth: {
      width: '40%'
    },
    input: {
      borderWidth: 0.5,
      borderColor: 'green'
    },
    header: {
      width: '20%',
      textAlign: 'center',
      borderWidth: 0.5,
      borderColor: 'black',
      backgroundColor: 'grey',
      fontWeight: 'bold'
    }
  });

  export default TableScreen