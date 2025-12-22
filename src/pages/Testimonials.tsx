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
  const [direction, setDirection] = useState("right");

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
    <>
      <style>{`
        @layer utilities {
          /* Side images – elegant slide with depth */
          @keyframes slide-left {
            0% {
              transform: translate3d(40px, 0, 0) scale(0.92);
              opacity: 0;
              filter: blur(4px);
            }
            50% {
              filter: blur(2px);
            }
            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.6;
              filter: blur(0);
            }
          }
          @keyframes slide-right {
            0% {
              transform: translate3d(-40px, 0, 0) scale(0.92);
              opacity: 0;
              filter: blur(4px);
            }
            50% {
              filter: blur(2px);
            }
            100% {
              transform: translate3d(0, 0, 0) scale(1);
              opacity: 0.6;
              filter: blur(0);
            }
          }
          
          /* Center image – cinematic reveal */
          @keyframes center-pop {
            0% {
              transform: scale(1.12) rotate(-0.5deg);
              opacity: 0;
              filter: brightness(0.8);
            }
            60% {
              transform: scale(0.98) rotate(0deg);
            }
            100% {
              transform: scale(1) rotate(0deg);
              opacity: 1;
              filter: brightness(1);
            }
          }
          
          /* Text – sophisticated cascade */
          @keyframes fade-up {
            0% {
              transform: translate3d(0, 24px, 0);
              opacity: 0;
              filter: blur(2px);
            }
            100% {
              transform: translate3d(0, 0, 0);
              opacity: 1;
              filter: blur(0);
            }
          }
          
          /* Button hover glow effect */
          @keyframes button-glow {
            0%, 100% {
              box-shadow: 0 0 0 rgba(255, 255, 255, 0);
            }
            50% {
              box-shadow: 0 0 20px rgba(255, 255, 255, 0.15);
            }
          }
          
          /* Dot pulse animation */
          @keyframes dot-pulse {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.1);
            }
          }
          
          .animate-slide-left {
            animation: slide-left 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-slide-right {
            animation: slide-right 1s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-center-pop {
            animation: center-pop 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-fade-up {
            animation: fade-up 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          }
          .animate-button-glow {
            animation: button-glow 2s ease-in-out infinite;
          }
          .animate-dot-pulse {
            animation: dot-pulse 1s ease-in-out;
          }
          
          .delay-100 { animation-delay: 0.15s; }
          .delay-200 { animation-delay: 0.3s; }
          .delay-300 { animation-delay: 0.45s; }
          
          /* Smooth transitions for all interactive elements */
          .transition-smooth {
            transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          }
          
          /* Hardware acceleration for better performance */
          .gpu-accelerated {
            transform: translateZ(0);
            backface-visibility: hidden;
            perspective: 1000px;
          }
        }
      `}</style>
      
      <section className="py-24 bg-navy/70 overflow-hidden">
        <div className="relative">
          <div className="flex items-center justify-center gap-6 px-4">

            {/* LEFT IMAGE */}
            <div className="w-1/4 hidden md:block opacity-60 gpu-accelerated">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] transition-smooth hover:scale-[1.02] hover:opacity-80">
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
            <div className="w-full md:w-1/2 relative gpu-accelerated">
              <div className="relative rounded-3xl overflow-hidden aspect-[4/3] shadow-2xl transition-smooth hover:shadow-3xl">
                <img
                  key={`center-${currentIndex}`}
                  src={current.centerImage}
                  alt="Featured testimonial"
                  className="w-full h-full object-cover animate-center-pop"
                />

                <div className="absolute inset-0 bg-[#133B8A]/60" />

                {/* CONTENT */}
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8">
                  <span className="text-white/80 text-2xl font-bold mb-4 animate-fade-up">
                    Testimonials
                  </span>

                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 animate-fade-up delay-100">
                    What People Say
                  </h2>

                  <p
                    key={`quote-${currentIndex}`}
                    className="text-white/90 mb-8 max-w-md animate-fade-up delay-200"
                  >
                    {current.quote}
                  </p>

                  <button className="px-8 py-3 bg-white text-gray-900 rounded-full font-medium hover:bg-white/90 hover:scale-105 transition-smooth animate-fade-up delay-300 animate-button-glow">
                    Read More
                  </button>

                  {/* DOTS */}
                  <div className="flex gap-2 mt-6">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          setDirection(index > currentIndex ? "right" : "left");
                          setCurrentIndex(index);
                        }}
                        className={`h-2 rounded-full transition-smooth ${
                          index === currentIndex
                            ? "bg-white w-6 animate-dot-pulse"
                            : "bg-white/40 w-2 hover:bg-white/60 hover:scale-125"
                        }`}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>

              {/* ARROWS */}
              <button
                onClick={goToPrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 hover:border-white/80 transition-smooth backdrop-blur-sm"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={goToNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full border border-white/50 flex items-center justify-center text-white hover:bg-white/10 hover:scale-110 hover:border-white/80 transition-smooth backdrop-blur-sm"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>

            {/* RIGHT IMAGE */}
            <div className="w-1/4 hidden md:block opacity-60 gpu-accelerated">
              <div className="rounded-3xl overflow-hidden aspect-[3/4] transition-smooth hover:scale-[1.02] hover:opacity-80">
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
    </>
  );
};

export default TestimonialsSection;
