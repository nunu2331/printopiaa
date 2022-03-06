import {
  StyleSheet,
  View,
  Image,
  TextInput,
  ScrollView,
  SafeAreaView,
  Text,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {AppleIcon, GoogleIcon, Ilustrasi} from '../assets';
import {Container, TextCard, Button, EndLine} from '@components';

const LoginScreen = () => {
  const [text, onChangeText] = React.useState('Useless Text');
  const [number, onChangeNumber] = React.useState(null);
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <Image style={styles.image} source={Ilustrasi} />
        </View>
        <Container padding={16}>
          <View style={styles.loginContainer}>
            <TextCard
              title={'Login now'}
              desc={
                'Login now and print all your needs without worrying about anything.'
              }
            />
            <TextInput
              style={styles.input}
              onChangeText={onChangeNumber}
              value={number}
              placeholder="Phone Number"
              keyboardType="numeric"
            />
            <Button title={'Login'} primary />
            <EndLine />
            <Button
              title={'Login with Google'}
              bottom={24}
              image={GoogleIcon}
            />
            <Button title={'Login with Apple'} bottom={24} image={AppleIcon} />
            <View style={styles.signUpWrapper}>
              <Text>I'm new,</Text>
              <TouchableOpacity>
                <Text style={styles.signUpText}> Sign me up</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageWrapper: {
    justifyContent: 'center',
    // flex: 1,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
  },
  loginContainer: {
    marginTop: 20,
    paddingBottom: 24,
  },
  input: {
    height: 40,
    marginTop: 32,
    marginBottom: 24,
    borderBottomWidth: 1,
    borderColor: '#99A0A0',
    padding: 10,
  },
  signUpWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 8,
  },
  signUpTitle: {
    fontSize: 14,
    color: '#988981',
  },
  signUpText: {
    fontSize: 14,
    color: '#00B8B1',
    fontWeight: '600',
  },
});
