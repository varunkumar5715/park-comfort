import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ProfileField from '../components/ProfileFeild';

const ProfileScreen = ({ navigation }) => {
  const handleEditProfileField = (label, value) => {
    // Handle editing the profile field here
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Profile</Text>
        <View style={{ width: 24 }}></View>
      </View>
      
      <ScrollView contentContainerStyle={styles.content}>
        <Image 
          source={{ uri: 'https://via.placeholder.com/100' }} 
          style={styles.profileImage} 
        />
        <TouchableOpacity>
          <Text style={styles.editProfileText}>Edit profile image</Text>
        </TouchableOpacity>
        
        <ProfileField label="Name" value="John yoh" />
        <ProfileField label="Username" value="Abc@username" />
        <ProfileField label="Email" value="Abc@domain.com" />
        <ProfileField label="Car Number" value="A12345H" />
        <ProfileField label="Mobile number" value="A description of this user." />
      </ScrollView>
      
      <View style={styles.footer}>
        <Icon name="home-outline" size={30} color="#000" />
        <Icon name="search-outline" size={30} color="#000" />
        <Icon name="add-circle-outline" size={30} color="#000" />
        <Icon name="notifications-outline" size={30} color="#000" />
        <Image 
          source={{ uri: 'https://via.placeholder.com/30' }} 
          style={styles.footerProfileImage} 
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  content: {
    alignItems: 'center',
    paddingVertical: 20
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10
  },
  editProfileText: {
    color: '#007BFF',
    marginBottom: 20
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ccc'
  },
  footerProfileImage: {
    width: 30,
    height: 30,
    borderRadius: 15
  }
});

export default ProfileScreen;
