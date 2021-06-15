import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
    redirect: false,
  };
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(error, info) {
    console.error("ErrorBoundary caught an error", error, info);
  }
  componentDidUpdate() {
    if (this.state.hasError) {
      setTimeout(() => this.setState({ redirect: true }), 5000);
    }
  }
  render() {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          This listing has error <Link to="/">click</Link>
        </h2>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
