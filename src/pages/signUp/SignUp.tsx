import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './SignUp.css'; 
import { register as registerApi } from '../../functions/sign Up';
import { useForm, SubmitHandler } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema, SignUpFormData } from './signUpValidation'; // استيراد السكيما المستقلة

const SignUp: React.FC = () => {
  const navigate = useNavigate(); 
  const [profileImage, setProfileImage] = useState<File | null>(null);

  // ربط React Hook Form بـ Zod Resolver باستخدام الـ Schema المستقلة
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>({
    resolver: zodResolver(signUpSchema),
  });

  const onSubmit: SubmitHandler<SignUpFormData> = async (data) => {
    console.log("Form Submitted Successfully:", data);

    const formData = new FormData();
    formData.append("name", data.Full_Name);
    formData.append("username", data.username);
    formData.append("email", data.email);
    formData.append("password", data.password); // بنبعت الباسورد بس ومش بنبعت confirmPassword
    
    if (profileImage) {
      formData.append("image", profileImage);
    } else {
      formData.append("image", "imgs/unknown.jpg");
    }

    try {
      await registerApi(formData, navigate);
    } catch (error) {
      console.error("Signup failed:", error);
    }
  };

  return (
    <>
      <div className="container">
        <div className="descripe">
          <div className="descripe_icon"> 
            <div className="img"><img src="imgs/Icon.png" alt=""/></div>
            <span className="main_name">SocialVibe</span> 
          </div>
          <div className="descripo">
            <div>
              <h2>Join our community</h2>
              <p>Start your journey in sharing special moments</p>
            </div>
            <div className="circle"></div>
          </div>
          <div className="squire"></div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} style={{width:"40%"}}>
          <h2>Create new account</h2>
          <p>Fill in the details to get started</p>
          
          {/* Full Name */}
          <label htmlFor="Full_Name">Full Name</label><br/>
          <div className="contain">
            <div className="input-wrapper">
              <input 
                type="text" 
                id="Full_Name"
                placeholder="Enter your full name" 
                {...register("Full_Name")}
              />
              <div className="input_icon"><img src="imgs/name.svg" alt=""/></div>
            </div>
            {errors.Full_Name && (
              <span className="error-message">{errors.Full_Name.message}</span>
            )}
          </div><br/>

          {/* Username */}
          <label htmlFor="username">Username</label><br/>
          <div className="contain">
            <div className="input-wrapper">
              <input 
                type="text" 
                id="username"
                placeholder="Choose a username"
                {...register("username")}
              />
              <div className="input_icon"><img src="imgs/@.svg" alt=""/></div>
            </div>
            {errors.username && (
              <span className="error-message">{errors.username.message}</span>
            )}
          </div><br/>

          {/* Email */}
          <label htmlFor="Email">Email</label><br/>
          <div className="contain">
            <div className="input-wrapper">
              <input 
                type="email" 
                id="Email"
                placeholder="example@email.com" 
                {...register("email")}
              />
              <div className="input_icon"><img src="imgs/email.svg" alt=""/></div>
            </div>
            {errors.email && (
              <span className="error-message">{errors.email.message}</span>
            )}
          </div><br/>

          {/* Password */}
          <label htmlFor="password">Password</label><br/>
          <div className="contain">
            <div className="input-wrapper">
              <input 
                type="password"
                id="password" 
                placeholder="••••••••" 
                {...register('password')}
              />
              <div className="input_icon"><img src="imgs/pass.svg" alt=""/></div>
            </div>
            {errors.password && (
              <span className="error-message">{errors.password.message}</span>
            )}
          </div><br/>

          {/* Confirm Password */}
          <label htmlFor="ConfirmPassword">Confirm Password</label><br/>
          <div className="contain">
            <div className="input-wrapper">
              <input 
                type="password"
                id="ConfirmPassword" 
                placeholder="••••••••" 
                className="form-input"
                {...register('confirmPassword')}
              />
              <div className="input_icon"><img src="imgs/pass.svg" alt=""/></div>
            </div>
            {errors.confirmPassword && (
              <span className="error-message">{errors.confirmPassword.message}</span>
            )}
          </div><br/>

          {/* Profile Image */}
          <label htmlFor="Profile_Image">Profile Image</label><br/>
          <div className="contain">
            <div className="input-wrapper">
              <input type="url" id="Profile_Image" readOnly placeholder="https://example.com/image.jpg" />
              <div className="input_icon"><img src="imgs/img.svg" alt=""/></div>
            </div>
          </div><br/>
          
          <input 
            type="file" 
            accept="image/*" 
            id="Profile_Image2" 
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              if (e.target.files) {
                setProfileImage(e.target.files[0]);
              }
            }} 
          /><br/><br/>

          <button type="submit" className="Create_Account">Create Account</button>
          
          <p className="question">Already have an account? <Link to="/login">Login</Link></p>
        </form>

        <div className="confetti">
          <div></div><div></div><div></div><div></div><div></div>
          <div></div><div></div><div></div><div></div><div></div>
        </div>
      </div>
    </>
  );
};

export default SignUp;