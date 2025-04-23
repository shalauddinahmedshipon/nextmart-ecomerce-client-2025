import { getCurrentUser } from '@/services/AuthService';
import React from 'react';

const HomePage = async() => {
  const user = await getCurrentUser();
  console.log(user)
  return (
    <div>
      home page
    </div>
  );
};

export default HomePage;