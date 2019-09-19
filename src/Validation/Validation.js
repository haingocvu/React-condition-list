import React from "react";

const Validation = (props) => {
    const renderText = () => {
        const length = props.length;
        let output = '';
        if (length) {
            output = props.length < 6 ? 'Text too short' : 'Text long enough';
        }
        return output;
    }
    return (
        <div>
            {renderText()}
        </div>
    )
}

export default Validation