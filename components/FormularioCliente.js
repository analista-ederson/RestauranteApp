import React from 'react';
import { View } from 'react-native';
import { Button, Title, Paragraph, Card, TextInput } from 'react-native-paper';

class FormularioCliente extends React.Component {

    render() {

        var self = this.state;

        return (
            <View>
                <Card>
                    <Card.Title
                        title="Acesso do Cliente"
                        subtitle="Informe os dados da sua conta"
                    />
                    <Card.Content>

                        <TextInput
                            label="Email de Acesso:"
                            keyboardType="email-address"
                            autoCompleteType="email"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                        />

                        <TextInput
                            label="Senha de Acesso:"
                            secureTextEntry={true}
                            keyboardType="visible-password"
                            autoCompleteType="password"
                            mode="outlined"
                            style={{ marginBottom: 20 }}
                        />

                        <View>
                            <Button mode="contained">
                                Acessar Conta
                            </Button>
                        </View>

                        <View>
                            <Button mode="text"
                                onPress={() => this.props.navigation.navigate('cliente_cadastro') }
                            >
                                Crie sua Conta
                            </Button>
                        </View>

                    </Card.Content>
                </Card>
            </View>
        )
    }

}

export default FormularioCliente;