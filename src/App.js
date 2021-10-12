import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import VendorPrivateRoute from "./shared/HOC/VendorPrivateRoute";
import AdminPrivateRoute from "./shared/HOC/AdminPrivateRoute";
import CustomerPrivateRoute from "./shared/HOC/CustomerPrivateRoute";
import Login from "./shared/containers/Login";
import Register from "./shared/containers/Register";

import Product from "./customer/containers/Products";
import Cart from "./customer/containers/Cart";

//vendor imports
import VendorProduct from './vendor/containers/Product';

//admin imports
import Vendors from './admin/containers/Vendors';
import Users from './admin/containers/Users';
import Orders from './admin/containers/Orders';

import './App.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route path="/" component={Product} exact />
        <Route path="/login" component={Login} exact />
        <Route path="/register" component={Register} exact />
        <CustomerPrivateRoute path="/cart" component={Cart} exact />

        {/* Admin Routes */}
        <AdminPrivateRoute path="/admin" component={Vendors} exact />
        <AdminPrivateRoute path="/admin/users" component={Users} exact />
        <AdminPrivateRoute path="/admin/orders" component={Orders} exact />

        {/* Vendor Routes */}
        <VendorPrivateRoute path="/vendor" component={VendorProduct} exact />
      </Switch>
    </Router>

  );
}

export default App;
