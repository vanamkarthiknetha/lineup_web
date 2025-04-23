import { motion,useInView } from "framer-motion";
import React, { useRef } from "react";

const Cover = () => {
  const ref = useRef(null);
    const isInView = useInView(ref, { once: true, amount: 0.3 });
  return (
    <motion.div 
    ref={ref}
      initial={{ y: 80, opacity: 0 }}
      animate={isInView ? { y: 0, opacity: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
    className="relative h-[50vh] sm:h-screen w-full overflow-hidden mt-20">
      {/* Background image */}
      <img 
        src="/cover/iPhone 16 Pro.png" 
        alt="Cover Photo" 
        className="absolute inset-0 h-full w-full object-cover"
      />
      
    </motion.div>
  )
}

export default Cover

