import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Image } from 'react-native';
import axios from 'axios';
import * as ImagePicker from 'expo-image-picker';

export default function InjuryIntakeScreen({ navigation }) {
  const [location, setLocation] = useState('');
  const [painLevel, setPainLevel] = useState('');
  const [onsetTime, setOnsetTime] = useState('');
  const [activity, setActivity] = useState('');
  const [image, setImage] = useState(null);

  const handleImagePick = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSubmit = async () => {
    const intakeData = {
      location,
      painLevel,
      onsetTime,
      activity,
    };

    try {
      const response = await axios.post(
        'https://ortho-backend.onrender.com/triage',
        intakeData
      );
      console.log('Triage Response:', response.data);
      navigation.navigate('Triage Results', { result: response.data });
    } catch (error) {
      console.error('Triage error:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Injury Intake</Text>
      <Text style={styles.subtitle}>Get fast, AI-powered injury triage tailored to your needs.</Text>

      <TextInput
        style={styles.input}
        placeholder="Injury Location"
        value={location}
        onChangeText={setLocation}
      />

      <TextInput
        style={styles.input}
        placeholder="Pain Level (1-10)"
        keyboardType="numeric"
        value={painLevel}
        onChangeText={setPainLevel}
      />

      <TextInput
        style={styles.input}
        placeholder="When did it start?"
        value={onsetTime}
        onChangeText={setOnsetTime}
      />

      <TextInput
        style={styles.input}
        placeholder="Activity during injury"
        value={activity}
        onChangeText={setActivity}
      />

      <Button title="Upload Photo (Optional)" onPress={handleImagePick} />

      {image && (
        <Image
          source={{ uri: image }}
          style={{
            width: 150,
            height: 150,
            marginVertical: 10,
            borderRadius: 10,
          }}
        />
      )}

      <Text style={styles.disclaimer}>
        Images will only be used to assist in triage and are not stored without consent.
      </Text>

      <Button title="Submit" onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fbf5',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#2e7d32',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    marginBottom: 15,
    padding: 12,
    backgroundColor: '#fff',
  },
  disclaimer: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
});
