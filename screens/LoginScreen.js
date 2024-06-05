import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Park-Comfort</Text>
      
      <Text style={styles.signInText}>Sign-in user account</Text>
      <Text style={styles.instructions}>Enter your email to sign in for this app</Text>
      
      <TextInput style={styles.input} placeholder="Email/Mobile" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Password" secureTextEntry={true} />
      
      <TouchableOpacity style={styles.signInButton} onPress={() => navigation.navigate('Profile')}>
        <Text style={styles.signInButtonText}>Sign-in</Text>
      </TouchableOpacity>
      
      <Text style={styles.termsText}>
        By clicking continue, you agree to our <Text style={styles.linkText}>Terms of Service</Text> and <Text style={styles.linkText}>Privacy Policy</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 40
  },
  signInText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 8
  },
  instructions: {
    fontSize: 14,
    color: '#888',
    marginBottom: 20
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 10,
    backgroundColor: '#f7f7f7'
  },
  signInButton: {
    width: '100%',
    padding: 15,
    backgroundColor: '#000',
    borderRadius: 5,
    alignItems: 'center',
    marginBottom: 20
  },
  signInButtonText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  termsText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center'
  },
  linkText: {
    color: '#000',
    textDecorationLine: 'underline'
  }
});

export default LoginScreen;
