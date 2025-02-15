import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import HomeV1 from "./components/home-v1";

import Error from "./components/404";
import About from "./components/about";
import ComingSoon from "./components/coming-soon";
import Faq from "./components/faq";
import Location from "./components/location";
import Portfolio from "./components/portfolio";
import PortfolioDetails from "./components/portfolio-details";
import PortfolioV2 from "./components/portfolio-v2";
import Service from "./components/service";
import ServiceDetails from "./components/service-details";
import Team from "./components/team";
import TeamDetails from "./components/team-details";

import ProductDetails from "./components/product-details";
import Shop from "./components/shop";
import ShopGrid from "./components/shop-grid";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";

import Blog from "./components/blog";
import BlogGrid from "./components/blog-grid";
import BlogLeftSidebar from "./components/blog-left-sidebar";
import BlogRightSidebar from "./components/blog-right-sidebar";

import AddListing from "./components/add-listing";
import BlogDetails from "./components/blog-details";
import Cart from "./components/cart";
import Checkout from "./components/checkout";
import Contact from "./components/contact";
import History from "./components/history";
import Login from "./components/login";
import MyAccount from "./components/my-account";
import OrderTracking from "./components/order-tracking";
import Register from "./components/register";
import Wishlist from "./components/wishlist";

class Root extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={HomeV1} />
          <Route path="/about" component={About} />
          <Route path="/service" component={Service} />
          <Route path="/service-details" component={ServiceDetails} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/portfolio-v2" component={PortfolioV2} />
          <Route path="/portfolio-details" component={PortfolioDetails} />
          <Route path="/team" component={Team} />
          <Route path="/team-details" component={TeamDetails} />
          <Route path="/faq" component={Faq} />
          <Route path="/coming-soon" component={ComingSoon} />
          <Route path="/location" component={Location} />
          <Route path="/shop" component={Shop} />
          <Route path="/shop-grid" component={ShopGrid} />
          <Route path="/shop-left-sidebar" component={ShopLeftSidebar} />
          <Route path="/shop-right-sidebar" component={ShopRightSidebar} />
          <Route path="/product-details" component={ProductDetails} />

          {/* Blog Routes */}
          <Route path="/blog-grid" component={BlogGrid} />
          <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
          <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
          <Route path="/blog" component={Blog} />
          <Route path="/blog-details" component={BlogDetails} />

          <Route path="/contact" component={Contact} />
          <Route path="/cart" component={Cart} />
          <Route path="/checkout" component={Checkout} />
          <Route path="/my-account" component={MyAccount} />
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/add-listing" component={AddListing} />
          <Route path="/wishlist" component={Wishlist} />
          <Route path="/order-tracking" component={OrderTracking} />
          <Route path="/history" component={History} />

          {/* Catch-all Route for 404 Page */}
          <Route component={Error} />
        </Switch>
      </Router>
    );
  }
}

export default Root;

// React 17 and below: Use ReactDOM.render()
ReactDOM.render(<Root />, document.getElementById("luxury"));
