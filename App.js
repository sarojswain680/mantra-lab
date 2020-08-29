import React from 'react';
import ErrorBoundary from './src/Component/ErrorBoundary';
import SplashScreen from './src/Component/SplashScreen';
import { AppRouter } from './src/routes';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = { isLoading: true };
  }

  performTimeConsumingTask = async () => {
    return new Promise((resolve) =>
      setTimeout(() => {
        resolve('result');
      }, 2000),
    );
  };

  async componentDidMount() {
    const data = await this.performTimeConsumingTask();

    if (data !== null) {
      this.setState({ isLoading: false });
    }
  }

  render() {
    if (this.state.isLoading) {
      return <SplashScreen />;
    }

    return (
      <ErrorBoundary>
        <AppRouter />
      </ErrorBoundary>
    );
  }
}