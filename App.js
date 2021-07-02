import React,{useState} from 'react';
import {SafeAreaView,StyleSheet,View,Text,TextInput, TouchableHighlight} from 'react-native';

export default function App(){

		const [operacao, setOperacao]=useState(0)
    const [resultado, setResultado]=useState(0)

    const operar=()=>{

      setResultado(eval(operacao))
    }

		return ( 
			<SafeAreaView style={estilos.container}>
				<Text>Calculadora</Text>

				<TextInput
					style={estilos.display}
					value={String(operacao)}
          onChangeText={(texto)=>{setOperacao(texto)}}
          //keyboardType='numeric'
          ></TextInput>

          <TextInput
          style={estilos.display}
          value={String(resultado)}
          //onChangeText={(texto)=>{setResultado(texto)}}
         // keyboardType='numeric'
          ></TextInput>


          <TouchableHighlight
            style={estilos.btn}
            onPress={()=>operar()}

          ><Text>operar</Text>
          </TouchableHighlight>

			</SafeAreaView>






			);
	};


const estilos= StyleSheet.create({
	container:{
		padding:10
	},
	display:{
		borderWidth:1,
		borderRadius:10
	},

  btn:{
    backgroundColor:'#aaa',
    padding:10,
    margin:10,
    width:100
  }

});



