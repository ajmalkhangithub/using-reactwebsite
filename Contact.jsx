import React, { useState } from "react";

const Contact=()=>{
    const[data,setData]=useState({
        fullname:'',
        phone:'',
        email:'',
        age:'',
        msg:''
    });
    const inputEvent=(event)=>{
     const{name,value}=event.target;
     setData((preValue)=>{
     return{
        ...preValue,[name]:value,
     }
     })
    }
 const formSubmit=(e)=>{
e.preventDefault();
alert(`My full name is${data.fullname} My phone number is ${data.phone} My email is ${data.email} my age is ${data.age} my message is ${data.msg}`)
 }



    return(
        <>
    <div className="my-5">
    <h1 className="text-center">Contact Us </h1>

    </div>
    <div className="container contact_div">
        <div className="row  ">
            <div className="col-md-6 col-10 mx-auto">
            
                <form onSubmit={formSubmit}>
                <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Fullname</label>
  <input type="text" class="form-control" id="exampleFormControlInput1" name='fullname' value={data.fullname} onChange={inputEvent} placeholder="Enter your Fullname"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Phone</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name='phone' value={data.phone} onChange={inputEvent} placeholder="Enter your phone number"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" name='email' value={data.email} onChange={inputEvent} placeholder="name@example.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Age</label>
  <input type="number" class="form-control" id="exampleFormControlInput1" name='age' value={data.age} onChange={inputEvent} placeholder="Enter your age"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" onChange={inputEvent} value={data.msg} name="msg"></textarea>
</div>
<div class="col-12">
    <button class="btn btn-outline-primary" type="submit">Submit form</button>
  </div>
                </form>
            </div>
            </div>
        </div>
       
        </>
    )
}
export default Contact;