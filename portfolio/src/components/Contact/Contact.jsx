
import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

import './Contact.css';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import Toast from './Toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toasts, setToasts] = useState([]);
  
  const contactRef = useRef(null);
  const isVisible = useIntersectionObserver(contactRef, { threshold: 0.1 });
  
  const validateField = (name, value) => {
    let error = '';
    
    switch (name) {
      case 'name':
        if (!value.trim()) error = 'Name is required';
        break;
      case 'email':
        if (!value.trim()) {
          error = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
          error = 'Invalid email format';
        }
        break;
      case 'message':
        if (!value.trim()) error = 'Message is required';
        else if (value.trim().length < 10) error = 'Message must be at least 10 characters';
        break;
      default:
        break;
    }
    
    return error;
  };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    const error = validateField(name, value);
    setErrors(prev => ({
      ...prev,
      [name]: error
    }));
  };
  
  const showToast = (type, message) => {
    const newToast = {
      id: Date.now(),
      type,
      message
    };
    
    setToasts(prev => [...prev, newToast]);
    
    setTimeout(() => {
      setToasts(prev => prev.filter(toast => toast.id !== newToast.id));
    }, 5000);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
  
    let formErrors = {};
    let hasErrors = false;
  
    Object.entries(formData).forEach(([key, value]) => {
      const error = validateField(key, value);
      if (error) {
        formErrors[key] = error;
        hasErrors = true;
      }
    });
  
    setErrors(formErrors);
  
    if (!hasErrors) {
      setIsSubmitting(true);
  
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message
      };
  
      emailjs
        .send('service_1t8576i', 'template_2kdhmua', templateParams, 'IhRX76Am6NIf_ZMeJ')
        .then(
          (response) => {
            showToast('success', 'Your message has been sent successfully!');
            setFormData({ name: '', email: '', subject: '', message: '' });
            setIsSubmitting(false);
          },
          (error) => {
            showToast('error', 'Failed to send message. Please try again later.');
            setIsSubmitting(false);
          }
        );
    }
  };
  return (
    <section id="contact" className="contact" ref={contactRef}>
      <div className="container">
        <h2 className={`section-title ${isVisible ? 'fade-in active' : 'fade-in'}`}>Get In Touch</h2>
        
        <div className={`contact-content ${isVisible ? 'fade-in active' : 'fade-in'}`}>
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <p>
              Feel free to reach out for collaborations, opportunities, or just a friendly chat. 
             some more text.
            </p>
            
            <div className="contact-methods">
              <div className="contact-method">
                <div className="contact-icon">✉️</div>
                <div className="contact-detail">
                  <h4>Email</h4>
                  <a>krishmamtora26@gmail.com</a>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">📍</div>
                <div className="contact-detail">
                  <h4>Location</h4>
                  <p>Rajot , Gujarat , India</p>
                </div>
              </div>
              
              <div className="contact-method">
                <div className="contact-icon">🔗</div>
                <div className="contact-detail">
                  <h4>Social</h4>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/krish-mamtora-455b97252/" target="_blank"  className="social-link">LinkedIn</a>
                    <a href="https://github.com/krish26mamtora"  target="_blank"  className="social-link">GitHub</a>
                    <a href="https://medium.com/@krishmamtora26" target="_blank"  className="social-link">Medium</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>
              
              <div className="form-group">
                <label htmlFor="subject">Subject (Optional)</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                />
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>
              
              <button 
                type="submit" 
                className={`btn btn-primary submit-btn ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
      
      {/* Toast notifications */}
      <div className="toast-container">
        {toasts.map(toast => (
          <Toast 
            key={toast.id} 
            type={toast.type} 
            message={toast.message} 
            onClose={() => setToasts(prev => prev.filter(t => t.id !== toast.id))}
          />
        ))}
      </div>
    </section>
  );
};

export default Contact;
