/**
 * AURA BEAUTY — Site Configuration
 * Centralized settings for contact info, social accounts, and boutique details.
 * Modify placeholders here to update across the entire website.
 */

export const siteConfig = {
  brandName: "AURA BEAUTY",
  subtitle: "BRIDAL BOUTIQUE",
  magazineIssue: "EDITION N° 01 • JEDDAH",
  season: "THE BRIDAL ISSUE 2026",
  
  // Official Contact Info
  phone: "0568232660",
  whatsapp: "966568232660",
  email: "aurabeauty.jed@gmail.com",
  
  // Official Social Media Accounts (direct navigation URLs)
  instagram: "https://www.instagram.com/aurabeauty.ksa",
  instagramHandle: "aurabeauty.ksa",
  
  tiktok: "https://www.tiktok.com/@aurabeauty.ksa",
  tiktokHandle: "aurabeauty.ksa",
  
  snapchat: "",
  snapchatHandle: "",
  
  // Location
  city: "جدة، المملكة العربية السعودية",
  district: "حي المروة",
  street: "شارع عبدالرحمن الخزاعي",
  fullAddress: "حي المروة، شارع عبدالرحمن الخزاعي، جدة، السعودية",
  mapUrl: "https://maps.google.com/?q=حي+المروه+شارع+عبدالرحمن+الخزاعي+جدة",
  
  // Brand Slogans
  slogans: {
    heroMain: "فستانك اللي تحلمين فيه عندنا",
    heroSub: "لأنك تستاهلين تكونين الأجمل",
    intro: "ليلة العمر تبدأ من هنا",
    quote1: "خلي إطلالتك تتكلم عنك",
    quote2: "جمالك يحتاج فستان يليق فيك",
    galleryTitle: "فستان يخلي الكل يلتفت لك",
    ctaTitle: "عروس وتستاهل كل الزين",
  }
};

/**
 * Helper to generate a safe WhatsApp URL with pre-filled message
 */
export function getWhatsAppUrl(message) {
  const defaultText = encodeURIComponent(
    message || "مرحبًا AURA BEAUTY، أود الاستفسار عن فساتين الزفاف وحجز موعد لزيارة البوتيك."
  );
  
  const rawNumber = siteConfig.whatsapp || "966568232660";
  let cleanNumber = rawNumber.replace(/[^0-9]/g, "");
  if (cleanNumber.startsWith("0")) {
    cleanNumber = "966" + cleanNumber.slice(1);
  }
  return `https://wa.me/${cleanNumber}?text=${defaultText}`;
}

/**
 * Helper to generate phone dialer link
 */
export function getPhoneUrl() {
  if (!siteConfig.phone || siteConfig.phone.includes("[")) {
    return "#contact";
  }
  return `tel:${siteConfig.phone.replace(/[^0-9+]/g, "")}`;
}
