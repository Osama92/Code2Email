import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, TextInput, ImageBackground,KeyboardAvoidingView, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: ''
    };
  }

  

  handleUsername = (text) => {
    this.setState({username:text})
  }
  handlePassword = (text) => {
    this.setState({password:text})
  }

  handleLogin = () => {
    if (this.state.username === 'PZC30861' && this.state.password === 'TAGtag') {
      this.props.navigation.navigate('Scanner')
    } else {
      console.log('Wrong')
    }
  }

  render() {
    return (
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : null} style={{flex:1}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={styles.container}>
        
       <ImageBackground style={styles.backImage}
                        source={require('../assets/wh.jpg')}>
        
         <View style={styles.header}>
           <Text style={{fontSize:40, fontWeight: '800', paddingLeft: 10, color:'white'}}>Hi there!</Text>
           <Text style={{fontSize:20, fontWeight: '600', paddingLeft: 10, color:'white'}}>Trust your day is moving great!</Text>
         </View>
         
         <View style={styles.inputView}>
           
           <View style={styles.login}>
             <Text style={{fontWeight:'600', color: '#fff',padding: 10, textAlign:'center'}}>Please enter your user name and password in the fields.</Text>
           <View style={{flexDirection:'row'}}>
              <View style={{justifyContent:'center', marginRight:20}}>
               <Text style={{fontSize: 14, color: '#fff', fontWeight: '700'}}>Username</Text>
              </View>
                <TextInput style={styles.textInput}
                           onChangeText ={this.handleUsername}
                           placeholder='Enter Username'
                           maxLength={8}
                           autoCapitalize='characters'
                           />
            </View>
            <View style={{flexDirection:'row', justifyContent:'space-around', marginTop:20}}>
              <View style={{justifyContent:'center', marginRight:20}}>
               <Text style={{fontSize: 14, color: '#fff', fontWeight: '700'}}>Password</Text>
              </View>
                <TextInput style={styles.textInput}
                            onChangeText={this.handlePassword}
                            autoCorrect={false}
                            placeholder='Enter password'
                            secureTextEntry={true}
                            maxLength={8}/>
            </View>
            <TouchableOpacity style={{width: 250, height: 50, backgroundColor: '#fff', marginTop:10, justifyContent:'center', alignItems:'center', borderRadius:10}}
                              onPress={this.handleLogin}>
             <Text style={{fontWeight:'600', fontSize:20, color:'#333'}}>Login</Text>
           </TouchableOpacity>
           </View>

          
           
         </View>
         
       </ImageBackground>
       
      </SafeAreaView>
      </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent:'center',
    
  },
  header: {
    width: '100%',
    height:'20%',
    backgroundColor:'#333',
    justifyContent:'center'
  },
  backImage: {
    flex: 1
  },
  inputView: {
    width:'100%',
    height:'80%',
    //backgroundColor:'silver',
    justifyContent:'center',
    alignItems: 'center',
  },
  textInput: {
    width: '50%',
    height: 60,
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
  },
  login: {
    width: '80%',
    height: '80%',
    backgroundColor:'#333',
    borderRadius: 20,
    justifyContent:'center',
    alignItems:'center'
    
   
  }

});

export default Login;
