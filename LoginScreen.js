import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Error', 'Please fill out all fields.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Invalid Email', 'Please enter a valid email.');
      return;
    }

    setLoading(true);

    setTimeout(async () => {
      setLoading(false);
      Alert.alert('Success', 'Logged in successfully!');

      const profile = await AsyncStorage.getItem('userProfile');
      if (profile) {
        navigation.navigate('Injury Intake');
      } else {
        navigation.navigate('User Profile');
      }
    }, 1500);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Log In</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        autoCapitalize="none"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      {loading ? (
        <ActivityIndicator size="large" color="#2e7d32" style={{ marginTop: 20 }} />
      ) : (
        <Button title="Log In" onPress={handleLogin} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4f7',
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    marginBottom: 20,
    alignSelf: 'center',
    color: '#2e7d32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
});
