import Image from "next/image";
import hubungiKamiData from "../data/hubungi-kami.json";
import FormHubungiKami from "./FormHubungiKami";

export default function HubungiKami() {
  const { location, telephone, email, pinpoint } = hubungiKamiData;

  return (
    <section
      id="hubungi-kami"
      className="bg-[#EDF7FF] sleek-zoom-90 py-16 sm:py-20 lg:py-24 px-6 sm:px-10 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* LEFT CONTENT */}
          <div className="space-y-8 w-full">
            <div>
              <h2 className="font-urbanist font-bold text-2xl md:text-3xl text-(--color-primary) mb-2.5">
                Siap Mendukung Kebutuhan Transfer Dana Anda
              </h2>
              <p className="font-urbanist text-(--color-secondary) w-[90%] md:w-full text-sm md:text-base leading-relaxed">
                Ada pertanyaan? Kami ingin sekali mendengarnya. Kirimkan pesan
                kepada kami, dan kami akan segera merespons.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {/* Kantor */}
              <div className="flex items-start gap-4">
                <Image
                  width={100}
                  height={100}
                  alt="Location"
                  src="/assets/hubungi-kami/location.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-(--color-primary)">
                    Kantor Kami
                  </h3>
                  <p className="font-inter text-sm md:text-base text-(--color-secondary) w-3/4">
                    {location}
                  </p>
                </div>
              </div>

              {/* Telepon */}
              <div className="flex items-start gap-4">
                <Image
                  width={100}
                  height={100}
                  alt="Phone"
                  src="/assets/hubungi-kami/phone.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-(--color-primary)">
                    Telepon
                  </h3>
                  <p className="font-inter text-sm md:text-base text-(--color-secondary)">
                    {telephone.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-4">
                <Image
                  width={100}
                  height={100}
                  alt="Email"
                  src="/assets/hubungi-kami/email.svg"
                  className="w-12 h-12"
                />
                <div>
                  <h3 className="font-urbanist font-bold text-lg mb-2 text-(--color-primary)">
                    Email
                  </h3>
                  <p className="font-inter text-sm md:text-base text-(--color-secondary)">
                    {email.map((line, index) => (
                      <span key={index}>
                        {line}
                        <br />
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>

            {/* FIXED MAP */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-72 md:w-full">
              <iframe
                src={pinpoint}
                width="100%"
                height="100%"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full border-0"
              />
            </div>
          </div>

          {/* FORM */}
          <div className="w-full overflow-hidden">
            <FormHubungiKami />
          </div>
        </div>
      </div>
    </section>
  );
}
