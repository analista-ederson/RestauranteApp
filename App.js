import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import Cardapio from './views/Cardapio';
import Cliente from './views/Cliente';
import Delivery from './views/Delivery';
import ClienteCadastro from './views/CadastroCliente';

//criando a stack navigation..
const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen name="cardapio" component={Cardapio}
            options={{
              headerShown : false //ocultar o cabeçalho da tela no aplicativo
            }}
          />

          <Stack.Screen name="delivery" component={Delivery}
            options={{
              headerShown : false
            }}
          />

          <Stack.Screen name="cliente" component={Cliente}
            options={{
              headerShown : false
            }}
          />

          <Stack.Screen name="cliente_cadastro" component={ClienteCadastro}
            options={{
              headerShown : false
            }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    )
  }

}

export default App;