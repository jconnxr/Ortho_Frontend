import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function TriageResultScreen({ route, navigation }) {
  const { result } = route.params;

  const getVisualCue = (recommendation) => {
    const text = recommendation.toLowerCase();
    if (text.includes('urgent')) {
      return { emoji: '🔴', label: 'Urgent Care Recommended', color: '#e53935', tier: 'urgent' };
    } else if (text.includes('monitor')) {
      return { emoji: '🟠', label: 'Monitor Symptoms', color: '#fb8c00', tier: 'moderate' };
    } else {
      return { emoji: '🟢', label: 'Self-Care Recommended', color: '#43a047', tier: 'mild' };
    }
  };

  const visual = getVisualCue(result.recommendation);

  const handleFollowUp = () => {
    if (visual.tier === 'urgent') {
      navigation.navigate('Follow Up', { type: 'er' });
    } else if (visual.tier === 'moderate') {
      navigation.navigate('Follow Up', { type: 'reminder' });
    } else {
      navigation.navigate('Follow Up', { type: 'homecare' });
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Triage Results</Text>

      <Text style={[styles.visualCue, { color: visual.color }]}>
        {visual.emoji} {visual.label}
      </Text>

      <Text style={styles.label}>Assessment:</Text>
      <Text style={styles.resultText}>{result.assessment}</Text>

      <Text style={styles.label}>Recommendation:</Text>
      <Text style={styles.resultText}>{result.recommendation}</Text>

      <View style={{ marginTop: 30 }}>
        <Button title="Follow Up" onPress={handleFollowUp} />
        <View style={{ height: 10 }} />
        <Button title="Back to Intake" onPress={() => navigation.navigate('Injury Intake')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    alignSelf: 'center',
  },
  visualCue: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 15,
  },
  resultText: {
    fontSize: 16,
    marginTop: 5,
  },
});
