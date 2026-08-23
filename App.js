import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { Card } from './components/Card';
import { Carousel } from './components/Carousel';

const schedule = [
  {
    day: 'Понедельник',
    lessons: [
      { id: 1, name: 'Математика', time: '09:00', room: 'A-102' },
      { id: 2, name: 'Физика', time: '11:30', room: 'B-204' },
    ],
  },
  {
    day: 'Вторник',
    lessons: [
      { id: 3, name: 'История', time: '10:15', room: 'C-3' },
    ],
  },
  {
    day: 'Среда',
    lessons: [],
  },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="light-content" backgroundColor="#111827" />
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>Bus</Text>
          <Text style={styles.subtitle}>Расписание занятий</Text>
        </View>

        <Card title="Сегодня" subtitle="3 пары в расписании" accent="#22c55e" />
        <Carousel items={schedule} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
  container: {
    padding: 20,
    paddingBottom: 40,
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: '700',
    color: '#f8fafc',
    letterSpacing: 0.5,
  },
  subtitle: {
    marginTop: 8,
    fontSize: 16,
    color: '#cbd5e1',
  },
});
