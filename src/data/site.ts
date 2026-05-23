export const SITE_NAME = "Yoga Con Mar";
export const SITE_URL = "https://yogaconmar.com";
export const WHATSAPP_NUMBER = "521XXXXXXXXXX";
export const INSTAGRAM_URL = "https://instagram.com/yogaconmar";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const defaultWhatsappMessage =
  "Hola Mar, quiero informacion sobre las clases de yoga";

export const navItems = [
  { href: "#inicio", label: "Inicio" },
  { href: "#clases", label: "Clases" },
  { href: "#beneficios", label: "Beneficios" },
  { href: "#testimonios", label: "Testimonios" },
  { href: "#precios", label: "Precios" },
  { href: "#faq", label: "FAQ" },
];

export const images = {
  hero:
    "https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  beginner:
    "https://images.unsplash.com/photo-1602217709696-d2d1da53fb37?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  group:
    "https://images.unsplash.com/photo-1589734004790-885767bec2ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  private:
    "https://images.unsplash.com/photo-1484618273142-b6e2536a307d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
  online:
    "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixlib=rb-4.1.0&q=80&w=1080",
};
