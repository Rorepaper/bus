import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function Post({ name, time, room }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.meta}>Время: {time}</Text>
      <Text style={styles.meta}>Аудитория: {room}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#1f2937',
    borderRadius: 12,
    padding: 14,
    marginBottom: 10,
  },
  name: {
    color: '#f8fafc',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  meta: {
    color: '#cbd5e1',
    fontSize: 13,
    marginTop: 2,
  },
});
