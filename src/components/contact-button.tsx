import { Instagram, MessageCircle } from "lucide-react";
import { getContactLink } from "@/lib/contact";

interface ContactButtonProps {
  whatsappLabel?: string;
  instagramLabel?: string;
  theme?: string;
  className?: string;
  id?: string;
  showIcon?: boolean;
}

export function ContactButton({
  whatsappLabel = "Conversar no WhatsApp",
  instagramLabel = "Conversar no Instagram",
  theme,
  className = "button button--primary",
  id,
  showIcon = true,
}: ContactButtonProps) {
  const { href, channel } = getContactLink(theme);
  const isWhatsApp = channel === "whatsapp";
  const Icon = isWhatsApp ? MessageCircle : Instagram;
  const label = isWhatsApp ? whatsappLabel : instagramLabel;

  return (
    <a className={className} href={href} target="_blank" rel="noreferrer" id={id}
      aria-label={theme ? `${label}: ${theme}` : undefined}>
      {showIcon && <Icon aria-hidden="true" size={18} strokeWidth={1.8} />}
      {label}
    </a>
  );
}
