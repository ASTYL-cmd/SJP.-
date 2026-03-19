import React from 'react';
import './Leadership.css';

const Leadership = () => {
  const leaders = [
    {
      name: 'Sarah Johnson',
      role: 'Chief Executive Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Leading innovation with 15+ years of industry experience'
    },
    {
      name: 'Michael Chen',
      role: 'Chief Technology Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Driving technological excellence and digital transformation'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Chief Marketing Officer',
      image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Building brands and creating meaningful customer connections'
    },
    {
      name: 'David Park',
      role: 'Chief Financial Officer',
      image: 'https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=600',
      bio: 'Ensuring financial sustainability and strategic growth'
    }
  ];

  return (
    <section className="leadership" id="leadership">
      <div className="container">
        <div className="section-title">
          <h2>Meet Our Leadership</h2>
          <p>Experienced professionals dedicated to driving innovation and excellence</p>
        </div>

        <div className="leadership-grid">
          {leaders.map((leader, index) => (
            <div
              key={index}
              className="leader-card"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="leader-image-wrapper">
                <img
                  src={leader.image}
                  alt={leader.name}
                />
                <div className="leader-overlay">
                  <p className="leader-bio">{leader.bio}</p>
                </div>
              </div>
              <div className="leader-info">
                <h3>{leader.name}</h3>
                <p className="leader-role">{leader.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
