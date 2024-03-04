import React, { Component, ErrorInfo, ReactNode } from 'react';
import { datadogRum } from '@datadog/browser-rum';

interface Props {
  children?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    const renderingError = new Error(error.message);
    renderingError.name = `ReactRenderingError`;
    renderingError.stack = errorInfo.componentStack;
    renderingError.cause = error;

    datadogRum.addError(renderingError);

    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    // Check if the error is thrown
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return (
        <div>
          <h2>Oops, there is an error!</h2>
          <button
            type='button'
            onClick={() => this.setState({ hasError: false })}
          >
            Try again?
          </button>
        </div>
      );
    }
    // Return children components in case of no error
    return this.props.children;
  }
}

export default ErrorBoundary;
