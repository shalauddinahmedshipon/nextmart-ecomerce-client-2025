"use client"
import { useUser } from '@/context/UserContext';
import { getCurrentUser } from '@/services/AuthService';
import React from 'react';

const HomePage = () => {
  const user = useUser();
  console.log(user)
  return (
    <div>
      home page
    </div>
  );
};

export default HomePage;