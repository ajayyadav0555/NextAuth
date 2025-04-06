"use client";
import { logout } from "@/lib/actions/action";
import React, { useEffect } from "react";

const Logout = () => {
  const [items, setItems] = React.useState(
    Array.from({ length: 20 }, (_, i) => i + 1)
  );
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    const handleScroll = () => {
      console.log("first");
      const { clientHeight, scrollTop, scrollHeight } =
        document.documentElement;
      if (scrollTop + clientHeight >= scrollHeight - 300 && !loading) {
        console.log("second");
        loadmore();
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  const loadmore = () => {
    console.log("third");
    setLoading(true);
    setTimeout(() => {
      setItems((prev) => [
        ...prev,
        ...Array.from({ length: 10 }, (_, i) => i + 1),
      ]);
      setLoading(false);
    }, 1000);
  };
  return (
    <>
      <button onClick={() => logout()}>Logout</button>
      <div className="max-w-lg mx-auto p-4">
        {items.map((item, index) => (
          <div
            key={index}
            className="p-4 border mb-2 bg-gray-100 rounded-md text-center"
          >
            Item {item}
          </div>
        ))}
        {loading && (
          <p className="text-center text-gray-500">Loading more...</p>
        )}
      </div>
    </>
  );
};

export default Logout;
