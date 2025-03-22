import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const TestimonialSection = () => {
  const testimonials = [
    {
      text: "Fantastic customer service. I shifted from a traditional bank to Sable [and] Sable’s customer service helped me answer all the questions that I needed to switch.",
      author: "K Oiwake"
    },
    {
      text: "The best bank for immigrants in the US. Thank you Sable! I have nothing but good things to say about you!",
      author: "E Berhe"
    }
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-black text-white min-h-screen p-8">
      <h2 className="text-6xl font-bold mb-12">4.8</h2>
      <div className="flex gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-8 rounded-lg max-w-md shadow-lg"
          >
            <FaQuoteLeft className="text-teal-400 text-3xl mb-4" />
            <p className="text-lg mb-6">{testimonial.text}</p>
            <hr className="border-gray-500 mb-4" />
            <p className="font-semibold">{testimonial.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestimonialSection;