export default function KetentuanLayanan() {
  const sections = [
    {
      title: "Pendahuluan",
      content:
        "Dengan menggunakan layanan Citra Agung Pratama Remitansi (“Perusahaan”), Anda menyatakan telah membaca, memahami, dan menyetujui seluruh Syarat & Ketentuan ini. Ketentuan ini mengatur hak dan kewajiban antara Perusahaan dan pengguna layanan dalam penyelenggaraan transfer dana.",
    },
    {
      title: "1. Definisi",
      list: [
        "Perusahaan adalah Citra Agung Pratama Remitansi sebagai penyelenggara transfer dana.",
        "Pengguna adalah individu atau badan usaha yang menggunakan layanan Perusahaan.",
        "Layanan adalah seluruh kegiatan transfer dana yang diselenggarakan oleh Perusahaan sesuai regulasi yang berlaku.",
        "Transaksi adalah setiap instruksi pengiriman atau penerimaan dana yang diproses melalui sistem Perusahaan.",
      ],
    },
    {
      title: "2. Ruang Lingkup Layanan",
      content:
        "Perusahaan menyediakan layanan transfer dana untuk individu dan korporasi sesuai dengan ketentuan peraturan perundang-undangan yang berlaku di Indonesia dan regulasi yang ditetapkan oleh Bank Indonesia sebagai otoritas sistem pembayaran.",
      footer:
        "Perusahaan berhak mengembangkan, mengubah, atau menghentikan sebagian atau seluruh layanan dengan pemberitahuan kepada Pengguna sesuai ketentuan yang berlaku.",
    },
    {
      title: "3. Persyaratan Pengguna",
      content: "Untuk menggunakan layanan, Pengguna wajib:",
      list: [
        "Memberikan data dan informasi yang benar, lengkap, dan akurat.",
        "Melalui proses verifikasi identitas (Know Your Customer/KYC).",
        "Mematuhi seluruh peraturan perundang-undangan yang berlaku.",
        "Tidak menggunakan layanan untuk tujuan yang melanggar hukum.",
      ],
      footer:
        "Perusahaan berhak menolak atau membatalkan transaksi apabila ditemukan indikasi pelanggaran hukum atau ketidaksesuaian data.",
    },
    {
      title: "4. Proses dan Pelaksanaan Transaksi",
      content:
        "Setiap transaksi akan diproses sesuai prosedur operasional dan standar keamanan yang berlaku. Pengguna bertanggung jawab memastikan kebenaran data penerima dana sebelum transaksi dikonfirmasi.",
      footer:
        "Perusahaan tidak bertanggung jawab atas kesalahan transfer yang disebabkan oleh kesalahan informasi yang diberikan oleh Pengguna.",
    },
    {
      title: "5. Biaya dan Pembayaran",
      content:
        "Pengguna wajib membayar biaya layanan sesuai dengan struktur biaya yang telah diinformasikan sebelumnya. Besaran biaya dapat berubah sewaktu-waktu dengan pemberitahuan kepada Pengguna sesuai ketentuan yang berlaku.",
    },
    {
      title: "6. Kepatuhan dan Pencegahan Tindak Pidana",
      content:
        "Perusahaan menerapkan prinsip kehati-hatian, manajemen risiko, serta kebijakan Anti Pencucian Uang dan Pencegahan Pendanaan Terorisme (APU dan PPT). Perusahaan berhak melakukan penundaan, penolakan, atau pelaporan transaksi kepada otoritas berwenang apabila terdapat indikasi aktivitas mencurigakan sesuai regulasi.",
    },
    {
      title: "7. Batasan Tanggung Jawab",
      content:
        "Perusahaan bertanggung jawab atas pelaksanaan transaksi sesuai instruksi yang diterima dan ketentuan yang berlaku. Namun, Perusahaan tidak bertanggung jawab atas:",
      list: [
        "Kerugian akibat kesalahan data yang diberikan oleh Pengguna.",
        "Gangguan sistem yang berada di luar kendali wajar Perusahaan.",
        "Keadaan kahar (Force Majeure).",
      ],
    },
    {
      title: "8. Perlindungan Data Pribadi",
      content:
        "Pengelolaan data pribadi Pengguna dilakukan sesuai dengan Kebijakan Privasi Perusahaan dan peraturan perundang-undangan yang berlaku, termasuk ketentuan terkait perlindungan data pribadi.",
    },
    {
      title: "9. Perubahan Ketentuan",
      content:
        "Perusahaan berhak untuk mengubah atau memperbarui Syarat & Ketentuan ini dari waktu ke waktu. Perubahan akan diberlakukan setelah dipublikasikan melalui media resmi Perusahaan.",
    },
    {
      title: "10. Hukum yang Berlaku",
      content:
        "Syarat & Ketentuan ini tunduk dan ditafsirkan berdasarkan hukum Republik Indonesia. Setiap perselisihan yang timbul akan diselesaikan sesuai dengan mekanisme hukum yang berlaku di Indonesia.",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-19">
      {/* 1. Header Banner */}
      <section className="bg-(--color-primary) pt-20 pb-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-button) mb-4">
            Ketentuan Layanan
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

                {section.content && (
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {section.content}
                  </p>
                )}

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
