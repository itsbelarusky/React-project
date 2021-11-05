import React, {useEffect, useState} from 'react';

const MainStatusWithHooks = (props) => {

    //================Хуки!!!================================
    let [edithMode, setEdithMode] = useState(false)
    let [status, setStatus] = useState(props.status)

    useEffect(()=>{
        setStatus(props.status)
    },[props.status] );

    const activateEdithMod = () => {
        setEdithMode(true)
    }

    const deActivateEdithMod = () => {
        setEdithMode(false)
        props.updateStatus(status)
    }


    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)

    }


    return (
        <div>
            {!edithMode && <div>
                <span onDoubleClick={activateEdithMod}>{props.status || "No status"}</span>
            </div>}

            {edithMode && <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deActivateEdithMod} value={status}/>
            </div>}
        </div>
    );
};

export default MainStatusWithHooks;