import Image from "next/image";

export default function TentangKami() {
  const visiMisi = [
    {
      title: "Visi Kami",
      icon: "/assets/tentang/visi.svg",
      content: (
        <p className="text-gray-600 leading-relaxed text-sm md:text-base">
          Menjadi perusahaan penyelenggara transfer dana yang terpercaya,
          profesional, dan berdaya saing tinggi di tingkat nasional, dengan
          sistem yang aman, terintegrasi, dan sesuai regulasi guna mendukung
          kebutuhan transaksi finansial masyarakat dan korporasi secara
          berkelanjutan.
        </p>
      ),
    },
    {
      title: "Misi Kami",
      icon: "/assets/tentang/misi.svg",
      content: (
        <ul className="space-y-3 text-gray-600 text-sm md:text-base">
          {[
            "Menyediakan layanan transfer dana yang cepat, aman, dan transparan.",
            "Mengedepankan kepatuhan terhadap regulasi dan standar keamanan transaksi.",
            "Membangun hubungan jangka panjang berbasis kepercayaan dengan pelanggan dan mitra.",
            "Mengembangkan sistem dan proses operasional yang efisien serta berorientasi pada kualitas layanan.",
          ].map((item, i) => (
            <li key={i} className="flex items-center gap-4">
              <Image
                src="/assets/tentang/dot.svg"
                width={12}
                height={12}
                alt="Dot Icon"
                className="mt-1 w-2 h-2"
              />
              <span className="text-start">{item}</span>
            </li>
          ))}
        </ul>
      ),
    },
  ];

  const legalitas = [
    {
      title: "PBI",
      desc: "Peraturan Bank Indonesia tentang Layanan Transfer Dana",
    },
    {
      title: "ISO",
      desc: "Operasional Bersertifikat Standar Organisasi Internasional",
    },
    {
      title: "PPATK",
      desc: "Kepatuhan Pusat Pelaporan dan Analisis Transaksi Keuangan",
    },
  ];

  return (
    <main className="min-h-screen bg-white">
      {/* 1. Hero Banner Section */}
      <section className="relative w-full">
        <Image
          width={1920}
          height={600}
          src="/assets/tentang/tentang-kami-banner.svg"
          alt="Tentang Kami Banner"
          className="w-full h-auto object-cover hidden md:block"
          priority
        />
        {/* Mobile Image */}
        <Image
          src="/assets/tentang/tentang-kami-banner-mobile.svg"
          alt="Tentang Kami Banner Mobile"
          width={600}
          height={400}
          className="w-full h-auto object-cover md:hidden"
          priority
        />
      </section>

      {/* 2. Deskripsi Section */}
      <section className="py-16 md:py-24 px-6 md:px-20 container mx-auto max-w-6xl text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-(--color-primary) mb-10">
          Tentang Kami
        </h1>

        <div className="space-y-8 text-gray-600 text-base md:text-md leading-relaxed max-w-5xl mx-auto">
          <p>
            Citra Agung Pratama Remitansi adalah perusahaan yang bergerak di
            bidang penyelenggaraan transfer dana untuk individu maupun
            korporasi, dengan komitmen menghadirkan layanan yang aman, cepat,
            dan terpercaya. Kami memahami bahwa setiap transaksi keuangan tidak
            hanya sekadar perpindahan dana, tetapi juga bentuk kepercayaan yang
            harus dijaga dengan integritas, profesionalisme, dan sistem yang
            andal.
          </p>
          <p>
            Sebagai perusahaan remitansi, kami menjalankan kegiatan operasional
            dengan standar tata kelola yang baik, sistem yang terintegrasi,
            serta pengawasan internal yang ketat untuk memastikan seluruh proses
            transaksi berjalan secara akurat dan transparan. Kami juga
            memastikan bahwa setiap layanan yang diberikan telah disesuaikan
            dengan ketentuan dan regulasi yang berlaku di Indonesia, termasuk
            peraturan dan pengawasan yang ditetapkan oleh Bank Indonesia sebagai
            otoritas sistem pembayaran.
          </p>
          <p>
            Dengan dukungan sumber daya manusia yang profesional serta penerapan
            teknologi yang tepat guna, kami terus berupaya memberikan pengalaman
            transaksi yang efisien, aman, dan memberikan nilai tambah bagi
            seluruh pelanggan dan mitra bisnis.
          </p>
        </div>
      </section>

      {/* 3. Visi & Misi Card Section */}
      <section className="py-12 bg-gray-50/50">
        <div className="container mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {visiMisi.map((item, index) => (
              <div
                key={index}
                className="bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 flex flex-col items-center md:items-start text-center md:text-left h-full"
              >
                <Image
                  src={item.icon}
                  alt={item.title}
                  width={80}
                  height={80}
                  className="mb-6 w-16 h-16 md:w-20 md:h-20"
                />
                <h3 className="text-2xl md:text-3xl font-bold text-[#1e3a5f] mb-6">
                  {item.title}
                </h3>
                {item.content}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Legalitas & Kepatuhan Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 md:px-20">
          <div
            className="max-w-6xl mx-auto rounded-[40px] py-16 px-10 text-center text-white shadow-xl"
            style={{
              background: "linear-gradient(to right, #144779, #163350)",
            }}
          >
            <h2 className="text-2xl md:text-3xl font-bold mb-16 font-urbanist">
              Legalisasi & Kepatuhan Regulasi
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 items-start">
              {legalitas.map((item, index) => (
                <div
                  key={index}
                  className="space-y-4 flex flex-col items-center"
                >
                  {/* Judul (PBI, ISO, PPATK) */}
                  <h4 className="text-3xl md:text-4xl font-extrabold text-(--color-button) tracking-wider">
                    {item.title}
                  </h4>

                  {/* Deskripsi */}
                  <p className="text-sm md:text-base opacity-85 leading-relaxed max-w-60">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
