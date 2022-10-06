import { useEffect, useState } from 'react';

function Message({ size, feathers }) {

  const [message, setMessage] = useState('Oh my! Your bird is naked!');

useEffect(() =>{
  if (feathers <= 0)
      setMessage('Oh my! Your bird is naked!');
  else if (feathers >= 10) {
      setMessage('Full turkey!');
  } else {
      setMessage('Coming along...');
  }
}, [feathers])


  return (
    <div className={`message ${size}`}>
      {message}
    </div>
  );
};

export default Message;
