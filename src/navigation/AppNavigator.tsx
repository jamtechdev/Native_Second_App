
import React from 'react'
import { Image, Pressable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SettingScreen from '../screens/SettingScreen';

const Stack = createStackNavigator();

const BottomTab = createBottomTabNavigator();

const TabNavigator = ({ navigation }) => (
  <BottomTab.Navigator
  
    tabBarOptions={{
      activeTintColor: '#F60081',
      style: {
        backgroundColor: '#b3b3b3',
      },

    }}
    // initialRouteName="Home"
    screenOptions={({ route }) => ({
      tabBarIcon: ({ focused, color, size }) => {
        let iconName;
        if (route.name === 'Home') {
          iconName = focused ? 'home' : 'home';
        } else if (route.name === 'Setting') {
          iconName = focused ? 'cog' : 'cog';
        } else if (route.name === 'Menu') {
          iconName = focused ? 'menu' : 'menu';
        }

        return (
          <Pressable
            style={({ pressed }) => ({
              opacity: pressed ? 0.5 : 1,
            })}
            onPress={() => {
              if (route.name === 'Home') {
                navigation.navigate('Home');
              } else if (route.name === 'Setting') {
                navigation.navigate('Setting');
              } else if (route.name === 'Menu') {
                navigation.openDrawer();
              }
            }}
          >
            <Icon name={iconName} size={30} color={color} />
          </Pressable>
        );
      },
      // tabBarInactiveTintColor: 'red',
      // tabBarActiveTintColor: '#e91e63',
      // headerShown: true,


    })}
  >

    <BottomTab.Screen name="Home" component={HomeScreen} />
    <BottomTab.Screen name="Setting" component={SettingScreen} />
    <BottomTab.Screen name="Menu" component={ProfileScreen} />
  </BottomTab.Navigator>
);

const Drawer = createDrawerNavigator();

const DrawerStack = () => (
  <Drawer.Navigator
    screenOptions={{
      drawerPosition: 'right',
      headerShown: false,

    }}
  >
    <Drawer.Screen name="Home" component={TabNavigator} />
    <Drawer.Screen name="Setting" component={SettingScreen} />
    <Drawer.Screen name="Profile" component={ProfileScreen} />
  </Drawer.Navigator>
);

const AppNavigator = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        {/* <Stack.Screen name="Login" component={LoginScreen} /> */}
        <Stack.Screen name="DrawerStack" component={DrawerStack} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Setting" component={SettingScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppNavigator