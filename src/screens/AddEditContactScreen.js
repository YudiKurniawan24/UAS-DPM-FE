import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
import { addContact, updateContact } from '../service/api';

export default function AddEditContactScreen({ navigation, route }) {
  const [name, setName] = useState(route.params?.name || '');
  const [phone, setPhone] = useState(route.params?.phone || '');
  const [loading, setLoading] = useState(false);
  const contactId = route.params?.contactId || null;

  const validatePhone = (phone) => /^[0-9]{10,15}$/.test(phone);

  const handleSaveContact = async () => {
    if (!name || !phone) {
      Alert.alert('Validation Error', 'Name and phone are required.');
      return;
    }

    if (!validatePhone(phone)) {
      Alert.alert('Validation Error', 'Phone number is not valid.');
      return;
    }

    setLoading(true);
    try {
      const contact = { name, phone };
      if (contactId) {
        await updateContact(contactId, contact);
        Alert.alert('Success', 'Contact updated successfully.');
      } else {
        await addContact(contact);
        Alert.alert('Success', 'Contact added successfully.');
      }
      navigation.goBack();
    } catch (error) {
      console.error('Error saving contact:', error);
      Alert.alert('Error', 'Failed to save contact.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{contactId ? 'Edit Contact' : 'Add Contact'}</Text>
      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#7C7C7C"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Phone"
        placeholderTextColor="#7C7C7C"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {loading ? (
        <ActivityIndicator size="large" color="#2E7D32" />
      ) : (
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveContact}>
          <Text style={styles.saveButtonText}>Save Contact</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EAF8E8',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2E7D32',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#A5D6A7',
    borderRadius: 10,
    padding: 15,
    marginBottom: 20,
    backgroundColor: '#FFFFFF',
    color: '#000000',
  },
  saveButton: {
    backgroundColor: '#2E7D32',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
