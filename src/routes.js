import React from 'react';
import {Route, Switch} from 'react-router-dom'
import AppComponent from "./app/components/Main/app.component";
import AddProductComponent from "./app/components/Product/add.product.component";

class Routes extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={AppComponent}/>
                {/*<Route exact path="/products" component={product}/>*/}
                <Route path="/products/:productId" component={AddProductComponent}/>
            </Switch>
        )
    }
}

export default Routes;
