import React from 'react';
import SCREENS from '.';
import Ionicons from '@expo/vector-icons/Ionicons';
import Home from '../Home/Home';
import Category from '../Category/Category';
import Wishlist from '../Wishlist/Wishlist';
import Account from '../Account/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import Cart from '../Cart/Cart';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
const Tab = createBottomTabNavigator();

const Navigation = () => { 
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabelStyle: { color: 'black' },
        headerShown:false,
        tabBarStyle: {
          position: 'absolute',
          borderTopLeftRadius: 15,
          borderTopRightRadius: 15,
          backgroundColor: '#6C28FE',
          shadowColor: '#CCCCCC',
          paddingTop:5,
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        },
      }}
    >
      <Tab.Screen
        name={SCREENS.HOME}
        component={Home}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => ( 
            <Ionicons 
            name={focused ? "home" : "home"} 
            size={24}
            color={focused ? "white" : "black"}
            />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CATEGORY}
        component={Category}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Ionicons 
            name={focused ? "reorder-three" : "reorder-three"} 
            size={24} 
            color={focused ? "white" : "black"}  />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.CART}
        component={Cart}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
            name={focused ? "shopping-cart" : "shopping-cart"} 
            size={24} 
            color={focused ? "white" : "black"}  />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.WISHLIST}
        component={Wishlist}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <MaterialIcons
            name={focused ? "favorite" : "favorite"} 
             size={24} 
             color={focused ? "white" : "black"} />
          ),
        }}
      />
      <Tab.Screen
        name={SCREENS.ACCOUNT}
        component={Account}
        options={{
          title: '',
          tabBarIcon: ({ focused }) => (
            <Ionicons
        name={focused ? "person" : "person"} 
        color={focused ? "white" : "black"} 
        size={24}
      />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Navigation;
