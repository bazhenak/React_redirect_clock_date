// import React from "react";
// import { useNavigate } from "react-router-dom";
// import './Redirect.css'
// import {Link} from "react-router-dom";
//
//
//
// function Redirect() {
//
//     let navigate = useNavigate();
//     const routeChange = () => {
//         let path = `newPath`;
//         navigate(path)
//
//         return (
//             <div className='contacts-page-container'>
//                 <p>просто параграф</p>
//                 <button className='button' onClick={routeChange}>
//                     На главную
//                 </button>
//             </div>
//         );
//     }
// }
//
// export default Redirect;


import React from "react";

function GetRedirected() {


    return (
        <div>
            <button className='button' onClick={event =>  window.location.href='../Home/Home.js'}>На главную</button>
        </div>
    );
};


export default GetRedirected;


