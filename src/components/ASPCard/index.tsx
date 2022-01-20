import React, { useState }  from 'react';
import { View , Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ASPText } from '..';
import { CardDataProps } from '../../interfaces/interface';
import images from '../../resources/images';
import strings from '../../resources/strings';
import ASPCardStyle from './styles';

const ASPCard = (props: CardDataProps) => {
  const [showCardData, setShowCardData] = useState<boolean>(true);
  const { cardData } = props;
  const {
    cardContainer,
    hideContainerStyle,
    hideTextContainerStyle,
    hideImageStyle,
    hideTextStyle,
    aspireLogoStyle,
    aspireLogoContainerStyle,
    nameTextStyle,
    cardNumberContainerStyle,
    cardNumberTextStyle,
    dateStyle,
    cvvStyle,
    visaLogoContainerStyle,
    visaLogoStyle,
  } = ASPCardStyle;

  /* card screen title constant */
  const titles = strings.ASPCard;

  /**
   * @constant renderHideShowButton
   * @description render a button to
   * hide/ show confidential card details
   */
  const renderHideShowButton = () => {
    return (<View style={hideContainerStyle}>
      <TouchableOpacity style={hideTextContainerStyle}
        onPress={() => setShowCardData(!showCardData)}>
        <Image source={showCardData ? images.hideLogo : images.showLogo} style={hideImageStyle} />
        <ASPText size='body' weight='semi-bold' style={hideTextStyle}>
          {showCardData ? titles.hideCard : titles.showCard}
        </ASPText>
      </TouchableOpacity>
    </View>
    );
  }

  /**
   * @constant prepareCardNumber
   * @description prepare array of card number
   * to use it in render a card
   */
  const prepareCardNumber = (cardNumber?: string) => {
    const cardNumberArray = cardNumber.split(' ');
    if (showCardData) {
      return cardNumberArray;
    }
    const sampleArray = titles.secureNumber.split(' ');
    sampleArray.pop();
    sampleArray.push(cardNumberArray[3]);
    return sampleArray;
  }

  /**
   * @constant renderCardNumber
   * @description render card number
   */
  const renderCardNumber = (cardNumber?: string) => {
    const cardNumberArray = prepareCardNumber(cardNumber);
    return (
      <View style={cardNumberContainerStyle}>
        {cardNumberArray.map(item => {
          return <ASPText
            style={cardNumberTextStyle}
            weight='semi-bold'
            size='regular'>
            {item}
          </ASPText>
        })}
      </View>
    );
  }

  /**
   * @constant renderCardBottom
   * @description render valid till
   * and cvv of a card
   */
  const renderCardBottom = () => {
    return (
      <View style={dateStyle}>
        <View>
          <ASPText weight='semi-bold' size='extra-body'>
            {`${titles.validThru} ${cardData?.validateDate}`}
          </ASPText>
        </View>
        <View style={cvvStyle}>
          <ASPText weight='semi-bold' size='extra-body'>
          {`${titles.cvv} ${showCardData ? cardData?.cvv : titles.secureCVV}`}
          </ASPText>  
        </View>
      </View>
    );
  }

  return (
    <>
      {renderHideShowButton()}
      <View style={cardContainer}>
        <View style = {aspireLogoContainerStyle}>
          <Image source={images.aspireFullLogo} style={aspireLogoStyle} />
        </View>
        <View style={nameTextStyle}>
          <ASPText weight='bold' size='medium'>
            {cardData?.name}
          </ASPText>
        </View>
        {renderCardNumber(cardData?.cardNumber)}
        {renderCardBottom()}
        <View style = {visaLogoContainerStyle}>
          <Image source={images.visaLogo} style={visaLogoStyle} />
        </View>
      </View>
    </>
  );
};

export default ASPCard;
