import React, { useState, useEffect } from "react";

const Toast = ({ message }) => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (message) {
      setVisible(true);

      const timer = setTimeout(() => {
        setVisible(false);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message]);

  if (!visible) return null;

  return (
    <div className="fixed top-5 right-5 bg-black text-white py-1 px-3 rounded-lg shadow-lg text-sm">
      <div className="flex items-center justify-between">
        <span>{message}</span>
        <button
          onClick={() => setVisible(false)}
          className="text-white font-bold ml-2 hover:text-gray-400"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default Toast;
