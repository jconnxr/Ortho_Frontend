import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function UserProfileScreen({ navigation }) {
  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [activity, setActivity] = useState('');

  const handleSave = async () => {
    if (!name || !age || !height || !weight) {
      Alert.alert('Missing Info', 'Please complete all required fields.');
      return;
    }

    const profile = {
      name,
      age,
      height,
      weight,
      activity,
    };

    try {
      await AsyncStorage.setItem('userProfile', JSON.stringify(profile));
      Alert.alert('Profile Saved', `Welcome, ${name}!`);
      navigation.navigate('Injury Intake');
    } catch (error) {
      Alert.alert('Error', 'Could not save profile.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Build Your Profile</Text>

      <TextInput
        style={styles.input}
        placeholder="Full Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={setAge}
      />
      <TextInput
        style={styles.input}
        placeholder="Height in feet/inches"
        value={height}
        onChangeText={setHeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Weight (lbs)"
        keyboardType="numeric"
        value={weight}
        onChangeText={setWeight}
      />
      <TextInput
        style={styles.input}
        placeholder="Activity Level (optional)"
        value={activity}
        onChangeText={setActivity}
      />

      <Button title="Save & Continue" onPress={handleSave} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#f0f4f8', // soft background
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
    alignSelf: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 12,
    padding: 10,
    borderRadius: 5,
  },
});
