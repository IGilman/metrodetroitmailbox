"use client";

import { useState, useEffect } from "react";

const PHONE = "(734) 655-0305";
const PHONE_LINK = "tel:+17346550305";
const EMAIL = "metrodetroitmailbox@gmail.com";
const EMAIL_LINK = "mailto:metrodetroitmailbox@gmail.com";

const services = [
  {
    icon: "fa-solid fa-mailbox",
    fallbackIcon: "fa-solid fa-box",
    title: "New Mailbox Installation",
    description:
      "Already purchased your new mailbox? We'll take it from there. We install your mailbox and post in concrete, making sure everything is secure, level, and meets postal regulations. We always call 811 before digging (at no charge to you), haul away all trash and your old mailbox, and leave your yard clean.",
  },
  {
    icon: "fa-solid fa-wrench",
    fallbackIcon: "fa-solid fa-wrench",
    title: "Mailbox Repair",
    description:
      "Leaning post? Damaged door? Faded finish? We repair and restore mailboxes to like-new condition. From post straightening to full hardware replacement, we'll get your mailbox looking right. We clean up all debris and haul away any old materials when the job is done.",
  },
];

const processSteps = [
  {
    step: "1",
    title: "Get a Quote",
    description: "Contact us and we'll agree on a price and schedule a date that works for you.",
    icon: "fa-solid fa-handshake",
  },
  {
    step: "2",
    title: "811 Utility Check",
    description: "We call 811 and schedule them to mark underground utilities a few days before your installation — no charge for this.",
    icon: "fa-solid fa-phone-volume",
  },
  {
    step: "3",
    title: "Professional Installation",
    description: "We install your mailbox post in concrete, clean up all trash, and haul away your old mailbox. Total installation usually takes 3–4 hours.",
    icon: "fa-solid fa-screwdriver-wrench",
  },
];

const serviceAreas = [
  "Royal Oak",
  "Birmingham",
  "Troy",
  "Bloomfield Hills",
  "Rochester",
  "Novi",
  "Farmington Hills",
  "West Bloomfield",
  "Grosse Pointe",
  "Sterling Heights",
  "Shelby Township",
  "And More!",
];


