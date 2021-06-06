import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View,Image,Button } from 'react-native';
import logo from "./logo.jpg"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  
    alignItems: 'center',
    justifyContent: 'center',
  },
  darkContainer: {
    flex: 1,
    backgroundColor: '#000',
    color:"#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});

function App() {

  const [dark,setDark] =useState(false)

  const ondarkmode =() =>{
    setDark(true)
  }
  const onlightmode =() =>{
    setDark(false)
  }
  const imagelink = 'https://images.unsplash.com/photo-1506477331477-33d5d8b3dc85?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8YmVhY2h8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60' 
  return (
    
    <View style={dark == true ? styles.darkContainer:styles.container}>
      <Text style = {dark == true ? {color:"#fff"}:{color:"#000"}}>hello  world</Text>
      <Text style = {dark == true ? {color:"#fff"}:{color:"#000"}}>Welcome to our world</Text>

      {/* <Image source={
        logo
      }
      style={{height:"100",width:"100"}}
      /> */}
      <Button
      onPress={ondarkmode}
      title="Dark mode"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      style={{paddingBottom:"12px"}}
      />
      
      <Button
      onPress={onlightmode}
      title="light mode"
      color="#841584"
      accessibilityLabel="Learn more about this purple button"
      />
      
      <StatusBar style="auto" />
    </View>
  );
}
export default App;


