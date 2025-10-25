import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [deferredPrompt, setDeferredPrompt] = useState(null);
  const [showInstallButton, setShowInstallButton] = useState(false);

  useEffect(() => {
    const handler = (e) => {
      // Prevent the default browser prompt (the banner/address bar icon)
      e.preventDefault(); 
      
      // Save the event to state
      setDeferredPrompt(e);
      
      // Show your custom button
      setShowInstallButton(true); 
    };

    // Listen for the event when the component mounts
    window.addEventListener('beforeinstallprompt', handler);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener('beforeinstallprompt', handler);
    };
  }, []);

  const handleInstallClick = async () => {
    if (deferredPrompt) {
      // 1. Show the native install prompt using the saved event
      deferredPrompt.prompt(); 
      
      // 2. Wait for the user to respond to the prompt
      const { outcome } = await deferredPrompt.userChoice;
      
      // 3. Optional: Log the outcome for analytics
      console.log(`User response to the install prompt: ${outcome}`); 

      // 4. Reset the prompt and hide the button
      // The prompt can only be used once.
      setDeferredPrompt(null);
      setShowInstallButton(false);
    }
  };

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto py-3 flex justify-between items-center">
        <div className="flex gap-4">
          <div className="logo">
            <img src={logo} alt="" className="w-8 h-8 object-contain" />
          </div>
          <h1 className="text-2xl font-bold text-[#198ae0]">AbracaEye</h1>
        </div>
        {showInstallButton ? (
          <button
            onClick={handleInstallClick}
            className="bg-[#198ae0] text-white px-4 py-2 rounded-full hover:bg-transparent hover:text-[#198ae0] hover:border-[#198ae0] border transition-colors duration-300 ease-in-out"
          >
            Install AbracaEye App
          </button>
        ) : (
          <button
            onClick={() => window.location.reload()}
            className="bg-[#198ae0] text-white px-4 py-2 rounded-full hover:bg-transparent hover:text-[#198ae0] hover:border-[#198ae0] border transition-colors duration-300 ease-in-out"
          >
            Refresh
          </button> 
        )}
      </div>
    </nav>
  );
};

export default Navbar;
