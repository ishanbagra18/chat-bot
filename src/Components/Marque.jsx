import React from 'react';

function Marque() {
  const nums = [
    "The best relationships are built on mutual trust, respect, and understanding.",
    "Love is not about finding the perfect person but learning to see an imperfect person perfectly.",
    "In a relationship, it's not about how much you say 'I love you,' but how much you prove that it's true.",
    "A great relationship is about two things: appreciating the similarities and respecting the differences.",
    "True love is not about being inseparable; it's about being separated and nothing changes."
  ];

  // Select one random quote
  const randomQuote = nums[Math.floor(Math.random() * nums.length)];

  return (
    <div className="w-full bg-pink-200 py-2">
      <marquee
        direction="left"
        className="text-center text-xl font-semibold text-black-900 tracking-wider"
      >
        {randomQuote}
      </marquee>
    </div>
  );
}

export default Marque;
