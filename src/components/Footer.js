import React from 'react';
import { useThemeHook } from '../GlobalComponents/ThemeProvider';


const Footer = () => {
  const current = new Date();
  const CurrentYear = `${current.getFullYear()}`;
  const [theme] = useThemeHook();

  
  return (
    

    <div>
      
        <footer>
            <div className="pt-2 px-4 App">
            <p className="mb-0"><h5><embed src="images/logo1.png" className={`${theme? 'bg-light-black' : 'bg-light-primary'} rounded shadow-lg px-2`} alt="Myself" /></h5></p>
            </div> 
             
          </footer>
    </div>
)
}

export default Footer;