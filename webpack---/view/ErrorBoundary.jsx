import { h, Component } from "preact"

import { errorService } from "infrastructure/services/ErrorService"

export class ErrorBoundary extends Component {
  constructor() {
    super()
    this.state = { error: null }
  }

  static getDerivedStateFromError(error) {
    return { error: error.message }
  }

  componentDidCatch(error) {
    errorService.send(error)
    this.setState({ error: error.message })
  }

  render() {
    const { children } = this.props
    const { error } = this.state

    if (error) {
      return <p>Oh no! We ran into an error: {error}</p>
    }

    return children
  }
}
