import Image from "next/image";

const TentangKami = () => {
  const features = [
    {
      title: "Visi Kami",
      src: "/assets/tentang/visi.svg",
      desc: "Menjadi perusahaan remitansi yang terpercaya dan berdaya saing tinggi, dengan standar layanan profesional serta sistem yang aman dan terintegrasi untuk mendukung kebutuhan transaksi finansial secara berkelanjutan.",
    },
    {
      title: "Misi Kami",
      src: "/assets/tentang/misi.svg",
      desc: "Menjalankan layanan transfer dana yang cepat, aman, dan transparan dengan standar profesionalisme serta kepatuhan terhadap regulasi, didukung sistem yang terintegrasi untuk memastikan setiap transaksi berlangsung andal dan terpercaya.",
    },
  ];

  return (
    <section id="tentang" className="bg-white py-16 md:py-24 overflow-hidden">
      <div className="container mx-auto px-4 md:pr-18 md:pl-0">
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-12 lg:gap-0">
          {/* Left Section - Image */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative group">
              <div className="absolute -top-10 -left-10 w-72 h-72 bg-purple-100 rounded-full opacity-40 blur-3xl" />

              {/* Desktop Image */}
              <div className="hidden lg:block">
                <Image
                  width={600}
                  height={600}
                  src="/assets/tentang/cewe-ngomong-depan.svg"
                  alt="Team collaboration desktop"
                  className="relative z-10 w-full h-auto rounded-3xl object-contain"
                />
              </div>

              {/* Mobile Image */}
              <div className="block lg:hidden">
                <Image
                  width={400}
                  height={400}
                  src="/assets/tentang/cewe-ngomong-depan-mobile.svg"
                  alt="Team collaboration mobile"
                  className="relative z-10 w-full h-auto rounded-3xl object-contain"
                />
              </div>
            </div>
          </div>

          {/* Right Section - Adaptive Content */}
          <div className="w-full lg:w-1/2 sleek-zoom-90">
            {/* Header: Center on mobile, Left on desktop */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-(--color-primary) mb-6 leading-[1.2] text-center lg:text-left">
              Membangun Kepercayaan Melalui Integritas dan Profesionalisme
            </h2>

            {/* Paragraph: Center on mobile, Left on desktop */}
            <p className="text-gray-600 text-base md:text-lg mb-12 leading-relaxed text-center lg:text-left">
              <span className="font-semibold text-gray-700">
                Citra Agung Pratama Remitansi
              </span>{" "}
              adalah perusahaan yang bergerak di bidang penyelenggaraan transfer
              dana dengan fokus pada keamanan, kecepatan, dan keandalan. Kami
              memahami bahwa setiap transaksi memiliki nilai dan kepercayaan di
              dalamnya. Oleh karena itu, kami mengedepankan sistem operasional
              yang profesional, teknologi yang terintegrasi, serta pelayanan
              yang responsif untuk memberikan pengalaman transaksi yang aman dan
              terpercaya bagi seluruh mitra dan pelanggan kami.
            </p>

            {/* Visi & Misi List */}
            <div className="space-y-12">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="flex flex-col lg:flex-row items-center lg:items-start gap-6"
                >
                  {/* Icon Section */}
                  <div className="shrink-0">
                    <Image
                      width={100}
                      height={100}
                      src={item.src}
                      alt={item.title}
                      className="w-20 h-20 md:w-24 md:h-24 lg:w-20 lg:h-20 object-contain"
                    />
                  </div>

                  {/* Text Section: Center on mobile, Left on desktop */}
                  <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                    <h3 className="text-2xl md:text-3xl font-bold text-(--color-primary) mb-3">
                      {item.title}
                    </h3>
                    <p className="text-[#052B63] text-md leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TentangKami;
