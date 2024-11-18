import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  return (
    <a
      href="https://wa.me/095982087"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
      aria-label="Chatear por WhatsApp"
    >
      <FaWhatsapp size={32} />
    </a>
  );
}
