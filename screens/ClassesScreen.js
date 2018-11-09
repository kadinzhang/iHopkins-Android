import React, { Component } from 'react';
import { StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';
import { WebBrowser, Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { StackNavigator } from 'react-navigation';
import AddClass from './AddClassScreen';

export default class ScheduleScreen extends React.Component {
	//TOPBAR
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};
		return {
			title: 'Classes',
		};
	};

	constructor(props) {
		super(props);
		this.state = {
			A: '',
			B: '',
			C: '',
			D: '',
			E: '',
			F: '',
			G: '',
			H: '',
		};
	}

	updateClass = (block, stateObject) => {
		this.setState({
			block: stateObject,
		});
	};

	render() {
		return (
			<ScrollView style={styles.container}>
				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							updateClass: info => this.setState(prevState => ({ A: info })),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>A</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.A}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							updateClass: info => this.setState(prevState => ({ B: info })),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>B</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.B}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() => this.props.navigation.navigate('AddClass')}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>C</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockC}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() => this.props.navigation.navigate('AddClass')}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>D</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockD}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() => this.props.navigation.navigate('AddClass')}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>E</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockE}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() => this.props.navigation.navigate('AddClass')}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>F</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockF}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() => this.props.navigation.navigate('AddClass')}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>G</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockG}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() => this.props.navigation.navigate('AddClass')}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>H</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockH}</Text>
						</View>
					</View>
				</Touchable>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: 0,
		backgroundColor: '#cecaca',
	},
	optionIconContainer: {
		marginRight: 9,
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#EDEDED',
	},
	optionText: {
		fontSize: 15,
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 13,
	},
	bigLettersText: {
		fontSize: 35,
		color: 'maroon',
		fontWeight: 'bold',
	},
});
