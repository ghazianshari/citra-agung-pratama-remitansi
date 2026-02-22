export default function LaporkanKerentanan() {
  const sections = [
    {
      title: "Pendahuluan",
      content:
        "Citra Agung Pratama Remitansi berkomitmen menjaga keamanan sistem, data, dan layanan yang kami operasikan. Kami menyadari bahwa keamanan siber merupakan tanggung jawab bersama. Oleh karena itu, kami membuka saluran pelaporan bagi individu atau pihak yang menemukan potensi kerentanan keamanan pada sistem kami.",
      footer:
        "Kami menghargai setiap laporan yang disampaikan secara bertanggung jawab dan beritikad baik.",
    },
    {
      title: "Komitmen Kami",
      content: "Kami berkomitmen untuk:",
      list: [
        "Meninjau setiap laporan kerentanan secara profesional dan tepat waktu.",
        "Menjaga kerahasiaan identitas pelapor (apabila diminta).",
        "Tidak mengambil tindakan hukum terhadap pelapor yang melakukan pengujian dengan itikad baik dan sesuai ketentuan pada halaman ini.",
        "Melakukan evaluasi serta perbaikan yang diperlukan guna meningkatkan keamanan sistem.",
      ],
    },
    {
      title: "Ruang Lingkup Pelaporan",
      content:
        "Kerentanan yang dapat dilaporkan meliputi, namun tidak terbatas pada:",
      list: [
        "Celah keamanan pada website atau aplikasi resmi Perusahaan.",
        "Kerentanan autentikasi dan otorisasi.",
        "Paparan data yang tidak semestinya.",
        "Kerentanan pada API atau sistem pembayaran.",
        "Potensi risiko keamanan lainnya yang dapat memengaruhi integritas, kerahasiaan, atau ketersediaan sistem.",
      ],
    },
    {
      title: "Tata Cara Pelaporan",
      content:
        "Untuk membantu kami dalam melakukan investigasi secara efektif, mohon sertakan informasi berikut dalam laporan Anda:",
      numberedList: [
        "Deskripsi rinci mengenai kerentanan yang ditemukan.",
        "Langkah-langkah reproduksi (proof of concept) yang aman.",
        "Dampak potensial dari kerentanan tersebut.",
        "Screenshot atau dokumentasi pendukung (jika ada).",
        "Informasi kontak Anda.",
      ],
      footer: (
        <div className="mt-4 p-4 bg-gray-50 rounded-lg border border-gray-100">
          <p className="font-semibold text-(--color-primary)">
            Laporan dapat dikirimkan melalui:
          </p>
          <p>
            Email:{" "}
            <span className="text-blue-600">support@citrapratama.co.id</span>
          </p>
          <p>
            Subjek Email:{" "}
            <span className="italic">
              Vulnerability Report – [Ringkasan Kerentanan]
            </span>
          </p>
        </div>
      ),
    },
    {
      title: "Pedoman Pengujian yang Bertanggung Jawab",
      content: "Dalam melakukan pengujian keamanan, pelapor diharapkan untuk:",
      list: [
        "Tidak melakukan eksploitasi yang menyebabkan gangguan layanan.",
        "Tidak mengakses, mengubah, atau menghapus data pengguna.",
        "Tidak melakukan serangan DDoS atau aktivitas yang merusak sistem.",
        "Tidak mengungkapkan kerentanan kepada publik sebelum perbaikan dilakukan.",
      ],
      footer:
        "Kami meminta agar pelapor memberikan waktu yang wajar bagi Perusahaan untuk melakukan investigasi dan mitigasi sebelum pengungkapan publik.",
    },
    {
      title: "Kepatuhan dan Keamanan",
      content:
        "Sebagai penyelenggara transfer dana yang beroperasi sesuai regulasi yang berlaku dan dalam kerangka pengawasan Bank Indonesia, Citra Agung Pratama Remitansi menerapkan standar keamanan informasi, pengendalian internal, serta manajemen risiko guna menjaga keandalan sistem pembayaran dan perlindungan data pelanggan.",
      footer:
        "Partisipasi Anda dalam melaporkan kerentanan membantu kami menjaga keamanan layanan serta kepercayaan seluruh pengguna.",
    },
  ];

  return (
    <main className="min-h-screen bg-white pt-19">
      {/* 1. Header Banner */}
      <section className="bg-(--color-primary) pt-20 pb-20 px-6 text-center">
        <div className="container mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-(--color-button) mb-4">
            Laporkan Kerentanan
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

                {/* Bullet List */}
                {section.list && (
                  <ul className="list-disc list-outside ml-5 space-y-2 text-gray-600 text-sm md:text-base">
                    {section.list.map((item, i) => (
                      <li key={i} className="pl-2">
                        {item}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Numbered List khusus Tata Cara */}
                {section.numberedList && (
                  <ol className="list-decimal list-outside ml-5 space-y-2 text-gray-600 text-sm md:text-base">
                    {section.numberedList.map((item, i) => (
                      <li key={i} className="pl-2">
                        {item}
                      </li>
                    ))}
                  </ol>
                )}

                {section.footer && (
                  <div className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {section.footer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
