import React from 'react';
import { Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DrawerContainer from '../components/DrawerContainer';
import LogoutScreen from '../screens/LogoutScreen';
import { AppStyles } from '../utils/AppStyles';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const BottomTab = createBottomTabNavigator();

const getIconName = (name) => {
  if (name === 'Home') {
    return 'home';
  } else if (name === 'Menu') {
    return 'menu';
  } else {
    return 'home';
  }
}

const MenuScreen = ({ navigation }) => (
  <Pressable
    onPress={() => navigation.openDrawer()}
    style={({ pressed }) => ({
      opacity: pressed ? 0.5 : 1,
    })}
  >
    <Icon name={getIconName('Menu')} size={30} color={AppStyles.color.tint} />
  </Pressable>
);

const TabNavigator = ({ navigation }) => (
  <BottomTab.Navigator
    initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarInactiveTintColor: 'grey',
      tabBarActiveTintColor: AppStyles.color.tint,
      tabBarIcon: ({ focused }) => {
        if (route.name === 'Menu') {
          return <MenuScreen navigation={navigation} />;
        }
        return (
          <Icon name={getIconName(route.name)} size={30} color={focused ? AppStyles.color.tint : AppStyles.color.grey} />
        );
      },
    })}
  >
    <BottomTab.Screen name="Home" component={HomeScreen} />
    <BottomTab.Screen name="Menu" component={() => <></>} />
  </BottomTab.Navigator>
);

const DrawerStack = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,
    }}
    drawerContent={(props) => <DrawerContainer {...props} />}
  >
    <Drawer.Screen name="Tab" component={TabNavigator} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
    <Drawer.Screen name="Logout" component={LogoutScreen} />
  </Drawer.Navigator>
);

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="DrawerStack" component={DrawerStack} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
