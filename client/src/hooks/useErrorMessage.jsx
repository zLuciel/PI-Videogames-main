import { useEffect, useState } from 'react';
const useErrorMessage = (errorMessage, duration) => {
    const [showErrorMessage, setShowErrorMessage] = useState(false);
  
    useEffect(() => {
      if (errorMessage) {
        setShowErrorMessage(true);
  
        const timer = setTimeout(() => {
          setShowErrorMessage(false);
        }, duration);
  
        return () => clearTimeout(timer);
      }
    }, [errorMessage, duration]);
  
    return showErrorMessage;
  };

  export default useErrorMessage