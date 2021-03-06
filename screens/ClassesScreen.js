import React, { Component } from 'react';
import { AsyncStorage, StyleSheet, ScrollView, Text, TextInput, View, Button } from 'react-native';
import { WebBrowser, Icon } from 'expo';
import { Ionicons } from '@expo/vector-icons';
import Touchable from 'react-native-platform-touchable';
import { StackNavigator } from 'react-navigation';
import AddClass from './AddClassScreen';
import ClassesBlock from '../components/ClassesBlock';

export default class ScheduleScreen extends React.Component {
	//TOPBAR
	static navigationOptions = ({ navigation }) => {
		const params = navigation.state.params || {};
		return {
			title: 'Classes',
		};
	};
	//class, teacher, room
	state = {
		blockA: ['blockA', 'English 11', 'Ms. Kelly', 'B301'],
		B: '',
		C: '',
		D: '',
		E: '',
		F: '',
		G: '',
		H: '',
		teacherA: '',
		teacherB: '',
		teacherC: '',
		teacherD: '',
		teacherE: '',
		teacherF: '',
		teacherG: '',
		teacherH: '',
		roomA: '',
	};

	_updateState = async(key) => {
		//Load unit setting
		var temp = ['','','',''];
		// AsyncStorage.getItem(key).then(
		// 	value => {
		// 		temp = JSON.parse(value);
		// 		this.setState({[key]: [temp]});
				
		// 	}
		// );
		try {
			const value = await AsyncStorage.getItem(key);
			if (value !== null) {
				temp = JSON.parse(value);
				this.setState({[key]: [temp]});
				console.log(this.state.blockA);
			}
		   } catch (error) {
			 // Error retrieving data
		   }
	};

	render() {
		return (
			<ScrollView style={styles.container}>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							updateState: this._updateState.bind(this),
							blockArray: this.state.blockA,
						})
					}
				>
					<View style={styles.textLine}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>A</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.blockA[1]}</Text>
						</View> 
						<View style={styles.stackedText}> 
							<Text style={styles.teacherText}>{this.state.blockA[2]}</Text>
							<Text style={styles.teacherText}>{this.state.blockA[3]}</Text>
						</View>
					</View>					
				</Touchable>

				{/* <Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'A',
							class: this.state.A,
							teacherKey: 'teacherA',
							teacher: this.state.teacherA,
							room : this.state.roomA,
							roomKey: 'roomA',
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={styles.textLine}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>A</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.A}</Text>
						</View> 
						<View style={styles.stackedText}> 
							<Text style={styles.teacherText}>{this.state.teacherA}</Text>
							<Text style={styles.teacherText}>{this.state.roomA}</Text>
						</View>
					</View>					
				</Touchable> */}


				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'B',
							class: this.state.B,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={styles.textLine}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>B</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.B}</Text>
						</View>
						<View> 
							<Text style={styles.teacherText}>{this.state.teacherB}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'C',
							class: this.state.C,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>C</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.C}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'D',
							class: this.state.D,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>D</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.D}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'E',
							class: this.state.E,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>E</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.E}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'F',
							class: this.state.F,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>F</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.F}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'G',
							class: this.state.G,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>G</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.G}</Text>
						</View>
					</View>
				</Touchable>

				<Touchable
					style={styles.option}
					background={Touchable.Ripple('#ccc', false)}
					onPress={() =>
						this.props.navigation.navigate('AddClass', {
							block: 'H',
							class: this.state.H,
							updateState: this._updateState.bind(this),
						})
					}
				>
					<View style={{ flexDirection: 'row' }}>
						<View style={styles.optionIconContainer}>
							<Text style={styles.bigLettersText}>H</Text>
						</View>
						<View style={styles.optionTextContainer}>
							<Text style={styles.optionText}>{this.state.H}</Text>
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
		marginRight: 0,		
	},
	option: {
		backgroundColor: '#fdfdfd',
		paddingHorizontal: 15,
		paddingVertical: 15,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#EDEDED',

	},
	teacherText: {
		backgroundColor: '#fdfdfd',
		fontSize: 15,
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 2,

	},
	optionText: {
		fontSize: 15,
		textAlign: 'center',
		paddingHorizontal: 10,
		paddingVertical: 13,
		marginRight: 100,
	},

	bigLettersText: {
		fontSize: 35,
		color: 'maroon',
		fontWeight: 'bold',
	},
	textLine: {
		flexDirection: 'row', 
		justifyContent:'space-between', 
	},
	stackedText: {
		flexDirection: 'column',
		justifyContent: 'space-between',
	}
});
