import { ArrowUpRight, Mail, Send } from "lucide-react";
import { footerGroups, socialLinks } from "../data/data";
import { scrollToSection, scrollToTop } from "../utils/scroll";

export default function Footer() {
  const handleLink = (href) => {
    if (!href) return;

    if (href.startsWith("#")) {
      scrollToSection(href.slice(1));
      return;
    }

    window.open(href, "_blank", "noopener,noreferrer");
  };

  return (
    <footer className="nova-footer">
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand">
            <button
              type="button"
              className="footer-logo"
              onClick={scrollToTop}
              aria-label="Back to NOVA home"
            >
              <span className="nova-logo-mark">
                <span />
                <span />
                <span />
              </span>

              <span className="nova-logo-text">NOVA</span>
            </button>

            <p>
              Build better. Work smarter. NOVA brings your people, projects,
              and AI into one intelligent workspace.
            </p>

            <div className="footer-socials">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;

                return (
                  <button
                    key={social.label || social.name || index}
                    type="button"
                    className="footer-social"
                    aria-label={social.label || social.name || "Social link"}
                    onClick={() => handleLink(social.href)}
                  >
                    {Icon ? <Icon size={17} /> : <ArrowUpRight size={17} />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="footer-links">
            {footerGroups.map((group, groupIndex) => (
              <div
                className="footer-column"
                key={group.title || group.label || groupIndex}
              >
                <h3>{group.title || group.label}</h3>

                <div className="footer-column-links">
                  {group.links?.map((link, linkIndex) => {
                    const label =
                      typeof link === "string"
                        ? link
                        : link.label || link.name;

                    const href =
                      typeof link === "string"
                        ? `#${link.toLowerCase().replace(/\s+/g, "-")}`
                        : link.href || link.url || link.to;

                    return (
                      <button
                        type="button"
                        className="footer-link"
                        key={label || linkIndex}
                        onClick={() => handleLink(href)}
                      >
                        <span>{label}</span>
                        <ArrowUpRight size={13} />
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          <div className="footer-newsletter">
            <span className="footer-kicker">STAY IN THE LOOP</span>

            <h3>Get smarter updates.</h3>

            <p>
              Product news, AI insights, and practical ideas for modern teams.
            </p>

            <form
              className="newsletter-form"
              onSubmit={(event) => {
                event.preventDefault();
              }}
            >
              <div className="newsletter-input-wrap">
                <Mail size={17} />

                <input
                  type="email"
                  placeholder="you@company.com"
                  aria-label="Email address"
                  required
                />
              </div>

              <button type="submit" className="newsletter-submit">
                <Send size={16} />
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} NOVA. All rights reserved.</p>

          <div className="footer-bottom-links">
            <button type="button">Privacy</button>
            <button type="button">Terms</button>
            <button type="button">Security</button>
          </div>
        </div>
      </div>
    </footer>
  );
}

