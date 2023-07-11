import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'
import { Ionicons } from "@expo/vector-icons"
import { useNavigation } from "@react-navigation/native";
import GoalsList from '../components/sections/GoalsList'

export default function UserProfileScreen() {
  const navigation = useNavigation();

  function toFavorite(){
    navigation.navigate('Favorite')
  }

  return (
    <LinearGradient style={{flex:1}} colors={["#03045E", "#023E8A"]}>
      <View style = {styles.pictureContainer}>
        {/** Sementara pakai icon dulu imagenya*/}
        <Ionicons name='person' size={100} color="black" />
      </View>
      <Text style= {styles.descText}>Name</Text>
      <View style= {styles.bioContainer}>
        <Text style= {styles.bioText}>John Doe</Text>
      </View>
      <Text style= {styles.descText}>Email</Text>
      <View style= {styles.bioContainer}>
        <Text style= {styles.bioText}>doejohn08@gmail.com</Text>
      </View>
      <Text style= {styles.descText}>Interest</Text>
      <View style = {styles.interestContainer}>
      </View>
      <Text style= {styles.descText}>List of Goals</Text>
      <View style = {styles.goalContainer}>
        <GoalsList/>
      </View>
      <TouchableOpacity style= {styles.favorite} onPress={toFavorite}>
        <LinearGradient colors={["#4FE0FF", "#008CC1"]} style= {styles.favoriteGrad}>
          <Text style= {styles.favoriteText}>Favorites</Text>
          <Ionicons name='person' size={20} color="#03045E" />
        </LinearGradient>
      </TouchableOpacity>
    </LinearGradient>
  )
}

const styles = StyleSheet.create({
  favoriteText: {
    alignSelf: 'center',
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    color: '#03045E',
    marginRight: 10,
  },
  bioContainer: {
    borderRadius: 20,
    backgroundColor: 'white',
    marginHorizontal: "5%",
    height: '4%', 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  pictureContainer: {
    backgroundColor: '#D9D9D9', 
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginTop: 80, 
    justifyContent: 'center', 
    alignItems: 'center', 
    borderRadius: 150
  }, 
  interestContainer: {
    borderWidth: 2, 
    height: "10%", 
    borderRadius: 30, 
    marginHorizontal: "5%",
    borderColor: 'white'
  },
  goalContainer: {
    borderRadius: 20, 
    height: "25%", 
    backgroundColor: 'white', 
    alignSelf: 'center', 
    marginHorizontal: "5%",
    overflow: 'hidden',
  }, 
  descText: {
    fontFamily: 'montserrat-bold',
    fontSize: 14,
    color: 'white',
    marginTop: 10,
    marginHorizontal: "5%",
    marginBottom: 5,
  }, 
  bioText: {
    fontFamily: 'montserrat-bold',
    fontSize: 14,
  }, 
  favorite: {
    marginHorizontal: "5%",
    height: "6%",
    marginTop: 20, 
  }, 
  favoriteGrad: {
    justifyContent: 'center', 
    borderRadius: 20, 
    flex: 1,
    flexDirection: 'row', 
    alignItems: 'center'
  }
})