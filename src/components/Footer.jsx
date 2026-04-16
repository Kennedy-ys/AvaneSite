import LogoImg from '../assets/logo.jpg'

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 py-16 px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="md:col-span-2">
                  <img src={LogoImg} alt="Avane Logo" className="mb-4 w-20 h-9"/>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Transforming businesses through innovative technology solutions,
              thoughtful design, and strategic research.
            </p>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Services</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#research"
                  className="hover:text-white transition-colors"
                >
                  Research
                </a>
              </li>
              <li>
                <a
                  href="#development"
                  className="hover:text-white transition-colors"
                >
                  Software Development
                </a>
              </li>
              <li>
                <a
                  href="#design"
                  className="hover:text-white transition-colors"
                >
                  UI/UX Design
                </a>
              </li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#portfolio"
                  className="hover:text-white transition-colors"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-white transition-colors"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="#hire" className="hover:text-white transition-colors">
                  Hire Us
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-sm text-slate-500">
            © {new Date().getFullYear()} Avane. All rights reserved.
          </div>
          <div className="flex gap-6 text-sm">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
