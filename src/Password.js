import React from 'react';
import { StyleSheet, Text, View, Image, Button, Alert, TouchableOpacity, TextInput } from 'react-native';
import { createStackNavigator, } from 'react-navigation';

export default class PasswordScreen extends React.Component {

  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  render() {
    return (
  <View style={styles.container}>

    {/* Spacer */}
      <View style={styles.spacing}>
      </View>

    {/* Spacer */}
      <View style={styles.spacing}>
      </View>



    {/* Prompt */}
    <View style={styles.titlePnl}>
        <Text style={styles.title}>Set up your password</Text>
      </View>

    {/* Spacer */}
    <View style={styles.spacing}>
    </View>

    {/* Spacer */}
    <View style={styles.spacing}>
      </View>

    {/* Text Input */}
    <TextInput secureTextEntry={true}
      style = {{height: 75, width: 300, borderColor: 'gray', borderWidth: 0}}
    clearTextOnFocus
    onChangeText={(text) => this.setState({text})}
    placeholder = '*******'
    value ={this.state.text}
    />

    {/* Spacer */}
    <View style={styles.spacing}>
      </View>

    {/* Spacer */}
    <View style={styles.spacing}>
      </View>

    {/* Spacer */}
    <View style={styles.spacing}>
      </View>

    {/* Spacer */}
    <View style={styles.spacing}>
      </View>


    <View>
      <TouchableOpacity style={styles.btn}
        onPress={() => {
          this.props.navigation.navigate('LegalNameEntry');
        }}>
        <Image style={styles.btnImgLong} source={require("../assets/BTN_TEMPLATE.png")}/>
      <View style={styles.btnText}>
        <Text style={styles.btnFont}>Continue</Text>
      </View>
    </TouchableOpacity>
      </View>


  </View>
    );
  }


}



const styles = StyleSheet.create({
  container: {
  flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  flexDirection: 'column'

  },
  titlePnl: {
  alignItems: 'center',

  },
  spacing: {
  flex: 0.1,
  },
  logo: {
    width: 225,
  height: 225
  },

  btn: {
    shadowColor: '#303838',
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 10,
    shadowOpacity: 0.35,
  },
  btnImgLong: {
    height: 75,
    width: 225
  },
  btnText: {
  position: 'absolute',
  height: 75,
  width: 225,
  alignItems: 'center',
  justifyContent: 'center',
  },

  //text
  title: {
  fontWeight: 'bold',
  fontSize: 30,
  },
  subtitle: {
  fontWeight: 'normal',
  fontSize: 20,
  },
  btnFont: {
  fontWeight: 'bold',
  fontSize: 17,
  color: 'white',
  }
});