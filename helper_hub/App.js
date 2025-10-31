import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// Auth screens
import LoadingPage from './src/screens/auth/LoadingPage'
import Login from './src/screens/auth/Login'
import Signup from './src/screens/auth/Signup'
import ForgotPass from './src/screens/auth/ForgotPass'
import OTP from './src/screens/auth/OTP'
import ResetPass from './src/screens/auth/ResetPass'

// Category screens
import Categories from './src/screens/categories/Categories'
import Doctors from './src/screens/categories/Doctors'
import Dentist from './src/screens/categories/Dentist'
import HairDresser from './src/screens/categories/HairDresser'
import Plumber from './src/screens/categories/Plumber'

// Core screens
import AccountInfo from './src/screens/user/AccountInfo'
import UserAndHelper from './src/screens/auth/UserAndHelper'
import Helper_Login from './src/screens/auth/Helper_Login'
import Helper_Signup from './src/screens/auth/Helper_Signup'
import BookingDone from './src/components/appointment/BookingDone'

// Navigation
import BottomTab from './src/navigation/BottomTab'
import HelperBottomTab from './src/navigation/HelperBottomTab'

// Appointment
import Appointment from './src/components/appointment/Appointment'
import Calander from './src/components/appointment/Calander'
import Appointment_List from './src/components/appointment/Appointment_List'

// User
import PersonalDetail from './src/screens/user/PersonalDetail'
import Notifications from './src/screens/user/Notifications'

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerTitleAlign: 'center', headerBackVisible: false }} >
          <Stack.Screen name="Loading" component={LoadingPage} options={{ title: 'Welcome' }} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="BottomTab" component={BottomTab} options={{ headerShown: false }} />
          <Stack.Screen name="UserBottomTab" component={HelperBottomTab} options={{ headerShown: false }} />
          <Stack.Screen name="Categories" component={Categories} />
          <Stack.Screen name="Doctors" component={Doctors} />
          <Stack.Screen name="Dentist" component={Dentist} />
          <Stack.Screen name="HairDresser" component={HairDresser} />
          <Stack.Screen name="Plumber" component={Plumber} />
          <Stack.Screen name="Appointment" component={Appointment} />
          <Stack.Screen name="Date And Time" component={Calander} />
          <Stack.Screen name="ForgotPass" component={ForgotPass} />
          <Stack.Screen name="OTP" component={OTP} />
          <Stack.Screen name="ResetPass" component={ResetPass} />
          <Stack.Screen name="Signup" component={Signup} />
          <Stack.Screen name='BookingDone' component={BookingDone} />
          <Stack.Screen name='About' component={AccountInfo} />
          <Stack.Screen name='UserAndHelper' component={UserAndHelper} options={{ headerShown: false }} />
          <Stack.Screen name='Helper_Login' component={Helper_Login} options={{ headerShown: false }} />
          <Stack.Screen name='Helper_Signup' component={Helper_Signup} options={{ headerShown: false }} />
          <Stack.Screen name='Appointment_list' component={Appointment_List} options={{ headerShown: false }} />
          <Stack.Screen name='PersonalDetail' component={PersonalDetail} options={{ headerShown: false }} />
          <Stack.Screen name='Notifications' component={Notifications} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  )
}