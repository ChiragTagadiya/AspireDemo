import React from 'react';
import { View} from 'react-native';
import { ASPText } from '..';
import strings from '../../resources/strings';
import ASPCreditLimitStyle from './styles';
interface ASPCreditLimit {
  currentSpend?: number;
  spendLimit?: number;
}

const ASPCreditLimit = (props: ASPCreditLimit) => {
  const { currentSpend, spendLimit } = props;
  const {
    cardContainer,
    debitLimitTitleStyle,
    limitValueContainerStyle,
    limitDeviderStyle,
    usedValueTextStyle,
    limitValueTextStyle,
  } = ASPCreditLimitStyle;

  /* credit limit component title constant */
  const titles = strings.CreditLimit;

  return ( spendLimit ?
    <View style={cardContainer}>
      <ASPText size='extra-body' weight='medium' style={debitLimitTitleStyle}>
        {titles.debitLimit}
      </ASPText>
      <View style={limitValueContainerStyle}>
        <ASPText size='extra-body' weight='medium' style={usedValueTextStyle}>
          {`${strings.DebitCard.currencyCode}${currentSpend}`}
        </ASPText>
        <View style={limitDeviderStyle} />
        <ASPText size='extra-body' weight='medium' style={limitValueTextStyle}>
          {`${strings.DebitCard.currencyCode}${spendLimit}`}
        </ASPText>
      </View>
    </View> : null
  );
};

export default ASPCreditLimit;
