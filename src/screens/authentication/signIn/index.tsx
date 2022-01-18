import React, { useState } from 'react';
import { Platform } from 'react-native';

// Import Libs
import LottieView from 'lottie-react-native';
import Snackbar from 'react-native-snackbar';
import FlashMessage, { showMessage } from "react-native-flash-message";

// Import Assets
import LogoImage from '@/assets/images/logo.svg';

// Import Components 
import Input from '@/components/textInput';

// Import Services and Styles
import api from '@/services/api';
import colors from '@/styles/colors';

// Import Styled Components
import {
  Container,
  FormContainer,
  WelcomeText,
  InputContainer,
  RecoverPassword,
  RecoverPasswordText,
  AccessButton,
  ButtonText,
  CreateAccountContainer,
  CreateAccountText,
  CreateAccountButton,
  CreateAccountButtonText
} from './styles';

const SignIn = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const ACCESSALLOWED = 100;
  const ACCESSDENIED = 101;

  const renderSnackbar = (message: string) => {
    Snackbar.show({
      text: message,
      duration: 8000,
      numberOfLines: 3,
      backgroundColor: colors.yellow,
      textColor: colors.black,
      action: { text: 'Fechar', textColor: colors.black, onPress: () => Snackbar.dismiss() }
    })
  }

  const renderFlashMessage = (message: string, type: any) => {
    showMessage({
      message: type == 'danger' ? "Acesso negado" : "Acesso permitido",
      description: message,
      type: type,
      titleStyle: { textAlign: 'center' },
      textStyle: { textAlign: 'center' }
    });
  }

  const validateLogin = () => {
    setLoading(true)
    if (!email) {
      renderSnackbar('Favor preencher o Email')
      setLoading(false);
    } else if (!password) {
      renderSnackbar('Favor preencher a senha');
      setLoading(false);
    } else {
      handleLogin();
    }
  }

  const handleLogin = async () => {
    try {
      const response = await api.login({
        email,
        password,
      });
      if (response) {
        if (response.id == ACCESSALLOWED) {
          renderFlashMessage(response.mensagem, "success");
        } else if (response.id == ACCESSDENIED) {
          renderFlashMessage(response.mensagem, "danger");
        }
      }
      else {
        setEmail('');
        setPassword('');
      }
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  }

  return (
    <Container>

      <FlashMessage position="top" />

      <LogoImage />

      <FormContainer behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
        <WelcomeText>
          Bem Vindo
        </WelcomeText>
        <InputContainer>
          <Input
            placeholder="Email"
            value={email}
            onChangeText={text => setEmail(text)}
            autoCorrect={false}
            autoCapitalize="none"
            keyboardType="email-address"
            isPassword={false}
          />
          <Input
            placeholder="Senha"
            value={password}
            onChangeText={text => setPassword(text)}
            autoCorrect={false}
            secureTextEntry={true}
            autoCapitalize="none"
            isPassword={true}
          />
          <RecoverPassword>
            <RecoverPasswordText>Recuperar senha</RecoverPasswordText>
          </RecoverPassword>
          <AccessButton onPress={validateLogin}>
            {
              loading ? (
                <LottieView source={require('@/assets/images/loading')} autoPlay loop />
              ) : (
                <ButtonText>Acessar</ButtonText>
              )
            }
          </AccessButton>
        </InputContainer>
      </FormContainer>

      <CreateAccountContainer>
        <CreateAccountText>Não tem conta?</CreateAccountText>
        <CreateAccountButton>
          <CreateAccountButtonText>Crie uma nova agora</CreateAccountButtonText>
        </CreateAccountButton>
      </CreateAccountContainer>

    </Container>
  );
}

export default SignIn;