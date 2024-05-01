import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import VegItems from './components/VegItems.jsx'
import NonVegItems from './components/NonVegItems.jsx'
import './index.css'
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Body from './components/Body.jsx'
import Form from './components/Form.jsx'
import {Provider} from "react-redux"
import store from './store/MainStore.js'

const router = createBrowserRouter([
  {path:"/", element: <App />,
children:[{path:"/veg-items", element: <VegItems />},
{path:"/non-veg-items", element: <NonVegItems />},
{path:"/form", element: <Form />},
{path: "/", element: <Body />}]},
  

])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
    <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
