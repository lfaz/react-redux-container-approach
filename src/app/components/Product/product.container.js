import React from 'react';
import './product.style.scss';
import {connect} from "react-redux";
import {fetchProductsBegin, fetchProductsFailure, fetchProductsSuccess} from "../../redux/actions/productAction";
import productsApi from "./product.api";
import {createSelector} from 'reselect';
import ListProductComponent from "./list.product.component";
import AddProductComponent from "./add.product.component";
import {PRODUCT_CALLBACK_ENUMS} from "./callbacks";

function withSubscription(DumpComponent) {
    return class Container extends React.Component {

        constructor(props) {
            super(props);
            this.fetchAll = this.fetchAll.bind(this);
        }

        callbackHandler = (type, data) => {
            switch (type) {
                case PRODUCT_CALLBACK_ENUMS.FETCH_PRODUCTS:
                    this.fetchAll(data);
                    break;

                case PRODUCT_CALLBACK_ENUMS.SELECT_PRODUCT:
                    // this.onProductSelect(data);
                    break;

                default:
                    return false;
            }
        };

        fetchAll = (page) => {
            this.props.dispatch(fetchProductsBegin());
            productsApi.getAll(page)
                .then(response => {
                    if (response.data) {
                        this.props.dispatch(fetchProductsSuccess(response.data._embedded.companies));
                    } else {
                        this.props.dispatch(fetchProductsFailure({message: "Fetching products failed"}));
                    }
                });
        };

        render() {
            return <DumpComponent {...this.props}  callbackHandler={this.callbackHandler}/>;
        }
    }
}

const productSelector = createSelector(
    state => state.products,
    items => items,
    loading => loading,
    error => error,
);

const mapStateToProps = createSelector(
    productSelector,
    (products) => ({
        products,
    })
);

const ListProductContainer = withSubscription(
    ListProductComponent
);

const AddProductContainer = withSubscription(
    AddProductComponent
);

export const ListProducts = connect(mapStateToProps)(ListProductContainer);
export const AddProduct = connect(mapStateToProps)(AddProductContainer);
