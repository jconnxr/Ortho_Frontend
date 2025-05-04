import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function SelfCareTipsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Self-Care Tips</Text>
      <ScrollView contentContainerStyle={styles.tipList}>
        <Text style={styles.tip}>• Rest the injured area and avoid strenuous activity.</Text>
        <Text style={styles.tip}>• Apply ice packs for 15-20 minutes every 2-3 hours.</Text>
        <Text style={styles.tip}>• Use compression wraps to reduce swelling.</Text>
        <Text style={styles.tip}>• Elevate the injury above heart level when possible.</Text>
        <Text style={styles.tip}>• Take over-the-counter pain relief as directed.</Text>
        <Text style={styles.tip}>• Monitor symptoms and seek care if worsening.</Text>
      </ScrollView>
      <Text style={styles.disclaimer}>
        These tips are general suggestions and not a substitute for medical advice.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0fbf5',
    padding: 20,
    justifyContent: 'flex-start', // ← this pushes content to the top
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#2e7d32',
    marginBottom: 15,
    textAlign: 'left',
  },
  tipList: {
    paddingBottom: 20,
  },
  tip: {
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },
  disclaimer: {
    marginTop: 20,
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
  },
});
