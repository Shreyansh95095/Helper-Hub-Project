import { Tabs } from 'expo-router';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="homepage"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Icon name="qr-code-scanner" color={color} size={size} />
          ),
        }}
      />
    </Tabs>
  );
}