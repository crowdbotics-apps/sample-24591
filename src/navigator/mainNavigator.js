import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings206949Navigator from '../features/Settings206949/navigator';
import UserProfile206942Navigator from '../features/UserProfile206942/navigator';
import Settings206941Navigator from '../features/Settings206941/navigator';
import Settings206939Navigator from '../features/Settings206939/navigator';
import SignIn2206937Navigator from '../features/SignIn2206937/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings206949: { screen: Settings206949Navigator },
UserProfile206942: { screen: UserProfile206942Navigator },
Settings206941: { screen: Settings206941Navigator },
Settings206939: { screen: Settings206939Navigator },
SignIn2206937: { screen: SignIn2206937Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
