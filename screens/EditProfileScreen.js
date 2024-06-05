import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function EditProfileScreen({ navigation, route }) {
  const { label, value } = route.params;

  const [newValue, setNewValue] = useState(value);

  const handleSave = () => {
    // Logic to save the new value
    Alert.alert('Profile Updated', `${label} has been updated to ${newValue}`);
    navigation.goBack();
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Edit {label}</Text>
        <View style={{ width: 24 }}></View>
      </View>
      
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          value={newValue}
          onChangeText={setNewValue}
        />
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
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
    padding: 20
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 20,
    backgroundColor: '#f7f7f7'
  },
  saveButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center'
  },
  saveButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  }
});
