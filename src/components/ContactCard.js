import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function ContactCard({ contact }) {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{contact.name}</Text>
      <Text>{contact.phone}</Text>
      <Text>{contact.address}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: { borderWidth: 1, padding: 16, borderRadius: 5, marginBottom: 12 },
  name: { fontSize: 18, fontWeight: 'bold' },
});