"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Bar = {
  name: string;
  location: string;
};

export default function RandomBarPage() {
  const [bar, setBar] = useState<Bar>();
  const [loading, setLoading] = useState(false);
  const [beer, setBeer] = useState("");

  const fetchRandomBar = async () => {
    setLoading(true);
    const response = await fetch("/api/random-bar");
    const data = await response.json();
    setBar(data);
    setBeer(beer + "🍺");
    setLoading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <motion.h1 className="text-black text-2xl my-12">
        Where should we get a drink?
      </motion.h1>
      <motion.p
        key={beer}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
      >
        {beer}
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className="my-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={fetchRandomBar}
      >
        {loading ? "Loading..." : "Random Bar API"}
      </motion.button>

      {bar && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-xl w-full rounded overflow-hidden shadow-lg p-4 bg-white"
        >
          <h1 className="font-bold text-xl mb-2 text-black">{bar.name}</h1>
          <p className="text-gray-700 text-base">{bar.location}</p>
        </motion.div>
      )}
    </div>
  );
}
