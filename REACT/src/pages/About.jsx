import React from 'react';
import Footer from '../components/Footer';

const About = () => {
  return (
  <div style={{ fontFamily: 'Segoe UI, sans-serif', margin: 0, backgroundColor: '#f4f4f4', color: '#26333f', width:'118rem' }}>
      <header style={{ background: 'linear-gradient(135deg, #26333f, #434d56)', color: '#fff', padding: '80px 20px', textAlign: 'center' }}>
        <h1 style={{ fontSize: '40px', marginBottom: '10px' }}>About moveKenya</h1>
        <p style={{ fontSize: '18px', color: '#ddd' }}>Kenya’s most trusted relocation platform</p>
      </header>

      <main style={{ maxWidth: '1000px', margin: '0 auto', padding: '60px 20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#d06f49' }}>Our Story</h2>
          <p>Founded in Nairobi, moveKenya began with one simple goal: make relocation easy, trustworthy, and efficient across Kenya. What started with a small team and a handful of clients has grown into a platform connecting thousands of users with verified movers nationwide.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#d06f49' }}>Our Mission</h2>
          <p>We’re dedicated to making moving hassle-free — whether it’s your home, your office, your pet, or your fragile valuables. Our tech-driven platform ensures transparency, tracking, and professionalism at every step.</p>
        </section>

        <section style={{ marginBottom: '40px' }}>
          <h2 style={{ color: '#d06f49' }}>Our Team</h2>
          <p>Our passionate team includes logistics experts, tech enthusiasts, and customer service champions who work together to deliver the best experience in the industry.</p>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
