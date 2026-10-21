import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginSchema, type LoginFormData } from './loginValidation'; // استيراد السكيما والـ Type
import { login } from '../../functions/login';

const LoginForm = () => {
  const navigate = useNavigate(); 

  // ربط React Hook Form بـ Zod Resolver
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginFormData) => {

    const credentials = {
      usernameValue: data.username,
      passwordValue: data.password,
      navigate
    };

    try {
      await login(credentials);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} style={{width:"40%"}}>
      <h2>Welcome back!</h2>
      <p>Login to continue</p>
      
      {/* Username */}
      <label htmlFor="username">Username</label><br/>
      <div className="contain">
        <div className="input-wrapper" style={{ position: 'relative', width: '100%' }}>
          <input 
            type="text" 
            id="username" 
            placeholder="demo-user" 
            {...register("username")}
          />
          <div className="input_icon"><img src="../../imgs/@.svg" alt=""/></div>
        </div>
        {errors.username && (
          <span className="error-message">{errors.username.message}</span>
        )}
      </div><br/>

      {/* Password */}
      <label htmlFor="password">Password</label><br/>
      <div className="contain">
        <div className="input-wrapper" style={{ position: 'relative', width: '100%' }}>
          <input 
            type="password" 
            id="password" 
            placeholder="••••••••" 
            {...register("password")}
          />
          <div className="input_icon"><img src="../../imgs/pass.svg" alt=""/></div>
        </div>
        {errors.password && (
          <span className="error-message">{errors.password.message}</span>
        )}
      </div><br/> 

      <button 
        type="submit" 
        className="loginbtn" 
        style={{width: "20%", border: "none", cursor: "pointer"}}
      >
        Login
      </button>
      
      <div className="question">
        <p>Don't have an account?</p>
        <Link to="/signup">Sign up now</Link>
      </div>
    </form>
  );
};

export default LoginForm;