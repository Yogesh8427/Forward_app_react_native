
import Routes from './src/Navigations/Routes';
import colors from './src/styles/colors';
import { Provider } from 'react-redux';
import store from './src/redux/store';
import { StatusBar } from 'react-native';
import LocationScreen from './src/Screens/AuthScreens/LocationScreen';

export default function App() {
  return (
    < Provider store={store}>
    {/* <StatusBar /> */}
      <Routes/>
      {/* <LocationScreen/> */}
      </Provider>
  );
}



