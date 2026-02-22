"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface NavItem {
  label: string;
  href: string;
  isSection: boolean;
  target?: string;
}

export default function Footer() {
  const pathname = usePathname();
  const router = useRouter();

  const menuLinks: NavItem[] = [
    { label: "Home", href: "/", isSection: true, target: "home" },
    { label: "Tentang Kami", href: "/tentang-kami", isSection: false },
    { label: "Layanan", href: "/", isSection: true, target: "layanan" },
    {
      label: "Hubungi kami",
      href: "/",
      isSection: true,
      target: "hubungi-kami",
    },
  ];

  const legalLinks: NavItem[] = [
    {
      label: "Kebijakan Privasi",
      href: "/kebijakan-privasi",
      isSection: false,
    },
    {
      label: "Ketentuan Layanan",
      href: "/ketentuan-layanan",
      isSection: false,
    },
    {
      label: "Laporkan Kerentanan",
      href: "/laporkan-kerentanan",
      isSection: false,
    },
  ];

  const handleNavClick = (e: React.MouseEvent, item: Partial<NavItem>) => {
    if (item.isSection && item.target) {
      if (pathname === "/") {
        e.preventDefault();
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (item.target === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        router.push(`/?scroll=${item.target}`);
        e.preventDefault();
      }
    }
  };

  return (
    <footer className="bg-(--color-primary) sleek-zoom-90 text-white">
      <div className="w-full mx-auto px-6 md:px-20 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Column 1 - Logo & Description */}
          <div className="lg:col-span-3 space-y-6">
            <Link
              href="/"
              onClick={(e) =>
                handleNavClick(e, { isSection: true, target: "home" })
              }
            >
              <Image
                width={180}
                height={60}
                src="/assets/capr-footer-logo.svg"
                alt="CAPR Logo"
                className="h-11 w-auto cursor-pointer"
              />
            </Link>
            <p className="font-inter text-base font-light leading-relaxed opacity-90">
              Layanan remitansi terpercaya untuk transfer dana internasional dan
              domestik dengan keamanan dan transparansi terjamin.
            </p>
          </div>

          {/* Column 2 - Menu */}
          <div className="lg:col-span-4 lg:ml-12">
            <h3 className="font-urbanist font-bold text-xl mb-8">Menu</h3>
            <div className="grid grid-cols-2 gap-4">
              <ul className="space-y-4 font-inter font-light text-base">
                {menuLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4 font-inter font-light text-base">
                {legalLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Column 3 - Hubungi Kami */}
          <div className="lg:col-span-2">
            <h3 className="font-urbanist font-bold text-xl mb-8">
              Hubungi Kami
            </h3>
            <ul className="space-y-5 font-inter font-light text-base">
              <li className="flex items-center gap-3">
                <WhatsAppIcon />
                <span className="text-sm lg:text-base">+62 812 3456 7890</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon />
                <span className="text-sm lg:text-base">+62 21 555 0123</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon />
                <span className="text-sm lg:text-base">
                  info@citrapratama.co.id
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4 - Alamat Kantor */}
          <div className="lg:col-span-3">
            <h3 className="font-urbanist font-bold text-xl mb-8">
              Alamat Kantor
            </h3>
            <div className="flex items-start gap-3 font-inter font-light">
              <LocationIcon />
              <p className="leading-relaxed text-sm opacity-90">
                Satrio Tower, Lt. 16, Jl. Prof. Dr. Satrio Kav. 1-4, Kuningan,
                Jakarta Selatan, 12950
                <br />
                Jl. Sudirman Kav. 50, Jakarta Selatan 12190
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full border-t border-white/20">
        <div className="py-8">
          <p className="text-center font-inter text-sm opacity-80">
            © {new Date().getFullYear()} Citra Agung Pratama Remitansi. All
            rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

// Helper Components for Icons
const WhatsAppIcon = () => (
  <svg className="w-5 h-5 shrink-0 fill-(--color-button)" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
  </svg>
);

const PhoneIcon = () => (
  <svg className="w-5 h-5 shrink-0 fill-(--color-button)" viewBox="0 0 24 24">
    <path d="M20.01 15.38c-1.23 0-2.42-.2-3.53-.56a.977.977 0 00-1.01.24l-1.57 1.97c-2.83-1.35-5.48-3.9-6.89-6.83l1.95-1.66c.27-.28.35-.67.24-1.02-.37-1.11-.56-2.3-.56-3.53 0-.54-.45-.99-.99-.99H4.19C3.65 3 3 3.24 3 3.99 3 13.28 10.73 21 20.01 21c.71 0 .99-.63.99-1.18v-3.45c0-.54-.45-.99-.99-.99z" />
  </svg>
);

const MailIcon = () => (
  <svg className="w-5 h-5 shrink-0 fill-(--color-button)" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const LocationIcon = () => (
  <svg
    className="w-5 h-5 shrink-0 mt-1 fill-(--color-button)"
    viewBox="0 0 24 24"
  >
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);
