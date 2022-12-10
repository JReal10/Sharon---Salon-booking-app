import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from "../Colors/colors";

const Stack = createNativeStackNavigator();

function AuthStack({navigation})
{
  return (
      <Stack.Navigator>
      <Stack.Screen name = "Login" component={Login} options = 
      {{
        headerShown:false,
      }}/>
      <Stack.Screen name = "Signup" component={Signup} options = 
      {{
        headerShown:false,
      }}/>
    </Stack.Navigator>
    );
}
export default AuthStack;