import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Post } from './Post';

export function Carousel({ items = [] }) {
  return (
    <View style={styles.wrapper}>
      {items.map((day) => (
        <View key={day.day} style={styles.dayBlock}>
          <Text style={styles.dayTitle}>{day.day}</Text>

          {day.lessons.length > 0 ? (
            day.lessons.map((lesson) => (
              <Post
                key={lesson.id}
                name={lesson.name}
                time={lesson.time}
                room={lesson.room}
              />
            ))
          ) : (
            <Text style={styles.empty}>Нет занятий</Text>
          )}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    gap: 16,
  },
  dayBlock: {
    backgroundColor: '#0f172a',
    borderRadius: 16,
    padding: 14,
    borderWidth: 1,
    borderColor: '#334155',
  },
  dayTitle: {
    color: '#f8fafc',
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 12,
  },
  empty: {
    color: '#94a3b8',
    fontSize: 14,
  },
});

