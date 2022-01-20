import React from 'react';
import { StyleProp, TextStyle, View } from 'react-native';
import { ASPText } from '..';
import strings from '../../resources/strings';
import { formattedAmount } from '../../utils/utils';
import ASPPriceStyle from './styles';

interface ASPProps {
  availableTextStyle?: StyleProp<TextStyle>;
  currncyCode?: string,
  amount?: number
}

const ASPPrice = (props: ASPProps) => {
  const {
    availableTextStyle,
    currncyCode,
    amount,
  } = props;

  const {
    availableBalanceValueContainerStyle,
    currencyContainerStyle,
    availableBalanceTextStyle
  } = ASPPriceStyle;

  return (
    <View style={availableBalanceValueContainerStyle}>
      <View style={currencyContainerStyle}>
        <ASPText weight='bold' size='body'>
          {currncyCode ? currncyCode : strings.DebitCard.currencyCode}
        </ASPText>
      </View>
      <ASPText
        weight='bold'
        size='large'
        style={[availableBalanceTextStyle, availableTextStyle]}
      >
        {formattedAmount(amount)}
      </ASPText>
    </View>
  );
};

export default ASPPrice;
