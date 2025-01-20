// import React, { useEffect, useState } from 'react';
// import { View, Text, FlatList, Button, TextInput, Alert, StyleSheet, RefreshControl } from 'react-native';
// import { getContacts, addContact, updateContact, deleteContact } from '../service/api';

// const ContactsScreen = ({ navigation }) => {
//   const [contacts, setContacts] = useState([]);
//   const [loading, setLoading] = useState(false);

//   const fetchContacts = async () => {
//     setLoading(true);
//     try {
//       const data = await getContacts();
//       setContacts(data);
//     } catch (error) {
//       console.error('Error fetching contacts:', error);
//       Alert.alert('Error', 'Failed to fetch contacts.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchContacts();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={contacts}
//         keyExtractor={(item) => item._id}
//         renderItem={({ item }) => (
//           <View style={styles.contactItem}>
//             <Text>{item.name}</Text>
//             <Text>{item.phone}</Text>
//             <Button
//               title="Edit"
//               onPress={() => navigation.navigate('AddEditContactScreen', { contactId: item._id, name: item.name, phone: item.phone })}
//             />
//             <Button
//               title="Delete"
//               onPress={async () => {
//                 try {
//                   await deleteContact(item._id);
//                   setContacts(contacts.filter((contact) => contact._id !== item._id));
//                   Alert.alert('Success', 'Contact deleted.');
//                 } catch (error) {
//                   Alert.alert('Error', 'Failed to delete contact.');
//                 }
//               }}
//             />
//           </View>
//         )}
//         refreshControl={<RefreshControl refreshing={loading} onRefresh={fetchContacts} />}
//       />
//       <Button
//         title="Add Contact"
//         onPress={() => navigation.navigate('AddEditContactScreen')}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: { padding: 20 },
//   contactItem: { marginVertical: 10 },
// });

// export default ContactsScreen;
