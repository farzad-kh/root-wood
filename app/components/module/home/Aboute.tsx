import { Hammer, Sparkles, TreePine } from "lucide-react";
import { RingMark } from "../../UI/RingMark";
import Image from "next/image";
 

const values = [
  {
    icon: TreePine,
    title: "چوب طبیعی و پایدار",
    desc: "از باقیمانده‌ی درختان افتاده و چوب‌های مرغوب بومی استفاده می‌کنیم.",
  },
  {
    icon: Hammer,
    title: "تراش و پرداخت دستی",
    desc: "هر قطعه مرحله‌به‌مرحله با دست شکل می‌گیرد، نه با قالب صنعتی.",
  },
  {
    icon: Sparkles,
    title: "تولید محدود",
    desc: "بچ‌های کوچک می‌سازیم تا به جزئیات هر قطعه برسیم.",
  },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-20 bg-surface-secondary/40 py-20 sm:py-28">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 md:grid-cols-2">
    
        <div className="relative order-1">
          <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl">
           
            <Image
            width={500}
            height={600}

              src="/images/hero2.png"
              alt="کارگاه دست‌ساز روت هوم"
              className="aspect-[4/5] w-full object-cover"
            />
          </div>

          <div className="absolute -top-5 right-6 flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 shadow-md sm:right-10">
            <RingMark className="h-4 w-4 text-accent" />
            <span className="text-xs font-medium text-foreground">
              کارگاه روت هوم
            </span>
          </div>
        </div>

        {/* ستون متن */}
        <div className="order-2 text-right">
          <span className="inline-flex items-center gap-2 text-xs font-medium text-accent">
            <RingMark muted className="h-3.5 w-3.5" />
            درباره ما
          </span>

          <h2 className="mt-3 text-2xl font-bold leading-[1.5] text-foreground [font-family:var(--font-display,inherit)] sm:text-3xl">
            از ریشه تا خانه‌ی شما
          </h2>

          <p className="mt-5 text-base leading-8 text-muted">
            روت هوم با چند صنعتگر علاقه‌مند به چوب شروع شد؛ آدم‌هایی که هر
            تکه چوب را قبل از تراش، نگاه می‌کنند تا ببینند چه چیزی می‌خواهد
            از آن بیرون بیاید. هیچ دو قطعه‌ای کاملاً شبیه هم نیستند، چون
            رگه‌های هر چوب، داستان خودش را دارد.
          </p>
          <p className="mt-4 text-base leading-8 text-muted">
            هدف ما ساختن وسایلی است که هر روز در آشپزخانه و خانه‌تان
            استفاده شوند؛ نه فقط برای دیدن، بلکه برای زندگی کردن با آن‌ها.
          </p>

          <div className="mt-8 flex flex-col gap-5">
            {values.map(({ icon: Icon, title, desc }) => (
              <div key={title} className="flex items-start gap-3">
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-surface text-accent">
                  <Icon size={16} />
                </span>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {title}
                  </p>
                  <p className="mt-1 text-sm leading-7 text-muted">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
