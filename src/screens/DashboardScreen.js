import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { getContacts, deleteContact } from '../service/api';

export default function DashboardScreen({ navigation }) {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const data = await getContacts();
      setContacts(data);
    } catch (error) {
      console.error('Error fetching contacts:', error);
      Alert.alert('Error', 'Failed to fetch contacts.');
    }
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', fetchContacts);
    return unsubscribe;
  }, [navigation]);

  const handleDeleteContact = async (id) => {
    try {
      await deleteContact(id);
      setContacts(contacts.filter((contact) => contact._id !== id));
      Alert.alert('Success', 'Contact deleted successfully.');
    } catch (error) {
      console.error('Error deleting contact:', error);
      Alert.alert('Error', 'Failed to delete contact.');
    }
  };

  const renderContact = ({ item }) => (
    <View style={styles.contactCard}>
      <Text style={styles.contactName}>{item.name}</Text>
      <Text style={styles.contactPhone}>{item.phone}</Text>
      <View style={styles.buttonRow}>
        <TouchableOpacity
          style={styles.editButton}
          onPress={() =>
            navigation.navigate('AddEditContact', {
              contactId: item._id,
              name: item.name,
              phone: item.phone,
            })
          }
        >
          <Text style={styles.buttonText}>Edit</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.deleteButton}
          onPress={() => handleDeleteContact(item._id)}
        >
          <Text style={styles.buttonText}>Delete</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact List</Text>
      <FlatList
        data={contacts}
        keyExtractor={(item) => item._id}
        renderItem={renderContact}
        ListEmptyComponent={<Text style={styles.emptyText}>No contacts available.</Text>}
      />
      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AddEditContact')}
      >
        <Text style={styles.addButtonText}>Add Contact</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#EAF8E8', padding: 16 },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2E7D32', textAlign: 'center', marginBottom: 20 },
  contactCard: {
    backgroundColor: '#FFFFFF',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    borderColor: '#A5D6A7',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  contactName: { fontSize: 18, fontWeight: 'bold', color: '#2E7D32' },
  contactPhone: { fontSize: 16, color: '#7C7C7C', marginBottom: 10 },
  buttonRow: { flexDirection: 'row', justifyContent: 'space-between' },
  editButton: { backgroundColor: '#A5D6A7', padding: 10, borderRadius: 5 },
  deleteButton: { backgroundColor: '#C62828', padding: 10, borderRadius: 5 },
  buttonText: { color: '#FFFFFF', fontWeight: 'bold' },
  addButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  addButtonText: { color: '#FFFFFF', fontWeight: 'bold', fontSize: 16 },
});
