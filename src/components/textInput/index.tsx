import * as React from 'react';

// Import Types
import { Props } from './types';

// Import Styled Components
import {
  Container,
  TextInput
} from './styles';

const Input: React.FC<Props> = ({
  placeholder,
  value,
  onChangeText,
  secureTextEntry,
  autoCorrect,
  autoCapitalize,
  keyboardType,
  isPassword
}) => {
  return (
    <Container isPassword={isPassword}>
      <TextInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        autoCorrect={autoCorrect}
        autoCapitalize={autoCapitalize}
        keyboardType={keyboardType}
      />
    </Container>
  );
}

export default Input;