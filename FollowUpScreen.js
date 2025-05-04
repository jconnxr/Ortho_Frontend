import React from 'react';
import { View, Text, StyleSheet, Button, Linking, Share, Alert, Platform } from 'react-native';
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

export default function FollowUpScreen({ route, navigation }) {
  const { type, message, summary } = route.params || {};

  const handleTelehealth = () => {
    Linking.openURL('https://doxy.me/');
  };

  const handleFindFacility = async () => {
    const googleMaps = 'https://www.google.com/maps/search/urgent+care+near+me/';
    const appleMaps = 'http://maps.apple.com/?q=urgent+care';

    const url = Platform.OS === 'ios' ? appleMaps : googleMaps;
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      Linking.openURL(url);
    } else {
      Alert.alert('Error', 'Unable to open maps.');
    }
  };

  const handleSelfCareTips = () => {
    navigation.navigate('Self-Care Tips');
  };

  const handleShareSummary = async () => {
    try {
      await Share.share({
        message: summary || 'No summary available for this case.',
      });
    } catch (error) {
      Alert.alert('Error', 'Could not share the summary.');
    }
  };

  const handleSavePlan = async () => {
    const content = summary || 'No care plan details provided.';
    const filename = FileSystem.documentDirectory + 'CarePlan.txt';

    try {
      await FileSystem.writeAsStringAsync(filename, content);
      await Sharing.shareAsync(filename);
    } catch (error) {
      Alert.alert('Error', 'Could not save or share the care plan.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Follow-Up Recommendations</Text>
      <Text style={styles.message}>{message}</Text>

      <View style={styles.buttonContainer}>
        <Button title="Book Telehealth" onPress={handleTelehealth} />
        <Button title="Find Nearby Facility" onPress={handleFindFacility} />
        <Button title="View Self-Care Tips" onPress={handleSelfCareTips} />
        <Button title="Share Summary" onPress={handleShareSummary} />
        <Button title="Save Care Plan" onPress={handleSavePlan} />
      </View>

      <Text style={styles.disclaimer}>
        Disclaimer: This information is not a substitute for professional medical advice. Always consult a provider for diagnosis and treatment.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f6f6f6',
    justifyContent: 'flex-start',
  },
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 10,
    textAlign: 'center',
  },
  message: {
    fontSize: 16,
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    gap: 10,
    marginBottom: 30,
  },
  disclaimer: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 10,
  },
});
