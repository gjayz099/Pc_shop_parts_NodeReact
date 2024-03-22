import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/assets/style/style.css'
import { AuthProvider } from './components/context/AuthContext.jsx'
import { ThemeProvider } from '@material-tailwind/react'
import { store } from './components/redux/store.js'
import { Provider } from 'react-redux'



ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
          <AuthProvider>
            <ThemeProvider>
              <App/>
            </ThemeProvider>
          </AuthProvider>
        </Provider>
    </React.StrictMode>
)
