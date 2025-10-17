import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import stadiumHero1 from "@/assets/stadium-hero-1.jpg";
import stadiumHero2 from "@/assets/stadium-hero-2.jpg";
import stadiumHero3 from "@/assets/stadium-hero-3.jpg";

const heroImages = [
  {
    src: stadiumHero1,
    title: "Build the Dream Together",
    subtitle: "Support Arbaminch Stadium - Every ticket makes a difference"
  },
  {
    src: stadiumHero2,
    title: "Win Amazing Prizes",
    subtitle: "Contribute to greatness and stand a chance to win big"
  },
  {
    src: stadiumHero3,
    title: "A Legacy for Ethiopia",
    subtitle: "Your participation builds a world-class sports facility"
  }
];

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 3000); // change every 3 seconds

    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroImages.length) % heroImages.length);
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <img
            src={image.src}
            alt={image.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
        </div>
      ))}

      <div className="container relative h-full flex items-center px-4">
        <div className="max-w-2xl text-white animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-poppins mb-4 leading-tight">
            {heroImages[currentSlide].title}
          </h1>
          <p className="text-lg sm:text-xl mb-8 text-white/90 font-roboto">
            {heroImages[currentSlide].subtitle}
          </p>
          
          <Button 
            asChild 
            size="lg" 
            className="gradient-hero text-primary-foreground hover:opacity-90 transition-stadium text-lg px-8"
          >
            <Link to="/buy">Buy Ticket Now</Link>
          </Button>

          <div className="mt-8">
            <div className="flex gap-2 mb-2">
              {heroImages.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`h-1 rounded-full transition-all ${
                    index === currentSlide ? "bg-white w-12" : "bg-white/50 w-8"
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
            {/* Progress bar removed */}
          </div>
        </div>
      </div>

      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-stadium"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm p-2 rounded-full transition-stadium"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white" />
      </button>
    </section>
  );
};

export default Hero;
