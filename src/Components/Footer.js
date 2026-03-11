import React from "react";
import "../main.css";
import "../light.css";
import { portfolioContent } from "./Data"; // adapte si ton fichier s'appelle autrement

function Footer(props) {
  let content = portfolioContent;
  props.language === "English"
    ? (content = content.English)
    : (content = content.Français);

  return (
    <footer className="portfolio-footer">
      <div className="portfolio-footer-left">
        <p className="footer-name">{content.footer.name}</p>
        <p className="footer-location">{content.footer.location}</p>
      </div>

      <div className="portfolio-footer-right">
        <a
          className="footer-email"
          href={`mailto:${content.footer.email}`}
        >
          {content.footer.email}
        </a>
      </div>
    </footer>
  );
}

export default Footer;