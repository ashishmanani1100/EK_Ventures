import React from 'react'
import Home from '../screens/home';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Colors } from '../common';
import Media from '../screens/media';
import Games from '../screens/games';
import Reports from '../screens/reports';
import Account from '../screens/account';
import TabBarIcon from '../components/TabBarIcon';

const Tab = createBottomTabNavigator()

const Navigation = () => {
    return (
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
                return <TabBarIcon focused={focused} name={route.name} color={color} size={size} />;
            },
            tabBarActiveTintColor: route?.name == "Media" ? Colors.WHITE : Colors.BLUE,
            tabBarInactiveTintColor: route?.name == "Media" ? Colors.WHITE : Colors.BLACK,
            tabBarStyle: route?.name == "Media" && {
                backgroundColor: Colors.BLACK
            },
        })}>
            <Tab.Screen name="Home" component={Home} options={{ headerShown: false }} />
            <Tab.Screen name="Media" component={Media} options={{ headerShown: false }} />
            <Tab.Screen name="Games" component={Games} options={{ tabBarShowLabel: true, headerShown: false }} />
            <Tab.Screen name="Reports" component={Reports} options={{ headerShown: false }} />
            <Tab.Screen name="Account" component={Account} options={{ headerShown: false }} />
        </Tab.Navigator>
    )
}

export default Navigation