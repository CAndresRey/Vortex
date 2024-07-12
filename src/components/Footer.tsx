
const Footer = () => {
    return (
      <footer className="bg-secondary py-6 mb-0 w-full h-full">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="text-light">
              © 2024 Research Assistant, Inc. All rights reserved.
            </div>
            <div className="flex space-x-4">
              <a href="/terms" className="text-light hover:text-accent">
                Terms
              </a>
              <a href="/privacy" className="text-light hover:text-accent">
                Privacy
              </a>
              <a href="/contact" className="text-light hover:text-accent">
                Contact
              </a>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
