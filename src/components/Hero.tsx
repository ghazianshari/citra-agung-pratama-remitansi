import Image from "next/image";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen lg:pb-24">
      <div className="container mx-auto lg:px-12 h-full pt-20 md:pt-24 lg:pt-28">
        {/* Mobile Layout */}
        <div className="lg:hidden flex flex-col pt-4 pb-8 relative">
          <div className="space-y-6 text-center mb-8 relative z-10">
            <h1 className="font-extrabold text-3xl leading-tight text-(--color-primary)">
              Solusi Transfer Dana
              <br />
              yang Cepat, Aman,
              <br />
              dan Terpercaya
            </h1>

            <p className="text-sm text-(--color-secondary) leading-relaxed px-2">
              Kami menyediakan solusi remitansi modern untuk memenuhi kebutuhan
              transfer dana domestik dan korporasi dengan sistem yang cepat,
              aman, dan transparan, didukung teknologi terintegrasi serta tata
              kelola profesional. Setiap transaksi dijalankan sesuai regulasi
              yang berlaku dan dalam kerangka kepatuhan terhadap Bank Indonesia
              sebagai otoritas sistem pembayaran.
            </p>

            <Image
              src="/assets/hero/bi-hero-mobile.svg"
              width={100}
              height={100}
              alt="BI License"
              className="w-[90%] h-auto mx-auto"
            />

            <a href="#hubungi-kami">
              <button className="text-white mb-5 bg-(--color-button) hover:bg-button/90 font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Hubungi Kami
              </button>
            </a>
            <a href="#layanan">
              <button className="text-(--color-button) bg-transparent border border-(--color-button) font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 w-[90%] mx-auto block">
                Lihat Layanan
              </button>
            </a>
          </div>

          <div className="relative w-full -mt-36 mb-2 z-0">
            <Image
              width={1000}
              height={1000}
              src="/assets/hero/cewe-cewe-hero-mobile.svg"
              alt="Business professionals discussing"
              className="w-full h-auto max-w-xl mx-auto"
            />
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:grid lg:grid-cols-2 gap-12 items-center h-full">
          {/* Left Content */}
          <div className="space-y-6 relative z-10">
            <h1 className="font-extrabold text-4xl lg:text-5xl xl:text-6xl leading-tight text-(--color-primary)">
              Solusi Transfer Dana
              <br />
              yang Cepat, Aman,
              <br />
              dan Terpercaya
            </h1>

            <p className="text-lg text-justify text-(--color-secondary) leading-relaxed">
              Kami menyediakan solusi remitansi modern untuk memenuhi kebutuhan
              transfer dana domestik dan korporasi dengan sistem yang cepat,
              aman, dan transparan, didukung teknologi terintegrasi serta tata
              kelola profesional. Setiap transaksi dijalankan sesuai regulasi
              yang berlaku dan dalam kerangka kepatuhan terhadap Bank Indonesia
              sebagai otoritas sistem pembayaran.
            </p>

            <Image
              src="/assets/hero/bi-hero.svg"
              width={100}
              height={100}
              alt="BI License"
              className="w-[42%] h-auto mt-4"
            />

            <div className="text-(--color-secondary)">
              <a href="#hubungi-kami">
                <button className="text-white bg-(--color-button) hover:bg-button/90 cursor-pointer font-semibold rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Hubungi Kami
                </button>
              </a>
              <a href="#layanan" className="ml-4">
                <button className="bg-transparent border-2 text-(--color-button) font-bold border-(--color-button) cursor-pointer rounded-lg px-8 py-3.5 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl">
                  Lihat Layanan
                </button>
              </a>
            </div>
          </div>

          {/* Right Content - Image positioned at top-right corner */}
          <div className="lg:absolute lg:right-0 lg:top-0 lg:w-[50%]">
            <Image
              width={1000}
              height={1000}
              src="/assets/hero/cewe-cewe-hero.svg"
              alt="Business professionals discussing"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
