import Link from "next/dist/client/link";
import { TextSubheading, TextBody } from "@/components/text";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return <footer className=" font-sans bg-white border-t border-gray-100">
      <div className="brand-width-container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex items-start gap-4">
          <div className="h-16 md:h-20 lg:h-32">
             <img src="/logos/gdgoc-logo-horizontal-light.png" alt="GDG Logo" className="h-full object-contain" />
          </div>
        </div> 


        <div className="flex justify-between md:gap-10 lg:gap-20 px-2.5 ">
          <div>
            <TextSubheading className="mb-4">Quick Links</TextSubheading>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <span className="text-gray-400">&gt;</span> <TextBody>About Us</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <span className="text-gray-400">&gt;</span> <TextBody>Events</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <span className="text-gray-400">&gt;</span> <TextBody>Gallery</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <span className="text-gray-400">&gt;</span> <TextBody>Resources</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <span className="text-gray-400">&gt;</span> <TextBody>Membership</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <span className="text-gray-400">&gt;</span> <TextBody>Contact Us</TextBody>
                </Link>
              </li>
            </ul>
          </div>

         <div>
          <TextSubheading className="mb-4">Social</TextSubheading>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/socials/mail.svg" alt="Email" className="h-10" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/socials/linkedin-logo.svg" alt="LinkedIn" className="w-10 h-10" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/socials/facebook-logo.svg" alt="Facebook" className="w-10 h-10" />
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <img src="/logos/socials/instagram-logo.svg" alt="Instagram" className="w-10 h-10" />
            </Link>
          </div>
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
