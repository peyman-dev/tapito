"use client"
import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const withAnimation = (WrappedComponent) => {
  // در اینجا useState و useRef باید داخل یک کامپوننت تابعی قرار بگیرند
  const HOCComponent = (props) => {
    const [isInView, setIsInView] = useState(false);
    const wrappedRef = useRef(null); // استفاده از useRef در داخل کامپوننت

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsInView(true);
            } 
          });
        },
        {
          threshold: 0.1,
        }
      );

      // شروع به مشاهده عنصر
      if (wrappedRef.current) {
        observer.observe(wrappedRef.current);
      }

      // پاک کردن observer هنگام unmount شدن کامپوننت
      return () => {
        if (wrappedRef.current) {
          observer.unobserve(wrappedRef.current);
        }
      };
    }, []); 

    return (
      <motion.div
        ref={wrappedRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: isInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        <WrappedComponent {...props} />
      </motion.div>
    );
  };

  return HOCComponent; 
};

export default withAnimation;
