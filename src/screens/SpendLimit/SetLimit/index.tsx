import React, { useState } from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  Image,
  Alert,
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ASPText } from '../../../components';
import ASPPrice from '../../../components/aspprice';
import { pop } from '../../../navigation/root-navigation';
import images from '../../../resources/images';
import strings from '../../../resources/strings';
import { formattedAmount } from '../../../utils/utils';
import SetLimitStyle from './styles';

interface SetLimitProps {
  style?: StyleProp<ViewStyle>;
  route?: any;
}

const SetLimit = (props: SetLimitProps) => {
  const [spendLimit, setSpendLimit] = useState<number>();
  const { style } = props;

  // debit card screen title constant
  const titles = strings.DebitCard;

  const arrData = [
    {
      id: 1,
      code: titles.currencyCode,
      amount: 5000,
    },
    {
      id: 2,
      code: titles.currencyCode,
      amount: 10000,
    },
    {
      id: 3,
      code: titles.currencyCode,
      amount: 20000,
    },
  ]

  const {
    containerStyle,
    innerContainerStyle,
    limitTitle,
    aspireIconStyle,
    aspireIconContainerStyle,
    priceContainer,
    separatorStyle,
    calendarTitle,
    buttonContainer,
    btnCodeTitle,
    buttonsContainer,
    saveContentContainerStyle,
    saveContainer,
    disableSaveContainer,
    saveText,
  } = SetLimitStyle;

  /**
   * @constant renderLimitButton
   * @description constant to render
   * the spend limit as a button
   */
  const renderLimitButton = (key: number, code: string, amount: number) => {
    return <View key={key} style={buttonContainer}>
      <TouchableOpacity onPress={() => setSpendLimit(amount)}>
        <ASPText size='body' style={btnCodeTitle}>{`${code} ${formattedAmount(amount)}`}</ASPText>
      </TouchableOpacity>
    </View>
  }

  return (
    <View style={containerStyle}>
      <SafeAreaView style={[innerContainerStyle, style]}>
        <View style={aspireIconContainerStyle}>
          <Image source={images.spendLimit} style={aspireIconStyle} />
          <ASPText style={limitTitle}>
            {titles.weeklyCard}
          </ASPText>
        </View>
        <View style={priceContainer}>
          <ASPPrice amount={spendLimit} />
          <View style={separatorStyle} />
          <ASPText
            size='extra-body'
            style={calendarTitle}>
              {titles.lastDays}
          </ASPText>
        </View>
        <View style={buttonsContainer}>
          {
            arrData.map((item: any) => {
              return renderLimitButton(item.id, item.code, item.amount)
            })
          }
        </View>
        <View style={saveContentContainerStyle}>
          <TouchableOpacity onPress={() => {
            if (!spendLimit || spendLimit <= 0) {
              Alert.alert(titles.invalidLimitAlert);
              return;
            }
            const { params } = props.route;
            const { onLimitSetCallBack } = params;
            onLimitSetCallBack?.(spendLimit);
            pop();
          }}>
            <View style={[
              saveContainer,
              (!spendLimit || spendLimit <= 0) ?
              disableSaveContainer : {},
            ]}>
              <ASPText style={saveText}>{titles.save}</ASPText>
            </View>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default SetLimit;
