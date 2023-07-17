import React from "react";
import {View,Text, Image, TextInput,TouchableOpacity} from 'react-native'
import { SafeAreaView } from "react-native-safe-area-context";
import Burger from '../../Images/burger.png'
import Logo from '../../Images/logo.png'
import Notif from '../../Images/notif.png'
import Search from '../../Images/search.png'
import Banner from '../../Images/banner.png'
import Rekom from '../../Images/rekomendasi.png'
import Lokasi from '../../Images/lokasi.png'
import Favorit from '../../Images/favorit.png'
import Diskon from '../../Images/diskon.png'
import Coin from '../../Images/coin.png'
import Resep from '../../Images/resep.png'
import Home from '../../Images/home.png'
import Cart from '../../Images/cart.png'
import Chat from '../../Images/chat.png'
import Profile from '../../Images/profile.png'

function HomeScreen() {
    return (
      <SafeAreaView style={{ flex: 1,alignItems:'center',backgroundColor:'#fff'}}>
        <View style={{flex:9,width:'90%'}}>
          <View style={{justifyContent:'space-between',flexDirection:'row',alignItems:'center'}}>
            <Image source={Burger}/>
            <Image source={Logo} style={{width:112,height:110}}/>
            <Image source={Notif}/>
          </View>
          <View style={{justifyContent:'center'}}>
            <TextInput placeholder="Mau beli sayur apa?" style={{paddingLeft:40,borderWidth:1,borderColor:'#C4C4C4',backgroundColor:'#E5E5E5',position:'absolute',width:'100%'}}>
            
            </TextInput>
            <Image style={{position:'relative',marginLeft:10}} source={Search}/>
          </View>
          <View style={{height:40}}/>
          <Image source={Banner} style={{width:'100%',borderRadius:10}}/>
          <View elevation={2} style={{marginTop:30,paddingVertical:40,alignItems:'center',backgroundColor:'#fff',width:'100%',zIndex:1,borderRadius:56,shadowColor: "#000000",shadowOpacity: 0.8,shadowRadius: 2,shadowOffset: {height: 1,width: 1}}}>
            <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:55,height:55,borderRadius:12,borderColor:'#CCCCC9',borderWidth:0.3,justifyContent:'center',alignItems:'center'}}>
                  <Image source={Rekom}/>
                </TouchableOpacity>
                <Text style={{fontSize:10,color:'#000',fontWeight:'400',marginTop:4}}>Terbaik</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:55,height:55,borderRadius:12,borderColor:'#CCCCC9',borderWidth:0.3,justifyContent:'center',alignItems:'center'}}>
                  <Image source={Lokasi}/>
                </TouchableOpacity>
                <Text style={{fontSize:10,color:'#000',fontWeight:'400',marginTop:4}}>Terdekat</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:55,height:55,borderRadius:12,borderColor:'#CCCCC9',borderWidth:0.3,justifyContent:'center',alignItems:'center'}}>
                  <Image source={Favorit}/>
                </TouchableOpacity>
                <Text style={{fontSize:10,color:'#000',fontWeight:'400',marginTop:4}}>Terfavorit</Text>
              </View>
            </View>

            <View style={{height:20}}/>

            <View style={{flexDirection:'row',justifyContent:'space-between',width:'80%'}}>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:55,height:55,borderRadius:12,borderColor:'#CCCCC9',borderWidth:0.3,justifyContent:'center',alignItems:'center'}}>
                  <Image source={Diskon}/>
                </TouchableOpacity>
                <Text style={{fontSize:10,color:'#000',fontWeight:'400',marginTop:4}}>Promo</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:55,height:55,borderRadius:12,borderColor:'#CCCCC9',borderWidth:0.3,justifyContent:'center',alignItems:'center'}}>
                  <Image source={Coin}/>
                </TouchableOpacity>
                <Text style={{fontSize:10,color:'#000',fontWeight:'400',marginTop:4}}>Murah</Text>
              </View>
              <View style={{alignItems:'center'}}>
                <TouchableOpacity style={{width:55,height:55,borderRadius:12,borderColor:'#CCCCC9',borderWidth:0.3,justifyContent:'center',alignItems:'center'}}>
                  <Image source={Resep}/>
                </TouchableOpacity>
                <Text style={{fontSize:10,color:'#000',fontWeight:'400',marginTop:4}}>Resep Sehat</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={{borderWidth:1,width:'100%',flex:1,marginBottom:5,alignItems:'center',justifyContent:'center'}}>
            <View style={{width:'90%',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
              <TouchableOpacity style={{alignItems:'center'}}>
                <Image source={Home} style={{width:30,height:30}}/>
                <Text>Home</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}}>
                <Image source={Cart} style={{width:30,height:30}}/>
                <Text>Keranjang</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}}>
                <Image source={Chat} style={{width:30,height:30}}/>
                <Text>Chat</Text>
              </TouchableOpacity>
              <TouchableOpacity style={{alignItems:'center'}}>
                <Image source={Profile} style={{width:30,height:30}}/>
                <Text>Profile</Text>
              </TouchableOpacity>
            </View>
        </View>
      </SafeAreaView>
    );
  }
export default HomeScreen
  