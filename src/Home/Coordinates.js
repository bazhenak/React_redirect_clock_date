import React, {useState} from "react";

const StateComponent = (props) => {

    const [x, setX] = useState(1);

    const handlerSetMouseMove = (event) => {
        setX(event.clientX);
    }

    return (
            <div onMouseMove={(event) => handlerSetMouseMove(event)}>
                {x}
            </div>
    )
}
export default StateComponent;
