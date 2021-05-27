import { Alert } from 'react-native';
import * as actions from '../actions/deliveryActions';

//definindo os dados que serão gravados no state
const initialState = {
    deliveryItems : [],
    valorTotal : 0,
    quantidadeItens: 0
};

//declarando o REDUCER..
const deliveryReducer = (
    state = initialState,
    action
) => {

    switch(action.type){

        case actions.ADD_ITEM:
            
            var itemJaAdicionado = false;

            //verificando se o item enviado na ACTION ja existe no carrinho
            //se ja existir, apenas incrementamos a quantidade do item..
            for(var i = 0; i < state.deliveryItems.length; i++){
                var item = state.deliveryItems[i];
                if(item.id == action.data.id){
                    ++item.quantidade;
                    itemJaAdicionado = true;
                    break;
                }
            }

            //adicionando o item pela 1º vez no carrinho
            if(!itemJaAdicionado){
                var item = action.data;
                item.quantidade = 1;
                state.deliveryItems.push(item);
            }

            return {
                ...state,
                valorTotal : new Number(state.valorTotal) + new Number(action.data.precoDecimal),
                quantidadeItens : state.quantidadeItens + 1
            }

        case actions.REMOVE_ITEM:

            for(var i = 0; i < state.deliveryItems.length; i++){
                var item = state.deliveryItems[i];
                if(item.id == action.data.id){
                    --item.quantidade;
                    break;
                }
            }

            const items = state.deliveryItems.filter((i) => i.quantidade > 0);

            return {
                ...state,
                deliveryItems : items,
                valorTotal : new Number(state.valorTotal) - new Number(action.data.precoDecimal),
                quantidadeItens : state.quantidadeItens - 1
            }

        default:
            return state;
    }
}

export default deliveryReducer;