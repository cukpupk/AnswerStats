import React from 'react';

import './DisplayNames.css'

function DisplayNames (props) {
    //const classes = useStyles();

    return (
        <div className="NameContainer">
            {props.Name.map(name => {
                let Flag = false;
                if(props.WrongName.includes(name)) {
                    Flag=true
                }
                return (
                    <div key={name} style={{ backgroundColor: Flag ? "red" : "green" }} className="SingleName">
                        {name}
                    </div>
                )
            })}
        </div>
    )
}
export default DisplayNames;