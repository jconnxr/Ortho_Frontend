import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function AboutScreen({ navigation }) {
  return (
    <LinearGradient
      colors={['#e8f5e9', '#e0f7fa']}
      style={styles.gradient}
    >
      <ScrollView contentContainerStyle={styles.container}>
        <Text style={styles.title}>What is OrthoGPT?</Text>

        <Text style={styles.description}>
          OrthoGPT is your personal orthopedic triage assistant — built for athletes, active individuals, and anyone seeking quick clarity after a musculoskeletal injury.
        </Text>

        <Text style={styles.description}>
          Whether you’ve twisted an ankle, strained your shoulder, or are unsure if you need urgent care, OrthoGPT helps you make smarter health decisions in under 2 minutes.
        </Text>

        <Text style={styles.description}>
          Using a simple Q&A interface and optional photo input, OrthoGPT provides a personalized assessment based on clinical guidelines — suggesting rest, rehab, or medical follow-up when appropriate.
        </Text>

        <Text style={styles.description}>
          We believe in empowering users with clarity, saving time in the moments that matter, and helping people become better advocates for their own health.
        </Text>

        <Text style={styles.sectionTitle}>Privacy & Medical Disclaimer</Text>

        <Text style={styles.description}>
          OrthoGPT is not a licensed medical provider and does not offer diagnoses or treatment plans. It is intended for informational purposes only and should not be used as a substitute for professional medical advice.
        </Text>

        <Text style={styles.description}>
          If you are experiencing severe pain, numbness, or symptoms that worsen, seek care from a qualified healthcare provider immediately.
        </Text>

        <Text style={styles.description}>
          We do not collect or store any personal health information unless explicitly authorized by the user. All data is handled in accordance with HIPAA-aligned best practices and used solely to improve your triage experience.
        </Text>

        <Text style={styles.footerNote}>Version 1.0 • © 2025 OrthoGPT Team</Text>

        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Welcome')}>
          <Text style={styles.buttonText}>Return to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1b5e20',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#004d40',
    marginTop: 30,
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#263238',
    lineHeight: 24,
    marginBottom: 16,
  },
  footerNote: {
    fontSize: 14,
    textAlign: 'center',
    color: '#78909c',
    marginTop: 30,
  },
  button: {
    marginTop: 30,
    backgroundColor: '#2e7d32',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});
