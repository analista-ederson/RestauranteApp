import React from 'react';
import { View } from 'react-native';
import * as services from '../services/restauranteServices';
import { Appbar, Menu } from 'react-native-paper';

class DadosRestaurante extends React.Component {

    constructor(props) {
        super(props);
        this.state = { nome: '' }
    }

    componentDidMount() {
        services.getRestaurante()
            .then(
                data => {
                    this.setState({ ...data });
                }
            )
            .catch(
                e => {
                    console.log(e.response);
                }
            )
    }

    render() {

        var self = this.state;

        return (
            <View>
                <Appbar.Header>
                    <Appbar.Content
                        title={self.nome}
                        subtitle="Seja bem vindo ao nosso aplicativo"
                    />
                    <Appbar.Action
                        style={{ marginRight: -8 }}
                        icon="home"
                        onPress={() => this.props.navigation.navigate('cardapio') }
                    />
                    <Appbar.Action
                        style={{ marginRight: -8 }}
                        icon="account-circle"
                        onPress={() => this.props.navigation.navigate('cliente')}
                    />
                    <Appbar.Action
                        icon="cart-outline"
                        onPress={() => this.props.navigation.navigate('delivery')}
                    />
                </Appbar.Header>

            </View>
        )
    }

}

export default DadosRestaurante;