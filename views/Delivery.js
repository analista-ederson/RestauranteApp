import React from 'react';
import { ScrollView, View } from 'react-native';
import DadosRestaurante from '../components/DadosRestaurante';
import CestaDeCompras from '../components/CestaDeCompras';

class Delivery extends React.Component {

    render() {
        return (
            <ScrollView>
                <View>
                    <DadosRestaurante
                        navigation={this.props.navigation}
                    />
                    <CestaDeCompras
                        navigation={this.props.navigation}
                    />
                </View>
            </ScrollView>
        )
    }
}

export default Delivery;
