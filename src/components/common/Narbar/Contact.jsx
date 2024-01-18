import React from 'react';
import '../Narbar/Contact.css';

export default function Contact() {
  return (
    <section id="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
}
