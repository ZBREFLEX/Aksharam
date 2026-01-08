import { useEffect, useRef, useState } from 'react';
import { Instagram, Facebook, Youtube, Menu, X } from 'lucide-react';
import wavePattern from './assets/6e7c00379a0f0ced59eb2110e859806c60ff0d58.webp';
import kottayamIllustration from './assets/60a054ad3b5c1dea8dcf5b82e985297f515da54d.webp';
import aksharamLogo from './assets/409a809ee95bee3b3e5aa6743e1dcac95f47391a.webp';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>('home');

  const navigateTo = (page: string) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };

  if (currentPage === 'about-aksharam') {
    return <AboutAksharamPage onBack={() => navigateTo('home')} onNavigate={navigateTo} />;
  }

  if (currentPage === 'about-2026') {
    return <About2026Page onBack={() => navigateTo('home')} onNavigate={navigateTo} />;
  }
  if (currentPage === 'about-Dinu') {
    return <AboutDinuSection onBack={() => navigateTo('about-2026')} />;
  }
  if (currentPage === 'about-Aju') {
    return <AboutAjuSection onBack={() => navigateTo('about-2026')} />;
  }

  if (currentPage === 'all-speakers') {
    return <AllSpeakersPage onBack={() => navigateTo('home')} />;
  }

  if (currentPage === 'all-sponsors') {
    return <AllSponsorsPage onBack={() => navigateTo('home')} />;
  }
  
 

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efeb' }}>
      <Navbar />
      <HeroSection />
      <AboutSection onNavigate={navigateTo} />
      <About2026Section onNavigate={navigateTo} />
      <SponsorsSection onNavigate={navigateTo} />
      <SpeakersSection onNavigate={navigateTo} />
      <ContactSection />
      <SocialSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-4 border-b"
      style={{ 
        backgroundColor: 'rgba(240, 239, 235, 0.98)',
        borderColor: 'rgba(11, 11, 11, 0.1)',
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img
            src={aksharamLogo}
            alt="Aksharam"
            className="h-10 md:h-14 w-auto"
            style={{ 
              filter: 'contrast(1.1) brightness(0.95)',
              transition: 'opacity 0.3s ease'
            }}
          />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex gap-6 xl:gap-8 items-center">
          <a 
            href="#home"
            className="transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.02em'
            }}
          >
            Home
          </a>
          <a 
            href="#about"
            className="transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.02em'
            }}
          >
            About
          </a>
          <a 
            href="#sponsors"
            className="transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.02em'
            }}
          >
            Sponsors
          </a>
          <a 
            href="#contact"
            className="transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.02em'
            }}
          >
            Contact
          </a>
          
          {/* Register Buttons */}
         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfvWw-IE2YNd2EDHk5X5uIWMOYT79MnxWAwRSmQIb_VATeH2Q/viewform?usp=publish-editor"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 transition-all duration-300"
  style={{
    backgroundColor: '#f0efeb',            // cream fill
    color: '#0C3B2E',                       // dark green text
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    borderRadius: '99px',                 // full pill shape
    border: '2px solid #000000',            // thick dark border
    whiteSpace: 'nowrap'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#FFE8B3'; // slightly deeper cream
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#f0efeb';
  }}
>
  Register as Sponsor
</a>

         <a
  href="https://docs.google.com/forms/d/e/1FAIpQLSfex3klzjhRtxikBlt27xu04jksbOpdvp-Y9ofrAWFLkxITpw/viewform?usp=header"
  target="_blank"
  rel="noopener noreferrer"
  className="px-6 py-2 transition-all duration-300"
  style={{
    backgroundColor: '#f0efeb',            // same cream fill
    color: '#0C3B2E',                       // same dark green text
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    borderRadius: '99px',                 // pill shape
    border: '2px solid #000000',            // thick black outline
    whiteSpace: 'nowrap'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.backgroundColor = '#FFE8B3'; // hover cream
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.backgroundColor = '#f0efeb';
  }}
>
  Register as Volunteer
