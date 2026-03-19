import React from 'react';
import './Features.css';

const Features = () => {
  const features = [
    {
      icon: '⚡',
      title: 'Lightning Fast',
      description: 'Optimized performance ensures your applications run at peak efficiency with minimal load times.'
    },
    {
      icon: '🔒',
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with end-to-end encryption and regular security audits.'
    },
    {
      icon: '📱',
      title: 'Fully Responsive',
      description: 'Seamless experience across all devices from mobile phones to desktop computers.'
    },
    {
      icon: '🎨',
      title: 'Beautiful Design',
      description: 'Modern, clean interface with attention to every detail for the best user experience.'
    },
    {
      icon: '🚀',
      title: 'Easy to Use',
      description: 'Intuitive interface designed for both beginners and advanced users alike.'
    },
    {
      icon: '💡',
      title: 'Smart Features',
      description: 'AI-powered tools that learn from your usage to provide better recommendations.'
    }
  ];

  return (
    <section className="features" id="features">
      <div className="container">
        <div className="section-title">
          <h2>Powerful Features</h2>
          <p>Everything you need to build amazing products that your users will love</p>
        </div>

        <div className="features-grid">
          {features.map((feature, index) => (
            <div
              key={index}
              className="feature-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="feature-icon">{feature.icon}</div>
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
