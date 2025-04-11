import React from 'react';

function ContactForm() {
  return (
    <div className="contact-form">
      <h2>Enquire Now</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;