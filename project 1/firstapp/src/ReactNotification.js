import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ReactNotification() {
  const notify = () => toast.warn("Hello, world!");

  return (
    <div>
      <button onClick={notify}>Notify</button>
      <ToastContainer
        style={{ width: '97%' }} // Set width to full viewport width
        // You can add other props here
      />
    </div>
  );
}

export default ReactNotification;
