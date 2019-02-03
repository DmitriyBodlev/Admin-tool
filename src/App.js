import React, { Component } from "react";
import { connect } from "react-redux";
import { Route, Switch, withRouter } from "react-router-dom";
// components
import LoaderComponent from './components/loader';
import CommonModal from './components/modal';
// features
import ImagesComponent from './features/images';
///////////////////////////////////////////////////////////////////////////////////////////////////

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route path="/" component={ImagesComponent} />
        </Switch>
        {
          this.props.modalData.isOpened &&
          <CommonModal params={{ ...this.props.modalData, modal: this.props.modalData.modal }} />
        }
        {this.props.loader.isOpened && <LoaderComponent />}
        <style>{`
          body {
            margin: 0;
            overflow-x: hidden;
          }
          * {
            box-sizing: border-box;
            outline: none;
          }
        `}</style>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  state: state.loader,
  modalData: state.modal,
  loader: state.loader,
});

export default withRouter(connect(mapStateToProps)(App));
