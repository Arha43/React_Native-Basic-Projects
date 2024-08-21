import React, { useState } from 'react'
import { Text,View,StyleSheet,TextInput,FlatList, Pressable} from 'react-native'
import Snackbar from 'react-native-snackbar';
import Curencybuttonfunc from './Currencybutton';
import CurrencyByRupee from './constant';
import ReactNativeHapticFeedback from "react-native-haptic-feedback";
const options = {
  enableVibrateFallback: true,
  ignoreAndroidSystemSettings: false,
};

function App(){
  const [inputValue,setInputValue]=useState('')
  const [targetValue,setTargetValue]=useState('')
  const [resultValue,SetResultVale]=useState('')
  const ButtonPressed=(targetCurrency:Currency)=>{
    if(!inputValue){
      ReactNativeHapticFeedback.trigger("impactLight", options);
      return Snackbar.show({
          text: 'Enter a Value',
          duration: Snackbar.LENGTH_SHORT,
          backgroundColor:'#2C3335',
          textColor:'#019031'
        }
      )
    }
    const inputedValue:number=parseFloat(inputValue)
    if(!isNaN(inputedValue)){
      const convertedValue=targetCurrency.value*inputedValue
      const result=convertedValue.toFixed(2)
      SetResultVale(result)
      setTargetValue(targetCurrency.name)
    }else{
      ReactNativeHapticFeedback.trigger("impactLight", options);
      return Snackbar.show({
        text: 'Wrong Input Value',
        duration: Snackbar.LENGTH_SHORT,
        backgroundColor:'#2C3335',
        textColor:'#E71C23'
       
      })
    }
  }

  const ResetValue=()=>{
    ReactNativeHapticFeedback.trigger("impactLight", options);
    const reset=''
    setTargetValue(reset)
    SetResultVale(reset)
    setInputValue(reset)
  }
 
  return(
    <>
    <View style={styles.container}>
      <View>
        <View style={{alignItems:'center',marginTop:50}}>
        <Text style={{fontSize:24,fontWeight:'bold',marginBottom:20}}>Enter Amount in PKR</Text>
        <View style={{borderWidth:2,borderRadius:12,}}>
        <TextInput
        style={styles.input}
        onChangeText={setInputValue}
        value={inputValue}
        placeholder="Amount"
       keyboardType='number-pad'
      />
      </View>
      <Text style={{fontSize:24}}>{resultValue} <Text style={{fontSize:16}}>{targetValue}</Text></Text>
        </View>
        <View style={{marginLeft:40}}>
         <FlatList 
         numColumns={3}
         data={CurrencyByRupee}
         keyExtractor={item=>item.name}
         renderItem={({item})=>(
          <Pressable onPress={()=>ButtonPressed(item)}>
             <Curencybuttonfunc symbol={item.symbol} flag={item.flag} />
          </Pressable>
         )}
         />
        </View>
        <View style={{alignItems:'center',marginVertical:30}}>
          <Pressable onPress={ResetValue}>
            <Text style={{fontSize:24,borderWidth:2,paddingLeft:20,paddingRight:20,paddingBottom:5,paddingTop:5,backgroundColor:'#EAF0F1',borderRadius:16}}>Reset</Text>
          </Pressable>
        </View>
      </View>
    </View>
    </>
  )
}


const styles=StyleSheet.create(
  {
    container:{
    flex:1,
    backgroundColor:'#7B8788'
    },
    input:{
      width:150,
      height:50,
      alignItems:'center',
      fontSize:24
    } 
  }
)

export default App


