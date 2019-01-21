import React, {Component} from 'react';
import './app.style.scss';
import { NavLink } from 'react-router-dom'
import {ListProducts, AddProduct} from '../Product/product.container'

class AppComponent extends Component {

    componentDidMount() {

    }

    render() {
        return (
            <div className="AppComponent">
                <div className="container">
                    <h2>AppComponent</h2>
                    <div className={"row"}>
                        <div className="col-sm-6">
                            This is the main screen.
                        </div>
                        <div>
                            <AddProduct/>
                            <ListProducts/>
                        </div>
                        <div className="col-sm-6">
                            <NavLink to={"/products"} activeStyle={{
                                color: 'green'
                            }}>
                                Go to Products Screen
                            </NavLink>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default AppComponent;
