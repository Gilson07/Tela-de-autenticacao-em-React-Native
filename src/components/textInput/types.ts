import { KeyboardTypeOptions, TextProps } from 'react-native'

export interface Props extends TextProps {
  placeholder?: string,
  value: string,
  onChangeText: (text: string) => void,
  secureTextEntry?: boolean,
  autoCorrect: boolean,
  autoCapitalize: "none" | "sentences" | "words" | "characters" | undefined,
  keyboardType?: KeyboardTypeOptions
  isPassword?: boolean
}