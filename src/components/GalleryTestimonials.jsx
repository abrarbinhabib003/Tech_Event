import { motion } from "framer-motion";
import { FaQuoteLeft } from "react-icons/fa";


const gallery = [
  "/gallery1.jpg",
  "/gallery2.jpg",
  "/gallery3.jpg",
  "/gallery4.jpg",
];


const testimonials = [
  {
    quote: "Best tech event I’ve ever attended!",
    name: "@john.techie",
  },
  {
    quote: "Networking, innovation, and fun — all in one place!",
    name: "@sara.dev",
  },
  {
    quote: "Can’t wait for next year. 10/10!",
    name: "@buildwithjake",
  },
];

const GalleryTestimonials = () => {
  return (
    <section className="bg-base-100 py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">📷 Gallery & Testimonials</h2>
        <p className="text-gray-500 mb-12 text-lg">
          Highlights from past TechWave experiences
        </p>

        {/* Image Carousel */}
        <div className="carousel w-full mb-16">
          {gallery.map((img, idx) => (
            <div id={`slide${idx}`} key={idx} className="carousel-item relative w-full">
              <img src={img} className="w-full h-[400px] object-cover rounded-2xl shadow" />
              <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                <a href={`#slide${(idx - 1 + gallery.length) % gallery.length}`} className="btn btn-circle">
                  ❮
                </a>
                <a href={`#slide${(idx + 1) % gallery.length}`} className="btn btn-circle">
                  ❯
                </a>
              </div>
            </div>
          ))}
        </div>

 
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-4">🎥 1-Minute Promo</h3>
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
              title="TechWave Promo Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full rounded-xl shadow-lg"
            ></iframe>
          </div>
        </div>

      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className="bg-white rounded-xl shadow-lg p-6 text-left border-l-4 border-primary"
            >
              <FaQuoteLeft className="text-primary text-xl mb-3" />
              <p className="text-gray-700 italic mb-4">“{t.quote}”</p>
              <p className="text-sm font-semibold text-gray-500">{t.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GalleryTestimonials;
