import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const RegistrationScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleRegistration = () => {
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView 
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View style={styles.headerContainer}>
            <Text style={styles.title}>Registrate</Text>
            <Text style={styles.legend}>Date de alta llenando los siguientes datos</Text>
          </View>

          <View style={styles.formContainer}>
            <Text style={styles.Subtitle}>Nombre completo</Text>
            <TextInput
              style={styles.input}
              value={name}
              onChangeText={setName}
              placeholder="Ingresa "
              placeholderTextColor="#666"
              keyboardType="default"
              autoCapitalize="words"
            />

            <Text style={styles.Subtitle}>Email</Text>
            <TextInput
              style={styles.input}
              value={email}
              onChangeText={setEmail}
              placeholder="hey@tuemail.com"
              placeholderTextColor="#666"
              keyboardType="email-address"
              autoCapitalize="none"
            />

            <Text style={styles.Subtitle}>Contraseña</Text>
            <TextInput
              style={styles.input}
              value={password}
              onChangeText={setPassword}
              secureTextEntry
              placeholder="Ingresa una contraseña"
              placeholderTextColor="#666"
              autoCapitalize="none"
            />
          </View>

          <View style={styles.bottomContainer}>
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
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#848E8C',
  },
  scrollContainer: {
    flexGrow: 1,
    padding: 40,
    justifyContent: 'space-between',
  },
  headerContainer: {
    marginTop: 120,
    marginBottom: 30,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomContainer: {
    marginTop: 20,
  },
  Subtitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingBottom: 15,
    paddingHorizontal: 10,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  legend: {
    fontSize: 17,
    fontWeight: '300',
    color: 'white',
  },
  input: {
    height: 40,
    borderWidth: 2,
    borderColor: '#DCF763',
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 20,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
  },
  buttonContainer: {
    borderRadius: 5,
    overflow: 'hidden',
    marginBottom: 15,
  },
  gradientButton: {
    paddingVertical: 10,
    alignItems: 'center',
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  footer: {
    color: 'white',
    fontSize: 14,
    textAlign: 'center',
  },
});

export default RegistrationScreen;