import { RiFacebookCircleLine } from "react-icons/ri";
import { FaInstagramSquare, FaLinkedin, FaWhatsapp } from "react-icons/fa";

export default function Footer() {
  // Social links array
  const socialLinks = [
    {
      id: "facebook",
      icon: <RiFacebookCircleLine />,
      href: "http://www.facebook.com/tabindaijaz.khan",
      bgColor: "bg-blue-700",
    },
    {
      id: "whatsapp",
      icon: <FaWhatsapp />,
      href: "http://www.whatsapp.com/03112722567",
      bgColor: "bg-green-500",
    },
    {
      id: "instagram",
      icon: <FaInstagramSquare />,
      href: "http://www.instagram.com/tabindaijaz.com",
      bgColor: "bg-yellow-500",
    },
    {
      id: "linkedin",
      icon: <FaLinkedin />,
      href: "http://www.linkedin.com/tabindaijaz.com",
      bgColor: "bg-blue-900",
    },
  ];

  return (
    <div>
      <hr className="space-y-2" />
      <div className="bg-black text-white flex justify-around md:justify-around">
        {/* Contact Information */}
        <div className="text-1xl mt-4 md:text-2xl md:mt-5 lg:mt-6 lg:text-2xl">
          <h3 className="text-2xl md:text-2xl lg:text-3xl">Contact Us</h3>
          <p>
            <a href="mailto:tabinaatif12@gmail.com">
              Email: tabinaatif12@gmail.com
            </a>
          </p>
          <p>Phone: 03470000000</p>
          <p>Address: Landhi Karachi</p>
        </div>

        {/* Social Links */}
        <div className="text-1xl mt-4 md:text-2xl lg:text-4xl md:mt-5 lg:mt-6 lg:mb-3">
          <h3 className="text-2xl lg:text-3xl md:text-2xl">Quick Links</h3>
          <ul className="flex sm:space-x-3 mt-2 text-md md:mt-3 md:space-x-5 lg:space-x-8 lg:mt-4">
            {socialLinks.map((link) => (
              <li key={link.id} className={`${link.bgColor} p-2 rounded-full`}>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  {link.icon}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
