import React from 'react'
import ReactDom from 'react-dom'
import Index from './router/Index'
import './app.less'

class App extends React.Component {
    render(){
        return (
            <div>
                <Index />
            </div>
        )
    }
}
ReactDom.render(<App/>,document.getElementById("app"))