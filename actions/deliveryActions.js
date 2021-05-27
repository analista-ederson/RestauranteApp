export const ADD_ITEM = "ADD_ITEM";
export const REMOVE_ITEM = "REMOVE_ITEM";

//Adicionar itens à cesta de compras
export const AddItem = (item) => (
    {
        type : ADD_ITEM,
        data : item
    }
)

//Remover itens da cesta de compras
export const RemoveItem = (item) => (
    {
        type : REMOVE_ITEM,
        data : item
    }
)
