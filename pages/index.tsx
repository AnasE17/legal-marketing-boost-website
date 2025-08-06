import React from 'react';
import Head from 'next/head';
import { HeroSection } from '@/components/ui/hero-section-1';
import { Testimonials } from '@/components/ui/testimonials-columns-1';
import Header from '@/components/Header';
import Services from '@/components/Services';
import Stats from '@/components/Stats';
import TrustBadges from '@/components/TrustBadges';
import CTA from '@/components/CTA';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Head>
        <title>Legal Marketing Boost | AI-Driven Personal Injury Marketing</title>
        <meta name="description" content="Get exclusive, high-intent personal injury leads through AI-driven paid ads. We help law firms scale with exclusive leads that turn into signed cases." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header />
      <HeroSection />
      <TrustBadges />
      <Stats />
      <Services />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
} 