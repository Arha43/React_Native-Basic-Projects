import React from 'react'
import { PropsWithChildren } from 'react'
import { StyleSheet, Text,View } from 'react-native'

type curencybutton=PropsWithChildren<
{
   symbol:string,
   flag:string,
}   
>


const Curencybuttonfunc = (props:curencybutton):JSX.Element => {
  return (
    <>
    <View style={styles.container}>
        <Text style={styles.flagSize}>{props.flag}</Text>
        <View style={{marginLeft:20}}>
        <Text style={styles.nameSize}>{props.symbol}</Text>
        </View>
    </View>
    </>
  )
}

const styles=StyleSheet.create(
    {
        container:{
            width:130,
            height:80,
            borderRadius:6,
            marginTop:20,
            marginLeft:10
        },
        flagSize:{
            fontSize:44,
        },
        nameSize:{
            fontSize:16,
        }
    }
)
export default Curencybuttonfunc