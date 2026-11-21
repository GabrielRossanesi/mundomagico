import { business } from "@/lib/business";

const configuredNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.trim() ?? "";
const digits = configuredNumber.replace(/[+().\s-]/g, "");
const whatsappNumber = /^[1-9]\d{7,14}$/.test(digits) && /^\+?[\d().\s-]+$/.test(configuredNumber)
  ? digits
  : null;

export const whatsappConfigured = whatsappNumber !== null;

export function getContactLink(theme?: string) {
  if (!whatsappNumber) {
    return { href: business.instagram, channel: "instagram" as const };
  }

  const message = theme
    ? `Olá! Conheci a Mundo Mágico pelo site e gostaria de consultar a disponibilidade do tema ${theme}.`
    : "Olá! Conheci a Mundo Mágico pelo site e gostaria de saber mais sobre os kits Pegue e Monte.";

  return {
    href: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`,
    channel: "whatsapp" as const,
  };
}
