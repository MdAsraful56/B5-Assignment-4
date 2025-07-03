import facebookLogo from "@/assets/Icons/facebook.png";
import instagramLogo from "@/assets/Icons/instagram.png";
import youtubeLogo from "@/assets/Icons/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Site Info */}
        <div className="text-center md:text-left">
          <h1 className="text-xl font-semibold text-white">My Application</h1>
          <p className="text-sm">Your go-to solution for managing books.</p>
        </div>

        {/* Social Media Icons */}
        <div className="flex space-x-4">
          <a href="https://youtube.com" target="_blank">
            <img
              src={youtubeLogo}
              alt="YouTube"
              className="w-10 h-10 hover:opacity-80 transition"
            />
          </a>
          <a href="https://facebook.com" target="_blank">
            <img
              src={facebookLogo}
              alt="Facebook"
              className="w-10 h-10 hover:opacity-80 transition"
            />
          </a>
          <a href="https://instagram.com" target="_blank">
            <img
              src={instagramLogo}
              alt="Instagram"
              className="w-10 h-10 hover:opacity-80 transition"
            />
          </a>
        </div>
      </div>

      {/* Bottom Credits */}
      <div className="mt-4 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} My Application. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
