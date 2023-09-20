import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image } from 'react-native';

export default function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Aquí puedes verificar las credenciales
    if (username === 'usuario' && password === 'contraseña') {
      alert('Inicio de sesión exitoso');
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white', // Fondo azul
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginContainer: {
      padding: 20,
      borderRadius: 10,
      width: '80%',
      borderColor: 'grey',
    },
    loginText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginBottom: 20,
    },
    input: {
      borderWidth: 1,
      borderColor: 'grey',
      borderRadius: 5,
      padding: 10,
      marginBottom: 10,
    },
    loginButton: {
      backgroundColor: 'black',
      padding: 10,
      borderRadius: 5,
    },
    loginButtonText: {
      color: 'white', 
      textAlign: 'center',
      fontWeight: 'bold',
    },
  });

  return (
    <View style={styles.container}>
      <View style={styles.loginContainer}>
        <Text style={styles.loginText}>Iniciar Sesión</Text>
        <TextInput
          style={styles.input}
          placeholder="Nombre de usuario"
          onChangeText={text => setUsername(text)}
          value={username}
        />
        <TextInput
          style={styles.input}
          placeholder="Contraseña"
          secureTextEntry={true}
          onChangeText={text => setPassword(text)}
          value={password}
        />
        <TouchableOpacity
          style={styles.loginButton}
          onPress={handleLogin}
        >
          <Text style={styles.loginButtonText}>Iniciar Sesión</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
