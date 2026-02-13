export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return <footer className="w-full font-sans bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex items-start gap-4">
          <div className="h-16 md:h-20 lg:h-32">
             <img src="/logos/gdgoc-logo-horizontal-light.png" alt="GDG Logo" className="h-full w-auto" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold text-gray-800 mb-4 text-xl">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="text-[#1E1E1E] hover:text-gray-600 flex items-center gap-1 text-xl">
                <span className="text-gray-400">&gt;</span> About Us
              </a>
            </li>
            <li>
              <a href="/" className="text-[#1E1E1E] hover:text-gray-600 flex items-center gap-1 text-xl">
                <span className="text-gray-400">&gt;</span> Events
              </a>
            </li>
            <li>
              <a href="/" className="text-[#1E1E1E] hover:text-gray-600 flex items-center gap-1 text-xl">
                <span className="text-gray-400">&gt;</span> Gallery
              </a>
            </li>
            <li>
              <a href="/" className="text-[#1E1E1E] hover:text-gray-600 flex items-center gap-1 text-xl">
                <span className="text-gray-400">&gt;</span> Resources
              </a>
            </li>
            <li>
              <a href="/" className="text-[#1E1E1E] hover:text-gray-600 flex items-center gap-1 text-xl">
                <span className="text-gray-400">&gt;</span> Membership
              </a>
            </li>
            <li>
              <a href="/" className="text-[#1E1E1E] hover:text-gray-600 flex items-center gap-1 text-xl">
                <span className="text-gray-400">&gt;</span> Contact Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-[#1E1E1E] mb-4 text-xl">Social</h3>
          <div className="flex gap-4 ">
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/mail.svg" alt="Email" className="h-10" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/linkedin-logo.svg" alt="LinkedIn" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/facebook-logo.svg" alt="Facebook" className="w-10 h-10" />
            </a>
            <a href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/instagram-logo.svg" alt="Instagram" className="w-10 h-10" />
            </a>
          </div>
        </div>
      </div>

      <div className="bg-[#1e1e1e] text-gray-300 py-4 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm tracking-wide">
          <p>© {currentYear} GDG on Campus Bicol University.</p>
          <p className="mt-2 md:mt-0">All rights reserved.</p>
        </div>
      </div>
    </footer>
}
