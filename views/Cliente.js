import React from 'react';
import { ScrollView, View } from 'react-native';
import DadosRestaurante from '../components/DadosRestaurante';
import FormularioCliente from '../components/FormularioCliente';

class Cliente extends React.Component {

    render() {
        return (
            <ScrollView>
                <View>
                    <DadosRestaurante
                        navigation={this.props.navigation}
                    />
                    <FormularioCliente
                        navigation={this.props.navigation}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default Cliente;
