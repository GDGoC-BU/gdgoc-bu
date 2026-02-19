import Link from "next/dist/client/link";
import Image from "next/image";
import { TextSubheading, TextBody } from "@/components/text";

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return <footer className="brand-border border-x-0! border-t! border-b-0! bg-white">
      <div className="brand-width-container mx-auto px-6 py-12 flex flex-col md:flex-row justify-between gap-10">
        
        <div className="flex items-start gap-4">
          <div className="relative h-16 md:h-20 lg:h-32 w-48 md:w-56 lg:w-80">
             <Image src="/logos/gdgoc-logo-horizontal-light.png" alt="GDG Logo" fill className="object-contain" />
          </div>
        </div> 


        <div className="flex justify-between md:gap-10 lg:gap-20 px-2.5 ">
          <div>
            <TextSubheading className="mb-4">Quick Links</TextSubheading>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <TextBody>&gt; About Us</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <TextBody>&gt; Events</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <TextBody>&gt; Gallery</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <TextBody>&gt; Resources</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <TextBody>&gt; Membership</TextBody>
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-gray-600 flex items-center gap-1">
                  <TextBody>&gt; Contact Us</TextBody>
                </Link>
              </li>
            </ul>
          </div>

         <div>
          <TextSubheading className="mb-4">Social</TextSubheading>
          <div className="flex flex-col sm:flex-row gap-4 ">
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <div className="relative w-11 h-10">
                <Image src="/logos/socials/mail.svg" alt="Email" fill className="object-contain" />
              </div>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <div className="relative w-10 h-10">
                <Image src="/logos/socials/linkedin-logo.svg" alt="LinkedIn" fill className="object-contain" />
              </div>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <div className="relative w-10 h-10">
                <Image src="/logos/socials/facebook-logo.svg" alt="Facebook" fill className="object-contain" />
              </div>
            </Link>
            <Link href="#" className="hover:opacity-70 transition-opacity">
              <div className="relative w-10 h-10">
                <Image src="/logos/socials/instagram-logo.svg" alt="Instagram" fill className="object-contain" />
              </div>
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
