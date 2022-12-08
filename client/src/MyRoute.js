import { BrowserRouter, Switch, Route } from "react-router-dom"
import App from "./App"
import EditComponent from "./components/EditComponent"
import FormComponent from "./components/FormComponent"
import LoginComponent from "./components/LoginComponent"
import SingleComponent from "./components/SingleComponent"

const MyRoute = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={App}/>
                <Route path="/create" exact component={FormComponent}/>
                <Route path="/blog/:slug" exact component={SingleComponent}/>
                <Route path="/blog/edit/:slug" exact component={EditComponent}/>
                <Route path="/login" exact component={LoginComponent}/>
            </Switch>
        </BrowserRouter>
    )
}

export default MyRoute;