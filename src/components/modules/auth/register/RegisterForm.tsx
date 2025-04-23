"use client"
import Logo from '@/app/assets/svgs/Logo';
import { Button } from '@/components/ui/button';
import { Form, FormControl,FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import React from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { registrationSchema } from './registerValidation';

const RegisterForm = () => {
  const form = useForm({
    resolver:zodResolver(registrationSchema)
  });

 const password = form.watch('password');
 const passwordConfirm=form.watch('passwordConfirm'); 

const onSubmit:SubmitHandler<FieldValues> =(data)=>{
 console.log(data);
  }
  return (
    <div className="border shadow-xl my-16 border-gray-300 rounded-xl flex-grow max-w-sm w-full p-5 h-auto">
    <div className="flex items-center space-x-4 ">
      <Logo />
      <div>
        <h1 className="text-xl font-semibold">Register</h1>
        <p className="font-extralight text-sm text-gray-600">
          Join us today and start your journey!
        </p>
      </div>
    </div>
    <Form {...form}>
      <form className='space-y-4' onSubmit={form.handleSubmit(onSubmit)}>
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} value={field.value || ""} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
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
        <FormField
          control={form.control}
          name="passwordConfirm"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input type="password" {...field} value={field.value || ""} />
              </FormControl>
{
  passwordConfirm&&password!==passwordConfirm ?
<FormMessage>Password does not match</FormMessage>
  :
  <FormMessage/> 
}
            
            </FormItem>
          )}
        />

        <Button
          disabled={passwordConfirm!=="" && password !== passwordConfirm}
          type="submit"
          className="mt-5 w-full"
        >
        Register
        </Button>
      </form>
    </Form>
    <p className="text-sm text-gray-600 text-center my-3">
      Already have an account ?
      <Link href="/login" className="text-primary">
        Login
      </Link>
    </p>
  </div>
  );
};

export default RegisterForm;