export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navigation */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-primary/95 backdrop-blur-md shadow-lg py-3"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-[1200px] mx-auto px-5 flex items-center justify-between">
          <a
            href="#home"
            className="flex items-center gap-3 text-white no-underline"
          >
            <i className="fa-solid fa-envelope text-gold text-xl"></i>
            <span
              className="text-xl font-semibold tracking-wide"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Metro Detroit <span className="text-gold">MAILBOX</span>
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {["Home", "Services", "Service Areas", "Contact"].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-white/80 hover:text-gold transition-colors text-sm font-medium tracking-wider uppercase no-underline"
                >
                  {item}
                </a>
              )
            )}
            <a
              href="#contact"
              className="bg-gradient-to-r from-gold to-gold-light text-primary font-bold py-2.5 px-6 rounded-full text-sm tracking-wider no-underline hover:shadow-lg transition-shadow"
            >
              <i className="fa-solid fa-envelope mr-2"></i>Contact Us
            </a>
          </div>

          <button
            className="lg:hidden text-white text-2xl bg-transparent border-none cursor-pointer"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <i
              className={`fa-solid ${isMobileMenuOpen ? "fa-xmark" : "fa-bars"}`}
            ></i>
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden bg-primary/98 backdrop-blur-md border-t border-white/10 py-4">
            <div className="flex flex-col items-center gap-4">
              {["Home", "Services", "Service Areas", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/80 hover:text-gold transition-colors text-sm font-medium tracking-wider uppercase no-underline"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
              <a
                href="#contact"
                className="bg-gradient-to-r from-gold to-gold-light text-primary font-bold py-2.5 px-6 rounded-full text-sm tracking-wider no-underline"
              >
                <i className="fa-solid fa-envelope mr-2"></i>Contact Us
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage:
            "linear-gradient(135deg, rgba(26,54,93,0.85) 0%, rgba(13,27,42,0.9) 50%, rgba(26,54,93,0.8) 100%), url('https://images.unsplash.com/photo-1599670863577-0eab59024604?w=1920&q=80&fit=crop')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="max-w-[1200px] mx-auto px-5 text-center pt-20">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Professional{" "}
            <span className="text-gold">Mailbox Installation</span> & Repair
          </h1>
          <p className="text-white/80 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed">
            You buy the mailbox that best fits your home — we install it right.
            Professional mailbox installation and repair services across Metro
            Detroit.
          </p>

          {/* Contact info prominently in hero */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href={PHONE_LINK}
              className="bg-gradient-to-r from-gold to-gold-light text-primary font-bold py-4 px-8 rounded-full text-lg tracking-wide no-underline hover:shadow-xl transition-shadow flex items-center gap-3"
            >
              <i className="fa-solid fa-phone"></i>
              {PHONE}
            </a>
            <a
              href={EMAIL_LINK}
              className="border-2 border-white/30 text-white font-semibold py-4 px-8 rounded-full text-lg tracking-wide no-underline hover:border-gold hover:text-gold transition-colors flex items-center gap-3"
            >
              <i className="fa-solid fa-envelope"></i>
              Email Us
            </a>
          </div>
          <p className="text-white/60 text-sm">
            <i className="fa-solid fa-message mr-2"></i>
            Call or text anytime
          </p>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-light-bg">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="text-center mb-16">
            <span className="text-gold font-semibold text-sm tracking-widest uppercase">
              What We Do
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mt-3 mb-5"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              Our Services
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              You purchase the mailbox — we handle the installation and repair.
              Simple, reliable service for homeowners across Metro Detroit.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {services.map((service, i) => (
              <article
                key={i}
                className="bg-white rounded-2xl p-10 shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-300 text-center group"
              >
                <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-light rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-gold group-hover:to-gold-light transition-all duration-300">
                  <i
                    className={`${service.fallbackIcon} text-3xl text-white`}
                  ></i>
                </div>
                <h3
                  className="text-xl md:text-2xl font-bold text-primary mb-4"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  {service.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>

          {/* How It Works */}
          <div className="mt-20">
            <h3
              className="text-2xl md:text-3xl font-bold text-primary text-center mb-12"
              style={{ fontFamily: "Playfair Display, serif" }}
            >
              How It Works
            </h3>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {processSteps.map((step, i) => (
                <div key={i} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-gold-light rounded-full flex items-center justify-center mx-auto mb-4">
                    <i className={`${step.icon} text-2xl text-primary`}></i>
                  </div>
                  <div className="text-gold font-bold text-sm tracking-widest uppercase mb-2">
                    Step {step.step}
                  </div>
                  <h4
                    className="text-lg font-bold text-primary mb-2"
                    style={{ fontFamily: "Playfair Display, serif" }}
                  >
                    {step.title}
                  </h4>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas Section */}
      <section id="service-areas" className="py-20 md:py-28 bg-white">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-gold font-semibold text-sm tracking-widest uppercase">
                Where We Work
              </span>
              <h2
                className="text-3xl md:text-4xl font-bold text-primary mt-3 mb-5"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Serving Metro Detroit
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We provide professional mailbox installation and repair services
                throughout Oakland, Wayne, and Macomb counties. If you&apos;re in
                the Metro Detroit area, we&apos;ve got you covered.
              </p>
              <div className="grid grid-cols-2 gap-3">
                {serviceAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2">
                    <i className="fa-solid fa-location-dot text-gold text-sm"></i>
                    <span className="text-gray-600 font-medium">{area}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-to-br from-primary to-dark rounded-2xl p-12 flex flex-col items-center justify-center min-h-[350px] text-center">
              <i className="fa-solid fa-map-location-dot text-gold text-6xl mb-6"></i>
              <h3
                className="text-2xl font-bold text-white mb-3"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Oakland, Wayne & Macomb Counties
              </h3>
              <p className="text-white/70">
                Professional mailbox services across the greater Metro Detroit
                area.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 md:py-28 bg-primary text-white">
        <div className="max-w-[800px] mx-auto px-5 text-center">
          <span className="text-gold font-semibold text-sm tracking-widest uppercase">
            Get In Touch
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mt-3 mb-5"
            style={{ fontFamily: "Playfair Display, serif" }}
          >
            Contact Us
          </h2>
          <p className="text-white/70 text-lg mb-12 max-w-lg mx-auto">
            Ready to get your mailbox installed or repaired? Reach out by phone,
            text, or email — we&apos;d love to hear from you.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 max-w-xl mx-auto">
            <a
              href={PHONE_LINK}
              className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-8 transition-all no-underline text-white group"
            >
              <i className="fa-solid fa-phone text-gold text-4xl mb-4 group-hover:scale-110 transition-transform block"></i>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Call or Text
              </h3>
              <p className="text-gold text-lg font-semibold">{PHONE}</p>
              <p className="text-white/50 text-sm mt-2">
                Available for calls & texts
              </p>
            </a>

            <a
              href={EMAIL_LINK}
              className="bg-white/10 hover:bg-white/20 backdrop-blur rounded-2xl p-8 transition-all no-underline text-white group"
            >
              <i className="fa-solid fa-envelope text-gold text-4xl mb-4 group-hover:scale-110 transition-transform block"></i>
              <h3
                className="text-xl font-bold mb-2"
                style={{ fontFamily: "Playfair Display, serif" }}
              >
                Email Us
              </h3>
              <p className="text-gold text-lg font-semibold break-all">
                {EMAIL}
              </p>
              <p className="text-white/50 text-sm mt-2">
                We&apos;ll respond promptly
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark py-12">
        <div className="max-w-[1200px] mx-auto px-5">
          <div className="grid md:grid-cols-3 gap-10 mb-10">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <i className="fa-solid fa-envelope text-gold text-lg"></i>
                <span
                  className="text-white text-lg font-semibold tracking-wide"
                  style={{ fontFamily: "Playfair Display, serif" }}
                >
                  Metro Detroit{" "}
                  <span className="text-gold">MAILBOX</span>
                </span>
              </div>
              <p className="text-white/50 text-sm leading-relaxed">
                Professional mailbox installation and repair services for
                homeowners across Metro Detroit.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
                Quick Links
              </h4>
              <div className="flex flex-col gap-2">
                {[
                  "Home",
                  "Services",
                  "Service Areas",
                  "Contact",
                ].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="text-white/50 hover:text-gold transition-colors text-sm no-underline"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-sm tracking-wider uppercase">
                Contact Info
              </h4>
              <div className="flex flex-col gap-3">
                <a
                  href={PHONE_LINK}
                  className="text-white/50 hover:text-gold transition-colors text-sm no-underline flex items-center gap-2"
                >
                  <i className="fa-solid fa-phone text-gold"></i>
                  {PHONE} (Call or Text)
                </a>
                <a
                  href={EMAIL_LINK}
                  className="text-white/50 hover:text-gold transition-colors text-sm no-underline flex items-center gap-2"
                >
                  <i className="fa-solid fa-envelope text-gold"></i>
                  {EMAIL}
                </a>
                <div className="text-white/50 text-sm flex items-center gap-2">
                  <i className="fa-solid fa-location-dot text-gold"></i>
                  Metro Detroit, Michigan
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center">
            <p className="text-white/40 text-sm">
              &copy; {new Date().getFullYear()} Metro Detroit Mailbox.
              All rights reserved.
            </p>
            <p className="text-white/30 text-xs mt-2">
              Serving Royal Oak, Birmingham, Troy, Bloomfield Hills, Rochester,
              Novi, Farmington Hills, West Bloomfield, Grosse Pointe, and
              surrounding Metro Detroit communities.
            </p>
            <p className="text-white/30 text-xs mt-3">
              Website built by{" "}
              <a
                href="https://isaacgilman.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/50 hover:text-gold transition-colors no-underline"
              >
                Isaac Gilman
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
