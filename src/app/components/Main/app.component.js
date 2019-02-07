import React, {Component} from 'react';
import './app.style.scss';
import { NavLink } from 'react-router-dom'
import {ListProducts, AddProduct} from '../Product/product.container'
import FormValidator from "../../utils/validation";

class AppComponent extends Component {

    constructor(props){
        super(props);

        this.validator = new FormValidator([
            {
                field: 'email',
                method: 'isEmpty',
                validWhen: false,
                message: 'Email is required.'
            },
            {
                field: 'email',
                method: 'isEmail',
                validWhen: true,
                message: 'That is not a valid email.'
            },
            {
                field: 'age',
                method: 'isInt',
                args: [{min: 21, max: 65}],  // an array of additional arguments
                validWhen: true,
                message: 'Your age must be an integer between 21 and 65'
            },
            {
                field: 'roomComment',
                method: 'isEmpty',
                validWhen: false,
                message: 'Comment cannot be empty.',
            }
        ]);

        this.state = {
            age: 22,
            email: '',
            roomComment: '',
            validation: this.validator.valid(),
        };

        this.taskDetailsFormSubmitted = false;
    }

    componentDidMount() {

    }

    handleInputChange = event => {
        event.preventDefault();

        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleSubmitForm = event => {
        event.preventDefault();

        const validation = this.validator.validate(this.state);
        this.setState({validation});
        this.taskDetailsFormSubmitted = true;

        if (validation.isValid) {
            console.log("form valid")
        } else {
            console.log("form !valid")
        }
    };

    render() {
        let validation = this.taskDetailsFormSubmitted ?           // if the form has been taskDetailsFormSubmitted at least once
            this.validator.validate(this.state) :   // then check validity every time we render
            this.state.validation;                  // otherwise just use what's in state

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
                        <div>
                            <form className="demoForm">
                                <div className={validation.email.isInvalid && 'has-error'}>
                                    {/*<label htmlFor="email">Email address</label>*/}
                                    <input type="email" className="form-control"
                                           name="email"
                                           placeholder="john@doe.com"
                                           onChange={this.handleInputChange}
                                    />
                                    {
                                        this.taskDetailsFormSubmitted === true ?
                                            validation.email.isInvalid === true ?
                                                <span className="help-block">{validation.email.message}</span>
                                                :
                                                ''
                                            :
                                            ''
                                    }

                                    <input type="text" className="form-control"
                                           name="roomComment"
                                           placeholder="comment"
                                           onChange={this.handleInputChange}
                                    />
                                    {
                                        this.taskDetailsFormSubmitted === true ?
                                            validation.roomComment.isInvalid === true ?
                                                <span className="help-block">{validation.roomComment.message}</span>
                                                :
                                                ''
                                            :
                                            ''
                                    }
                                </div>

                                <button onClick={this.handleSubmitForm} className="btn btn-primary">
                                    Sign up
                                </button>
                            </form>
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
