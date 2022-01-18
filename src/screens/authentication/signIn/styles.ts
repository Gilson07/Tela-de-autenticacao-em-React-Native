import styled from 'styled-components/native';

import fonts from '@/styles/fonts'
import colors from '@/styles/colors';

export const Container = styled.View`
  flex: 1;
  width: 100%;
  align-items: center;
  justify-content: space-around;
  padding: 0 30px 15px 30px;
  background-color: ${colors.lightGray};
`;

export const FormContainer = styled.KeyboardAvoidingView`
  width: 100%;
`;

export const WelcomeText = styled.Text`
  text-transform: uppercase;
  font-size: 20px;
  color: ${colors.darkGray};
  align-self: center;
  margin: 0 0 20px 0;
`;

export const InputContainer = styled.View``;

export const RecoverPassword = styled.TouchableOpacity`
  align-self: flex-end;
  margin: 10px 0 0 0;
`;

export const RecoverPasswordText = styled.Text`
  color: ${colors.darkGray};
  font-size: ${fonts.regular}px;
`;

export const AccessButton = styled.TouchableOpacity`
  background-color: ${colors.button};
  height: 60px;
  border-radius: 60px;
  align-items: center;
  justify-content: center;
  margin: 20px 0 0 0;
  box-shadow: 0 3px 7px rgb(18, 151, 147);
`;

export const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: ${fonts.big}px;
  font-weight: bold;
  text-transform: uppercase;
`;

export const CreateAccountContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const CreateAccountText = styled.Text`
  color: ${colors.darkGray};
  font-size: ${fonts.regular}px;
`;

export const CreateAccountButton = styled.TouchableOpacity``;

export const CreateAccountButtonText = styled.Text`
  color: ${colors.orange};
  font-size: ${fonts.regular}px;
`;