import Link from 'next/link';
import React, { useState } from 'react';

import eyeOpenIcon from '../../public/assets/img/icon/eye-open.svg';
import eyeCloseIcon from '../../public/assets/img/icon/eye-close.svg';
import { useForm } from 'react-hook-form';
import Image from 'next/image';
import { SignInFormValues } from '../../models/Types';
import { showToast } from '../Common/ComponentFunction';
import axios from 'axios';
import CircleLoaderIcon from '../Loader/CircleLoaderIcon';
import { useRouter } from 'next/router';
import { handleVisibility } from '../Common/ComponentFunction/PasswordVisibleFunction';

type USERTOKENPROPS = {
  token: string | undefined;
  email: string | undefined;
};

const SignIn = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<SignInFormValues>();

  const onSubmit = async (credentials: SignInFormValues) => {
    try {
      setIsLoading(true); // Set loading state to true
      setEmail('');
      setPassword('');
      const response = await axios.post(`${process.env.REACT_APP_FETCH_URL}/api/auth/login`, credentials, {
        headers: {
          'Content-Type': 'application/json'
        }
      });

      if (response.status === 200) {
        // Login successful, do something with the response
         const json = response.data;
        showToast({ message: json.message });
        let userToken: USERTOKENPROPS = { token: json.token, email: email };
        localStorage.setItem('userToken', JSON.stringify(userToken));
        router.push('/');
      } else {
        // Login failed, handle the error
        const { data } = response;
        showToast({ message: data.message, type: 'error' });
      }
    } catch (error) {
      showToast({ message: (error as Error).message, type: 'error' });
    } finally {
      setIsLoading(false); // Set loading state to false
    }
  };

  return (
    <div className="reletive text-[#001823]">
      <div className="flex justify-center items-center absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:max-w-[420px] max-w-[320px] w-full">
        <div
          className={`${
            isLoading ? 'opacity-10' : ''
          } flex flex-col justify-center pt-4 pb-6 px-6 lg:px-8 bg-[#e7e9fb] rounded w-full relative`}
        >
          <div className="flex flex-col my-3">
            <h2 className="my-2 text-center text-xl font-extrabold text-header-text">Sign In</h2>
            <p className="text-paragraph-text text-sm text-center">Welcome back, you’ve been missed!</p>
          </div>
          <div className=" gap-4 my-4 relative">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="max-h-[80px] relative">
                <input
                  type="email"
                  id="email"
                  autoFocus
                  {...register('email', { required: true })}
                  placeholder="@ Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`border h-10 rounded-xl py-1 px-2 block w-full mb-4 placeholder:text-slate-400 placeholder:text-base text-base placeholder:absolute ${
                    errors.email
                      ? 'focus:border-red-600 border-red-600 focus:outline-red-600'
                      : 'focus:border-black focus:outline-black border-black'
                  }`}
                />
                {errors.email && (
                  <span className="text-red-500 text-left text-sm relative bottom-8 left-0 w-full">
                    Please enter a valid email address.
                  </span>
                )}
              </div>
              <div className="relative max-h-[80px]">
                <div className="relative">
                  <button
                    className="absolute z-20 right-4 top-1/2 -translate-y-1/2"
                    onClick={handleVisibility({ setData: setIsVisible, data: isVisible })}
                  >
                    {/* <img className='inline-block w-4' src={eyeOpenIcon} alt="Eye Icon" /> */}
                    {isVisible ? (
                      <div className="inline-block w-4">
                        <Image src={eyeOpenIcon} alt="eye open Icon" width={16} height={16} />
                      </div>
                    ) : (
                      <div className="inline-block w-4">
                        <Image src={eyeCloseIcon} alt="eye open Icon" width={16} height={16} />
                      </div>
                    )}
                  </button>
                  <input
                    type={isVisible ? 'text' : 'password'}
                    id="password"
                    {...register('password', { required: true })}
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className={`border h-10 rounded-xl text-base py-1 px-2 block w-full mb-4 placeholder:text-slate-400 placeholder:text-base placeholder:absolute ${
                      errors.password
                        ? 'focus:border-red-600 border-red-600 focus:outline-red-600'
                        : 'focus:border-black focus:outline-black border-black'
                    }`}
                  />
                </div>
                {errors.password && (
                  <span className="text-red-500 text-left text-sm relative bottom-8 left-0 w-full">
                    Please enter a valid password.
                  </span>
                )}
              </div>
              <div className="flex justify-start items-center gap-4 my-2">
                <input type="checkbox" name="remeber-me" id="remeber-me" />
                <p className="text-lg">Remember Me</p>
              </div>
              <button
                type="submit"
                className="border-2 rounded-xl py-2 text-sm px-2 block w-full bg-blue-400 hover:bg-blue-500 my-3 focus:border-blue-500"
              >
                Sign In
              </button>
              <div className="flex justify-center items-center gap-4 my-2">
                <p className="text-sm">
                  Don’t have an account yet?{' '}
                  <span className="text-red-600">
                    <Link href="/registration">Sign Up</Link>
                  </span>
                </p>
              </div>
            </form>
          </div>
        </div>
        {isLoading && <CircleLoaderIcon />}
      </div>
    </div>
  );
};

export default SignIn;
