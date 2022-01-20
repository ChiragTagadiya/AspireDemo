import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { ASPText } from '../../components';
import strings from '../../resources/strings';
import HomeStyle from './styles';

interface HomeProps {
  title?: string;
}

const Home = (props: HomeProps) => {
  const {
    containerStyle,
    innerContainerStyle,
    titleTextStyle,
  } = HomeStyle;

  const titles = strings.Home;

  return (
    <View style={containerStyle}>
      <SafeAreaView style={innerContainerStyle}>
        <ASPText weight='bold' size='large' style={titleTextStyle}>
          {titles.title}
        </ASPText>
      </SafeAreaView>
    </View>
  );
};

export default Home;
