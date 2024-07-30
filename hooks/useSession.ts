'use client';
import { useState, useEffect } from 'react';

const SESSION_KEY = 'session'; // Key used in localStorage

export interface SessionData {
  accessToken?: string;
  refreshToken?: string;
  isLoggedIn?: boolean;
}

interface UseSessionReturn {
  session: SessionData | null;
  setSession: (session: SessionData | null) => void;
  removeSession: () => void;
}

export function useSession(): UseSessionReturn {
  const [session, setSession] = useState<SessionData | null>(null);

  useEffect(() => {
    const storedSession = sessionStorage.getItem(SESSION_KEY);
    if (storedSession) {
      setSession(JSON.parse(storedSession));
    }
  }, []);

  const setSessionData = (session: SessionData | null) => {
    if (session) {
      sessionStorage.setItem(SESSION_KEY, JSON.stringify(session));
    } else {
      sessionStorage.removeItem(SESSION_KEY);
    }
    setSession(session);
  };

  const removeSession = () => {
    sessionStorage.removeItem(SESSION_KEY);
    setSession(null);
  };

  return {
    session,
    setSession: setSessionData,
    removeSession,
  };
}