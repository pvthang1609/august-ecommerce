import React from 'react';
import { NotFound } from 'assets/import';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import CartPage from './page/cart';


export default function Payment() {
    const match = useRouteMatch()
    return(
        <main className="grid wide">
            <Switch>
                <Route path={`${match.url}/cart`} component={CartPage} />
                <Route component={NotFound} />
            </Switch>
        </main>
    )
}