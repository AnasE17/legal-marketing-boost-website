import React from 'react';
import Head from 'next/head';
import { SparklesDemo } from '@/components/ui/sparkles-demo';

export default function SparklesDemoPage() {
  return (
    <>
      <Head>
        <title>Sparkles Demo | Legal Marketing Boost</title>
        <meta name="description" content="Demo of the Sparkles particle effect component" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <SparklesDemo />
    </>
  );
} 