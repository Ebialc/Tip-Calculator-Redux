import { connect } from "react-redux";
import MenuItem from '../components/MenuItem';
import { removeItem, 
    updatePrice,
updateQuantity 
} from '../store/items/actions';
import { selectItemTotal } from "../store/items/selectors";

const mapDispatchToProps = (state) => ({
    total: selectItemTotal(state, props)
})


const mapDispatchToProps = (dispatch) => {
    return {
        remove: (uuid) => dispatch(removeItem(ownProps.uuid)),
        updatePrice: (price) => dispatch(updatePrice(ownProps,uuid,price)),
        updateQuantity: (quantity) => dispatch(updatePrice(ownProps,uuid,price)),
        updatePrice: (price) => dispatch(updatePrice(ownProps,uuid,price))
    }
}

export const MenuItemContainer = connect(
    mapStateToProps, 
    mapDispatchToProps
    )(MenuItem);