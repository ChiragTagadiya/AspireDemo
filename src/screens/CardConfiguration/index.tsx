import React from 'react';
import {
  View,
  ScrollView,
  Image,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ASPText, ASPCard, ASPCreditLimit } from '../../components';
import { CardDataProps } from '../../interfaces/interface';
import { navigate } from '../../navigation/root-navigation';
import images from '../../resources/images';
import strings from '../../resources/strings';
import DebitCardStyle from './styles';

const CardConfiguration = (props: CardDataProps) => {
  const { cardData } = props;
  const {
    containerStyle,
    scrollViewContainerStyle,
    scrollViewContentStyle,
    topViewHeight,
    cardContainerStyle,
    innerContainerStyle,
    reserveContainerStyle,
    actionContainerStyle,
    innerActionContainerStyle,
    rightActionContainerStyle,
    actionTitleStyle,
    actionDescriptionStyle,
  } = DebitCardStyle;

  /* card configuration screen title constant */
  const titles = strings.CardConfiguration;

  /**
   * @constant prepareCardActionData
   * @description prepare card action data
   * for bottom part
   */
   const prepareCardActionData = () => {
    const data = [
      {
        id: 1,
        image: images.topUpLogo,
        title: titles.topUpAccount,
        descripion: titles.topUpDescription
      },
      {
        id: 2,
        image: images.weeklyLogo,
        title: titles.weeklySpending,
        descripion: titles.weeklySpendingDescription
      },
      {
        id: 3,
        image: images.freezeLogo,
        title: titles.freezCard,
        descripion: titles.freezCardDescription
      },
      {
        id: 4,
        image: images.newCardLogo,
        title: titles.getNewCard,
        descripion: titles.getNewCardDescription
      },
      {
        id: 5,
        image: images.deactivatedCardLogo,
        title: titles.deactivatedCards,
        descripion: titles.deactivatedCardsDescription
      },
    ];
    return data;
  };

  /**
   * @constant renderCardNumber
   * @description render card number
   */
   const renderCardActionData = () => {
    const data = prepareCardActionData();
    return (
      <View style={actionContainerStyle}>
        {data.map(item => {
          return <TouchableOpacity key={item.id} onPress={() => {
            if (item.id === 1) {
              navigate('SpendMoney', { ...props, isTopUp: true });
            } else if (item.id === 2) {
              navigate('SpendLimit', { ...props });
            } else {
              navigate('SpendMoney', { ...props });
            }
          }} >
            <View key={item.id} style={innerActionContainerStyle}>
              <Image source={item.image} />
              <View style={rightActionContainerStyle}>
                <ASPText
                  weight='medium'
                  size='regular'
                  style={actionTitleStyle}>
                  {item.title}
                </ASPText>
                <ASPText
                  size='extra-body'
                  weight='regular'
                  style={actionDescriptionStyle}>
                  {item.descripion}
                </ASPText>
              </View>
            </View>
            </TouchableOpacity>
        })}
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <ScrollView
        style={scrollViewContainerStyle}
        contentContainerStyle={scrollViewContentStyle}
        bounces={false}
        showsVerticalScrollIndicator={false}
        >
        <View style={topViewHeight} />
        <View style={innerContainerStyle}>
          <View style={reserveContainerStyle} />
          <ASPCreditLimit
            currentSpend={cardData.currentSpend}
            spendLimit={cardData.spendLimit}
          />
          {renderCardActionData()}
          <View style={cardContainerStyle}>
            <ASPCard cardData={cardData} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default CardConfiguration;
