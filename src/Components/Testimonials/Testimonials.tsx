import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import './Testimonials.css'; // Import the CSS file

const Testimonials = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const testimonials = [
    {
      id: 1,
      name: "Ahmed Ahmed",
      role: "Developer",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face",
      text: "This platform changed the way I manage my online store. I can now track every order, predict risky returns, and focus more on growing my sales instead of fixing delivery problems.",
      gradientColors: "linear-gradient(135deg, #e8edff 0%, #f0e8ff 50%, #fdf0ff 100%)"
    },
    {
      id: 2,
      name: "Meriem Meriem",
      role: "Commerce",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      text: "The automated confirmations saved me so much time. I used to send messages manually for every order, now it's all done instantly by email or WhatsApp.",
      gradientColors: "linear-gradient(135deg, #f0fbff 0%, #e8f9ff 50%, #f0f8ff 100%)"
    },
    {
      id: 3,
      name: "Mohamed",
      role: "Commerce",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
      text: "It's rare to find a tool that really understands the Algerian market. From delivery agencies to Dahabia payments — everything just fits our workflow perfectly.",
      gradientColors: "linear-gradient(135deg, #fff0f2 0%, #fff5e8 50%, #fff2e6 100%)"
    },
    {
      id: 4,
      name: "Sarah Benali",
      role: "Store Owner",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&h=100&fit=crop&crop=face",
      text: "Customer support is incredible. They respond within minutes and actually understand our local business challenges. Game changer for my e-commerce business.",
      gradientColors: "linear-gradient(135deg, #f0f5f0 0%, #e8f0f5 50%, #f0f0ff 100%)"
    },
    {
      id: 5,
      name: "Yacine Khelifi",
      role: "Entrepreneur",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      text: "Integration was seamless. Within hours, my entire inventory was synced and orders started flowing automatically. No technical headaches whatsoever.",
      gradientColors: "linear-gradient(135deg, #f0fffe 0%, #e8f0ff 50%, #f5e8ff 100%)"
    },
    {
      id: 6,
      name: "Amina Zoubir",
      role: "Marketing Manager",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      text: "The analytics dashboard gives me insights I never had before. Understanding customer behavior helped me increase conversions by 40%.",
      gradientColors: "linear-gradient(135deg, #f0fff5 0%, #f0fdff 50%, #e8edff 100%)"
    },
    {
      id: 7,
      name: "Karim Djelloul",
      role: "Freelancer",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop&crop=face",
      text: "Perfect for small businesses like mine. The pricing is fair and the features are exactly what I need to compete with bigger stores.",
      gradientColors: "linear-gradient(135deg, #f0f5f0 0%, #e8f0f5 50%, #f0f0ff 100%)"
    },
    {
      id: 8,
      name: "Fatima Labed",
      role: "Fashion Designer",
      avatar: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop&crop=face",
      text: "My fashion boutique sales doubled since using this platform. The inventory management and customer notifications work flawlessly together.",
      gradientColors: "linear-gradient(135deg, #fdf0ff 0%, #ffe8f0 50%, #f0fbff 100%)"
    },
    {
      id: 9,
      name: "Omar Boudjema",
      role: "Tech Consultant",
      avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=100&h=100&fit=crop&crop=face",
      text: "I've recommended this to all my clients. The API integration is smooth and the documentation is crystal clear. Developer-friendly platform.",
      gradientColors: "linear-gradient(135deg, #e8edff 0%, #f0e8ff 50%, #fdf0ff 100%)"
    },
    {
      id: 10,
      name: "Lina Messaoudi",
      role: "Startup Founder",
      avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop&crop=face",
      text: "As a startup, we needed something reliable and affordable. This platform grew with us from 10 orders to 1000+ orders per month seamlessly.",
      gradientColors: "linear-gradient(135deg, #fffef0 0%, #fff8f0 50%, #ffe8e8 100%)"
    },
    {
      id: 11,
      name: "Raouf Benchikh",
      role: "Operations Manager",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
      text: "The delivery tracking integration with local couriers saved us countless hours. Our customers always know exactly where their packages are.",
      gradientColors: "linear-gradient(135deg, #f0fffe 0%, #f0f5e8 50%, #e8edff 100%)"
    },
    {
      id: 12,
      name: "Nesrine Hamdi",
      role: "Digital Marketer",
      avatar: "https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&h=100&fit=crop&crop=face",
      text: "The marketing tools are outstanding. Email campaigns, abandoned cart recovery, and customer segmentation all work perfectly out of the box.",
      gradientColors: "linear-gradient(135deg, #fff0f2 0%, #fff5e8 50%, #fff2e6 100%)"
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3));
  };

  const getCurrentTestimonials = () => {
    const start = currentSlide * 3;
    return testimonials.slice(start, start + 3);
  };

  return (
    <div className="testimonials-section">
      <div className="testimonials-header">
        <div className="header-left">
          <h1 className="testimonials-title">What our users say about us</h1>
          <p className="testimonials-subtitle">
            Hear directly from the students, developers, and organizers who 
            power our platform with their passion, feedback, and success stories.
          </p>
        </div>
        <button className="interact-button">Interact With us</button>
      </div>

      <div className="testimonials-container">
        {getCurrentTestimonials().map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="card-header">
              <div className="user-info">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name}
                  className="user-avatar"
                />
                <div className="user-details">
                  <h3 className="user-name">{testimonial.name}</h3>
                  <p className="user-role">{testimonial.role}</p>
                </div>
              </div>
              <div className="quote-symbol">"</div>
            </div>
            
            <div className="testimonial-content">
              <p className="testimonial-text">{testimonial.text}</p>
            </div>
            
            {/* Beautiful gradient bar with shadow */}
            <div 
              className="gradient-bar"
              style={{ background: testimonial.gradientColors }}
            ></div>
          </div>
        ))}
      </div>

      <div className="navigation-controls">
        <button 
          className="nav-button prev" 
          onClick={prevSlide}
          disabled={currentSlide === 0}
        >
          <ChevronLeft size={18} />
        </button>
        
        <div className="slide-indicators">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }, (_, index) => (
            <button
              key={index}
              className={`indicator ${currentSlide === index ? 'active' : ''}`}
              onClick={() => setCurrentSlide(index)}
            />
          ))}
        </div>
        
        <button 
          className="nav-button next" 
          onClick={nextSlide}
          disabled={currentSlide === Math.ceil(testimonials.length / 3) - 1}
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default Testimonials;