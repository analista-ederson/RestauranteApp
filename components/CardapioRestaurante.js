import React from 'react';
import { View, Alert } from 'react-native';
import * as services from '../services/restauranteServices';
import { Button, Card, Paragraph } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddItem } from '../actions/deliveryActions';

class CardapioRestaurante extends React.Component {

    constructor(props) {
        super(props);
        this.state = { cardapio: [] }
    }

    componentDidMount() {
        services.getCardapio()
            .then(
                data => {
                    this.setState({ cardapio: data });
                }
            )
            .catch(
                e => {
                    console.log(e.response);
                }
            )
    }

    handleItem(item) {
        this.props.AddItem(item);
        Alert.alert(item.nome + ", adicionado com sucesso.");
    }

    render() {

        var self = this;

        return (
            <View>
                {
                    self.state.cardapio.map(
                        function (item, i) {
                            return (
                                <View key={i}>
                                    <Card>
                                        <Card.Title
                                            title={item.nome}
                                            subtitle={item.preco}
                                        />
                                        <Card.Content>
                                            <Paragraph>{item.descricao}</Paragraph>
                                        </Card.Content>
                                        <Card.Cover
                                            source={{
                                                uri: services.getApiUrl() + item.foto
                                            }}
                                        />
                                        <Card.Actions>
                                            <Button onPress={
                                                () => self.handleItem(item)
                                            }>
                                                Adicionar ao Pedido
                                            </Button>
                                        </Card.Actions>
                                    </Card>
                                </View>
                            )
                        }
                    )
                }
            </View>
        )
    }
}

//função para 'ler' os valores do state (store)
const mapStateToProps = (state) => {
    return {
        //TODO
    }
}

//função para disparar ações esperadas pelos reducers
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        AddItem
    }, dispatch)
)

//conectando o componente ao REDUX..
export default connect(mapStateToProps, mapDispatchToProps)(CardapioRestaurante);