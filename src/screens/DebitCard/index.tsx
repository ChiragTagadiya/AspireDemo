import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { ASPPrice, ASPText } from '../../components';
import images from '../../resources/images';
import strings from '../../resources/strings';
import CardConfiguration from '../CardConfiguration';
import DebitCardStyle from './styles';
import InitialCardData from '../../mock/CardDetails.json';
import { CardDataType } from '../../interfaces/interface';

const DebitCard = () => {
  const [cardData, setCardData] = useState<CardDataType>(InitialCardData);

  /* debit card screen title constant */
  const titles = strings.DebitCard;

  const {
    containerStyle,
    innerContainerStyle,
    headerContainerStyle,
    debitCardTitleContainerStyle,
    aspireIconContainerStyle,
    aspireIconStyle,
    availableBalanceContainerStyle,
    availableBalanceTextStyle,
  } = DebitCardStyle;

  /**
   * @constant onLimitSetCallBack
   * @description called when weekly limit
   * will set from spend limit
   */
   const onLimitSetCallBack = (spendLimit: number) => {
    setCardData({
      ...cardData,
      spendLimit: spendLimit,
    });
  }

  /**
   * @constant onSpendMoneyCallBack
   * @description called while spending the money
   * calculating and managing spendAmount, availbleBalance
   * while spending money
   */
   const onSpendMoneyCallBack = (spendMoney: number, isTopUp?: boolean) => {
    if (isTopUp) {
      let availableBalance = cardData?.availableBalance + spendMoney;
      setCardData({
        ...cardData,
        availableBalance,
      });
      return;
    }
    let availableBalance = cardData?.availableBalance - spendMoney;
    let currentSpend =
      cardData?.spendLimit > 0 ?
      cardData?.currentSpend + spendMoney :
      cardData?.currentSpend;
    if (availableBalance < 0) {
      Alert.alert(titles.insufficientBananceAlert);
      return;
    }
    if (currentSpend > cardData.spendLimit) {
      Alert.alert(titles.crossedWeeklyLimitAlert);
      return;
    }
    setCardData({
      ...cardData,
      availableBalance,
      currentSpend,
    });
  }

  /**
   * @constant renderAvailableBalance
   * @description render header of the screen
   */
  const renderAvailableBalance = () => {
    return (
      <View style={availableBalanceContainerStyle}>
        <ASPText size='regular'>
          {titles.availableBalance}
        </ASPText>
        <ASPPrice
          amount={cardData.availableBalance}
          availableTextStyle={availableBalanceTextStyle}
        />
      </View>
    );
  };

  /**
   * @constant renderTitle
   * @description render header of the screen
   */
  const renderHeader = () => {
    return (
      <View style={headerContainerStyle}>
        <View style={debitCardTitleContainerStyle}>
          <ASPText weight='bold' size='large'>
            {titles.title}
          </ASPText>
          {renderAvailableBalance()}
        </View>
        <View style={aspireIconContainerStyle}>
          <Image source={images.aspireLogo} style={aspireIconStyle} />
        </View>
      </View>
    );
  };

  return (
    <View style={containerStyle}>
      <SafeAreaView style={innerContainerStyle}>
        {renderHeader()}
        <CardConfiguration
          cardData={cardData}
          onLimitSetCallBack={onLimitSetCallBack}
          onSpendMoneyCallBack={onSpendMoneyCallBack}
        />
      </SafeAreaView>
    </View>
  );
};

export default DebitCard;
