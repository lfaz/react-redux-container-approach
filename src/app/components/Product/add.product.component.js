import React from 'react';
import './product.style.scss';

class AddProductComponent extends React.Component {

    componentDidMount() {

    }

    render() {
        const {items, loading, error} = this.props.products;
        return (
            <div className="AddProductComponent">
                <h2>AddProductComponent</h2>
                {
                    items.map((item, index) =>
                        <li key={index}>{item.name}</li>
                    )
                }
            </div>
        );
    }
}

export default AddProductComponent