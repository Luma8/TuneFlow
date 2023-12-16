import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, Image, Alert, Keyboard, KeyboardAvoidingView, TouchableWithoutFeedback, Platform, ScrollView } from 'react-native';
import styles from './styles';
import { Entypo } from '@expo/vector-icons';
import { supabase } from '../../utils/supabase';

const Login: React.FC = () => {

  const [viewPass, setViewPass] = useState(true);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const signinWithEmail = async () => {
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });
    if (error) Alert.alert('signIn with Email: ', error.message);
    setLoading(false);
    console.log('clicked');
  }

  const signUpWithEmail = async () => {
    setLoading(true);
    const {
      data: { session },
      error,
    } = await supabase.auth.signUp({
      email: email,
      password: password
    });

    if (error) Alert.alert(error.message);
    if (!session) Alert.alert('please check your inbox for email verification!');
    setLoading(false);
  }

  const eyeSecurity = () => {
    setViewPass(!viewPass);
  }

  return (
    <ImageBackground style={{ flex: 1 }} source={require('../../../assets/Paterne2.jpg')} resizeMode='cover'>
      <View style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 40, marginBottom: 70 }}>
        <Image style={{ width: 200, height: 200 }} source={require('../../../assets/IconWhite.png')} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ flex: 1 }}
      >
        <ScrollView style={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <Text style={styles.title}>
            Log in
          </Text>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.label}>
                  Email
                </Text>
                <TextInput
                  style={styles.inputText}
                  placeholder='Email@example.com'
                  placeholderTextColor={"#000"}
                  onChangeText={(text) => setEmail(text)}
                  value={email}
                  autoCapitalize={'none'}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.inputContainer}>
              <View>
                <Text style={styles.label}>
                  Password
                </Text>
                <View style={{ display: 'flex', flexDirection: 'row' }}>
                  <TextInput
                    style={[styles.inputText, { width: '90%' }]}
                    placeholder='********'
                    placeholderTextColor={"#000"}
                    secureTextEntry={viewPass}
                    onChangeText={(text) => setPassword(text)}
                    value={password}
                    autoCapitalize={'none'}
                  />
                  <TouchableOpacity onPress={eyeSecurity}>
                    {
                      viewPass ?
                        <Entypo name="eye" size={20} color="#000" />
                        :
                        <Entypo name="eye-with-line" size={20} color="#000" />
                    }
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </TouchableWithoutFeedback>
          <TouchableOpacity style={styles.btnLog} disabled={loading} onPress={() => signinWithEmail()}>
            <Text style={styles.btnLogText}>
              Log In
            </Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  )
}

export default Login;