import React from 'react';

function Contact() {
  return (
    <>
      <h1
        className="contact-form"
        style={{
          justifyContent: 'center',
          textAlign: 'center',
          color: 'orangered',
          marginBottom: '30px',
        }}
      >
        Contact Me
      </h1>
      <form
        style={{
          maxWidth: '600px',
          margin: '0 auto',
          padding: '20px',
          borderRadius: '8px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
          backgroundColor: '#f9f9f9',
        }}
      >
        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="name"
            style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            placeholder="Enter your name"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            aria-label="Full name"
          />
        </div>

        <div style={{ marginBottom: '15px' }}>
          <label
            htmlFor="email"
            style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            placeholder="Enter your email address"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
            }}
            aria-label="Email address"
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label
            htmlFor="message"
            style={{
              display: 'block',
              fontSize: '16px',
              fontWeight: 'bold',
              marginBottom: '5px',
            }}
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            required
            placeholder="Write your message here"
            style={{
              width: '100%',
              padding: '10px',
              borderRadius: '5px',
              border: '1px solid #ccc',
              fontSize: '16px',
              resize: 'vertical',
            }}
            aria-label="Your message"
          />
        </div>

        <button
          type="submit"
          style={{
            width: '100%',
            padding: '12px',
            backgroundColor: 'orangered',
            border: 'none',
            borderRadius: '5px',
            color: 'white',
            fontSize: '18px',
            cursor: 'pointer',
            transition: 'background-color 0.3s',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#e2574c'}
          onMouseOut={(e) => e.target.style.backgroundColor = 'orangered'}
        >
          Send Message
        </button>
      </form>
    </>
  );
}

export default Contact;


