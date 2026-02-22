export default function KebijakanPrivasi() {
  const sections = [
    {
      title: "Pendahuluan",
      content:
        "Citra Agung Pratama Remitansi (“Perusahaan”) berkomitmen untuk melindungi dan menjaga kerahasiaan data pribadi pelanggan, mitra, dan pengguna layanan. Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, menyimpan, melindungi, dan mengungkapkan informasi sesuai dengan peraturan perundang-undangan yang berlaku di Republik Indonesia.",
    },
    {
      title: "1. Pengumpulan Data Pribadi",
      content:
        "Kami dapat mengumpulkan data pribadi yang diperlukan untuk penyelenggaraan layanan transfer dana, termasuk namun tidak terbatas pada:",
      list: [
        "Nama lengkap",
        "Nomor identitas (KTP/Paspor)",
        "Nomor telepon",
        "Alamat email",
        "Alamat tempat tinggal",
        "Informasi rekening dan data transaksi",
        "Informasi lain yang diwajibkan oleh peraturan perundang-undangan",
      ],
      footer:
        "Data dikumpulkan secara langsung dari pelanggan atau melalui sarana resmi yang digunakan dalam proses pendaftaran dan transaksi.",
    },
    {
      title: "2. Tujuan Penggunaan Data",
      content: "Data pribadi yang dikumpulkan digunakan untuk:",
      list: [
        "Proses verifikasi identitas (Know Your Customer/KYC)",
        "Pelaksanaan transaksi transfer dana",
        "Pemenuhan kewajiban hukum dan regulasi, termasuk ketentuan Bank Indonesia",
        "Pencegahan tindak pidana pencucian uang dan pendanaan terorisme (APU dan PPT)",
        "Peningkatan kualitas layanan dan keamanan sistem",
      ],
      footer:
        "Kami tidak akan menggunakan data pribadi untuk tujuan di luar yang telah ditetapkan tanpa persetujuan pemilik data, kecuali diwajibkan oleh hukum.",
    },
    {
      title: "3. Penyimpanan dan Perlindungan Data",
      content:
        "Perusahaan menerapkan langkah-langkah teknis dan administratif yang memadai untuk melindungi data pribadi dari akses tidak sah, kehilangan, penyalahgunaan, atau pengungkapan yang tidak diizinkan. Sistem kami dilengkapi dengan pengamanan berlapis dan pengendalian internal untuk menjaga kerahasiaan dan integritas data.",
      footer:
        "Data pribadi disimpan selama diperlukan untuk memenuhi tujuan pengumpulan atau sesuai dengan ketentuan peraturan perundang-undangan yang berlaku.",
    },
    {
      title: "4. Pengungkapan Data",
      content: "Data pribadi dapat diungkapkan kepada:",
      list: [
        "Otoritas yang berwenang sesuai dengan ketentuan hukum",
        "Lembaga regulator seperti Bank Indonesia",
        "Mitra atau pihak ketiga yang bekerja sama secara sah dan terikat kewajiban kerahasiaan",
      ],
      footer:
        "Pengungkapan dilakukan hanya untuk tujuan yang sah dan sesuai dengan regulasi yang berlaku.",
    },
    {
      title: "5. Hak Pemilik Data",
      content: "Pemilik data berhak untuk:",
      list: [
        "Memperoleh informasi mengenai data pribadi yang dikelola",
        "Meminta perbaikan atau pembaruan data yang tidak akurat",
        "Mengajukan permintaan penghapusan data sesuai ketentuan hukum",
        "Menarik persetujuan atas penggunaan data dalam batas yang diizinkan oleh peraturan",
      ],
      footer: "Permintaan dapat diajukan melalui kontak resmi Perusahaan.",
    },
    {
      title: "6. Perubahan Kebijakan Privasi",
      content:
        "Perusahaan berhak untuk memperbarui Kebijakan Privasi ini dari waktu ke waktu guna menyesuaikan dengan perubahan regulasi atau kebijakan internal. Versi terbaru akan dipublikasikan melalui website resmi Perusahaan.",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-19">
      {/* 1. Header Banner */}
      <section className="bg-(--color-primary) pt-20 pb-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-button) mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-white/60 text-sm md:text-base">
            Terakhir diperbaharui: Januari 4, 2026
          </p>
        </div>
      </section>

      {/* 2. Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-20">
        <div className="container mx-auto max-w-4xl">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h2 className="text-xl md:text-2xl font-bold text-(--color-primary)">
                  {section.title}
                </h2>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                  {section.content}
                </p>

                {section.list && (
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 text-sm md:text-base">
                    {section.list.map((item, i) => (
                      <li key={i} className="pl-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {section.footer && (
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {section.footer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
