/// <reference types='nativewind/types' />
import React from 'react';
import { Text, View, Pressable } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { StackParamList } from '../../App';

type Props = NativeStackScreenProps<StackParamList, 'Login'>

const Login = ({navigation}: Props): JSX.Element => {
    return (
        <View>
            <View>
                <Pressable
                    onPress={() => navigation.navigate('Home')}
                >
                    <Text>Hi</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Login;
