import React, {Component} from 'react';

class Products extends Component {
    state = {
        numbers: ['Shirt', 'Pant', 'Shoes']
    };

    render() {

        return (
            <div>
                {this.state.numbers.map(value => <div className="text-red-900 text-2xl px-6 py-6">{value}</div>)}
            </div>
        );
    }
}

export default Products;