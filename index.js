import * as React from 'react';
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

//configurando o REACT-REDUX
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import deliveryReducer from './reducers/deliveryReducer';

const rootReducer = combineReducers({
    delivery : deliveryReducer //registrando o reducer
});

const store = createStore(rootReducer);

//configurando o padrão de cores primario e secundario
//do template do react-native-paper
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: '#bf360c',
        secondary: '#ff5722'
    }
}

export default function Main() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <App />
            </PaperProvider>
        </Provider>
    );
}

AppRegistry.registerComponent(appName, () => Main);
