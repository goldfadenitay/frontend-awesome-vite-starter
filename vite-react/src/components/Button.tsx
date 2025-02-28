import React from 'react';
import './../index.css';

export type params = {
  name?: string;
};

export const Button: React.FC<params> = ({ name = 'Click me' }) => {
  return <button>{name}</button>;
};
