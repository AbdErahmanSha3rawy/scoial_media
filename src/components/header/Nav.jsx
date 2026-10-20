import React, { useState, useEffect } from 'react';
import GuestNav from './GuestNav';
import UserNav from './UserNav';

const Nav = () => {
  // فحص مبدئي مباشر للـ token عند تحميل المكون لأول مرة
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem('token'));

  useEffect(() => {
    // دالة لتحديث الحالة بناءً على الـ localStorage
    const checkAuth = () => {
      setIsLoggedIn(!!localStorage.getItem('token'));
    };

    // التحقق فوراً عند عمل mount للمكون
    checkAuth();

    // الاستماع لحدث authChange المخصص لتحديث النافبار فوراً عند تسجيل الدخول أو الخروج
    window.addEventListener('authChange', checkAuth);

    // تنظيف الـ Event listener لمنع تسريب الذاكرة (Memory Leaks)
    return () => {
      window.removeEventListener('authChange', checkAuth);
    };
  }, []);

  return (
    <>
      {isLoggedIn ? <UserNav /> : <GuestNav />}
    </>
  );
};

export default Nav;