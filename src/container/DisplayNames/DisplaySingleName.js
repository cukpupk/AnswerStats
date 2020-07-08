import React from 'react';
import './DisplayNames.css'
function DisplaySingleName(props) {
    return (
        <div className="NameContainer">
            {props.Name.map(name => {
                return (
                    <div key={name} className="MutipleChoiceName">
                        {name}
                    </div>
                )
            })}
        </div>
    )
};
export default DisplaySingleName;