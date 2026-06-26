"use client";

import { Leaf } from "lucide-react";
import { RingMark } from "../UI/RingMark";
import { usePathname } from "next/navigation";

const footerNav = [
  { href: "#gallery", label: "گالری محصولات" },
  { href: "#about", label: "درباره ما" },
  { href: "#contact", label: "تماس با ما" },
];

const socialLinks = [
  { href: "https://instagram.com/", label: "اینستاگرام", icon: Leaf },
  { href: "https://pinterest.com/", label: "Pinterest", icon: Leaf },
  { href: "https://t.me/", label: "تلگرام", icon: Leaf },
];



const Footer = () => {


  const pathname = usePathname()
  const isAuthRoute = pathname.startsWith("/auth/");
  if (isAuthRoute) return null




  return (
    <footer className="relative overflow-hidden border-t border-black/5 bg-white">
      {/* Ambient Background Glow */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute top-10 right-1/3 h-[320px] w-[320px] rounded-full bg-[#7d996e]/40 blur-[120px]" />
        <div className="absolute -bottom-40 left-1/4 h-[280px] w-[280px] rounded-full bg-[#7d996e]/30 blur-[120px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 py-10 sm:px-8">
        <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white/60 p-5 backdrop-blur-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-5">

          {/* Decorative ring */}
          <RingMark
            muted
            className="pointer-events-none absolute -top-16 left-10 h-[260px] w-[260px] text-[#7d996e]/60"
          />

          {/* Main section */}
          <div className="relative grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr] lg:items-center">

            {/* Text section */}
            <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">

              {/* Brand */}
              <div className="flex flex-col items-end gap-3 text-right">
                <h3 className="text-lg font-semibold text-[#1f2917]">
                  روت هوم
                </h3>

                <p className="max-w-xs text-sm leading-7 text-[#4b5446]/80">
                  ظروف چوبی دست‌ساز با الهام از طبیعت؛
                  ترکیب سادگی، گرما و اصالت در هر محصول.
                </p>

                <button className="mt-2 rounded-full border border-[#7d996e]/30 bg-[#7d996e]/10 px-5 py-2 text-xs text-[#2f3a23] backdrop-blur-md transition hover:bg-[#7d996e]/20">
                  مشاهده محصولات
                </button>
              </div>

              {/* Links */}
              <div className="flex gap-10 text-right sm:gap-14 sm:justify-between">

                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-[#1f2917]">
                    صفحات
                  </span>
                  {footerNav.map((item) => (
                    <a
                      key={item.href}
                      href={item.href}
                      className="text-sm text-[#4b5446]/70 transition hover:text-[#5b6b2e]"
                    >
                      {item.label}
                    </a>
                  ))}
                </div>

                <div className="flex flex-col gap-3">
                  <span className="text-sm font-medium text-[#1f2917]">
                    شبکه‌های اجتماعی
                  </span>
                  {socialLinks.map(({ icon: Icon, href, label }) => (
                    <a
                      key={href}
                      href={href}
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-1.5 text-sm text-[#4b5446]/70 transition hover:text-[#5b6b2e]"
                    >
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#7d996e]/10 text-[#5b6b2e]">
                        <Icon size={16} />
                      </span>
                      {label}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Image section */}
            <div className="relative mx-auto h-[290px] w-full max-w-[290px] lg:mx-0 lg:ms-auto">
              <div className="relative h-full w-full overflow-hidden rounded-3xl">
                <img
                  src="/images/footer-logo.png"
                  alt="ظروف چوبی دست‌ساز"
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-white/10" />
                <div className="absolute bottom-4 right-4 rounded-full bg-white/70 px-4 py-2 text-xs text-[#1f2917] backdrop-blur-md shadow-sm">
                  🍃 چوب طبیعی دست‌ساز
                </div>
              </div>
            </div>

          </div>

          {/* Bottom bar */}
          <div className="relative mt-12 border-t border-black/5 pt-6 text-center text-xs text-[#4b5446]/60">
            © تمامی حقوق برای روت هوم محفوظ است.
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer