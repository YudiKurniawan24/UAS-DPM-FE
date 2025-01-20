import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import axios from '../service/api';

const LoginScreen = ({ navigation }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async () => {
        try {
            const response = await axios.post('auth/login', { email, password });
            Alert.alert('Success', 'Login successful!');
            navigation.navigate('Dashboard'); // Ganti dengan halaman Dashboard Anda
        } catch (error) {
            Alert.alert('Error', 'Invalid email or password. Please try again.');
            console.error('Login error:', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Login</Text>
            <TextInput
                style={styles.input}
                placeholder="Email"
                placeholderTextColor="#7C7C7C"
                value={email}
                onChangeText={setEmail}
            />
            <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#7C7C7C"
                secureTextEntry
                value={password}
                onChangeText={setPassword}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                <Text style={styles.loginButtonText}>LOGIN</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.registerButton} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.registerButtonText}>REGISTER</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EAF8E8', // Warna hijau muda
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#2E7D32', // Warna hijau gelap
        textAlign: 'center',
        marginBottom: 30,
    },
    input: {
        borderWidth: 1,
        borderColor: '#A5D6A7', // Warna hijau lebih terang
        borderRadius: 10,
        padding: 15,
        marginBottom: 20,
        backgroundColor: '#FFFFFF',
        color: '#000000',
    },
    loginButton: {
        backgroundColor: '#2E7D32', // Warna hijau gelap
        paddingVertical: 15,
        borderRadius: 10,
        marginBottom: 10,
        alignItems: 'center',
    },
    loginButtonText: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
    registerButton: {
        paddingVertical: 15,
        alignItems: 'center',
    },
    registerButtonText: {
        color: '#2E7D32', // Warna hijau gelap
        fontWeight: 'bold',
        fontSize: 16,
    },
});

export default LoginScreen;
