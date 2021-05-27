import React from 'react';
import { View } from 'react-native';
import { Button, Title, Paragraph, Card, DataTable } from 'react-native-paper';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { AddItem, RemoveItem } from '../actions/deliveryActions';

class CestaDeCompras extends React.Component {

    render() {

        var self = this.props;

        return (
            <View>
                <Card>
                    <Card.Title
                        title="Cesta de Compras"
                        subtitle="Produtos selecionados no delivery"
                    />
                    <Card.Content>
                        <DataTable>

                            <DataTable.Header>
                                <DataTable.Title>Item</DataTable.Title>
                                <DataTable.Title>Preço</DataTable.Title>
                                <DataTable.Title>Qtd</DataTable.Title>
                                <DataTable.Title></DataTable.Title>
                                <DataTable.Title></DataTable.Title>
                            </DataTable.Header>

                            {
                                self.items.map(
                                    function (item, i) {
                                        return (
                                            <View key={i}>
                                                <DataTable.Row>
                                                    <DataTable.Cell>{item.nome}</DataTable.Cell>
                                                    <DataTable.Cell>{item.preco}</DataTable.Cell>
                                                    <DataTable.Cell>{item.quantidade}</DataTable.Cell>
                                                    <DataTable.Cell>
                                                        <Button icon="plus" mode="text"
                                                            onPress={
                                                                () => self.AddItem(item)
                                                            }
                                                        />
                                                    </DataTable.Cell>
                                                    <DataTable.Cell>
                                                        <Button icon="minus" mode="text"
                                                            onPress={
                                                                () => self.RemoveItem(item)
                                                            }
                                                        />
                                                    </DataTable.Cell>
                                                </DataTable.Row>
                                            </View>
                                        )
                                    }
                                )
                            }

                        </DataTable>

                        <View style={{ alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                            <Title>Valor Total: R$ {self.total}</Title>
                            <Paragraph>Quantidade de itens: {self.quantidade}</Paragraph>
                        </View>


                        <Button mode="contained">
                            Finalizar Pedido
                        </Button>

                    </Card.Content>
                </Card>
            </View>
        )
    }

}

//função para 'ler' os valores do state (store)
const mapStateToProps = (state) => {
    return {
        items: state.delivery.deliveryItems,
        total: state.delivery.valorTotal,
        quantidade: state.delivery.quantidadeItens
    }
}

//função para disparar ações esperadas pelos reducers
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        AddItem, RemoveItem
    }, dispatch)
)

//conectando o componente ao REDUX..
export default connect(mapStateToProps, mapDispatchToProps)(CestaDeCompras);