import React from "react";
import {Link} from "react-router";

export default class Whoops404 extends React.Component{
    render(){
        return (
            <div id="not_found">
                <h1>Whoops...</h1>
                <p>We cannot find the page that you have requested.
                Were you looking for one of these:</p>

                <Link to="/">Join as Audience</Link>
                <Link to="/speaker">Start the presentation</Link>
                <Link to="/board">View as board</Link>
            </div>
        )
    }
}