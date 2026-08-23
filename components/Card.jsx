import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Card({ title, subtitle, accent = '#3b82f6' }) {
  return (
    <View style={[styles.card, { borderLeftColor: accent }] }>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderLeftWidth: 5,
    borderRadius: 14,
    backgroundColor: '#111827',
    padding: 18,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  title: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '600',
  },
  subtitle: {
    color: '#cbd5e1',
    fontSize: 14,
    marginTop: 6,
  },
});
