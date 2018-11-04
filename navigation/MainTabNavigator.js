import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs';

import TabBarIcon from '../components/TabBarIcon';
import ScheduleScreen from '../screens/ScheduleScreen';
import ClassesScreen from '../screens/ClassesScreen';
import LunchScreen from '../screens/LunchScreen';
import SettingsScreen from '../screens/SettingsScreen';

const ClassesStack = createStackNavigator({
	Classes: ClassesScreen,
});
ClassesStack.navigationOptions = {
	tabBarLabel: 'Classes',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-information-circle${focused ? '' : '-outline'}` : 'md-book'}
		/>
	),
};

//Lunch Tab
const LunchStack = createStackNavigator({
	Lunch: LunchScreen,
});
LunchStack.navigationOptions = {
	tabBarLabel: 'Lunch',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-link${focused ? '' : '-outline'}` : 'md-pizza'}
		/>
	),
};

//Schedule Tab
const Schedule = createStackNavigator({
	Schedule: ScheduleScreen,
});
Schedule.navigationOptions = {
	tabBarLabel: 'Schedule',
	tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={'md-list'} />,
};

//Settings tab
const SettingsStack = createStackNavigator({
	Settings: SettingsScreen,
});
SettingsStack.navigationOptions = {
	tabBarLabel: 'Settings',
	tabBarIcon: ({ focused }) => (
		<TabBarIcon
			focused={focused}
			name={Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options'}
		/>
	),
};

export default createMaterialBottomTabNavigator(
	{
		Schedule,
		ClassesStack,
		LunchStack,
		SettingsStack,
	},
	{
		initialRouteName: 'ClassesStack',
		activeColor: '#f0edf6',
		inactiveColor: '#3e2465',
		barStyle: { backgroundColor: '#500000' },
	}
);
