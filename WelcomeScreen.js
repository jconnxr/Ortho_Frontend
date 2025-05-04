import React, { useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/FontAwesome5';
import * as Animatable from 'react-native-animatable';

export default function WelcomeScreen({ navigation }) {
  const handleGuestStart = async () => {
    try {
      const profile = await AsyncStorage.getItem('userProfile');
      if (profile) {
        navigation.navigate('Injury Intake');
      } else {
        navigation.navigate('User Profile');
      }
    } catch (error) {
      console.error('Profile check failed:', error);
      navigation.navigate('User Profile');
    }
  };

  const confirmResetProfile = () => {
    Alert.alert(
      'Reset Profile',
      'This will erase all saved user information.',
      [
        { text: 'Cancel', style: 'cancel' },
        {
          text: 'Yes, Reset',
          style: 'destructive',
          onPress: handleResetProfile,
        },
      ]
    );
  };

  const handleResetProfile = async () => {
    try {
      await AsyncStorage.removeItem('userProfile');
      Alert.alert('Profile Reset', 'User profile has been cleared.');
    } catch (error) {
      Alert.alert('Error', 'Could not reset profile.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>OrthoGPT</Text>
      <Text style={styles.tagline}>Your AI partner for orthopedic care.</Text>

      <TouchableOpacity style={styles.button} onPress={handleGuestStart}>
        <Text style={styles.buttonText}>Continue as Guest</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.outlineButton}
        onPress={() => navigation.navigate('Login')}
      >
        <Text style={styles.outlineText}>Log In</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.outlineButton}
        onPress={() => navigation.navigate('Sign Up')}
      >
        <Text style={styles.outlineText}>Sign Up</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.outlineButton, { borderColor: '#e53935' }]}
        onPress={confirmResetProfile}
      >
        <Text style={[styles.outlineText, { color: '#e53935' }]}>Reset Profile</Text>
      </TouchableOpacity>

      {/* Footer */}
      <View style={styles.footer}>
        <Text style={styles.footerText}>Terms of use, privacy policy</Text>
        <TouchableOpacity onPress={() => navigation.navigate('About')}>
          <Text style={styles.footerLink}>What is OrthoGPT? — for first-time visitors</Text>
        </TouchableOpacity>
      </View>

      {/* Animated Pulse Line Design */}
      <View style={styles.bottomDesign}>
        <Animatable.View animation="pulse" iterationCount="infinite" easing="ease-in-out">
          <Icon name="heartbeat" size={30} color="#2e7d32" />
        </Animatable.View>
        <Text style={styles.bottomText}>Built with care for your recovery</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#f9fafa',
  },
  logo: {
    fontSize: 36,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2e7d32',
  },
  tagline: {
    fontSize: 16,
    marginBottom: 40,
    textAlign: 'center',
    color: '#555',
  },
  button: {
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  outlineButton: {
    borderColor: '#2e7d32',
    borderWidth: 1.5,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginBottom: 10,
    width: '100%',
  },
  outlineText: {
    color: '#2e7d32',
    fontSize: 16,
    textAlign: 'center',
  },
  footer: {
    marginTop: 40,
    alignItems: 'center',
  },
  footerText: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  footerLink: {
    fontSize: 12,
    color: '#2e7d32',
    textDecorationLine: 'underline',
  },
  bottomDesign: {
    marginTop: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomText: {
    marginTop: 6,
    fontSize: 12,
    color: '#777',
    fontStyle: 'italic',
  },
});
