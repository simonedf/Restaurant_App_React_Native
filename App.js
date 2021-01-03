import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SearchScreen from './src/screens/SearchScreen';
import ResultsShowScreen from './src/screens/ResultsShowScreen';


const navigator = createStackNavigator(
  {
    Search: SearchScreen,
    ResultsShow: ResultsShowScreen
  },
  {
    initialRouteName: 'Search',  //Page to be display on the home page
    defaultNavigationOptions: {
      title: 'Business Search', 
    },
  }
);

export default createAppContainer(navigator); //App Container is required to display the page
