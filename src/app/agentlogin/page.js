'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import axios from 'axios';

export default function AgentLoginPage() {
  const router = useRouter();
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const [emailErr, setEmailErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [apiErr, setApiErr] = useState('');
  const [loading, setLoading] = useState(false);


  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  const handleAgentLogin = async (e) => {
    e.preventDefault();
    

    setEmailErr('');
    setPasswordErr('');
    setApiErr('');

    let isValid = true;
            if (email === "") {
            setEmailErr("Email address is required");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailErr("Please enter a valid email address")
            isValid = false;
        }
        if (password === "") {
            setPasswordErr("Password is required");
            isValid = false;
        } else if (!passwordRegex.test(password)) {
            setPasswordErr("Password must be at least 8 characters long and contain letters and numbers. ");
            isValid = false;
        }

    if (!isValid) return;

    setLoading(true);

    try {
      const response = await axios.post('http://property.reworkstaging.name.ng/v1/token', {
        email: email,
        password: password
      });

      if (response.data && response.data.token) {
        localStorage.setItem('token', response.data.token);
        router.push('/agenthome');
      }
    } catch (err) {
      console.error('Login error:', err);
      setApiErr('Invalid login credentials or server error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8 font-sans">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        
        {/* BRAND LOGO */}
        <div className="flex justify-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-600 flex items-center justify-center text-white font-black text-xl shadow-lg shadow-blue-500/20">
            B
          </div>
        </div>

        <h2 className="mt-4 text-center text-2xl font-black text-gray-900 tracking-tight">
          Agent Portal Login
        </h2>
        <p className="mt-1 text-center text-xs font-medium text-gray-500">
          Sign in to manage your property listings and site inspection appointments
        </p>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-lg">
        <div className="bg-white py-8 px-6 shadow-sm border border-gray-200 rounded-2xl sm:px-10">
          
          {/* API ERROR BANNER */}
          {apiErr && (
            <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-xs font-semibold rounded-xl">
              {apiErr}
            </div>
          )}

          <form onSubmit={handleAgentLogin} className="space-y-5">
            
            {/* EMAIL INPUT */}
            <div>
              <label htmlFor="email" className="block text-xs font-bold text-gray-700 mb-1.5">
                Agent Email Address
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="lex@luthorcorp.com"
                className="w-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-900 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 transition"
              />
              {emailErr && <p className="text-red-500 text-[11px] font-semibold mt-1">{emailErr}</p>}
            </div>

            {/* PASSWORD INPUT */}
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-xs font-bold text-gray-700">
                  Password
                </label>
                <Link href="#" className="text-[11px] font-bold text-blue-600 hover:text-blue-700">
                  Forgot password?
                </Link>
              </div>
              <input
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                className="w-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-900 p-3.5 rounded-xl focus:bg-white focus:outline-none focus:border-blue-600 transition"
              />
              {passwordErr && <p className="text-red-500 text-[11px] font-semibold mt-1">{passwordErr}</p>}
            </div>

            {/* REMEMBER ME CHECKBOX */}
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-xs font-semibold text-gray-600">
                  Remember me
                </label>
              </div>
            </div>

            {/* SUBMIT BUTTON */}
            <div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold text-xs py-3.5 px-4 rounded-xl shadow-md shadow-blue-600/20 transition cursor-pointer disabled:opacity-50"
              >
                {loading ? 'Signing in...' : 'Sign In as Agent'}
              </button>
            </div>

          </form>

          {/* REGISTER LINK */}
          <div className="mt-6 border-t border-gray-100 pt-6 text-center">
            <p className="text-xs text-gray-500">
              Not registered as an agent yet?{' '}
              <Link href="/agent/register" className="font-bold text-blue-600 hover:text-blue-700">
                Register as Agent
              </Link>
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}