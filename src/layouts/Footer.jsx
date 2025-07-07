import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import FooterBar from '../components/FooterBar';



function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email.includes('@')) {
      setSubmitted(true);
    } else {
      alert('Lütfen geçerli bir e-posta adresi giriniz.');
    }
  };
  return (
    <footer className="bg-white text-gray-700 w-full flex flex-col">
    
     <FooterBar/>
    
      <div className="flex flex-col sm:flex-row sm:justify-between sm:flex-wrap px-10 sm:px-30 gap-8 pt-20 pb-10">
        <section className="flex flex-col min-w-[150px]">
          <h3 className="font-bold mb-2 text-[#252b42]">Company Info</h3>
          <Link className="text-[#737373]" to="">About Us</Link>
          <Link className="text-[#737373]" to="">Career</Link>
          <Link className="text-[#737373]" to="">We are hiring</Link>
          <Link className="text-[#737373]" to="">Blog</Link>
        </section>

        <section className="flex flex-col min-w-[150px]">
          <h3 className="text-[#252b42] font-bold mb-2">Legal</h3>
          <Link className="text-[#737373]" to="">Terms</Link>
          <Link className="text-[#737373]" to="">Privacy Policy</Link>
          <Link className="text-[#737373]" to="">Licenses</Link>
          <Link className="text-[#737373]" to="">Cookies</Link>
        </section>

      
        <section className="flex flex-col min-w-[150px]">
          <h3 className="text-[#252b42] font-bold mb-2">Features</h3>
          <Link className="text-[#737373]" to="">Business Marketing</Link>
          <Link className="text-[#737373]" to="">User Analytic</Link>
          <Link className="text-[#737373]" to="">Live Chat</Link>
          <Link className="text-[#737373]" to="">Unlimited Support</Link>
        </section>

        <section className="flex flex-col min-w-[150px]">
          <h3 className="text-[#252b42] font-bold mb-2">Resources</h3>
          <Link  className="text-[#737373]" to="">iOS & Android</Link>
          <Link className="text-[#737373]" to="">Watch a Demo</Link>
          <Link className="text-[#737373]" to="">Customers</Link>
          <Link className="text-[#737373]" to="">API</Link>
        </section>  

        <section>
          <h3 className="text-[#252b42] font-bold">Get In Touch</h3>
          <form onSubmit={handleSubmit} className="flex flex-row">
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 px-4 py-2 rounded focus:outline-none"
          required
          
        />  <button
        type="submit"
        className="bg-blue-500 text-white px-6 py-4 rounded hover:bg-blue-600"
      >
         Subscribe
        </button>
      </form>
        </section>
      </div>
      <div className='flex w-full bg-[#FAFAFA] p-6'>
        <h6 className='text-[#737373] font-bold px-20 text-center'>Made With Love By Finland All Right Reserved </h6>
      </div>
    </footer>
  );
}

export default Footer;
