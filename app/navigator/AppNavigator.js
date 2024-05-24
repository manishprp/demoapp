import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {strings} from '../config';
import LoginScreen from '../screen/LoginScreen';
import RegisterScreen from '../screen/RegisterScreen';
import DashBoard from '../screen/DashBoard';
import DrawerNavigator from './DrawerNavigator';

const Stack = createNativeStackNavigator();

function AppNavigator(props) {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name={strings.LOGIN} component={LoginScreen} />
      <Stack.Screen name={strings.REGISTER} component={RegisterScreen} />
      <Stack.Screen name={strings.DASHBOARD} component={DrawerNavigator} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
