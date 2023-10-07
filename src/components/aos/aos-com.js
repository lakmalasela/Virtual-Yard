import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const AOScom =()=>{


    AOS.init({
        duration: 800, // Animation duration
        offset: 200, // Offset (in pixels) from the original trigger point
      });
      useEffect(() => {
        AOS.init();
    
        return () => {
          AOS.refresh(); // Refresh AOS to clear any previous animations
        };
      }, []);

}
export default AOScom;