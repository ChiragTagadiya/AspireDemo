import React from 'react';
import { Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { navigationRef } from './root-navigation';
import { colors } from '../theme';
import { Home, DebitCard, SpendLimit, SpendMoney } from '../screens';
import images from '../resources/images';
import strings from '../resources/strings';
import TabBarStyle from './styles';
import { ASPText } from '../components';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// home stack to handle non functional tabs
const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
};

// debit card stack
const DebitCardStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="DebitCard" component={DebitCard} />
      <Stack.Screen name="SpendLimit" component={SpendLimit} />
      <Stack.Screen name="SpendMoney" component={SpendMoney} />
    </Stack.Navigator>
  );
};

const tabTitle = (title, focused) => {
  return <ASPText style={[
    focused
      ? { color: colors.primaryGreen }
      : { color: colors.grey },
    { marginHorizontal: 4 },
    ]}
    weight={focused ? 'semi-bold' : ''}
    size='small'
  >
    {title}
  </ASPText>
}

/**
 * @constant AppNavigation
 * @description navigation flow and tab handling
 */
const AppNavigation = () => (
  <NavigationContainer ref={navigationRef}>
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarLabelStyle: { fontSize: 14 },
      }}
      initialRouteName="DebitCardStack"
    >
      <Tab.Screen
        name="HomeStack"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            tabTitle(strings.TabTitle.home, focused)
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.homeLogo}
              style={[
                TabBarStyle.tabIconStyle,
                { tintColor: focused ? colors.primaryGreen : colors.grey }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="DebitCardStack"
        component={DebitCardStack}
        options={{
          tabBarLabel: ({ focused }) => (
            tabTitle(strings.TabTitle.debitCard, focused)
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.cardLogo}
              style={[
                TabBarStyle.tabIconStyle,
                { tintColor: focused ? colors.primaryGreen : colors.grey }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="PaymentStack"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            tabTitle(strings.TabTitle.payments, focused)
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.paymentLogo}
              style={[
                TabBarStyle.tabIconStyle,
                { tintColor: focused ? colors.primaryGreen : colors.grey }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="CreditStack"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            tabTitle(strings.TabTitle.credit, focused)
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.creditLogo}
              style={[
                TabBarStyle.tabIconStyle,
                { tintColor: focused ? colors.primaryGreen : colors.grey }]}
            />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileStack"
        component={HomeStack}
        options={{
          tabBarLabel: ({ focused }) => (
            tabTitle(strings.TabTitle.profile, focused)
          ),
          tabBarIcon: ({ focused }) => (
            <Image
              source={images.accountLogo}
              style={[
                TabBarStyle.tabIconStyle,
                { tintColor: focused ? colors.primaryGreen : colors.grey }]}
            />
          ),
        }}
      />
    </Tab.Navigator>
  </NavigationContainer>
);

export default AppNavigation;
