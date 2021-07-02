import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,View,Text,TextInput, TouchableHighlight} from 'react-native';
import Display from './componentes/display'
import Btn from './componentes/botoes'
export default function App(){

		const [operacao, setOperacao]=useState(0)
    const [resultado, setResultado]=useState(0)

    const operar=()=>{

      setResultado(eval(operacao))
    }

		return ( 
			<SafeAreaView style={estilos.container}>
				<Text>Calculadora</Text>
        
        <Display valor={0} res={0}/>
        <View style={estilos.botoes}>
          <Btn label='AC' ac aoClicar={()=>{}}></Btn>
          <Btn label='(' aoClicar={()=>{}}></Btn>
          <Btn label=')' aoClicar={()=>{}}></Btn>
          <Btn label='/' operacao aoClicar={()=>{}}></Btn>
          <Btn label='7' aoClicar={()=>{}}></Btn>
          <Btn label='8' aoClicar={()=>{}}></Btn>
          <Btn label='9' aoClicar={()=>{}}></Btn>
          <Btn label='*' operacao aoClicar={()=>{}}></Btn>
          <Btn label='4' aoClicar={()=>{}}></Btn>
          <Btn label='5' aoClicar={()=>{}}></Btn>
          <Btn label='6' aoClicar={()=>{}}></Btn>
          <Btn label='-' operacao aoClicar={()=>{}}></Btn>
          <Btn label='1' aoClicar={()=>{}}></Btn>
          <Btn label='2' aoClicar={()=>{}}></Btn>
          <Btn label='3' aoClicar={()=>{}}></Btn>
          <Btn label='+' operacao aoClicar={()=>{}}></Btn>
          <Btn label='0' aoClicar={()=>{}}></Btn>
          <Btn label='.' aoClicar={()=>{}}></Btn>
          <Btn label='<-' bs aoClicar={()=>{}}></Btn>
          <Btn label='=' igual aoClicar={()=>{}}></Btn>

         
        </View>

			</SafeAreaView>






			);
	};


const estilos= StyleSheet.create({
	container:{
    flex:1,
    justifyContent:'flex-start',
    alignItems:'center'
		
	},
	
  display:{
    padding:10,
    backgroundColor:'#333'
  },

  botoes:{
    flexDirection:'row',
    flexWrap:'wrap'
  }

});



