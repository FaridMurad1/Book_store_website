import React from 'react';

const Footer = () => {
    return (
        <footer className="footer bg-neutral text-neutral-content py-10 px-4">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
                {/* Company Info */}
                <div>
                    <h2 className="text-2xl font-bold mb-3">Book Store</h2>
                    <p>
                        Streamline your dining experience with efficient meal planning and management. 
                        Trusted by students and administrators.
                    </p>
                    <p className="mt-4">
                        © 2024 DiningMate. All Rights Reserved .
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3 className="footer-title mb-3">Our Services</h3>
                    <nav>
                        <ul>
                            <li className="mb-2">
                                <a href="/about" className="link link-hover">Choosing Books</a>
                            </li>
                            <li className="mb-2">
                                <a href="/contact" className="link link-hover">Buying Books</a>
                            </li>
                            <li className="mb-2">
                                <a href="/services" className="link link-hover"></a>
                            </li>
                            <li className="mb-2">
                                <a href="/faq" className="link link-hover">FAQ</a>
                            </li>
                        </ul>
                    </nav>
                </div>

                {/* Social Media */}
                <div>
                    <h3 className="footer-title mb-3">Connect With Us</h3>
                    <div className="flex gap-4">
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="fill-current">
                                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                            </svg>
                        </a>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="fill-current">
                                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                            </svg>
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 24 24" className="fill-current">
                                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.31.975.975 1.248 2.243 1.31 3.608.058 1.267.07 1.647.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.31 3.608-.975.975-2.243 1.248-3.608 1.31-1.267.058-1.647.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.31-.975-.975-1.248-2.243-1.31-3.608-.058-1.267-.07-1.647-.07-4.85s.012-3.584.07-4.85c.062-1.366.336-2.633 1.31-3.608.975-.975 2.243-1.248 3.608-1.31 1.267-.058 1.647-.07 4.85-.07zm0-2.163c-3.259 0-3.667.013-4.947.072-1.305.061-2.377.336-3.258 1.217-.881.881-1.156 1.953-1.217 3.258-.059 1.28-.072 1.688-.072 4.947s.013 3.667.072 4.947c.061 1.305.336 2.377 1.217 3.258.881.881 1.953 1.156 3.258 1.217 1.28.059 1.688.072 4.947.072s3.667-.013 4.947-.072c1.305-.061 2.377-.336 3.258-1.217.881-.881 1.156-1.953 1.217-3.258.059-1.28.072-1.688.072-4.947s-.013-3.667-.072-4.947c-.061-1.305-.336-2.377-1.217-3.258-.881-.881-1.953-1.156-3.258-1.217-1.28-.059-1.688-.072-4.947-.072z" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
