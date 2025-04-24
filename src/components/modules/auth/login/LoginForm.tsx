/* eslint-disable react/no-unescaped-entities */
"use client"
import Logo from '@/app/assets/svgs/Logo';
import { Button } from '@/components/ui/button';
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React, { useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { loginSchema } from './loginValidation';
import { loginUser, reChaptChaTokenVerification } from '@/services/AuthService';
import ReCAPTCHA from 'react-google-recaptcha';

const LoginForm = () => {
  const [reChaptChaStatus,setReChaptChaStatus]=useState(false);
  const form = useForm({
    resolver:zodResolver(loginSchema)
  });

const handleReChaptCha=async(value:string|null)=>{
 try {
  const res = await reChaptChaTokenVerification(value!);
  if(res.success){
    setReChaptChaStatus(true)
  }
 } catch (error) {
  console.log(error)
 }
}

const onSubmit:SubmitHandler<FieldValues> =async(data)=>{
try {
  const res = await loginUser(data);
if(res?.success){
  toast.success(res.message)
}else{
  toast.error(res.message)
}
} catch (error) {
  console.log(error)
}
  }
  return (
    <div className="border shadow-xl my-24 border-gray-300 rounded-xl flex-grow max-w-sm w-full p-5 h-auto">
    <div className="flex items-center space-x-4 ">
      <Logo />
      <div>
        <h1 className="text-xl font-semibold">Login</h1>
        <p className="font-extralight text-sm text-gray-600">
        Welcome back! to NextMart
        </p>
      </div>
    </div>
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input type="email" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
       
<div className='flex w-full justify-center '>
<ReCAPTCHA
    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_CLIENT_KEY!}
    onChange={handleReChaptCha}
  />
</div>

        <Button
        disabled={reChaptChaStatus?false:true}
          type="submit"
          className=" w-full"
        >
          {
            form.formState.isSubmitting? "Logging...":" Login"
          }
       
        </Button>
      </form>
    </Form>
    <p className="text-sm text-gray-600 text-center my-3">
      Don't have an account ?
      <Link href="/register" className="text-primary">
        Register
      </Link>
    </p>
  </div>
  );
};

export default LoginForm;