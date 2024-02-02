import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResult from '../layout/SearchResult';
import Movies from '../layout/Movies';
import TVShows from '../layout/TVShows';

const Tab = createMaterialTopTabNavigator();

const Navigation = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Movies" component={Movies} />
      <Tab.Screen name="Search Result" component={SearchResult} />
      <Tab.Screen name="TV Shows" component={TVShows} />
    </Tab.Navigator>
  );
}

export default Navigation
