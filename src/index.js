import React from 'react'
import ReactDom from 'react-dom'
import Index from './router/Index'
import { Provider } from "mobx-react"
import store from "./router/store"
import './app.less'

class App extends React.Component {
    render(){
        return (
            <div>
                <Provider {...store}>
                    <Index />
                </Provider>
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"));