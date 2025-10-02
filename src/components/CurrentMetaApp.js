import React, { useState, useEffect } from 'react';
import { TrendingUp, Zap, Eye, BarChart3, Lightbulb, Menu, X } from 'lucide-react';

const CurrentMetaApp = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const insights = [
    {
      title: "Prophetic Innovation Patterns",
      excerpt: "Identifying breakthrough technologies and market shifts before they emerge, providing organizations with strategic foresight to lead transformation.",
      category: "Future Forecasting",
      depth: "Visionary"
    },
    {
      title: "Disruptive Market Oracles",
      excerpt: "Unveiling hidden market dynamics and emerging opportunities through advanced pattern recognition and strategic intelligence synthesis.",
      category: "Market Intelligence",
      depth: "Transformative"
    },
    {
      title: "Innovation Catalyst Insights",
      excerpt: "Revealing the underlying forces that drive successful innovation, empowering leaders to create breakthrough solutions and lasting impact.",
      category: "Strategic Innovation",
      depth: "Revolutionary"
    }
  ];

  const services = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: "Visionary Intelligence",
      description: "Prophetic insights that illuminate tomorrow's breakthrough opportunities today"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Innovation Oracles",
      description: "Strategic foresight services that predict and shape transformative market shifts"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Future-Forward Analytics",
      description: "Advanced pattern recognition revealing the next wave of industry evolution"
    }
  ];

  const Navigation = () => (
    <nav className="fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-4">
        <div className="flex items-center justify-between">
          <div className="text-2xl font-light text-white tracking-wide">
            Current <span className="font-normal text-blue-400">Meta</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {['home', 'insights', 'services', 'synthesis'].map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`capitalize tracking-wide transition-all duration-300 ${
                  activeSection === section
                    ? 'text-blue-400 border-b-2 border-blue-400 pb-1'
                    : 'text-gray-300 hover:text-white'
                }`}
              >
                {section}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-gray-300 hover:text-white transition-colors"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-800 pt-4">
            {['home', 'insights', 'services', 'synthesis'].map((section) => (
              <button
                key={section}
                onClick={() => {
                  setActiveSection(section);
                  setMobileMenuOpen(false);
                }}
                className={`w-full text-left py-3 capitalize tracking-wide transition-all duration-300 ${
                  activeSection === section
                    ? 'text-blue-400 border-l-2 border-blue-400 pl-4'
                    : 'text-gray-300 hover:text-white pl-4'
                }`}
              >
                {section}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );

  const Hero = () => (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 pt-20">
      <div className={`max-w-5xl mx-auto px-8 lg:px-12 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="mb-8">
          <Eye className="w-20 h-20 mx-auto text-blue-400 mb-6" />
        </div>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-light text-white mb-8 leading-tight">
          Oracles of
          <span className="block text-blue-400 font-normal">Innovation</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-12 font-light leading-relaxed max-w-4xl mx-auto">
          Visionary consulting that reveals tomorrow's breakthroughs today. We transform uncertainty
          into strategic advantage through prophetic insights and innovative foresight.
        </p>
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button
            onClick={() => setActiveSection('insights')}
            className="px-10 py-5 bg-blue-600 hover:bg-blue-700 text-white rounded-sm transition-all duration-300 font-light tracking-wide text-lg"
          >
            Explore Insights
          </button>
          <button
            onClick={() => setActiveSection('synthesis')}
            className="px-10 py-5 border border-gray-600 hover:border-gray-500 text-gray-300 hover:text-white rounded-sm transition-all duration-300 font-light tracking-wide text-lg"
          >
            View Synthesis
          </button>
        </div>
      </div>
    </section>
  );

  const InsightsSection = () => (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <Lightbulb className="w-14 h-14 mx-auto text-blue-400 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">Analytical Wisdom</h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Each insight emerges from the intersection of depth psychology, systems thinking, and data analysis
          </p>
        </div>
        <div className="grid lg:grid-cols-3 gap-8">
          {insights.map((insight, index) => (
            <div key={index} className="bg-gray-900 border border-gray-700 p-8 hover:border-blue-400/30 transition-all duration-500 group h-full flex flex-col">
              <div className="flex justify-between items-start mb-4">
                <span className="text-blue-400 text-sm font-light tracking-wide uppercase">{insight.category}</span>
                <span className="text-gray-500 text-sm italic">{insight.depth}</span>
              </div>
              <h3 className="text-2xl font-light text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                {insight.title}
              </h3>
              <p className="text-gray-300 leading-relaxed font-light text-lg flex-grow">
                {insight.excerpt}
              </p>
              <div className="mt-6 flex items-center text-gray-500 group-hover:text-blue-400 transition-colors duration-300">
                <span className="text-sm font-light tracking-wide">Explore deeper →</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ServicesSection = () => (
    <section className="py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <BarChart3 className="w-14 h-14 mx-auto text-blue-400 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">Our Synthesis</h2>
          <p className="text-xl lg:text-2xl text-gray-300 max-w-4xl mx-auto font-light">
            Bridging the conscious and unconscious dimensions of organizational and personal analytics
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div key={index} className="text-center group">
              <div className="mb-8 text-blue-400 group-hover:text-white transition-colors duration-300 flex justify-center">
                {React.cloneElement(service.icon, { className: "w-12 h-12" })}
              </div>
              <h3 className="text-2xl lg:text-3xl font-light text-white mb-6">{service.title}</h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const SynthesisSection = () => (
    <section className="py-24 bg-gray-800">
      <div className="max-w-7xl mx-auto px-8 lg:px-12">
        <div className="text-center mb-20">
          <Zap className="w-14 h-14 mx-auto text-blue-400 mb-6" />
          <h2 className="text-4xl lg:text-5xl font-light text-white mb-6">The Meta-Perspective</h2>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="bg-gray-900 border border-gray-700 p-12 lg:p-16 text-center">
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-300 italic mb-10 leading-relaxed">
              "The privilege of a lifetime is to become who you truly are. In data, as in life,
              the patterns we seek are reflections of the patterns we are."
            </blockquote>
            <div className="text-blue-400 font-light tracking-wide text-lg">— Carl Jung, reimagined for the data age</div>
          </div>
          <div className="mt-16 grid md:grid-cols-2 gap-10">
            <div className="bg-gray-900 border border-gray-700 p-8 lg:p-10">
              <h3 className="text-2xl font-light text-white mb-6">Philosophy Meets Analytics</h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                We believe that true insight emerges not just from data processing, but from understanding
                the archetypal patterns that underlie human behavior and organizational dynamics.
              </p>
            </div>
            <div className="bg-gray-900 border border-gray-700 p-8 lg:p-10">
              <h3 className="text-2xl font-light text-white mb-6">The Depth Dimension</h3>
              <p className="text-gray-300 font-light leading-relaxed text-lg">
                Surface metrics tell us what happened. Depth analysis reveals why it happened and
                what it means for the fundamental patterns of human experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );

  const Footer = () => (
    <footer className="bg-gray-900 border-t border-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-8 lg:px-12 text-center">
        <div className="mb-8">
          <Eye className="w-10 h-10 mx-auto text-blue-400 mb-4" />
          <div className="text-2xl font-light text-white">Current Meta</div>
          <p className="text-gray-400 mt-3 font-light text-lg">Analytics through the lens of wisdom</p>
        </div>
        <div className="border-t border-gray-800 pt-8">
          <p className="text-gray-500 font-light">
            © 2025 Current Meta. Synthesizing depth and data.
          </p>
        </div>
      </div>
    </footer>
  );

  const renderActiveSection = () => {
    switch(activeSection) {
      case 'insights':
        return <InsightsSection />;
      case 'services':
        return <ServicesSection />;
      case 'synthesis':
        return <SynthesisSection />;
      default:
        return (
          <>
            <Hero />
            <InsightsSection />
            <ServicesSection />
            <SynthesisSection />
          </>
        );
    }
  };

  return (
    <div className="min-h-screen bg-midnight-950 text-white">
      <Navigation />
      {renderActiveSection()}
      <Footer />
    </div>
  );
};

export default CurrentMetaApp;