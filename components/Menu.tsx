import React, { useEffect } from 'react';


// this component uses an embed menu from potify.net to display the menu on the site

const Menu = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://potify.net/embed/mt-medicinals";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    }
  }, []);

  return (
    <div className="container mx-auto px-6 py-8 bg-white rounded-xl shadow-md space-y-6">
    </div>
  );
};

export default Menu;
