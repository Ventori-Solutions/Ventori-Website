import React, { useState } from 'react';

const Toggle = () => {
  const [activeOption, setActiveOption] = useState('monthly');

  const handleToggle = (option) => {
    setActiveOption(option);
  
    // Iterate over all card indexes and toggle classes dynamically
    const cards = document.querySelectorAll(`[class^="yearlyPricing_"], [class^="monthlyPricing_"]`);
  
    cards.forEach((card) => {
      const index = card.className.match(/\d+/)?.[0]; // Extract index from class name
      const yearlyPricing = document.querySelector(`.yearlyPricing_${index}`);
      const monthlyPricing = document.querySelector(`.monthlyPricing_${index}`);
  
      if (option === 'yearly') {
        monthlyPricing.classList.add('hidden');
        yearlyPricing.classList.remove('hidden');
        monthlyPricing.classList.remove('flex');
        yearlyPricing.classList.add('flex');
      } else {
        yearlyPricing.classList.add('hidden');
        monthlyPricing.classList.remove('hidden');
        yearlyPricing.classList.remove('flex');
        monthlyPricing.classList.add('flex');
      }
    });
  };
  

  return (
    <div className="flex bg-accent rounded-full">
      {/* Monthly Option */}
      <button
        className={`px-8 py-3 text-sm font-medium rounded-full transition-colors duration-300 ${
          activeOption === 'monthly'
            ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white'
            : 'text-dark'
        }`}
        onClick={() => handleToggle('monthly')}
      >
        Monthly
      </button>

      {/* Yearly Option */}
      <button
        className={`px-8 py-3 text-sm font-medium rounded-full transition-colors duration-300 ease-in-out ${
          activeOption === 'yearly'
            ? 'bg-gradient-to-r from-gradientStart to-gradientEnd text-white'
            : 'text-dark'
        }`}
        onClick={() => handleToggle('yearly')}
      >
        Yearly
      </button>
    </div>
  );
};

export default Toggle;
