"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

interface NavItem {
  label: string;
  href: string;
  isSection: boolean;
  target?: string;
}

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { label: "Beranda", href: "/", isSection: true, target: "home" },
    { label: "Tentang Kami", href: "/tentang-kami", isSection: false },
    { label: "Layanan", href: "/", isSection: true, target: "layanan" },
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

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent, item: Partial<NavItem>) => {
    setIsMenuOpen(false);

    if (item.isSection && item.target) {
      if (pathname === "/") {
        // Kalau di Home, langsung scroll halus
        e.preventDefault();
        const element = document.getElementById(item.target);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        } else if (item.target === "home") {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      } else {
        // Kalau di page lain, pindah ke home bawa query param
        // Link href="/" bakal jalan otomatis, tapi di arahin ke id spesifik
        router.push(`/?scroll=${item.target}`);
        e.preventDefault();
      }
    }
  };

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const scrollTo = searchParams.get("scroll");

    if (scrollTo) {
      // requestAnimationFrame biar sinkron sama refresh rate browser
      requestAnimationFrame(() => {
        // delay buat jaga"
        setTimeout(() => {
          const element = document.getElementById(scrollTo);

          if (element) {
            const navHeight = 80; // sesuain sama hegit navbar biar gak ketutup
            const bodyRect = document.body.getBoundingClientRect().top;
            const elementRect = element.getBoundingClientRect().top;
            const elementPosition = elementRect - bodyRect;
            const offsetPosition = elementPosition - navHeight;

            window.scrollTo({
              top: offsetPosition,
              behavior: "smooth",
            });
          } else if (scrollTo === "home") {
            window.scrollTo({ top: 0, behavior: "smooth" });
          }

          router.replace(pathname, { scroll: false });
        }, 150); // Delay kecil
      });
    }
  }, [pathname, router]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/20 backdrop-blur-sm shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="shrink-0">
              <Link
                href="/"
                onClick={(e) =>
                  handleNavClick(e, { isSection: true, target: "home" })
                }
              >
                <Image
                  src="/assets/capr-main-logo.svg"
                  width={150}
                  height={40}
                  alt="CAPR Logo"
                  className="h-7 md:h-9 w-auto cursor-pointer"
                />
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-9">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item)}
                  className="text-(--color-secondary) cursor-pointer hover:text-(--color-button) font-semibold text-base transition-colors duration-200"
                >
                  {item.label}
                </Link>
              ))}
              <button
                onClick={() => router.push("/#hubungi-kami")}
                className="text-white bg-(--color-button) hover:bg-button/70 cursor-pointer font-semibold rounded-lg px-6 py-2.5 transition-colors duration-200"
              >
                Hubungi Kami
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden relative w-8 h-8 flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="flex flex-col gap-1.5 relative w-full h-full">
                <span
                  className={`absolute h-0.5 w-full bg-[#240046] transition-all duration-300 ${isMenuOpen ? "rotate-45 top-3.5" : "top-1"}`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-[#240046] top-3.5 transition-all duration-300 ${isMenuOpen ? "opacity-0" : "opacity-100"}`}
                />
                <span
                  className={`absolute h-0.5 w-full bg-[#240046] transition-all duration-300 ${isMenuOpen ? "-rotate-45 bottom-3.5" : "bottom-1"}`}
                />
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          <div
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 left-0 right-0 bg-white z-50 md:hidden shadow-2xl animate-slideDown rounded-b-2xl">
            <div className="px-6 pt-6 pb-8">
              <div className="flex items-center justify-between mb-6">
                <Link
                  href="/"
                  onClick={(e) =>
                    handleNavClick(e, { isSection: true, target: "home" })
                  }
                >
                  <Image
                    src="/assets/capr-main-logo.svg"
                    alt="CAPR Logo"
                    width={150}
                    height={40}
                    className="h-7 w-auto"
                  />
                </Link>
                <button
                  onClick={() => setIsMenuOpen(false)}
                  className="p-2 w-10 h-10 flex items-center justify-center"
                >
                  <div className="relative w-6 h-6">
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#240046] rotate-45" />
                    <span className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-[#240046] -rotate-45" />
                  </div>
                </button>
              </div>

              <ul className="space-y-5 font-semibold text-base text-(--color-secondary)">
                {navItems.map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      onClick={(e) => handleNavClick(e, item)}
                      className="block hover:text-(--color-primary) transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
                <li className="pt-2">
                  <button
                    onClick={() => {
                      router.push("/#hubungi-kami");
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-white bg-(--color-button) hover:bg-button/70 px-6 py-3 rounded-lg transition-colors font-semibold"
                  >
                    Hubungi Kami
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Navbar;
