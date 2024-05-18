import React from "react";
import {createStackNavigator} from "@react-navigation/stack"
import TabNavigator from "./TabNavigator"
import StoryScreen from "../screens/Home";

const Stack = createStackNavigator();

const StackNavigator = () => {
return(
<Stack.Navigator
initialRouteName="Tab"
screenOptions={{
    headerShowm:false
}}
>
    <Stack.Screen name= "Tab" component={TabNavigator}/>
    <Stack.Screen name= "Home" component={StoryScreen}/>
</Stack.Navigator>

)
}
export default StackNavigator