import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View, StatusBar, SafeAreaView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <ImageBackground
        source={require('./assets/background.jpg')} // replace with your image path
        style={styles.imageBackground}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.6)', 'rgba(0,0,0,0.6)']}
          style={styles.overlay}
        >
          <View style={styles.content}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>park-comfort</Text>
              <Text style={styles.subtitle}>confusion-less parking</Text>
              <Text style={styles.subtitle}>Anytime.....</Text>
              <View style={{ flexDirection: 'row', marginLeft: 110 }}>
                <Text style={styles.subtitle}>Anywhere....</Text>
              </View>
            </View>
            <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>New-user</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Existing-User</Text>
              </TouchableOpacity>
            </View>
          </View>
        </LinearGradient>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  overlay: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    width: '100%',
  },
  content: {
    width: '100%',
    paddingHorizontal: 20,
    paddingBottom: 50, // Adjust as needed for button spacing
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 50,
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    fontFamily: 'serif',
    textAlign: 'center',
    marginBottom: 20,
  },
  subtitle: {
    fontSize: 18,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 5,
  },
  buttonContainer: {
    flexDirection: 'column', // Stack buttons vertically
    justifyContent: 'center', // Center buttons horizontally
    alignItems: 'center', // Center buttons vertically
    width: '100%',
    paddingHorizontal: 20,
  },
  button: {
    backgroundColor: 'rgba(0,0,0,0.6)',
    padding: 15,
    marginVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%', // Ensure buttons take full width
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});
