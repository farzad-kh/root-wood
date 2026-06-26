import { ExternalLink } from "lucide-react";
import { RingMark } from "../../UI/RingMark";
import Image from "next/image";


 
const items = [
    { id: 1, alt: "کاسه چوبی گردو", aspect: "aspect-[3/4]" },
    { id: 2, alt: "سینی سرو چوبی راش", aspect: "aspect-square" },
    { id: 3, alt: "ظرف میوه چوبی", aspect: "aspect-[4/5]" },
    { id: 4, alt: "قاشق و چنگال چوبی دست‌تراش", aspect: "aspect-[2/3]" },
    { id: 5, alt: "زیرلیوانی چوبی", aspect: "aspect-square" },
    { id: 6, alt: "جا‌ادویه چوبی", aspect: "aspect-[5/6]" },
    { id: 7, alt: "تخته سرو چوبی", aspect: "aspect-[4/5]" },
    { id: 8, alt: "گلدان چوبی مینیمال", aspect: "aspect-[3/4]" },
    { id: 9, alt: "جعبه چوبی هدیه", aspect: "aspect-square" },
    { id: 10, alt: "آبخوری چوبی", aspect: "aspect-[2/3]" },
];

export default function Gallery() {
    return (
        <section id="gallery" className="scroll-mt-20 bg-background py-20 sm:py-28 relative overflow-hidden">
            <div className="mx-auto max-w-6xl px-5 sm:px-8">
                {/* عنوان بخش */}
                <div className="flex flex-col items-start justify-between gap-6 text-right sm:flex-row sm:items-end">
                    <div>
                        <span className="inline-flex items-center gap-2 text-xs font-medium text-accent">
                      
                            <RingMark
                                muted
                                className="pointer-events-none absolute -right-24 top-1/2 z-0 h-[480px] w-[480px] -translate-y-1/2 text-accent"
                            />
                            نمونه‌کارها
                        </span>
                        <h2 className="mt-3 text-2xl font-bold text-foreground [font-family:var(--font-display,inherit)] sm:text-3xl">
                            گالری محصولات روت هوم
                        </h2>
                        <p className="mt-3 max-w-md text-sm leading-7 text-muted sm:text-base">
                            گوشه‌ای از کارهای ساخته‌شده؛ از کاسه و سینی تا ظروف کوچک
                            تزئینی، هرکدام با رگه‌های منحصربه‌فرد چوب خودش.
                        </p>
                    </div>

                    <a
                        href="https://pinterest.com/"
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 self-start rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent sm:self-auto"
                    >
                        دنبال کردن در Pinterest
                        <ExternalLink size={15} />
                    </a>
                </div>

                {/* چیدمان پینترستی با CSS columns */}
                <div className="mt-10 columns-2 gap-4 sm:columns-2 md:columns-3 lg:columns-4">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className={`group relative mb-4 overflow-hidden rounded-2xl border border-border bg-surface-secondary break-inside-avoid ${item.aspect}`}
                        >
                  
                            <Image
                                src={`/images/land${item.id}.jpg`}
                                alt={item.alt}
                                loading="lazy"
                                width={200}
                                height={200}
                                className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-105"
                            />

                            <div className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-black/55 via-black/0 to-black/0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                                <span className="px-4 py-3 text-right text-sm font-medium text-white">
                                    {item.alt}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
