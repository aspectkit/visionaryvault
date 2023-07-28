import React, { useState } from 'react';

const LoginSignupPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <LoginForm /> : <SignupForm />}
      <button onClick={toggleForm}>
        {isLogin ? 'Don\'t have an account? Sign up' : 'Already have an account? Log in'}
      </button>
    </div>
  );
};

export default LoginSignupPage;