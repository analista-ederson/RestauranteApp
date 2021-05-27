import React from 'react';
import { ScrollView, View } from 'react-native';
import DadosRestaurante from '../components/DadosRestaurante';
import CardapioRestaurante from '../components/CardapioRestaurante';

class Cardapio extends React.Component{

    render() {
        return(
            <ScrollView>
                <View>
                    <DadosRestaurante
                        navigation= {this.props.navigation} 
                    />
                </View>
                <View>
                    <CardapioRestaurante
                        navigation= {this.props.navigation} 
                    />
                </View>
            </ScrollView>
        )
    }
}

export default Cardapio;