</a>

        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden p-2 transition-opacity hover:opacity-70"
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            color: '#2a2a2a'
          }}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div 
          className="lg:hidden mt-4 pb-4 border-t"
          style={{ borderColor: 'rgba(11, 11, 11, 0.1)' }}
        >
          <div className="flex flex-col gap-4 pt-4">
            <a 
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="transition-opacity hover:opacity-70"
              style={{
                color: '#2a2a2a',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                padding: '8px 0'
              }}
            >
              Home
            </a>
            <a 
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="transition-opacity hover:opacity-70"
              style={{
                color: '#2a2a2a',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                padding: '8px 0'
              }}
            >
              About
            </a>
            <a 
              href="#sponsors"
              onClick={() => setIsMenuOpen(false)}
              className="transition-opacity hover:opacity-70"
              style={{
                color: '#2a2a2a',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                padding: '8px 0'
              }}
            >
              Sponsors
            </a>
            <a 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
              className="transition-opacity hover:opacity-70"
              style={{
                color: '#2a2a2a',
                textDecoration: 'none',
                fontSize: '1rem',
                letterSpacing: '0.02em',
                padding: '8px 0'
              }}
            >
              Contact
            </a>
            
            {/* Mobile Register Buttons */}
            <div className="flex flex-col gap-3 pt-2">
              <a
                href="https://forms.google.com/sponsor"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-center transition-all duration-300"
                style={{
                  backgroundColor: '#5b1b8d',
                  color: '#f0efeb',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  letterSpacing: '0.02em',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                Register as Sponsor
              </a>
              <a
                href="https://forms.google.com/volunteer"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-3 text-center transition-all duration-300"
                style={{
                  backgroundColor: '#2a2a2a',
                  color: '#f0efeb',
                  textDecoration: 'none',
                  fontSize: '0.875rem',
                  letterSpacing: '0.02em',
                  borderRadius: '2px',
                  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
                }}
              >
                Register as Volunteer
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function HeroSection() {
  const waveRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const waveElement = waveRef.current;
    if (!waveElement) return;

    let animationFrame: number;
    let position = 0;

    const animate = () => {
      position -= 0.15;
      waveElement.style.transform = `translateX(${position}px)`;
      
      if (position <= -100) {
        position = 0;
      }
      
      animationFrame = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Base background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#f0efeb' }} />

      {/* Animated wave background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          ref={waveRef}
          className="absolute inset-0 w-[200%] h-full"
          style={{
            backgroundImage: `url(${wavePattern})`,
            backgroundRepeat: 'repeat-x',
            backgroundSize: 'auto 100%',
            backgroundPosition: 'center',
            opacity: 0.12,
            willChange: 'transform'
          }}
        />
      </div>

      {/* Social media icons - top right */}
      <div 
        className="absolute top-24 md:top-28 right-4 md:right-8 z-20 flex gap-3 md:gap-4"
        style={{ pointerEvents: 'auto' }}
      >
        <a
          href="https://www.instagram.com/aksharamlitfest/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition-all duration-300"
          style={{ 
            color: '#2a2a2a',
            backgroundColor: 'rgba(240, 239, 235, 0.6)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 239, 235, 0.9)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 239, 235, 0.6)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
          }}
        >
          <Instagram size={20} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.facebook.com/profile.php?id=61585870871075"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition-all duration-300"
          style={{ 
            color: '#2a2a2a',
            backgroundColor: 'rgba(240, 239, 235, 0.6)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 239, 235, 0.9)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 239, 235, 0.6)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
          }}
        >
          <Facebook size={20} strokeWidth={1.5} />
        </a>
        <a
          href="https://www.youtube.com/channel/UChhHioSp5duUN5yG9S1obpw"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 transition-all duration-300"
          style={{ 
            color: '#2a2a2a',
            backgroundColor: 'rgba(240, 239, 235, 0.6)',
            borderRadius: '50%',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 1px 3px rgba(0, 0, 0, 0.08)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 239, 235, 0.9)';
            e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.12)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = 'rgba(240, 239, 235, 0.6)';
            e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.08)';
          }}
        >
          <Youtube size={20} strokeWidth={1.5} />
        </a>
      </div>

      {/* Floating illustration */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div 
          className="w-full max-w-3xl px-6"
          style={{
            filter: 'drop-shadow(0 8px 24px rgba(0, 0, 0, 0.03))',
            animation: 'float 8s ease-in-out infinite'
          }}
        >
          <img
            src={kottayamIllustration}
            alt="Cultural illustration"
            className="w-full h-auto opacity-55"
            style={{ mixBlendMode: 'multiply' }}
          />
        </div>
      </div>

      {/* Hero text */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <h1 
          className="mb-5"
          style={{ 
            marginTop: "420px",
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(2.5rem, 4vw, 5rem)',
            lineHeight: '1.2',
            color: '#0b0b0b',
            letterSpacing: '-0.02em',
          }}
        >
          Aksharam Literature Festival
        </h1>
        <p 
          style={{ 
            fontSize: 'clamp(1rem, 2vw, 1.5rem)',
            lineHeight: '1.6',
            color: '#2a2a2a',
            letterSpacing: '0.01em'
          }}
        >
          A celebration of language, thought, and culture
        </p>
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
      `}</style>
    </section>
  );
}

function AboutSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section id="about" className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f0efeb' }}>
      <div className="max-w-3xl mx-auto">
        <h2 
          className="mb-6 md:mb-8"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#0b0b0b',
            letterSpacing: '-0.01em'
          }}
        >
          About Aksharam
        </h2>
        <p 
          className="mb-6"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            lineHeight: '1.8',
            color: '#2a2a2a',
            letterSpacing: '0.005em',
            fontWeight: "500", 
          }}
        >
          AKSHARAM is a contemporary literature festival that reclaims letters as acts of truth, memory, and resistance.
        </p>
        <p 
          className="mb-6"
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.125rem)',
            lineHeight: '1.8',
            color: '#2a2a2a',
            letterSpacing: '0.005em',
          }}
        >
          In an era shaped by “post-truth,” AKSHARAM stands as a collective chant for truth, language, and critical thought. Rooted in Kottayam, the historic Land of Letters, the festival draws inspiration from the landmark 1957 literary conference that shaped modern Kerala’s cultural consciousness.
AKSHARAM brings together writers, thinkers, and artists to explore literature as a voice for the marginalized and as a space for rational, cultural dialogue. After seven decades, a stage for ideas, debate, and creative exchange rises again in Kottayam.
Letters are noisy. They refuse silence, always.

        </p>
        <button
          onClick={() => onNavigate('about-aksharam')}
          className="transition-all duration-300"
          style={{
            color: '#5b1b8d',
            textDecoration: 'underline',
            textUnderlineOffset: '4px',
            fontSize: '1rem',
            letterSpacing: '0.01em',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: 0
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = '0.7';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = '1';
          }}
        >
          Read more
        </button>
      </div>
    </section>
  );
}

function About2026Section({ onNavigate }: { onNavigate: (page: string) => void }) {
  return (
    <section
      className="py-16 md:py-24 px-6"
      style={{ backgroundColor: "#f0efeb" }}
    >
      <div className="max-w-3xl mx-auto">
        <h2
          className="mb-6 md:mb-8"
          style={{
            fontFamily: "Georgia, serif",
            fontSize: "clamp(1.5rem, 3vw, 2rem)",
            color: "#0b0b0b",
            letterSpacing: "-0.01em",
          }}
        >
          About Aksharam 2026
        </h2>
        <p
          className="mb-6"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.8",
            color: "#2a2a2a",
            letterSpacing: "0.005em",
            fontWeight: "500",
          }}
        >
          Unseen Letters — Voices erased from history, remembered through
          literature and art.
        </p>
        <p
          style={{
            fontFamily: '"Noto Serif Malayalam", "Noto Sans Malayalam", serif',
            fontSize: "1.25rem",
            lineHeight: "1.8",
            textAlign: "center",
            whiteSpace: "pre-line",
          }}
        >
          {`“കാണുന്നിലോകക്ഷരവും
എന്റെ വസന്തത്തെപ്പറ്റി
കാണുന്നുണ്ടോ വസന്തത്തിലെ
ചരിത്രങ്ങൾ”`}
        </p>

        <p
          className="mb-6"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.125rem)",
            lineHeight: "1.8",
            color: "#2a2a2a",
            letterSpacing: "0.005em",
          }}
        >
          A century ago, Poykayil Appachan wrote of a painful absence — the
          absence of letters that record the history of his own people.
          Throughout history, eras have repeatedly silenced the voices of those
          marginalized. Languages, writings, memories, and lived experiences of
          many communities have been erased or rendered invisible by structures
          of caste, class, gender, religion, and power. Letters are more than
          linguistic forms; they are acts of resistance against forgetting.
          Literature and the arts become political when they listen to unheard
          voices and read what history has chosen not to preserve. Festival of
          Unseen Letters is a platform of remembrance — a cultural defence built
          with letters against oblivion. It asserts that no history is complete
          without reading what was left unseen.
        </p>
        <button
          onClick={() => onNavigate("about-2026")}
          className="transition-all duration-300"
          style={{
            color: "#5b1b8d",
            textDecoration: "underline",
            textUnderlineOffset: "4px",
            fontSize: "1rem",
            letterSpacing: "0.01em",
            background: "none",
            border: "none",
            cursor: "pointer",
            padding: 0,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.opacity = "0.7";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.opacity = "1";
          }}
        >
          Read more
        </button>
      </div>
    </section>
  );
}

function SponsorsSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const sponsors = [
    {
      id: 1,
      name: 'Sponsor Name',
      position: 'Title Sponsor',
      description: 'Brief description of sponsor and their contribution to the festival.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Partner Organization',
      position: 'Presenting Partner',
      description: 'Brief description of partner and their contribution to the festival.',
      image: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Cultural Foundation',
      position: 'Platinum Sponsor',
      description: 'Brief description of foundation and their contribution to the festival.',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Literary Trust',
      position: 'Gold Sponsor',
      description: 'Brief description of trust and their contribution to the festival.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Publishing House',
      position: 'Silver Sponsor',
      description: 'Brief description of publishing house and their contribution to the festival.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section id="sponsors" className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f0efeb' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#0b0b0b',
              letterSpacing: '-0.01em'
            }}
          >
            Sponsors & Partners
          </h2>
          <p 
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.8',
              color: '#2a2a2a',
              letterSpacing: '0.005em',
              maxWidth: '42rem'
            }}
          >
            We extend our gratitude to our sponsors and partners whose support makes 
            Aksharam Literature Festival possible.
          </p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-start">
            <p 
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#2a2a2a',
                letterSpacing: '0.005em'
              }}
            >
              Our sponsors share our commitment to fostering literary culture and 
              supporting meaningful dialogue. Their partnership enables us to bring 
              together diverse voices and create a platform for cultural exchange.
            </p>
          </div>

          <div 
            className="relative"
            style={{ height: '600px' }}
          >
            <div 
              className="absolute top-0 left-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #f0efeb 0%, transparent 100%)'
              }}
            />
            
            <div
              ref={scrollRef}
              className="h-full overflow-x-auto overflow-y-hidden"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style>{`
                #sponsors div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              <div className="flex gap-8 h-full pr-16">
                {sponsors.map((sponsor) => (
                  <div key={sponsor.id} style={{ minWidth: '350px' }}>
                    <SponsorCard sponsor={sponsor} />
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="absolute top-0 right-0 bottom-0 w-16 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #f0efeb 0%, transparent 100%)'
              }}
            />
          </div>
        </div>

        {/* Mobile: Single column */}
        <div className="md:hidden space-y-8">
          {sponsors.map((sponsor) => (
            <SponsorCard key={sponsor.id} sponsor={sponsor} />
          ))}
        </div>

        {/* View More Sponsors button */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={() => onNavigate('all-sponsors')}
            className="px-6 py-3 transition-all duration-300"
            style={{
             backgroundColor: '#f0efeb',            // cream fill
    color: '#0C3B2E',                       // dark green text
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    borderRadius: '99px',                 // full pill shape
    border: '2px solid #000000',            // thick dark border
    whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFE8B3';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f0efeb';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
          >
            View More Sponsors
          </button>
        </div>
      </div>
    </section>
  );
}

interface Sponsor {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

function SponsorCard({ sponsor }: { sponsor: Sponsor }) {
  return (
    <div
      className="group transition-all duration-500 ease-out"
      style={{
        borderBottom: '1px solid rgba(11, 11, 11, 0.06)',
        paddingBottom: '2rem'
      }}
    >
      <div 
        className="mb-4 overflow-hidden"
        style={{
          borderRadius: '2px'
        }}
      >
        <img
          src={sponsor.image}
          alt={sponsor.name}
          className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            filter: 'grayscale(100%) contrast(1.1)',
            opacity: 0.85
          }}
        />
      </div>

      <div>
        <h3 
          className="mb-2"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            color: '#0b0b0b',
            letterSpacing: '-0.005em'
          }}
        >
          {sponsor.name}
        </h3>
        
        <p 
          className="mb-3"
          style={{
            fontSize: '0.9375rem',
            color: '#2a2a2a',
            letterSpacing: '0.01em',
            opacity: 0.8
          }}
        >
          {sponsor.position}
        </p>

        <p 
          className="mb-4"
          style={{
            fontSize: '0.9375rem',
            lineHeight: '1.7',
            color: '#2a2a2a',
            letterSpacing: '0.005em'
          }}
        >
          {sponsor.description}
        </p>

        <a 
          href="#"
          className="inline-block group-hover:underline"
          style={{
            color: '#5b1b8d',
            textDecoration: 'none',
            textUnderlineOffset: '4px',
            fontSize: '0.9375rem',
            letterSpacing: '0.01em',
            transition: 'text-decoration 0.3s ease'
          }}
        >
          Read more
        </a>
      </div>
    </div>
  );
}

function SpeakersSection({ onNavigate }: { onNavigate: (page: string) => void }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      scrollContainer.scrollLeft += e.deltaY;
    };

    scrollContainer.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      scrollContainer.removeEventListener('wheel', handleWheel);
    };
  }, []);

  const speakers = [
    {
      id: 1,
      name: 'Speaker Name',
      position: 'Novelist & Essayist',
      description: 'Brief description of speaker and their contribution to literature.',
      image: 'https://images.unsplash.com/photo-1680356475155-3ca8fa2192aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjB3cml0ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3MTQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Speaker Name',
      position: 'Poet & Translator',
      description: 'Brief description of speaker and their contribution to literature.',
      image: 'https://images.unsplash.com/photo-1713610125715-ec6c1694b345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0JTIwcmVhZGluZyUyMGJvb2t8ZW58MXx8fHwxNzY3NzkxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Speaker Name',
      position: 'Literary Scholar',
      description: 'Brief description of speaker and their contribution to literature.',
      image: 'https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzY3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Speaker Name',
      position: 'Cultural Critic',
      description: 'Brief description of speaker and their contribution to literature.',
      image: 'https://images.unsplash.com/photo-1558962009-34fff2bd2e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbGxlY3R1YWwlMjB0aGlua2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzkxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      name: 'Speaker Name',
      position: 'Historian & Author',
      description: 'Brief description of speaker and their contribution to literature.',
      image: 'https://images.unsplash.com/photo-1743327557042-a03327d0e9ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvbGFyJTIwYWNhZGVtaWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3OTEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <section id="speakers" className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f0efeb' }}>
      <div className="max-w-6xl mx-auto">
        <div className="mb-12 md:mb-16">
          <h2 
            className="mb-4"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#0b0b0b',
              letterSpacing: '-0.01em'
            }}
          >
            Speakers
          </h2>
          <p 
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.125rem)',
              lineHeight: '1.8',
              color: '#2a2a2a',
              letterSpacing: '0.005em',
              maxWidth: '42rem'
            }}
          >
            Join us for insightful talks and discussions with leading literary figures who bring 
            fresh perspectives on the world of literature.
          </p>
        </div>

        {/* Desktop: Two-column layout */}
        <div className="hidden md:grid md:grid-cols-2 md:gap-12 lg:gap-16">
          <div className="flex flex-col justify-start">
            <p 
              style={{
                fontSize: '1rem',
                lineHeight: '1.8',
                color: '#2a2a2a',
                letterSpacing: '0.005em'
              }}
            >
              Our speakers bring a wealth of knowledge and experience across diverse literary 
              traditions and forms. From acclaimed authors to emerging voices, each speaker 
              offers unique insights into the evolving landscape of contemporary literature.
            </p>
          </div>

          <div 
            className="relative"
            style={{ height: '600px' }}
          >
            <div 
              className="absolute top-0 left-0 bottom-0 w-16 z-10 pointer-events-none"
              style={{
                background: 'linear-gradient(to right, #f0efeb 0%, transparent 100%)'
              }}
            />
            
            <div
              ref={scrollRef}
              className="h-full overflow-x-auto overflow-y-hidden"
              style={{
                scrollbarWidth: 'none',
                msOverflowStyle: 'none'
              }}
            >
              <style>{`
                #speakers div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              
              <div className="flex gap-8 h-full pr-16">
                {speakers.map((speaker) => (
                  <div key={speaker.id} style={{ minWidth: '350px' }}>
                    <SpeakerCard speaker={speaker} />
                  </div>
                ))}
              </div>
            </div>

            <div 
              className="absolute top-0 right-0 bottom-0 w-16 pointer-events-none"
              style={{
                background: 'linear-gradient(to left, #f0efeb 0%, transparent 100%)'
              }}
            />
          </div>
        </div>

        {/* Mobile: Single column */}
        <div className="md:hidden space-y-8">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.id} speaker={speaker} />
          ))}
        </div>

        {/* View More Speakers button */}
        <div className="text-center mt-8 md:mt-12">
          <button
            onClick={() => onNavigate('all-speakers')}
            className="px-6 py-3 transition-all duration-300"
            style={{
               backgroundColor: '#f0efeb',            // cream fill
    color: '#0C3B2E',                       // dark green text
    textDecoration: 'none',
    fontSize: '1rem',
    fontWeight: 600,
    letterSpacing: '0.01em',
    borderRadius: '99px',                 // full pill shape
    border: '2px solid #000000',            // thick dark border
    whiteSpace: 'nowrap'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#FFE8B3';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f0efeb';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
          >
            View More Speakers
          </button>
        </div>
      </div>
    </section>
  );
}

interface Speaker {
  id: number;
  name: string;
  position: string;
  description: string;
  image: string;
}

function SpeakerCard({ speaker }: { speaker: Speaker }) {
  return (
    <div
      className="group transition-all duration-500 ease-out"
      style={{
        borderBottom: '1px solid rgba(11, 11, 11, 0.06)',
        paddingBottom: '2rem'
      }}
    >
      <div 
        className="mb-4 overflow-hidden"
        style={{
          borderRadius: '2px'
        }}
      >
        <img
          src={speaker.image}
          alt={speaker.name}
          className="w-full h-48 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{
            filter: 'grayscale(100%) contrast(1.1)',
            opacity: 0.85
          }}
        />
      </div>

      <div>
        <h3 
          className="mb-2"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: '1.25rem',
            color: '#0b0b0b',
            letterSpacing: '-0.005em'
          }}
        >
          {speaker.name}
        </h3>
        
        <p 
          className="mb-3"
          style={{
            fontSize: '0.9375rem',
            color: '#2a2a2a',
            letterSpacing: '0.01em',
            opacity: 0.8
          }}
        >
          {speaker.position}
        </p>

        <p 
          className="mb-4"
          style={{
            fontSize: '0.9375rem',
            lineHeight: '1.7',
            color: '#2a2a2a',
            letterSpacing: '0.005em'
          }}
        >
          {speaker.description}
        </p>

        <a 
          href="#"
          className="inline-block group-hover:underline"
          style={{
            color: '#5b1b8d',
            textDecoration: 'none',
            textUnderlineOffset: '4px',
            fontSize: '0.9375rem',
            letterSpacing: '0.01em',
            transition: 'text-decoration 0.3s ease'
          }}
        >
          Read more
        </a>
      </div>
    </div>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f0efeb' }}>
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Contact Info */}
        <div>
          <h2 
            className="mb-6 md:mb-8"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              color: '#0b0b0b',
              letterSpacing: '-0.01em'
            }}
          >
            Contact
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col gap-1">
              <span className="text-sm uppercase tracking-wider opacity-60" style={{ color: '#2a2a2a' }}>General Enquiries</span>
              <a 
                href="mailto:aksharamlitfest@gmail.com"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#2a2a2a',
                  textDecoration: 'none',
                  borderBottom: '1px solid #2a2a2a',
                  paddingBottom: '2px',
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  letterSpacing: '0.005em'
                }}
              >
                aksharamlitfest@gmail.com
              </a>
            </div>
            
            <div className="flex flex-col gap-1">
              <span className="text-sm uppercase tracking-wider opacity-60" style={{ color: '#2a2a2a' }}>Contact Number</span>
              <a 
                href="mailto:office@aksharamlitfest.com"
                style={{
                  fontSize: 'clamp(1rem, 2vw, 1.125rem)',
                  color: '#2a2a2a',
                  textDecoration: 'none',
                  borderBottom: '1px solid #2a2a2a',
                  paddingBottom: '2px',
                  display: 'inline-block',
                  alignSelf: 'flex-start',
                  letterSpacing: '0.005em'
                }}
              >
                +91 89218 09750
              </a>
            </div>

            <div className="flex flex-col gap-1 pt-4">
              <span className="text-sm uppercase tracking-wider opacity-60" style={{ color: '#2a2a2a' }}>Location</span>
              <p 
                style={{
                  fontSize: '1rem',
                  lineHeight: '1.6',
                  color: '#2a2a2a'
                }}
              >
                CMS College,<br/>
                Kottayam, Kerala 686001
              </p>
            </div>
          </div>
        </div>

        {/* Right Side: Map */}
        <div 
          className="w-full h-[400px] md:h-[450px] overflow-hidden"
          style={{ 
            borderRadius: '2px',
            boxShadow: '0 4px 20px rgba(0,0,0,0.05)',
            border: '1px solid rgba(0,0,0,0.05)'
          }}
        >
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3933.981735521457!2d76.5206664!3d9.596840699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b062b0c12abf377%3A0x59076985a0f3b64!2sCMS%20College%20Kottayam!5e0!3m2!1sen!2sin!4v1767874517335!5m2!1sen!2sin" 
            width="100%" 
            height="100%" 
            style={{ border: 0, filter: 'grayscale(1) contrast(0.9) opacity(0.9)' }} 
            allowFullScreen={true} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Aksharam Location Map"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

function SocialSection() {
  return (
    <section className="py-16 md:py-24 px-6" style={{ backgroundColor: '#f0efeb' }}>
      <div className="max-w-3xl mx-auto">
        <h2 
          className="mb-6 md:mb-8"
          style={{
            fontFamily: 'Georgia, serif',
            fontSize: 'clamp(1.5rem, 3vw, 2rem)',
            color: '#0b0b0b',
            letterSpacing: '-0.01em'
          }}
        >
          Follow Us
        </h2>
        <div className="flex flex-wrap gap-6 md:gap-8 items-center">
          <a 
            href="https://www.instagram.com/aksharamlitfest/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.01em'
            }}
          >
            <Instagram size={20} strokeWidth={1.5} />
            <span>Instagram</span>
          </a>
          <a 
            href="https://www.facebook.com/profile.php?id=61585870871075"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.01em'
            }}
          >
            <Facebook size={20} strokeWidth={1.5} />
            <span>Facebook</span>
          </a>
          <a 
            href="https://www.youtube.com/channel/UChhHioSp5duUN5yG9S1obpw"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-opacity hover:opacity-70"
            style={{
              color: '#2a2a2a',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.01em'
            }}
          >
            <Youtube size={20} strokeWidth={1.5} />
            <span>YouTube</span>
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-8 md:py-12 px-6 border-t" style={{ backgroundColor: '#f0efeb', borderColor: 'rgba(11, 11, 11, 0.1)' }}>
      <div className="max-w-3xl mx-auto text-center">
        <p 
          style={{
            fontSize: '0.875rem',
            color: '#2a2a2a',
            letterSpacing: '0.02em'
          }}
        >
          Aksharam Literature Festival 2026
        </p>
      </div>
    </footer>
  );
}

// Detail Pages

function AboutAksharamPage({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0efeb" }}>
      <Navbar />
      <section className="py-16 md:py-24 px-6 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: "#2a2a2a",
              color: "#f0efeb",
              textDecoration: "none",
              fontSize: "1rem",
              letterSpacing: "0.02em",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2a2a2a";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            ← Back to Home
          </button>

          <h1
            className="mb-8"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0b0b0b",
              letterSpacing: "-0.01em",
            }}
          >
            About Aksharam
          </h1>

          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.8",
              color: "#2a2a2a",
              letterSpacing: "0.005em",
            }}
          >
            <p className="mb-6">
              AKSHARAM is born out of a historical and cultural urgency. In an
              era shaped by “post-truth,” where misinformation erodes public
              discourse and lived experiences are erased from record, the
              festival positions literature as a collective chant for truth,
              language, and critical thought. Rooted in Kottayam — the historic
              Land of Letters — AKSHARAM draws inspiration from the landmark
              1957 literary conference that played a defining role in shaping
              modern Kerala’s cultural and intellectual consciousness. After
              seven decades, the city once again becomes a stage for ideas,
              debates, and creative exchange. AKSHARAM brings together writers,
              thinkers, artists, and cultural practitioners to explore
              literature not merely as aesthetic expression, but as a political
              and ethical act. The festival foregrounds marginalized voices,
              forgotten languages, and suppressed narratives, asserting
              literature as a space for rational dialogue, remembrance, and
              dissent.
            </p>

            <p className="mb-6" style={{ fontWeight: "700" }}>
              Through conversations, readings, performances, and
              interdisciplinary encounters, AKSHARAM affirms a simple yet
              powerful belief: letters do not accept silence. They speak,
              resist, and endure — ensuring that no history remains incomplete.
            </p>
            <h1
              className="mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#0b0b0b",
                letterSpacing: "-0.01em",
              }}
            >
              About MGOCSM (Malankara Orthodox Church Student Movement)
            </h1>
            <p className="mb-6">
              The Malankara Orthodox Church Student Movement (MGOCSM) is the
              student wing of the Malankara Orthodox Syrian Church, committed to
              nurturing socially responsible, intellectually curious, and
              ethically grounded youth. Through educational, cultural, and
              community-oriented initiatives, MGOCSM encourages students to
              engage with questions of faith, society, justice, and service.
              With a strong emphasis on dialogue, leadership, and social
              awareness, MGOCSM actively participates in cultural and academic
              platforms that foster critical thinking and inclusive
              perspectives. Its association with AKSHARAM reflects a shared
              commitment to knowledge, values, and the transformative power of
              ideas and literature.
            </p>
            <h1
              className="mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#0b0b0b",
                letterSpacing: "-0.01em",
              }}
            >
              About CMS College, Kottayam
            </h1>
            <p className="mb-6">
              CMS College, Kottayam, established in 1817, is one of the oldest
              colleges in India and a cornerstone of Kerala’s intellectual and
              cultural history. The institution has played a pioneering role in
              the development of modern education, printing, language, and
              social reform in the region, earning Kottayam its reputation as
              the “Land of Letters.” With a legacy rooted in academic excellence
              and social engagement, CMS College continues to nurture
              generations of thinkers, writers, educators, and leaders. Its
              association with AKSHARAM underscores its enduring commitment to
              literature, critical inquiry, and the cultural life of society.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}


function About2026Page({ onBack, onNavigate }: { onBack: () => void; onNavigate: (page: string) => void }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0efeb" }}>
      <Navbar />
      <section className="py-16 md:py-24 px-6 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: "#2a2a2a",
              color: "#f0efeb",
              textDecoration: "none",
              fontSize: "1rem",
              letterSpacing: "0.02em",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2a2a2a";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            ← Back to Home
          </button>

          <h1
            className="mb-8"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0b0b0b",
              letterSpacing: "-0.01em",
            }}
          >
            About Aksharam 2026
          </h1>

          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.8",
              color: "#2a2a2a",
              letterSpacing: "0.005em",
            }}
          >
            <p className="mb-6">
              A century ago, Poykayil Appachan wrote of a painful absence — the
              absence of letters that record the history of his own people.
              Throughout history, eras have repeatedly silenced the voices of
              those marginalized. Languages, writings, memories, and lived
              experiences of many communities have been erased or rendered
              invisible by structures of caste, class, gender, religion, and
              power. Letters are more than linguistic forms; they are acts of
              resistance against forgetting. Literature and the arts become
              political when they listen to unheard voices and read what history
              has chosen not to preserve. Festival of Unseen Letters is a
              platform of remembrance — a cultural defence built with letters
              against oblivion. It asserts that no history is complete without
              reading what was left unseen.
            </p>
            <h2
              className="mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#0b0b0b",
                letterSpacing: "-0.01em",
              }}
            >
              Curator’s Note
            </h2>
            <p className="mb-2" style={{ fontWeight: "700" }}>
              Dinu Veyil
            </p>
            <p className="mb-6">
              AKSHARAM emerges from a simple but urgent question: whose letters
              have we failed to read? History often remembers power, but forgets
              pain, struggle, and lived experience. Festival of Unseen Letters
              invites us to listen — to languages pushed into silence, to
              stories that survived without recognition, to memories carried
              through generations without archives. This festival is an attempt
              to read literature not only as art, but as testimony. Through
              conversations, readings, and interdisciplinary encounters,
              AKSHARAM seeks to reclaim literature as a space of remembrance and
              resistance.
            </p>
            <button
              onClick={() => onNavigate("about-Dinu")}
              className="transition-all duration-300"
              style={{
                color: "#5b1b8d",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                fontSize: "1rem",
                letterSpacing: "0.01em",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Read more
            </button>
            <h2
              className="mb-8"
              style={{
                fontFamily: "Georgia, serif",
                fontSize: "clamp(2rem, 4vw, 3rem)",
                color: "#0b0b0b",
                letterSpacing: "-0.01em",
              }}
            >
              Director’s Note
            </h2>
            <p className="mb-2" style={{ fontWeight: "700" }}>
              Prof. Aju K. Narayanan
            </p>
            <p className="mb-6">
              Kottayam has long been a land shaped by letters — of printing,
              education, movements, and ideas. AKSHARAM builds on this legacy
              while asking contemporary questions about whose histories we
              preserve and whose we ignore. Festival of Unseen Letters positions
              literature and the arts as vital cultural forces that challenge
              forgetting. As a director, I see this festival as a shared space —
              for writers, readers, artists, and communities — to reflect,
              converse, and imagine a more inclusive cultural memory for the
              future.
            </p>
            <button
              onClick={() => onNavigate("about-Aju")}
              className="transition-all duration-300"
              style={{
                color: "#5b1b8d",
                textDecoration: "underline",
                textUnderlineOffset: "4px",
                fontSize: "1rem",
                letterSpacing: "0.01em",
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.7";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
            >
              Read more
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function AboutDinuSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0efeb" }}>
      <section className="py-16 md:py-24 px-6 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: "#2a2a2a",
              color: "#f0efeb",
              textDecoration: "none",
              fontSize: "1rem",
              letterSpacing: "0.02em",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2a2a2a";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            ← Back to Home
          </button>

          <h1
            className="mb-8"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0b0b0b",
              letterSpacing: "-0.01em",
            }}
          >
            About Dinu Veyil
          </h1>

          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.8",
              color: "#2a2a2a",
              letterSpacing: "0.005em",
            }}
          >
            <p className="mb-6" style={{ fontWeight: "700" }}>
              Curator – AKSHARAM Literature Fest
            </p>
            <p className="mb-6">
              Dinu Veyil is a writer, thinker, and cultural practitioner whose
              work engages deeply with questions of memory, marginality, and
              resistance. Through literature, critical writing, and artistic
              interventions, he explores voices that exist outside dominant
              narratives. As the curator of AKSHARAM, he brings together
              literature and allied arts as spaces for dialogue, remembrance,
              and re-imagining histories that have long been silenced.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
function AboutAjuSection({ onBack }: { onBack: () => void }) {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f0efeb" }}>
      <section className="py-16 md:py-24 px-6 pt-28 md:pt-32">
        <div className="max-w-4xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: "#2a2a2a",
              color: "#f0efeb",
              textDecoration: "none",
              fontSize: "1rem",
              letterSpacing: "0.02em",
              borderRadius: "2px",
              border: "none",
              cursor: "pointer",
              boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#1f1f1f";
              e.currentTarget.style.boxShadow = "0 2px 6px rgba(0, 0, 0, 0.15)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#2a2a2a";
              e.currentTarget.style.boxShadow = "0 1px 3px rgba(0, 0, 0, 0.1)";
            }}
          >
            ← Back to Home
          </button>

          <h1
            className="mb-8"
            style={{
              fontFamily: "Georgia, serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "#0b0b0b",
              letterSpacing: "-0.01em",
            }}
          >
            About Prof. Aju K. Narayanan
          </h1>

          <div
            style={{
              fontSize: "clamp(1rem, 2vw, 1.125rem)",
              lineHeight: "1.8",
              color: "#2a2a2a",
              letterSpacing: "0.005em",
            }}
          >
            <p className="mb-6" style={{ fontWeight: "700" }}>
              Festival Director – AKSHARAM Literature Fest
            </p>
            <p className="mb-6">
              Prof. Aju K. Narayanan is an academic, writer, and cultural
              organizer committed to expanding the role of literature in public
              life. His work bridges scholarship, pedagogy, and artistic
              practice, with a focus on language, society, and inclusive
              knowledge traditions. As Festival Director, he envisions AKSHARAM
              as a contemporary platform rooted in Kottayam’s literary legacy
              while responding to urgent cultural and social questions of our
              time.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
function AllSpeakersPage({ onBack }: { onBack: () => void }) {
  const speakers = [
    {
      id: 1,
      name: 'Speaker Name',
      position: 'Novelist & Essayist',
      description: 'Detailed biography and contribution to literature. A renowned voice in contemporary fiction, exploring themes of identity, memory, and cultural displacement through innovative narrative forms.',
      image: 'https://images.unsplash.com/photo-1680356475155-3ca8fa2192aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhdXRob3IlMjB3cml0ZXIlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3MTQ1Nzh8MA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 2,
      name: 'Speaker Name',
      position: 'Poet & Translator',
      description: 'Detailed biography and contribution to literature. An acclaimed translator bridging linguistic traditions, known for bringing marginalized voices to wider audiences through sensitive, nuanced renderings.',
      image: 'https://images.unsplash.com/photo-1713610125715-ec6c1694b345?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwb2V0JTIwcmVhZGluZyUyMGJvb2t8ZW58MXx8fHwxNzY3NzkxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 3,
      name: 'Speaker Name',
      position: 'Literary Scholar',
      description: 'Detailed biography and contribution to literature. A leading scholar of comparative literature, examining cross-cultural literary exchanges and the evolution of narrative forms across traditions.',
      image: 'https://images.unsplash.com/photo-1574281570877-bd815ebb50a4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzb3IlMjB0ZWFjaGVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzY3NTcyfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 4,
      name: 'Speaker Name',
      position: 'Cultural Critic',
      description: 'Detailed biography and contribution to literature. An influential critic whose work interrogates the relationship between literature, politics, and social change in the contemporary moment.',
      image: 'https://images.unsplash.com/photo-1558962009-34fff2bd2e9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlbGxlY3R1YWwlMjB0aGlua2VyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY3NzkxMjQxfDA&ixlib=rb-4.1.0&q=80&w=1080'
    },
    {
      id: 5,
      name: 'Speaker Name',
      position: 'Historian & Author',
      description: 'Detailed biography and contribution to literature. A historian whose narrative approach to the past has redefined how we understand cultural memory and collective identity.',
      image: 'https://images.unsplash.com/photo-1743327557042-a03327d0e9ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvbGFyJTIwYWNhZGVtaWMlMjBwb3J0cmFpdHxlbnwxfHx8fDE3Njc3OTEyNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efeb' }}>
      <Navbar />
      <section className="py-16 md:py-24 px-6 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: '#2a2a2a',
              color: '#f0efeb',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.02em',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1f1f1f';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2a2a2a';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
          >
            ← Back to Home
          </button>

          <h1 
            className="mb-12"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0b0b0b',
              letterSpacing: '-0.01em'
            }}
          >
            All Speakers
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {speakers.map((speaker) => (
              <div
                key={speaker.id}
                className="group"
                style={{
                  borderBottom: '1px solid rgba(11, 11, 11, 0.06)',
                  paddingBottom: '2rem'
                }}
              >
                <div 
                  className="mb-4 overflow-hidden"
                  style={{ borderRadius: '2px' }}
                >
                  <img
                    src={speaker.image}
                    alt={speaker.name}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      filter: 'grayscale(100%) contrast(1.1)',
                      opacity: 0.85
                    }}
                  />
                </div>

                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.25rem',
                    color: '#0b0b0b',
                    letterSpacing: '-0.005em'
                  }}
                >
                  {speaker.name}
                </h3>
                
                <p 
                  className="mb-3"
                  style={{
                    fontSize: '0.9375rem',
                    color: '#2a2a2a',
                    letterSpacing: '0.01em',
                    opacity: 0.8
                  }}
                >
                  {speaker.position}
                </p>

                <p 
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    color: '#2a2a2a',
                    letterSpacing: '0.005em'
                  }}
                >
                  {speaker.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

function AllSponsorsPage({ onBack }: { onBack: () => void }) {
  const sponsors = [
    {
      id: 1,
      name: 'Sponsor Name',
      position: 'Title Sponsor',
      description: 'Detailed description of sponsor and their contribution to the festival. A leading cultural institution committed to supporting literary arts and fostering meaningful dialogue through sustained partnership.',
      image: 'https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Partner Organization',
      position: 'Presenting Partner',
      description: 'Detailed description of partner and their contribution to the festival. An organization dedicated to promoting literary culture and supporting emerging voices in the literary community.',
      image: 'https://images.unsplash.com/photo-1572883454114-1cf0031ede2a?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Cultural Foundation',
      position: 'Platinum Sponsor',
      description: 'Detailed description of foundation and their contribution to the festival. A foundation whose mission aligns with our commitment to fostering cultural exchange and literary excellence.',
      image: 'https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?w=400&h=400&fit=crop'
    },
    {
      id: 4,
      name: 'Literary Trust',
      position: 'Gold Sponsor',
      description: 'Detailed description of trust and their contribution to the festival. A trust dedicated to preserving literary heritage while supporting contemporary literary creation and critical discourse.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=400&fit=crop'
    },
    {
      id: 5,
      name: 'Publishing House',
      position: 'Silver Sponsor',
      description: 'Detailed description of publishing house and their contribution to the festival. A publisher committed to bringing diverse voices and innovative literary works to readers worldwide.',
      image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=400&h=400&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: '#f0efeb' }}>
      <Navbar />
      <section className="py-16 md:py-24 px-6 pt-28 md:pt-32">
        <div className="max-w-6xl mx-auto">
          <button
            onClick={onBack}
            className="mb-8 px-6 py-3 transition-all duration-300 inline-flex items-center gap-2"
            style={{
              backgroundColor: '#2a2a2a',
              color: '#f0efeb',
              textDecoration: 'none',
              fontSize: '1rem',
              letterSpacing: '0.02em',
              borderRadius: '2px',
              border: 'none',
              cursor: 'pointer',
              boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#1f1f1f';
              e.currentTarget.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.15)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#2a2a2a';
              e.currentTarget.style.boxShadow = '0 1px 3px rgba(0, 0, 0, 0.1)';
            }}
          >
            ← Back to Home
          </button>

          <h1 
            className="mb-12"
            style={{
              fontFamily: 'Georgia, serif',
              fontSize: 'clamp(2rem, 4vw, 3rem)',
              color: '#0b0b0b',
              letterSpacing: '-0.01em'
            }}
          >
            All Sponsors & Partners
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sponsors.map((sponsor) => (
              <div
                key={sponsor.id}
                className="group"
                style={{
                  borderBottom: '1px solid rgba(11, 11, 11, 0.06)',
                  paddingBottom: '2rem'
                }}
              >
                <div 
                  className="mb-4 overflow-hidden"
                  style={{ borderRadius: '2px' }}
                >
                  <img
                    src={sponsor.image}
                    alt={sponsor.name}
                    className="w-full h-64 object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    style={{
                      filter: 'grayscale(100%) contrast(1.1)',
                      opacity: 0.85
                    }}
                  />
                </div>

                <h3 
                  className="mb-2"
                  style={{
                    fontFamily: 'Georgia, serif',
                    fontSize: '1.25rem',
                    color: '#0b0b0b',
                    letterSpacing: '-0.005em'
                  }}
                >
                  {sponsor.name}
                </h3>
                
                <p 
                  className="mb-3"
                  style={{
                    fontSize: '0.9375rem',
                    color: '#2a2a2a',
                    letterSpacing: '0.01em',
                    opacity: 0.8
                  }}
                >
                  {sponsor.position}
                </p>

                <p 
                  style={{
                    fontSize: '0.9375rem',
                    lineHeight: '1.7',
                    color: '#2a2a2a',
                    letterSpacing: '0.005em'
                  }}
                >
                  {sponsor.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
