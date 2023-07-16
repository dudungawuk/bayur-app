import React from "react";
import {View,Text, StatusBar,Dimensions, Image, TextInput,TouchableOpacity} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Clouds from "../../Images/clouds.png"
import Language from "../../Images/bahasa.png"
import Profile from "../../Images/profile.png"
import Eye from "../../Images/show.png"
import FB from "../../Images/facebook.png"
import Google from "../../Images/google.png"

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#282534', white: '#ffffff'};

const Login = () =>{
    return(
        <SafeAreaView style={{flex:1,backgroundColor:'#fff'}}>
            <StatusBar backgroundColor={COLORS.primary}/>
                <View style={{flex:1,justifyContent:'space-between',alignItems:'center',paddingBottom:10}}>
                    <Image source={Clouds} style={{width:'100%',zIndex:3}}/>
                    <View elevation={6} style={{height:'80%',backgroundColor:'#fff',width:'90%',zIndex:1,borderRadius:56
                    ,shadowColor: "#000000",shadowOpacity: 0.8,shadowRadius: 2,shadowOffset: {height: 1,width: 1}}}>
                        <View style={{justifyContent:'space-between',flex:1,alignItems:'center',paddingHorizontal:'10%',paddingVertical:'5%'}}>
                            <View style={{alignItems:'center'}}>
                            <Image source={Profile}/>
                            <Text style={{fontSize:18,fontWeight:'bold',color:'#000'}}>Masuk</Text>
                            </View>
                            <View style={{width:'100%',}}>
                                <Text style={{fontSize:9,color:'#69BD43'}}>Email</Text>
                                <TextInput style={{borderBottomWidth:1,paddingBottom:0,paddingLeft:0,paddingTop:5,borderColor:'#69BD43'}} placeholder="JoinBayur@gmail.com"></TextInput>
                            </View>
                            <View style={{width:'100%'}}>
                            <View style={{width:'100%',justifyContent:'flex-end'}}>
                                <Text style={{fontSize:9,color:'#69BD43'}}>Kata Sandi</Text>
                                <TextInput style={{position:'relative',borderBottomWidth:1,paddingBottom:0,paddingLeft:0,paddingTop:5,borderColor:'#69BD43'}} placeholder="********"></TextInput>
                                <Image source={Eye} style={{position:'absolute',alignSelf:'flex-end'}}></Image>
                            </View>
                            <Text style={{alignSelf:'flex-end',marginTop:10}}>Lupa Kata Sandi</Text>
                            </View>
                            <View style={{width:'100%',alignItems:'center',justifyContent:'space-between',height:'40%'}}>
                            <View>

                                
                            </View>
                            <View style={{padding:10,backgroundColor:'#69BD43',width:'100%',borderRadius:12,alignItems:'center'}}>
                                <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>Masuk</Text>
                            </View>
                            <Text style={{marginBottom:-11,marginTop:-16}}>atau</Text>
                            <View style={{flexDirection:'row',padding:10,backgroundColor:'#EE2626',width:'100%',borderRadius:12,alignItems:'center',justifyContent:'center'}}>
                                <Image source={Google} style={{marginRight:10}}/>
                                <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>Masuk Dengan Google</Text>
                            </View>
                            <View style={{flexDirection:'row',padding:10,backgroundColor:'#56A4EC',width:'100%',borderRadius:12,alignItems:'center',justifyContent:'center'}}>
                            <Image source={FB} style={{marginRight:10}}/>
                                <Text style={{fontSize:14,color:'#fff',fontWeight:'600'}}>Masuk Dengan Google</Text>
                            </View>
                            </View>
                            <View style={{flexDirection:'row',fontSize:12,color:'#828282'}}>
                                <Text>Belum Punya Akun? </Text>
                                <TouchableOpacity>
                                <Text style={{fontWeight:'800'}}>Daftar</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={Language} style={{width:70,height:19}}/>
                </View>
        </SafeAreaView>
    )
}
export default Login