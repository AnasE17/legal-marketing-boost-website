"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, TrendingUp, Target, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import { Highlight, HeroHighlight } from '@/components/ui/hero-highlight';

interface Metric {
  value: number;
  label: string;
  suffix: string;
}

export function HeroSection() {
  const [metrics, setMetrics] = useState<Metric[]>([
    { value: 0, label: "Law Firms", suffix: "+" },
    { value: 0, label: "ROI Increase", suffix: "x" },
    { value: 0, label: "Success Rate", suffix: "%" }
  ]);

  const finalMetrics = [
    { value: 150, label: "Law Firms", suffix: "+" },
    { value: 4, label: "ROI Increase", suffix: "x" },
    { value: 98, label: "Success Rate", suffix: "%" }
  ];

  // Animated text states
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = ["Exclusive", "High-Intent", "Qualified", "Converting", "Guaranteed"];

  useEffect(() => {
    const animateCounters = () => {
      const duration = 2000;
      const steps = 60;
      const stepDuration = duration / steps;

      let currentStep = 0;
      const interval = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setMetrics(prevMetrics => 
          prevMetrics.map((metric, index) => ({
            ...metric,
            value: Math.floor(finalMetrics[index].value * progress)
          }))
        );

        if (currentStep >= steps) {
          clearInterval(interval);
          setMetrics(finalMetrics);
        }
      }, stepDuration);

      return () => clearInterval(interval);
    };

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, []);

  // Animated text effect
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
    <HeroHighlight containerClassName="bg-slate-900">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-900/20 via-transparent to-amber-400/10"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-amber-400/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-6 sm:space-y-8"
        >
          {/* Eyebrow */}
          <div className="w-full flex justify-center mb-4 sm:mb-0">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="inline-flex items-center bg-slate-800/50 backdrop-blur-sm text-amber-400 px-3 sm:px-4 py-2 rounded-full text-xs sm:text-sm font-medium border border-amber-400/20 max-w-full"
            >
              <Award className="w-3 h-3 sm:w-4 sm:h-4 mr-2 flex-shrink-0" />
              <span className="hidden sm:inline">Elite Performance Marketing Agency</span>
              <span className="sm:hidden">Elite Marketing Agency</span>
            </motion.div>
          </div>

          {/* Main Headline with Animated Text */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-white leading-tight tracking-tight"
          >
            <span className="block">The Leads We Deliver Are</span>
            <div className="relative h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center">
              {titles.map((title, index) => (
                <motion.span
                  key={index}
                  className="absolute font-black text-blue-400 text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight"
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
            </div>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed px-2 sm:px-0 font-bold mt-6 sm:mt-8"
          >
            <span className="block sm:inline">Your intake team's time is too valuable to waste on unqualified leads.</span>
            <br className="hidden sm:block" />
            <span className="block sm:inline">We deliver <Highlight className="text-white">exclusive, high-intent personal injury leads</Highlight> through AI-driven paid ads—so your team spends less time chasing and more time signing high-value cases.</span>
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4 sm:px-0"
          >
            <Button
              asChild
              size="lg"
              className="bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 text-slate-900 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/25 w-full sm:w-auto"
            >
              <Link href="#strategy-call">
                <span className="text-nowrap">Book Your Free Strategy Call</span>
                <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
              </Link>
            </Button>

            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-slate-600 text-slate-500 hover:border-amber-400 hover:text-amber-400 rounded-full px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold transition-all duration-300 w-full sm:w-auto"
            >
              <Link href="#what-we-do">
                <span className="text-nowrap">What We Do</span>
              </Link>
            </Button>
          </motion.div>

          {/* Social Proof Metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.0, ease: "easeOut" }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-12 sm:mt-16 px-4 sm:px-0"
          >
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1, ease: "easeOut" }}
                className="text-center p-4 sm:p-6 bg-slate-800/50 backdrop-blur-sm rounded-2xl border border-slate-700/50 hover:border-amber-400/30 transition-all duration-300"
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-amber-400 mb-2">
                  {metric.value}{metric.suffix}
                </div>
                <div className="text-slate-300 text-xs sm:text-sm font-medium">
                  {metric.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6, ease: "easeOut" }}
            className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-slate-400 px-4 sm:px-0"
          >
            <div className="flex items-center">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
              <span className="hidden sm:inline">Performance-Based Pricing</span>
              <span className="sm:hidden">Performance-Based</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
              <span className="hidden sm:inline">No Long-Term Contracts</span>
              <span className="sm:hidden">No Contracts</span>
            </div>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-amber-400 rounded-full mr-2"></div>
              <span className="hidden sm:inline">Guaranteed Results</span>
              <span className="sm:hidden">Guaranteed</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 1.8, ease: "easeOut" }}
        className="absolute top-1/4 right-1/4 w-32 h-32 bg-amber-400/10 rounded-full blur-2xl"
      />
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2, delay: 2.0, ease: "easeOut" }}
        className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-blue-400/10 rounded-full blur-3xl"
      />
    </HeroHighlight>
  );
}

 