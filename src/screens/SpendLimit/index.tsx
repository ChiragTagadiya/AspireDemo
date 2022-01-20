import React from 'react';
import {
  View,
  StyleProp,
  ViewStyle,
  SafeAreaView,
  Image,
} from 'react-native';
import { ASPText } from '../../components';
import images from '../../resources/images';
import strings from '../../resources/strings';
import SetLimit from './SetLimit';
import SpendLimitStyle from './styles';
interface SpendLimitProps {
  containerStyle?: StyleProp<ViewStyle>;
}

const SpendLimit = (props: SpendLimitProps) => {

  /* spend limit screen title constant */
  const titles = strings.SpendLimit;

  const {
    containerStyle,
    innerContainerStyle,
    headerContainerStyle,
    debitCardTitleContainerStyle,
    aspireIconContainerStyle,
    aspireIconStyle,
    setLimitContainerStyle,
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
            {titles.spendLimit}
          </ASPText>
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
        <SetLimit style={setLimitContainerStyle} {...props}/>
      </SafeAreaView>
    </View>
  );
};

export default SpendLimit;
