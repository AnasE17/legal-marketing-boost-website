import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from 'next/link';

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Exclusive", "High-Intent", "AI-Driven", "Performance-Based", "Guaranteed"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40 items-center justify-center flex-col">
          <div>
            <Button variant="secondary" size="sm" className="gap-4 bg-slate-800/50 backdrop-blur-sm text-amber-400 border border-amber-400/20">
              <Award className="w-4 h-4" />
              Elite Performance Marketing Agency
            </Button>
          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl max-w-4xl tracking-tighter text-center font-light text-white">
              <span className="text-white">Marketing That</span>
              <br />
              <span className="text-amber-400 font-semibold">Pays For Itself</span>
              <br />
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-semibold text-blue-400"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
              <span className="text-white"> Personal Injury Leads</span>
            </h1>

            <p className="text-lg md:text-xl leading-relaxed tracking-tight text-slate-300 max-w-3xl text-center">
              Your intake team's time is too valuable to waste on unqualified leads.
              <br />
              We deliver exclusive, high-intent personal injury leads through AI-driven paid ads—so your team spends less time chasing and more time signing high-value cases.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="gap-4 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/25"
              asChild
            >
              <Link href="#strategy-call">
                Book Your Free Strategy Call <MoveRight className="w-4 h-4" />
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="gap-4 border-2 border-slate-600 text-slate-300 hover:border-amber-400 hover:text-amber-400 rounded-full px-8 py-4 text-lg font-semibold transition-all duration-300"
              variant="outline"
              asChild
            >
              <Link href="#how-it-works">
                See How It Works <PhoneCall className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { Hero }; 