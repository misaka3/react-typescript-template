import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import ProductPage from "./components/pages/ProductPage";
import HomePage from "./components/pages/HomePage";
import BasicTextFieldsPage from "./components/pages/BasicTextFieldsPage";
import FormPropsTextFieldsPage from "./components/pages/FormPropsTextFieldsPage";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path="/products" component={ProductPage} exact />
        <Route path="/basic_text_fields" component={BasicTextFieldsPage} exact />
        <Route path="/form_props_text_fields" component={FormPropsTextFieldsPage} exact />
        <Route path="/" component={HomePage} exact />
      </Switch>
    </Router>
  );
};

export default App;