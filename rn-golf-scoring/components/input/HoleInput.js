import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';

export function HoleInput(props) {
	return (
		<View>
			<Text>{props.title}</Text>
			<TextInput/>
			<Button title={props.buttonText}/>
		</View>
	)
};