/// <reference types='nativewind/types' />
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from './Component/Home/';
import Landing from './Component/Welcome';
import Login from './Component/Login';



export type StackParamList = {
    Landing: undefined;
    Login: undefined;
    Home: undefined;
};

const Stack = createNativeStackNavigator<StackParamList>();
function App(): JSX.Element {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={
                    {headerShown: false}
                }
            >
                <Stack.Screen name='Landing' component={Landing}/>
                <Stack.Screen name='Login' component={Login} />
                <Stack.Screen name='Home' component={Home}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;
