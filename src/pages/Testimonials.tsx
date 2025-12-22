import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    image:
      "https://images.pexels.com/photos/6749775/pexels-photo-6749775.jpeg?auto=compress&cs=tinysrgb&w=400",
    centerImage:
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=800",
    rightImage:
      "https://images.pexels.com/photos/8460157/pexels-photo-8460157.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "Hear from real users about their experiences with MedAlliance and the care they received.",
  },
  {
    image:
      "https://images.pexels.com/photos/7580254/pexels-photo-7580254.jpeg?auto=compress&cs=tinysrgb&w=400",
    centerImage:
      "https://images.pexels.com/photos/6129045/pexels-photo-6129045.jpeg?auto=compress&cs=tinysrgb&w=800",
    rightImage:
      "https://images.pexels.com/photos/3845125/pexels-photo-3845125.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "MedAlliance helped us find the best specialists when we needed them most. Truly life-saving service.",
  },
  {
    image:
      "https://images.pexels.com/photos/7551610/pexels-photo-7551610.jpeg?auto=compress&cs=tinysrgb&w=400",
    centerImage:
      "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=800",
    rightImage:
      "https://images.pexels.com/photos/6749768/pexels-photo-6749768.jpeg?auto=compress&cs=tinysrgb&w=400",
    quote:
      "The air ambulance service was incredibly professional. They made a stressful situation manageable.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"left" | "right">("right");

  const goToPrevious = () => {
    setDirection("left");
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const goToNext = () => {
    setDirection("right");
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  const current = testimonials[currentIndex];

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="relative">
        <div className="flex items-center justify-center gap-6 px-4">

          {/* LEFT IMAGE */}
          <div className="w-1/4 hidden md:block opacity-50">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                key={`left-${currentIndex}`}
                src={current.image}
                alt="Testimonial"
                className={`w-full h-full object-cover ${
                  direction === "right"
                    ? "animate-slide-left"
                    : "animate-slide-right"
                }`}
              />
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="w-full md:w-1/2 relative">
            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                key={`center-${currentIndex}`}
                src={current.centerImage}
                alt="Featured testimonial"
                className="w-full h-full object-cover animate-center-pop"
              />

              {/* TOP TITLE */}
              <div className="absolute top-6 left-1/2 -translate-x-1/2">
                <span className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                  Testimonials
                </span>
              </div>
            </div>

            {/* TEXT BELOW IMAGE */}
            <div className="mt-10 text-center px-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                What People Say
              </h2>

              <p
                key={`quote-${currentIndex}`}
                className="text-gray-600 max-w-xl mx-auto mb-8"
              >
                {current.quote}
              </p>

              <button className="px-8 py-3 border border-gray-300 rounded-full text-gray-900 font-medium hover:bg-gray-100 transition">
                Read More
              </button>

              {/* DOTS */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setDirection(index > currentIndex ? "right" : "left");
                      setCurrentIndex(index);
                    }}
                    className={`h-2 rounded-full transition ${
                      index === currentIndex
                        ? "bg-gray-900 w-6"
                        : "bg-gray-300 w-2 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* ARROWS */}
            <button
              onClick={goToPrevious}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white/80 flex items-center justify-center text-gray-800 hover:scale-110 transition"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={goToNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border bg-white/80 flex items-center justify-center text-gray-800 hover:scale-110 transition"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/4 hidden md:block opacity-50">
            <div className="rounded-3xl overflow-hidden aspect-[3/4]">
              <img
                key={`right-${currentIndex}`}
                src={current.rightImage}
                alt="Testimonial"
                className={`w-full h-full object-cover ${
                  direction === "right"
                    ? "animate-slide-right"
                    : "animate-slide-left"
                }`}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
