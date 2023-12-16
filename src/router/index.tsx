import 'react-native-url-polyfill';
import React, { useState, useEffect } from 'react';
import AuthRouter from './Auth.router';
import { supabase } from '../utils/supabase';
import { Session } from '@supabase/supabase-js';
import AppRouter from './App.router';

const Router: React.FC = () => {
  const [session, setSession] = useState<Session | null>(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    })
  }, []);

  console.log(JSON.stringify(session));

  return (
    <>
      {session && session.user ? <AppRouter /> : <AuthRouter />}
    </>
  )
}

export default Router;