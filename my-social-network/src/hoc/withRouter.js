import React from "react";
import { useMatch } from 'react-router-dom';

export const withRouter = (Component) =>{
  const RouterComponent = (props) => {
    const match = useMatch('/profile/:userId/');
    return <Component {...props} match={match}/>;
  }
  return RouterComponent;
}