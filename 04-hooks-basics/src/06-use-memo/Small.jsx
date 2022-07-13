import React from 'react';

export const Small = React.memo(({ counter }) => {
  console.log('Render small component!');
  return (
    <small>{counter}</small>
  )
})