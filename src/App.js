import logo from './logo.svg'
import './App.css'
import * as React from 'react'
import './mocks'
import {useAuth} from './context/AuthContext'
import {AppProviders} from './context'
import LoadingFullScreen from './components/LoadingFullScreen'
const UnauthApp = React.lazy(() => import('./UnauthApp'))
const AuthApp = React.lazy(() =>
  import(/* webpackPrefetch: true */ './AuthApp'),
)

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

const AppConsumer = () => {
  const {authUser} = useAuth()
  return (
    <React.Suspense fallback={<LoadingFullScreen />}>
      {authUser ? <AuthApp /> : <UnauthApp />}
    </React.Suspense>
  )
}

export {App}
