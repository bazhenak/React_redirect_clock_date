 // import React from "react";
 // import { useNavigate } from "react-router-dom";
 // import './Redirect.css'
 // import {Link} from "react-router-dom";
 //
 // function Redirect() {
 //
 //     const navigate = useNavigate();
 //     const routeChange = () => {
 //         let path = `newPath`;
 //         navigate(path)
 //     }
 //         return (
 //             <div className='contacts-page-container'>
 //                 <p>просто параграф</p>
 //                 <button className='button' onClick={routeChange}>
 //                     На главную
 //                 </button>
 //             </div>
 //         );
 // }
 // export default Redirect;


import React from "react";
import {Link} from "react-router-dom";

 const GetRedirected = ()=> {

    return (
        <>
            <button className='button'> <Link to='/home'>На главную</Link></button>
        </>
    );
};
export default GetRedirected;


