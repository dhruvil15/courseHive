import { FC } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { PersistGate } from 'redux-persist/integration/react'
import { Provider } from 'react-redux'
import { Global, ROUTES, theme } from './utils'
import { persistor, store } from './redux'

import { CoursePageView } from './views'

const App: FC = () => {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Global/>
          <Router>
            <Switch>
              <Route path={ROUTES.App.home} component={CoursePageView} exact/>
            </Switch>
          </Router>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  )
}

export default App
