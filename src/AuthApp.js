import * as React from 'react'
import {NetflixApp} from 'components/NetflixApp'
import {ErrorBoundary} from 'react-error-boundary'
import ErrorFallback from './components/ErrorFallback'
import Error404 from 'components/Error404'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {NetflixById} from 'components/NetflixById'
import {NetflixMovies} from 'components/NetflixMovies'
import {NetflixSeries} from 'components/NetflixSeries'
import {NetflixNews} from 'components/NetflixNews'
import {NetflixBookmark} from 'components/NetflixBookmark'
import {NetflixSearch} from 'components/NetflixSearch'
import {useAuth} from './context/AuthContext'

function AuthApp() {
  const {logout} = useAuth()
  return (
    <Router>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path="/" element={<NetflixApp logout={logout} />} />
          <Route path="/tv/:tvId" element={<NetflixById logout={logout} />} />
          <Route
            path="/movie/:movieId"
            element={<NetflixById logout={logout} />}
          />
          <Route path="/movies" element={<NetflixMovies logout={logout} />} />
          <Route path="/series" element={<NetflixSeries logout={logout} />} />
          <Route path="/news" element={<NetflixNews logout={logout} />} />
          <Route path="/list" element={<NetflixBookmark logout={logout} />} />
          <Route path="*" element={<Error404 />} />
          <Route
            path="/search/:query"
            element={<NetflixSearch logout={logout} />}
          />
        </Routes>
      </ErrorBoundary>
    </Router>
  )
}

//export {AuthApp}
export default AuthApp
//React.lazy requiert un export default
