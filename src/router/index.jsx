import React from 'react'
import {Route, Redirect, HashRouter} from 'react-router-dom'
import Home from '../view/home'
import ErrorPage from "../view/error";
import Search from "../view/search";
import AnimatedRouter from 'react-animated-router';
import 'react-animated-router/animate.css';
import Detail from "../view/detail";
import Asia from "../view/asia";
import Cartoon from "../view/cartoon";
import Occident from '../view/occident'
import Shentudian from "../view/shentudian";
import Domestic from "../view/domestic";
import Test from "../view/test";

const Routers = () => {

    return (
        <HashRouter>
            {/*动画替换 switch */}
            <AnimatedRouter
                timeout={300}
                appear={true}
            >
                <Route path="/" exact={true} component={Home}/>
                <Route path="/error" exact={true} component={ErrorPage}/>
                <Route path="/search" exact={true} component={Search}/>
                <Route path="/detail/:id" exact={true} component={Detail}/>

                <Route path="/asia" exact={true} component={Asia}/>
                <Route path="/cartoon" exact={true} component={Cartoon}/>
                <Route path="/domestic" exact={true} component={Domestic}/>
                <Route path="/occident" exact={true} component={Occident}/>
                <Route path="/shentudian" exact={true} component={Shentudian}/>
                <Route path="/test" exact={true} component={Test}/>
                <Redirect to='/error'/>
            </AnimatedRouter>
        </HashRouter>
    )
}

export default Routers