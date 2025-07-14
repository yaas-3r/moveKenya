import React from 'react';

const Footer = () => {
  return (
    <footer style={{ backgroundColor: '#26333f', color: '#fff', padding: '60px 30px 30px' }}>
      <div style={{ maxWidth: '1100px', margin: 'auto', display: 'flex', flexWrap: 'wrap', gap: '40px', justifyContent: 'space-between' }}>
        <div style={{ flex: '1 1 280px' }}>
          <h2 style={{ fontSize: '24px', color: '#fff' }}>moveKenya</h2>
          <p>Reliable Moving Solutions</p>
          <p>moveKenya connects you with verified moving companies across Kenya.</p>
          <p><span>📞</span> +254 712 345 678</p>
          <p><span>📧</span> support@movekenya.co.ke</p>
          <p><span>📍</span> Nairobi, Kenya</p>
        </div>
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ color: '#d06f49', borderBottom: '2px solid #434d56', display: 'inline-block', paddingBottom: '6px' }}>Navigation</h3>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li><a href="/home" style={{ color: '#bbb', textDecoration: 'none' }}>Home</a></li>
            <li><a href="/services" style={{ color: '#bbb', textDecoration: 'none' }}>Services</a></li>
            <li><a href="/about" style={{ color: '#bbb', textDecoration: 'none' }}>About</a></li>
            <li><a href="/contact" style={{ color: '#bbb', textDecoration: 'none' }}>Contact</a></li>
          </ul>
        </div>
      </div>
      <div style={{ marginTop: '40px', borderTop: '1px solid #434d56', paddingTop: '20px', fontSize: '14px', textAlign: 'center', color: '#aaa' }}>
        © 2025 moveKenya. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
