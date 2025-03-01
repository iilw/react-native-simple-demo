import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeScreen from './screens/home-screen';
import OtherScreen from './screens/other-screen';
import {TabBar, TabBarIcon} from './components/tab-bar';

const Navigator = createBottomTabNavigator();

const icons = {
  home: require('../assets/images/20.底部图标1.png'),
  other: require('../assets/images/21.底部图标2.png'),
  other2: require('../assets/images/22.底部图标3.png'),
  other3: require('../assets/images/23.底部图标4.png'),
};

export function BottomNavigator() {
  return (
    <Navigator.Navigator
      initialRouteName="Home"
      tabBar={props => <TabBar {...props} />}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Navigator.Screen
        name="Home"
        options={{
          tabBarLabel: '首页',
          tabBarIcon: props => <TabBarIcon source={icons.home} {...props} />,
        }}
        component={HomeScreen}
      />
      <Navigator.Screen
        options={{
          tabBarLabel: '其他',
          tabBarIcon: props => <TabBarIcon source={icons.other} {...props} />,
        }}
        name="Other"
        component={OtherScreen}
      />
      <Navigator.Screen
        options={{
          tabBarLabel: '其他2',
          tabBarIcon: props => <TabBarIcon source={icons.other2} {...props} />,
        }}
        name="Other2"
        component={OtherScreen}
      />
      <Navigator.Screen
        options={{
          tabBarLabel: '其他3',
          tabBarIcon: props => <TabBarIcon source={icons.other3} {...props} />,
        }}
        name="Other3"
        component={OtherScreen}
      />
    </Navigator.Navigator>
  );
}
