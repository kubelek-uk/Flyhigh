import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabsParamList } from './routes';
import { Home, Tickets } from '../screens';
import Tabbar from '../components/Tabbar';

const Tab = createBottomTabNavigator<TabsParamList>();

const TabsNavigator = () => {
  return (
    <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}
        initialRouteName='Home'
        tabBar={(props) => <Tabbar {...props} />}
    >
        <Tab.Screen name="Home" component={Home}/>
        <Tab.Screen name="Tickets" component={Tickets}/>
    </Tab.Navigator>
  )
}

export default TabsNavigator;