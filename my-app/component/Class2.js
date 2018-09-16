import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch
} from "react-router-dom";

const Home = ()=><h1>home</h1>;
const About = () =><h1>about</h1>;
const Topics=({match}) =>{
    console.log(match);
    let thisUrl = match.url;
    return(
        <div>
            <link to ={thisUrl+"/test1"}>Test1</link>
            <link to ={thisUrl+"/test2"}>Test2</link>
            <link to ={thisUrl+"/test3"}>Test3</link>
            <Route path={thisUrl+"/:id"} component={Topic}/>
            <Route exact path={thisUrl+"/"} render={()=><h3>请选择</h3>}/>
        </div>
    )
};

const Topic= ({match}) =>{
    return (
        <div>
            <h3>{match.params.id}</h3>
        </div>
    )
}
class Class2 extends Component{
    render(){
        let thisUrl =this.props.match.url
        return(
            <Router>
                <div>
                <Link to={thisUrl+"/"}>home</Link>|
        <Link to={`${thisUrl}/about`}>about</Link>|
        <Link to={`${thisUrl}/topics`}>topics</Link>
        {/* <Switch> */}
        <Route exact path={thisUrl+"/"} component={Home} />
        <Route path={`${thisUrl}/about`} component={About} />
        <Route path={`${thisUrl}/topics`} component={Topics} />
          
        {/* </Switch> */}
                </div>
            </Router>
        );
    }
}

export default Class2;