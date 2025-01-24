
import './App.css';
import RootLayout from './components/RootLayout';
import { Provider } from "react-redux";
import appStore from './utils/appStore';

function App() {
  return (
    <Provider store={appStore}>
    <RootLayout />
    </Provider>
  );
}

export default App;
