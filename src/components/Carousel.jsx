
const Carousel = ({ carousel, setCarousel }) => {
  const carouselContent = [
    "Well done on completing the quiz!",
    "Did you know? The Eiffel Tower can be 15 cm taller during the summer.",
    "Fun fact: Honey never spoils, and archaeologists have found 3000-year-old honey in Egyptian tombs.",
    "You can retake the quiz to improve your score or challenge yourself again!"
  ];

  const nextCarouselSlide = () => {
    setCarousel((prevCarousel) => (prevCarousel + 1) % carouselContent.length);
  };

  const prevCarouselSlide = () => {
    setCarousel((prevCarousel) =>
        prevCarousel === 0 ? carouselContent.length - 1 : prevCarousel - 1
    );
  };

  return (
    <div className="relative w-full bg-gray-200 p-6 rounded-lg">
      <p className="text-lg">{carouselContent[carousel]}</p>

      <div className="absolute inset-x-0 top-full flex justify-between mt-4">
        <button
          onClick={prevCarouselSlide}
          className="px-4 py-2 rounded-full bg-blue-500 text-white hover:bg-blue-600"
        >
          Previous
        </button>
        <button
          onClick={nextCarouselSlide}
          className="px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;
