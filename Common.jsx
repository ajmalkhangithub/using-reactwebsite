// import { common } from "@material-ui/core/colors";
import React from "react";
import { NavLink } from "react-router-dom";
import image from '../src/homee.jpg'
const Common=(props)=>{
    return(
        <>
<section id="header" className="d-flex align-item-center">
<div className="container-fluid nab_bg">
         <div className="row">
            <div className="col-10 mx-auto">
            <div className="row">

                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                    <h1>{props.name} <strong className="brand-name">Ajmal Khan</strong></h1>
                    <h2 className="my-2">We are the team of talented developer making website</h2>
                    <div className="mt-3">
                        <NavLink to={props.visit} className="btn-get-started">{props.btname}</NavLink>
                    </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                <img src={image} className="img-fluid animated" alt="home img"/>
                </div>
            </div>
            </div>
         </div> 
        </div>
</section>
        </>
    )
}
export default Common;