import { useEffect, useRef, useState } from "react";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  const [toggle, setToggle] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let [entry] = entries;
        console.log(entry.isIntersecting);
        if (entry.isIntersecting) {
          setToggle(false);
        } else {
          setToggle(true);
        }
      },
      {
        root: null,
        rootMargin: "50%",
        threshold: 1.0,
      }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => {
      if (containerRef.current) observer.unobserve(containerRef.current);
    };
  }, []);

  const containerRef = useRef(null);

  return (
    <>
      <Outlet />
    </>
  );
};

export default MainLayout;
