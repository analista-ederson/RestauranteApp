import React from 'react';
import { ScrollView, View } from 'react-native';
import DadosRestaurante from '../components/DadosRestaurante';
import FormularioCadastro from '../components/FormularioCadastro';

class ClienteCadastro extends React.Component {

    render() {
        return (
            <ScrollView>
                <View>
                    <DadosRestaurante
                        navigation={this.props.navigation}
                    />
                    <FormularioCadastro
                        navigation={this.props.navigation}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default ClienteCadastro;
