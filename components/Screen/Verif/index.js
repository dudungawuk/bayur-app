import React from "react";
import { Image, Text, View,TouchableOpacity } from "react-native";
import Verified from '../../Images/verified.png'

const Verif = ({navigation}) =>{
    return(
        <View style={{flex:10,backgroundColor:'#fff'}}>
            <View style={{flex:9,alignItems:'center',justifyContent:'center'}}>
                <Image style={{width:275,height:277}} source={Verified}/>
                <Text style={{marginTop:28,fontSize:24,fontWeight:'600',color:'#000'}}>Berhasil!</Text>
            </View>
            <View style={{flex:1,alignItems:'center',justifyContent:'flex-end',paddingBottom:20}}>
                <View style={{padding:10,backgroundColor:'#69BD43',width:'85%',borderRadius:12,alignItems:'center'}}>
                    <TouchableOpacity onPress={() => navigation.replace('Login')}>
                        <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>Selanjutnya</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Verif