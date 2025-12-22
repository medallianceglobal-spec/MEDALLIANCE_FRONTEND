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
    <section className="py-24 bg-gradient-to-br from-[#121B3A] via-[#2A2D7C] to-[#5B21B6] overflow-hidden">
      <div className="relative">
        <div className="flex items-center justify-center gap-6 px-4">

          {/* LEFT IMAGE */}
          <div className="w-1/4 hidden md:block">
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

            {/* HEADING */}
            <div className="absolute -top-14 left-1/2 -translate-x-1/2 z-10">
              <span className="text-white text-3xl md:text-4xl font-bold tracking-wide">
                Testimonials
              </span>
            </div>

            <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-xl">
              <img
                key={`center-${currentIndex}`}
                src={current.centerImage}
                alt="Featured testimonial"
                className="w-full h-full object-cover animate-center-pop"
              />
            </div>

            {/* TEXT + CONTROLS */}
            <div className="mt-10 text-center px-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-white mb-4">
                What People Say
              </h2>

              <p
                key={`quote-${currentIndex}`}
                className="text-white/90 max-w-xl mx-auto mb-8"
              >
                {current.quote}
              </p>

              {/* BUTTON + ARROWS */}
              <div className="flex items-center justify-center gap-6">
                <button
                  onClick={goToPrevious}
                  className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <button className="px-8 py-3 border border-white/40 rounded-full text-white font-medium hover:bg-white/10 transition">
                  Read More
                </button>

                <button
                  onClick={goToNext}
                  className="w-11 h-11 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 transition"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

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
                        ? "bg-white w-6"
                        : "bg-white/40 w-2 hover:bg-white/60"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-1/4 hidden md:block">
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
