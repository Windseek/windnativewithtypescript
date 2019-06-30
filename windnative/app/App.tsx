import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class App extends React.Component {

    constructor(props:any) {
        super(props);
    }

    render(): React.ReactNode {
        return (
        <View>
            <Text>
                hello
            </Text>
        </View>);
    }
}