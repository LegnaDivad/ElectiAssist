import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Estados para controlar el foco de cada campo de texto
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [passwordFocused, setPasswordFocused] = useState(false);

  const handleRegistration = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrate</Text>
      <Text style={styles.legend}>Date de alta llenando los siguientes datos</Text>

      <Text style={styles.label}>Nombre completo</Text>
      <TextInput
        onFocus={() => setNameFocused(true)}
        onBlur={() => setNameFocused(false)}
        style={[
          styles.input,
          { borderColor: nameFocused ? 'black' : '#ccc' }
        ]}
        value={name}
        onChangeText={setName}
        placeholder="Francisco Pérez"
      />

      <Text style={styles.label}>Email</Text>
      <TextInput
        onFocus={() => setEmailFocused(true)}
        onBlur={() => setEmailFocused(false)}
        style={[
          styles.input,
          { borderColor: emailFocused ? 'black' : '#ccc' }
        ]}
        value={email}
        onChangeText={setEmail}
        placeholder="hey@tueemail.com"
      />

      <Text style={styles.label}>Contraseña</Text>
      <TextInput
        onFocus={() => setPasswordFocused(true)}
        onBlur={() => setPasswordFocused(false)}
        style={[
          styles.input,
          { borderColor: passwordFocused ? 'black' : '#ccc' }
        ]}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Ingresa una contraseña"
      />

<TouchableOpacity onPress={handleRegistration} style={styles.buttonContainer}>
        <LinearGradient
          colors={['#435058', '#4A5861', '#687C88', '#758C9A', '#91ADBE']}
          locations={[0, 0.47, 0.69, 0.8, 1]}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Crear Cuenta</Text>
        </LinearGradient>
      </TouchableOpacity>
      <Text style={styles.footer}>¿Ya tienes cuenta? Inicia Sesión</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  legend: {
    paddingBottom: 20,
    paddingTop: 0,
    fontSize: 12,
    fontWeight: '300',
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
  },
  input: {
    height: 40,
    borderWidth: 2, 
    borderColor: '#DCF763',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#007AFF',
    borderRadius: 5,
    paddingVertical: 10,
    alignItems: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 20,
  },
  gradientButton: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footer: {
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RegistrationScreen;
