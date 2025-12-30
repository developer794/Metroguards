import Link from "next/link";

export default function BannerContent({
  titleLines = ["Security.", "Cleaning.", "Maintenance."],
  kicker = "Integrated Business Solutions",
  cta = { label: "Contact Us", href: "/contact" },
  social = {
    youtube: "#",
    instagram: "#",
    linkedin: "#",
  },
}) {
  return (
    <div className="tax-business section-padding2 pt-20 ">
      <div className="grid md:grid-cols-2 items-center gap-10">
        {/* LEFT: headline */}
        <div>
          <span className="inline-block bg-yellow-400 text-black rounded-full px-4 py-2 font-medium mb-4">
            {kicker}
          </span>

          <h1 className="text-white font-bold leading-tight text-4xl sm:text-5xl lg:text-6xl">
            {titleLines.map((line, i) => (
              <span key={i} className="block">
                {line}
              </span>
            ))}
          </h1>

          <div className="mt-7 sm:mt-9">
            <Link
              href={cta.href}
              style={{
                  backgroundColor: '#FDC51A',
                  color: '#000',
                  padding: '10px 20px',
                  borderRadius: '7px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  display: 'inline-block',
                  transition: 'all 0.3s ease',
              }}
              className="btn"
            >
              {cta.label}
            </Link>
          </div>
        </div>

        {/* RIGHT: Placeholder area */}
        <div className="hidden md:block">
          <div className="relative h-[400px] w-full">
            {/* Optionally another <Image> */}
          </div>
        </div>
      </div>

      {/* Social icons */}
      <div className="hidden lg:flex absolute right-5 top-1/2 -translate-y-1/2 flex-col items-center gap-4">
        <span className="rotate-180 [writing-mode:vertical-rl] text-sm tracking-widest text-white">
          Follow Us
        </span>
        <div className="flex flex-col items-center gap-4 text-white">
          <a href={social.youtube} aria-label="YouTube">YT</a>
          <a href={social.instagram} aria-label="Instagram">IG</a>
          <a href={social.linkedin} aria-label="LinkedIn">IN</a>
        </div>
      </div>
    </div>
  );
}
