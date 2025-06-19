import React from 'react';
import Link from 'next/link';
// import { facebookUrl, instagramUrl, tiktokUrl, youtubeUrl } from '@/utilities/filesAndLink';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-4 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold text-white mb-3">Ontime Agency</h2>
          <p className="text-sm text-gray-400">
            Building the future of web experiences. High-quality solutions for modern businesses.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><Link href="#home" className="hover:text-white">Home</Link></li>
            <li><Link href="#about" className="hover:text-white">About</Link></li>
            <li><Link href="#services" className="hover:text-white">Services</Link></li>
            <li><Link href="#contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>

        {/* Social Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-3">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="https://www.facebook.com/ontimeaa" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500"><i className="ri-facebook-circle-line"></i></a>
            <a href="https://www.instagram.com/ontimeaa/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500"><i className="ri-instagram-line"></i></a>
            {/* <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400"><i className="ri-linkedin-box-line"></i></a> */}
            <a href="https://www.youtube.com/channel/UCmTomDF3Hoae35Ba3PEqTTw" target="_blank" rel="noopener noreferrer" className="hover:text-red-500"><i className="ri-youtube-line"></i></a>
            <a href="https://www.tiktok.com/@ontimeaa" target="_blank" rel="noopener noreferrer" className="hover:text-zinc-600"><i className="ri-tiktok-line"></i></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500 flex flex-wrap justify-center">
        © {new Date().getFullYear()} ontime. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;