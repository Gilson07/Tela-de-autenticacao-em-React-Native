import styled from 'styled-components/native';

import { Props } from './types';
import colors from '@/styles/colors';

export const Container = styled.View<Props | any>`
  align-items: flex-start;
  justify-content: center;
  background-color: ${colors.lightGray};
  border-color: ${colors.mediumGray};
  border-top-width: ${({ isPassword }) => isPassword ? '0' : '0.5px'}
  border-bottom-width: 0.5px
  border-left-width: 0.5px;
  border-right-width: 0.5px;
  border-top-left-radius: ${({ isPassword }) => isPassword ? '0' : '8px'};
  border-top-right-radius: ${({ isPassword }) => isPassword ? '0' : '8px'};
  border-bottom-right-radius: ${({ isPassword }) => !isPassword ? '0' : '8px'};
  border-bottom-left-radius: ${({ isPassword }) => !isPassword ? '0' : '8px'};
  padding: 0 5px;
`;

export const TextInput = styled.TextInput.attrs({
  placeholderTextColor: 'rgba(0, 0, 0, 0.4)',
})`
  width: 100%;
  height: 50px;
  color: ${colors.darkGray}
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  border-radius: 8px;
  padding: 0px 10px;
`;