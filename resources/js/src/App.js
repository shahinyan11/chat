import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'


class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path='/' component={Home}/>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}

export default App
