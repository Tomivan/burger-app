import React from 'react';
import Aux from '../../containers/hoc/aux';
import classes from './layout.css'

const layout = ( props ) => (
    <Aux>
    <div>Toolbar, SideDrawer, Backdrop</div>
    <main className={classes.Content}>
        {props.children}
    </main>
    </Aux>
)

export default layout;