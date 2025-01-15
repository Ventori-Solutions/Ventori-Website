import React, { useState } from "react";




export default function TestimonialSlider ({testimonials}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  

  const updateTestimonial = (direction) => {
    console.log('clicked', direction);
    if (direction === "prev") {
      setCurrentIndex((prevIndex) =>
        (prevIndex - 1 + testimonials.length) % testimonials.length
      );
    } else {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }
  };

  return (
    <section className='w-full py-14'>    
      <div className="lg:w-[75%] max-w-[1440px] w-full lg:px-0 mx-auto bg-secondary p-10 rounded-lg shadow-2xl">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Image */}
        <div className="w-24 h-24 rounded-full overflow-hidden mb-4">
          <img
            src={testimonials[currentIndex].image}
            alt={testimonials[currentIndex].name}
            className="w-full h-full object-cover"
          />
        </div>
        {/* Quote */}
        <h1 className="text-2xl font-bold">
          "{testimonials[currentIndex].quote}"
        </h1>
        {/* Name and Position */}
        <div>
          <h3 className="text-xl font-semibold">
            {testimonials[currentIndex].name}
          </h3>
          <p className="text-[16px]">{testimonials[currentIndex].position}</p>
        </div>
      </div>
      {/* Navigation Buttons */}
      <div className="flex items-center justify-center mt-6">
        <button
          aria-label="Previous"
          className="w-10 h-10 flex items-center justify-center hover:bg-[#0C0C0C] text-black hover:text-white rounded-full mx-2  transition border border-black"
          onClick={() => updateTestimonial("prev")}
        >
          &lt;
        </button>
        <button
          aria-label="Next"
          className="w-10 h-10 flex items-center justify-center hover:bg-[#0C0C0C] text-black hover:text-white rounded-full mx-2  transition border border-black"
          onClick={() => updateTestimonial("next")}
        >
          &gt;
        </button>
      </div>
    </div>
    </section>

  );
};



