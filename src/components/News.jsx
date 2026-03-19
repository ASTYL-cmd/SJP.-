import React, { useState, useEffect } from 'react';
import './News.css';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchNews();
    const interval = setInterval(fetchNews, 300000);
    return () => clearInterval(interval);
  }, []);

  const fetchNews = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        'https://gnews.io/api/v4/top-headlines?country=in&max=5&apikey=demo'
      );

      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data = await response.json();
      setNews(data.articles || []);
      setError(null);
    } catch (err) {
      console.error('Error fetching news:', err);
      setError('Unable to load news. Please try again later.');
      setNews(getFallbackNews());
    } finally {
      setLoading(false);
    }
  };

  const getFallbackNews = () => {
    return [
      {
        title: 'India\'s Tech Sector Shows Strong Growth in Q1 2026',
        description: 'The technology sector continues to drive economic growth with record investments and innovation.',
        url: '#',
        image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600',
        publishedAt: new Date().toISOString()
      },
      {
        title: 'Renewable Energy Projects Reach New Milestone',
        description: 'India achieves significant progress in solar and wind energy capacity additions.',
        url: '#',
        image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600',
        publishedAt: new Date().toISOString()
      },
      {
        title: 'Digital Education Platform Launches Nationwide',
        description: 'New initiative aims to provide quality education to millions of students across the country.',
        url: '#',
        image: 'https://images.pexels.com/photos/5905709/pexels-photo-5905709.jpeg?auto=compress&cs=tinysrgb&w=600',
        publishedAt: new Date().toISOString()
      },
      {
        title: 'Healthcare Innovation Summit Attracts Global Leaders',
        description: 'Major healthcare conference showcases cutting-edge medical technologies and treatments.',
        url: '#',
        image: 'https://images.pexels.com/photos/3825517/pexels-photo-3825517.jpeg?auto=compress&cs=tinysrgb&w=600',
        publishedAt: new Date().toISOString()
      },
      {
        title: 'Infrastructure Development Projects Accelerate',
        description: 'Government announces new initiatives to boost infrastructure and connectivity nationwide.',
        url: '#',
        image: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=600',
        publishedAt: new Date().toISOString()
      }
    ];
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <section className="news" id="news">
      <div className="container">
        <div className="section-title">
          <h2>Latest News from India</h2>
          <p>Stay updated with the most recent headlines and developments</p>
        </div>

        {loading && news.length === 0 ? (
          <div className="news-loading">
            <div className="loader"></div>
            <p>Loading latest news...</p>
          </div>
        ) : (
          <div className="news-grid">
            {news.slice(0, 5).map((article, index) => (
              <a
                key={index}
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="news-card"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="news-image-wrapper">
                  <img
                    src={article.image || 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600'}
                    alt={article.title}
                    onError={(e) => {
                      e.target.src = 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600';
                    }}
                  />
                  <div className="news-overlay"></div>
                </div>
                <div className="news-content">
                  <span className="news-date">{formatDate(article.publishedAt)}</span>
                  <h3>{article.title}</h3>
                  <p>{article.description}</p>
                  <span className="news-read-more">Read More →</span>
                </div>
              </a>
            ))}
          </div>
        )}

        {error && (
          <div className="news-error">
            <p>{error}</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
