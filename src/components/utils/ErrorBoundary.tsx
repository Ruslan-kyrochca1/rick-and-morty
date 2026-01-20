import { type ReactNode, Component } from 'react';

type Props = {
  children: ReactNode;
  fallback?: ReactNode;
};

type State = {
  hasError: boolean;
};
class ErrorBoundary extends Component<Props, State> {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback ?? <h1>Что‑то пошло не так.</h1>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
