import React, { createContext, useState } from 'react';

// DECLARATIONS
export interface User {
  email: string;
  password: string;
  password_confirmation: string;
}

export interface loggedInState {
  loggedInStatus: boolean;
  // user: User;
}

// CONTEXT
export const LoggedInContext = createContext<loggedInState | null>(null);

export const LoggedInContextProvider = (
  props: React.PropsWithChildren<React.ReactElement>
) => {
  const [isLoggedIn, setLoggedInStatus] = useState<loggedInState>({
    loggedInStatus: false,
  });

  return (
    <LoggedInContext.Provider value={{ ...isLoggedIn }}>
      {props.children}
    </LoggedInContext.Provider>
  );
};

// ACTIONS
type Action =
  | {
      type: 'LOGIN';
      payload: User;
    }
  | {
      type: 'SIGN_UP';
      payload: User;
    }
  | {
      type: 'LOGOUT';
      payload: User;
    };
