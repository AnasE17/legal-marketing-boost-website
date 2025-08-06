import React from 'react';
import Head from 'next/head';
import { HeroHighlightDemo } from '@/components/ui/hero-highlight-demo';

export default function Demo() {
  return (
    <>
      <Head>
        <title>HeroHighlight Demo | Legal Marketing Boost</title>
        <meta name="description" content="Demo of the HeroHighlight component with animated text highlighting" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <HeroHighlightDemo />
    </>
  );
} 