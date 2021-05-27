import React from 'react';
import { Alert, View } from 'react-native';
import { Button, Card, TextInput } from 'react-native-paper';
import * as services from '../services/restauranteServices';

class FormularioCadastro extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            nome: '',
            email: '',
            telefone: '',
            senha: '',
            senhaConfirmacao: ''
        }
    }

    cadastrarCliente() {

        services.postCliente(this.state)
            .then(
                data => {
                    Alert.alert(data.message);
                    this.setState({
                        nome: '',
                        email: '',
                        telefone: '',
                        senha: '',
                        senhaConfirmacao: ''
                    });

                    this.props.navigation.navigate('cliente');
                }
            )
            .catch(
                e => {

                  var error = e.response;
                    
                    switch (error.status) {
                        case 400:
                            Alert.alert('Ocorreram erros de validação no preenchimento dos campos.');
                            break;

                        case 500:
                            Alert.alert(error.data.message);
                            break;
                    }
                }
            )

    }

    render() {

        var self = this.state;

        return (
            <View>
                <Card>
                    <Card.Title
                        title="Crie sua Conta de Cliente"
                        subtitle="Informe os dados para cadastro."
                    />
                    <Card.Content>

                        <TextInput
                            label="Nome do Cliente:"
                            keyboardType="default"
                            autoCompleteType="name"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                            onChangeText={(nome) => this.setState({ nome })}
                            value={this.state.nome}
                        />

                        <TextInput
                            label="Email de Acesso:"
                            keyboardType="email-address"
                            autoCompleteType="email"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                            onChangeText={(email) => this.setState({ email })}
                            value={this.state.email}
                        />

                        <TextInput
                            label="Telefone:"
                            keyboardType="phone-pad"
                            autoCompleteType="tel"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                            onChangeText={(telefone) => this.setState({ telefone })}
                            value={this.state.telefone}
                        />

                        <TextInput
                            label="Senha de Acesso:"
                            secureTextEntry={true}
                            keyboardType="visible-password"
                            autoCompleteType="password"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                            onChangeText={(senha) => this.setState({ senha })}
                            value={this.state.senha}
                        />

                        <TextInput
                            label="Confirme sua Senha:"
                            secureTextEntry={true}
                            keyboardType="visible-password"
                            autoCompleteType="password"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                            onChangeText={(senhaConfirmacao) => this.setState({ senhaConfirmacao })}
                            value={this.state.senhaConfirmacao}
                        />

                        <View>
                            <Button mode="contained"
                                onPress={() => this.cadastrarCliente()}>
                                Realizar Cadastro
                            </Button>
                        </View>

                        <View>
                            <Button mode="text"
                                onPress={() => this.props.navigation.navigate('cliente')}>
                                Acesse sua Conta
                            </Button>
                        </View>

                    </Card.Content>
                </Card>
            </View>
        )
    }

}

export default FormularioCadastro;


