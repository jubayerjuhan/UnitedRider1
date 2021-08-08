import React from 'react';
import { useForm } from 'react-hook-form';
import './SignForm.css'

const SignForm = () => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);

    // console.log(watch("example")); // watch input value by passing the name of it

    return (
        <form className="signup-form" onSubmit={handleSubmit(onSubmit)}>
            <h2 className="SignupTitle">Sign Up</h2>

            <input className="input" {...register("name", { required: true, pattern: /^[A-Za-z]+$/i })} placeholder="Full Name"/>
            {errors.name && <span>Use Charecters Only For Your Name</span>}

            <input className="input" {...register("email", { required: true, pattern: /\S+@\S+\.\S+/i })} placeholder="Email Address"/>
            {errors.email && <span>Please Check Your Email Address</span>}

            <input className="input" {...register("password", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i })} placeholder="Password"/>
            {errors.password && <span>Pass Must Contain Minimum 8 characters, at least one Number</span>}

            <input className="input" {...register("checkPass", { required: true, pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/i })} placeholder="Confirm Password"/>
            {errors.checkPass && <span>Pass Must Contain Minimum 8 characters, at least one Number</span>}


            {/* errors will return when field validation fails  */}

            <input style={{border: 'none'}} className="input" id="btn" type="submit" />
        </form>
    );
};

export default SignForm;