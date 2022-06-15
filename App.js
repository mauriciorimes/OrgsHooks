import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView } from 'react-native';
import Home from './src/telas/Home';

export default function App() {
  return (
    <SafeAreaView style={estilos.tela}>  
      <StatusBar />    
      <Home />
    </SafeAreaView>    
  );
}

const estilos = StyleSheet.create({
  flex: 1
});


