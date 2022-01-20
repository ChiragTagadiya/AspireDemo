import React, { useState } from 'react';
import {
  View,
  SafeAreaView,
  Image,
  TextInput,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ASPText } from '../../components';
import { pop } from '../../navigation/root-navigation';
import images from '../../resources/images';
import strings from '../../resources/strings';
import SpendLimitStyle from './styles';

interface SpendMoneyProps {
  route?: any;
}

const SpendMoney = (props: SpendMoneyProps) => {
  const [spendAmount, setSpendAmount] = useState<string>('');
  const { params } = props.route;
  const { isTopUp } = params; // to handle the functionality of top-up/ spend-money

  /* spend money screen title constant */
  const titles = strings.SpendMoney;

  const {
    containerStyle,
    innerContainerStyle,
    headerContainerStyle,
    debitCardTitleContainerStyle,
    aspireIconContainerStyle,
    aspireIconStyle,
    spendMoneyContainerStyle,
    spendMoneyDescription,
    spendContentContainerStyle,
    spendContainer,
    spendTitleStyle,
  } = SpendLimitStyle;

  /**
   * @constant renderTitle
   * @description render header of the screen
   */
  const renderHeader = () => {
    return (
      <View style={headerContainerStyle}>
        <View style={debitCardTitleContainerStyle}>
          <ASPText weight='bold' size='large'>
            {isTopUp ? titles.topUpTitle : titles.spendMoneyTitle}
          </ASPText>
        </View>
        <View style={aspireIconContainerStyle}>
          <Image source={images.aspireLogo} style={aspireIconStyle} />
        </View>
      </View>
    );
  };

  /**
   * @constant renderSpendMoney
   * @description input-text to spend money
   */
   const renderSpendMoney = () => {
    return (<>
        <TextInput
          style={spendMoneyContainerStyle}
          keyboardType='number-pad'
          onChangeText={text => setSpendAmount(text)}
        />
        <ASPText
            size='extra-body'
            style={spendMoneyDescription}>
              {isTopUp ? titles.topupDescription : titles.spendMoneyDescription}
          </ASPText>
      </>
    );
  };

  /**
   * @constant renderSpendButton
   * @description button to submit a spend amount
   */
  const renderSpendButton = () => {
    return (
      <View style={spendContentContainerStyle}>
        <TouchableOpacity onPress={() => {
          const spendNumber = Number(spendAmount);
          if (!spendNumber || spendNumber === 0 || isNaN(spendNumber)) {
            Alert.alert(titles.invalidSpendAmount);
            return;
          }
          const { onSpendMoneyCallBack } = params;
          onSpendMoneyCallBack?.(spendNumber, isTopUp);
          pop();
        }}>
          <View style={spendContainer}>
            <ASPText style={spendTitleStyle}>
              {isTopUp ? titles.topUp :titles.spend}
            </ASPText>
          </View>
        </TouchableOpacity>
      </View>
    );
  }

  return (
    <View style={containerStyle}>
      <SafeAreaView style={innerContainerStyle}>
        {renderHeader()}
        {renderSpendMoney()}
        {renderSpendButton()}
      </SafeAreaView>
    </View>
  );
};

export default SpendMoney;
