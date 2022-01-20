import React from 'react';
import { Text, StyleProp, TextStyle } from 'react-native';
import ASPTextStyle from './styles';

interface ASPTextProps {
  children?: React.ReactNode;
  size?: 'large' | 'regular' | 'body' | 'extra-body' | 'small' | 'medium' | '';
  weight?: 'regular' | 'medium' | 'bold' | 'black' | 'semi-bold' | '';
  style?: StyleProp<TextStyle>;
}

const getSize = (size?: string) => {
  switch (size) {
    case 'large':
      return 24;

    case 'medium' :
       return 22;
    
    case 'regular':
      return 14;
    
    case 'body':
      return 12;

    case 'extra-body':
      return 13;

    case 'small':
      return 9;

    default:
      return 16;
  }
};

const getWeight = (weight: string) => {
  switch (weight) {
    case 'bold':
      return 'bold';
    case 'semi-bold':
      return '600';
    case 'medium':
      return '500';
    default:
      return 'normal';
  }
};

const ASPText = (props: ASPTextProps) => {
  const {
    children,
    size,
    weight = 'medium',
    style,
  } = props;

  return (
    <Text
      style={[
        ASPTextStyle.text,
        {
          fontSize: getSize(size),
          fontWeight: getWeight(weight),
        },
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export default ASPText;
