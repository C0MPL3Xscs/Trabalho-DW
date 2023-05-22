import React, { useState } from 'react';
import './SupportPage.css';

function SupportPage() {

  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div className="support-page">
      <div className="support-content">
        <h1 className="support-title">Support</h1>
        <p className="support-description">
          Welcome to our support page. If you need any assistance, please don't hesitate to reach out to us.
        </p>
        <div className="contact-info">
          <h2 className="info-heading">Contact Information</h2>
          <p className="info-item">
            Email: <a href="mailto:support@example.com">support@email.com</a>
          </p>
          <p className="info-item">Phone: +351 969396939</p>
        </div>
        <div className="faq-section">
          <h2 className="faq-heading">Frequently Asked Questions</h2>
          <ul className="faq-list">
            <li className="faq-item">
              <button
                className={`faq-toggle ${expandedIndex === 0 ? 'expanded' : ''}`}
                onClick={() => handleToggle(0)}
              >
                <span className="faq-question">How do I create an account?</span>
              </button>
              {expandedIndex === 0 && (
                <div className="faq-answer">Please visit our website and click on the "Sign Up" button.</div>
              )}
            </li>
            <li className="faq-item">
              <button
                className={`faq-toggle ${expandedIndex === 1 ? 'expanded' : ''}`}
                onClick={() => handleToggle(1)}
              >
                <span className="faq-question">What are the system requirements?</span>
              </button>
              {expandedIndex === 1 && (
                <div className="faq-answer">
                  Our application supports the latest versions of Chrome, Firefox, Safari, and Edge browsers.
                </div>
              )}
            </li>
            <li className="faq-item">
              <button
                className={`faq-toggle ${expandedIndex === 2 ? 'expanded' : ''}`}
                onClick={() => handleToggle(2)}
              >
                <span className="faq-question">How do I reset my password?</span>
              </button>
              {expandedIndex === 2 && (
                <div className="faq-answer">
                  On the login page, click on the "Forgot Password" link and follow the instructions.
                </div>
              )}
            </li>
            <li className="faq-item">
              <button
                className={`faq-toggle ${expandedIndex === 3 ? 'expanded' : ''}`}
                onClick={() => handleToggle(3)}
              >
                <span className="faq-question">Where can I find the documentation?</span>
              </button>
              {expandedIndex === 3 && (
                <div className="faq-answer">
                  Our documentation is available on our website under the "Support" section.
                </div>
              )}
            </li>
            <li className="faq-item">
              <button
                className={`faq-toggle ${expandedIndex === 4 ? 'expanded' : ''}`}
                onClick={() => handleToggle(4)}
              >
                <span className="faq-question">How can I contact customer support?</span>
              </button>
              {expandedIndex === 4 && (
                <div className="faq-answer">
                  You can reach our customer support team by filling the support form above.
                </div>
              )}
            </li>
          </ul>
        </div>
        <div className="support-form">
          <h2 className="form-heading">Submit a Support Ticket</h2>
          <p className="form-description">
            If you couldn't find the answer to your question in our FAQs, please submit a support ticket by filling out
            the form below:
          </p>
          <form>
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name:</label>
              <input type="text" id="name" name="name" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email:</label>
              <input type="email" id="email" name="email" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject" className="form-label">Subject:</label>
              <input type="text" id="subject" name="subject" className="form-input" required />
            </div>
            <div className="form-group">
              <label htmlFor="message" className="form-label">Message:</label>
              <textarea id="message" name="message" className="form-textarea" required></textarea>
            </div>
            <button type="submit" className="form-button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SupportPage;
