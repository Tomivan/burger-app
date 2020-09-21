import React, { Component } from 'react';
import Aux from '../hoc/aux'
import Burger  from '../../components/Burger/burger';

class BurgerBuilder extends Component {
    render() {
        return(
           <Aux>
                <Burger />
                <div>Burger Controls</div>
           </Aux>
        );
    }
}

export default BurgerBuilder;