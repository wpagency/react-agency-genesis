import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import { BRAND, NAVIGATION } from '@/lib/constants';
import AgencyLogo from '@/assets/wp-agency-logo.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialIcons = {
    twitter: Twitter,
    linkedin: Linkedin,
    github: Github,
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center space-x-3 mb-4">
              <img
                src={AgencyLogo}
                alt={`${BRAND.name} Logo`}
                className="h-8 w-auto"
              />
              <div className="flex flex-col">
                <span className="font-space-grotesk font-bold text-lg text-foreground">
                  {BRAND.name}
                </span>
                <span className="text-xs text-muted-foreground font-medium">
                  {BRAND.domain}
                </span>
              </div>
            </Link>

            <p className="text-muted-foreground mb-6 max-w-md">
              {BRAND.description}
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  href={`mailto:${BRAND.contact.email}`}
                  className="hover:text-primary transition-colors"
                >
                  {BRAND.contact.email}
                </a>
              </div>
              <div className="flex items-center space-x-3 text-sm text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a
                  href={`tel:${BRAND.contact.phone}`}
                  className="hover:text-primary transition-colors"
                >
                  {BRAND.contact.phone}
                </a>
              </div>
              <div className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span>{BRAND.contact.address}</span>
              </div>
            </div>
          </div>

          {/* Navigation Links */}
          {NAVIGATION.footer.map((section) => (
            <div key={section.title}>
              <h3 className="font-space-grotesk font-semibold text-foreground mb-4">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm text-muted-foreground hover:text-primary transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex flex-col gap-1">
              <p className="text-sm text-muted-foreground">
                © {currentYear} {BRAND.name}. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Built with ♥ by{' '}
                <a href="https://wpagency.xyz" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  WP Agency
                </a>{' '}
                — WordPress and Beyond
              </p>
            </div>

            {/* Social Links */}
            <div className="flex items-center space-x-4">
              {Object.entries(BRAND.social).map(([platform, url]) => {
                const Icon = socialIcons[platform as keyof typeof socialIcons];
                if (!Icon) return null;

                return (
                  <a
                    key={platform}
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    aria-label={`Follow us on ${platform}`}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Legal Links */}
            <div className="flex items-center space-x-6 text-sm">
              <Link
                to="/privacy"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                to="/terms"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


