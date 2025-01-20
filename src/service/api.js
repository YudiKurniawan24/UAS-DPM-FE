import axios from 'axios';

const api = axios.create({
  baseURL: 'http://192.168.56.1:5000/api', // Ganti dengan IP backend Anda
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getContacts = async () => {
  try {
    const response = await api.get('/contacts');
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error.message);
    throw new Error('Unable to fetch contacts.');
  }
};

// Menambahkan kontak baru
export const addContact = async (contact) => {
  try {
    const response = await api.post('/contacts', contact);
    return response.data;
  } catch (error) {
    console.error('Error adding contact:', error.message);
    throw new Error('Unable to add contact.');
  }
};

// Memperbarui kontak
export const updateContact = async (id, contact) => {
  try {
    const response = await api.put(`/contacts/${id}`, contact);
    return response.data;
  } catch (error) {
    console.error('Error updating contact:', error.message);
    throw new Error('Unable to update contact.');
  }
};

// Menghapus kontak
export const deleteContact = async (id) => {
  try {
    const response = await api.delete(`/contacts/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting contact:', error.message);
    throw new Error('Unable to delete contact.');
  }
};

export default api;