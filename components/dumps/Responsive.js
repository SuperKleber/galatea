import React from "react"
import MediaQuery from 'react-responsive';
 

var Desktop = props => <MediaQuery {...props} minWidth={992} />;
var Tablet = props => <MediaQuery {...props} minWidth={768} maxWidth={991} />;
var Mobile = props => <MediaQuery {...props} maxWidth={767} />;
var Default = props => <MediaQuery {...props} minWidth={768} />;

export default{
    Desktop,
    Tablet,
    Mobile,
    Default,
    MediaQuery
}

