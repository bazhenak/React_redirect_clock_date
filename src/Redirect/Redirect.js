// import React from "react";
// import {Link} from "react-router-dom";
//
// import { Redirect } from "react-router"
//
// const YourComponent = () => {
//
//     const [state, setState] = setState({ redirect: false })
//
//     // достаточно поменять значение state
//     // чтобы произошел redirect
//
//     if (state.redirect) {
//         return <Redirect push to="/home" />
//     }
//
//     return (
//         <div>Ваш компонент<div/>)



const Redirect = () => {
    return (
        <div className='contacts-page-container container'>
            <p className='contacts-page-container__head-text'>
                Contacts
            </p>
        </div>
    );
};

export default Redirect;
