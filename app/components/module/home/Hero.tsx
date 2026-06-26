"use client"
import { Button } from '@heroui/react'
 
import { ArrowLeft, Hammer, Leaf, Sparkles } from "lucide-react";
import { RingMark } from '../../UI/RingMark';
import Image from 'next/image';


const Hero = () => {


    const badges = [
        { icon: Leaf, label: "۱۰۰٪ چوب طبیعی" },
        { icon: Hammer, label: "ساخت کاملاً دستی" },
        { icon: Sparkles, label: "طرح‌های یکتا" },
    ];

    return (
        <section id="hero" className="relative overflow-hidden bg-background">
            {/* امضای بصری: حلقه‌های رشد به‌صورت واترمارک کم‌رنگ در پس‌زمینه */}

            <RingMark
                muted
                className="pointer-events-none absolute  -left-24 top-1/2 z-0 h-[480px] w-[480px] -translate-y-1/2 text-accent"
            />

            <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 py-16 sm:px-8 md:grid-cols-2 md:py-24">
                {/* ستون متن */}
                <div className="relative z-10 text-right">
                    <span className="inline-flex items-center gap-2 rounded-full bg-surface-secondary px-4 py-1.5 text-xs font-medium text-accent">

                        <RingMark className="h-3.5 w-3.5" />

                        صنعتگری دست‌ساز ایرانی
                    </span>

                    <h1 className="mt-6 text-3xl font-bold leading-[1.45] text-foreground [font-family:var(--font-display,inherit)] sm:text-4xl md:text-5xl">
                        ظروف چوبی دست‌ساز،
                        <br />
                        با روح طبیعت در هر رگه
                    </h1>

                    <p className="mt-5 max-w-md text-base leading-8 text-muted sm:text-lg">
                        هر قطعه‌ی روت هوم با دست صنعتگران ایرانی از چوب طبیعی تراش
                        می‌خورد؛ بی‌نظیر، گرم و ماندگار، برای آشپزخانه و دکور خانه‌ی شما.
                    </p>

                    <div className="mt-8 flex flex-wrap items-center gap-4">
                        <Button



                            size="lg"

                            className="bg-accent px-7 font-medium text-accent-foreground"
                        >
                            <ArrowLeft size={18} />
                            مشاهده گالری محصولات
                        </Button>
                        <Button



                            size="lg"
                            variant="outline"
                            className="border-border px-7 font-medium text-foreground"
                        >
                            بیشتر درباره ما
                        </Button>
                    </div>

                    <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3">
                        {badges.map(({ icon: Icon, label }) => (
                            <div key={label} className="flex items-center gap-2">
                                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-surface-secondary text-accent">
                                    <Icon size={16} />
                                </span>
                                <span className="text-sm text-muted">{label}</span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* ستون تصویر */}
                <div className="relative">
                    <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-2xl" />

                    <div className="overflow-hidden rounded-[2rem] border border-border bg-surface shadow-xl">
                        {/* عکس خودتان را اینجا جایگزین کنید */}
                        <Image
                            width={500}
                            height={600}
                            aria-label="کاسه چوبی دست‌ساز روت هوم"
                            src="/images/hero1.png"
                            alt="کاسه چوبی دست‌ساز روت هوم"
                            className="aspect-[4/5] w-full object-cover"
                        />
                    </div>

                    <div className="absolute -bottom-6 right-6 flex items-center gap-3 rounded-2xl border border-border bg-surface px-5 py-4 shadow-lg sm:right-10">
                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground">
                            <Leaf size={18} />
                        </span>
                        <div className="text-right">
                            <p className="text-sm font-semibold text-foreground">
                                +۵۰ طرح دست‌ساز
                            </p>
                            <p className="text-xs text-muted">از چوب گردو و راش</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero