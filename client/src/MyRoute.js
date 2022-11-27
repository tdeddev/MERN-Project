import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import FormComponent from "./components/FormComponent"

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/create" exact component={FormComponent}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;