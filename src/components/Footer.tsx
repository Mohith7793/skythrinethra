// import React from 'react';
// import { Link } from 'react-router-dom';
// import { Bone as Drone, Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin,Youtube } from 'lucide-react';

// const Footer: React.FC = () => {
//   return (
//     <footer className="bg-gray-900 text-white">
//       <div className="container mx-auto px-4 py-12">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <Link to="/" className="flex items-center space-x-2 mb-4">
//             <span className="inline-block">
//   <img
//     src="https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/SKYTHRINETHRA.png?sp=r&st=2025-05-24T10:01:27Z&se=2026-07-01T18:01:27Z&spr=https&sv=2024-11-04&sr=b&sig=x%2BDRIAlLlExpUje%2BND7qVd78aoJNCVAf4DEPzOOFVOU%3D"
//     alt="SkyThrinethra Logo"
//     className="h-8 w-auto object-contain"
//   />
// </span>
//               <span className="font-bold text-xl">ＳＫＹＴＨＲＩＮΞＴＨＲΛ</span>
//             </Link>
//             <p className="text-gray-400 mb-6">
//               Pioneering technology solutions across drone products, software services, and educational training.
//             </p>
//             <div className="flex space-x-4">
//               <a href="https://www.facebook.com/people/SkyThrinethra/61573399597282/" className="text-gray-400 hover:text-white transition-colors">
//                 <Facebook size={20} />
//               </a>
//               <a href="https://www.youtube.com/@skythrinethra" className="text-gray-400 hover:text-white transition-colors">
//                 <Youtube size={20} />
//               </a>
//               <a href="https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra" className="text-gray-400 hover:text-white transition-colors">
//                 <Twitter size={20} />
//               </a>
//               <a href="https://www.instagram.com/skythrinethra/" className="text-gray-400 hover:text-white transition-colors">
//                 <Instagram size={20} />
//               </a>
//               <a href="https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/" className="text-gray-400 hover:text-white transition-colors">
//                 <Linkedin size={20} />
//               </a>
//             </div>
//           </div>
          
//           <div>
//             <h3 className="font-bold text-lg mb-4">Services</h3>
//             <ul className="space-y-2">
//               <li><Link to="/drones" className="text-gray-400 hover:text-white transition-colors">Drone Products</Link></li>
//               <li><Link to="/software" className="text-gray-400 hover:text-white transition-colors">Software Development</Link></li>
//               <li><Link to="/software" className="text-gray-400 hover:text-white transition-colors">AI & Machine Learning</Link></li>
//               <li><Link to="/training" className="text-gray-400 hover:text-white transition-colors">Educational Training</Link></li>
//               <li><Link to="/software" className="text-gray-400 hover:text-white transition-colors">Web Development</Link></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="font-bold text-lg mb-4">Quick Links</h3>
//             <ul className="space-y-2">
//               <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
//               <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact</Link></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
//               <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
//             </ul>
//           </div>
          
//           <div>
//             <h3 className="font-bold text-lg mb-4">Contact Us</h3>
//             <ul className="space-y-4">
//               <li className="flex items-start">
//                 <MapPin size={20} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
//                 <span className="text-gray-400">SkyThrinethra Drones
// Muthyam building 3rd floor,behind Muthukur 2
// Grama Sachivalayam, mamidipudi - Muthukur road,
// Nellore-524001,
// Andhra Pradesh, India
// </span>
//               </li>
//               <li className="flex items-center">
//                 <Phone size={20} className="text-gray-400 mr-3 flex-shrink-0" />
//                 <span className="text-gray-400">+91 75694 34522</span>
//               </li>
//               <li className="flex items-center">
//                 <Mail size={20} className="text-gray-400 mr-3 flex-shrink-0" />
//                 <span className="text-gray-400">contact@skythrinethra.com</span>
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
//           <p className="text-gray-400 mb-4 md:mb-0">© {new Date().getFullYear()} ＳＫＹＴＨＲＩＮΞＴＨＲΛ. All rights reserved.</p>
//           <div className="flex space-x-6">
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy</a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms</a>
//             <a href="#" className="text-gray-400 hover:text-white transition-colors">Sitemap</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Youtube,
} from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div>
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <img
                src="https://skythrinethrssets.blob.core.windows.net/skythrinethfiles/SKYTHRINETHRA.png?sp=r&st=2025-05-24T10:01:27Z&se=2026-07-01T18:01:27Z&spr=https&sv=2024-11-04&sr=b&sig=x%2BDRIAlLlExpUje%2BND7qVd78aoJNCVAf4DEPzOOFVOU%3D"
                alt="SkyThrinethra Logo"
                className="h-8 w-auto object-contain"
              />
              <span className="font-bold text-xl">ＳＫＹＴＨＲＩＮΞＴＨＲΛ</span>
            </Link>
            <p className="text-gray-400 mb-6">
              Pioneering technology solutions across drone products, software services, and educational training.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/people/SkyThrinethra/61573399597282/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.youtube.com/@skythrinethra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Youtube size={20} />
              </a>
              <a
                href="https://x.com/i/flow/login?redirect_after_login=%2FSkyThrinethra"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Twitter size={20} />
              </a>
              <a
                href="https://www.instagram.com/skythrinethra/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/%EF%BD%93%EF%BD%8B%EF%BD%99%EF%BD%94%EF%BD%88%EF%BD%92%EF%BD%89%EF%BD%8E%CE%BE%EF%BD%94%EF%BD%88%EF%BD%92%CE%BB-274198355/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-bold text-lg mb-4">Services</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/drones" className="text-gray-400 hover:text-white transition-colors">
                  Drone Products
                </Link>
              </li>
              <li>
                <Link to="/software" className="text-gray-400 hover:text-white transition-colors">
                  Software Development
                </Link>
              </li>
              <li>
                <Link to="/software" className="text-gray-400 hover:text-white transition-colors">
                  AI & Machine Learning
                </Link>
              </li>
              <li>
                <Link to="/training" className="text-gray-400 hover:text-white transition-colors">
                  Educational Training
                </Link>
              </li>
              <li>
                <Link to="/software" className="text-gray-400 hover:text-white transition-colors">
                  Web Development
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-400 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold text-lg mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin size={20} className="text-gray-400 mr-3 mt-1 flex-shrink-0" />
                <span className="text-gray-400">
                  SkyThrinethra Drones<br />
                  Muthyam Building 3rd Floor, Behind Muthukur 2<br />
                  Grama Sachivalayam, Mamidipudi - Muthukur Road,<br />
                  Nellore-524001, Andhra Pradesh, India
                </span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400"> +91 75694 34522</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="text-gray-400 mr-3 flex-shrink-0" />
                <span className="text-gray-400">contact@skythrinethra.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 mb-4 md:mb-0">
            © {new Date().getFullYear()} ＳＫＹＴＨＲＩＮΞＴＨＲΛ. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">
              Terms
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white transition-colors">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
