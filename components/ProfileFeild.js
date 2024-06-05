import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileField = ({ label, value, onPress }) => (
  <TouchableOpacity style={styles.profileField} onPress={() => onPress(label, value)}>
    <Text style={styles.fieldLabel}>{label}</Text>
    <View style={styles.fieldValueContainer}>
      <Text style={styles.fieldValue}>{value}</Text>
      <Icon name="chevron-forward-outline" size={20} color="#ccc" />
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  profileField: {
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  fieldLabel: {
    fontSize: 16,
    color: '#333'
  },
  fieldValueContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  fieldValue: {
    fontSize: 16,
    color: '#333',
    marginRight: 10
  }
});

export default ProfileField;
