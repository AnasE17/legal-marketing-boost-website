"use client"

import { Sparkles } from "@/components/ui/sparkles"
import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"

export function OurClients() {
  const lawFirms = [
    {
      name: "Reilly Law Group",
      type: "Personal Injury",
      location: "New York",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/67ae4b859a20fd1992ff71f6.png",
      testimonial: "Legal Marketing Boost transformed our lead generation. We're now getting 4x more qualified cases."
    },
    {
      name: "Ennis & Associates",
      type: "Personal Injury",
      location: "California",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/c80e7266-bd31-4a62-a772-63dae86d6185.png",
      testimonial: "The AI-driven targeting is incredible. Every lead is pre-qualified and ready to sign."
    },
    {
      name: "Duncan Legal",
      type: "Personal Injury",
      location: "Texas",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/3cb43336-98a5-4b5e-b6cf-dc44a3388d9d.png",
      testimonial: "Finally, an agency that understands law firm marketing. Our ROI increased 300%."
    },
    {
      name: "Thompson Law",
      type: "Personal Injury",
      location: "Florida",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/fb09d3c1-b24d-4a94-b9b9-65229ae02c79.png",
      testimonial: "Performance-based pricing with guaranteed results. What more could you ask for?"
    },
    {
      name: "Martinez Legal",
      type: "Personal Injury",
      location: "Illinois",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/00236f89-e46c-4df1-80d4-f30eb24a31be.webp",
      testimonial: "The exclusive leads we get are game-changing. Our intake team is overwhelmed with quality cases."
    },
    {
      name: "Williams Law",
      type: "Personal Injury",
      location: "Georgia",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/de14dbaa-2f3e-4cca-8604-6758d34ea593.png",
      testimonial: "The results speak for themselves. We've doubled our case intake in just 3 months."
    },
    {
      name: "Anderson Legal",
      type: "Personal Injury",
      location: "Michigan",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/8bbce28c-c80c-4fc1-9695-0053509d7a5d.png",
      testimonial: "Best investment we've made in our firm. The leads are consistently high-quality."
    },
    {
      name: "Brown & Partners",
      type: "Personal Injury",
      location: "Ohio",
      logo: "https://images.leadconnectorhq.com/image/f_webp/q_80/r_1200/u_https://assets.cdn.filesafe.space/FJA0mifAkte5Fm7TjpA5/media/a0a0dae9-f6fa-4004-9fb3-b89c1347e0b4.jpeg",
      testimonial: "Professional, reliable, and results-driven. Everything we needed in a marketing partner."
    }
  ]

  return (
    <section id="clients" className="py-24 bg-gradient-to-r from-slate-900 to-slate-800 relative overflow-hidden">
      {/* Sparkles Background */}
      <div className="absolute inset-0">
        <Sparkles
          density={800}
          className="absolute inset-0 h-full w-full"
          color="#8350e8"
          background="transparent"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-6">
            We Have Worked With Hundreds of Reputable Law Firms
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            From coast to coast, we've helped law firms scale their practice with exclusive, high-intent personal injury leads that convert to signed cases.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">100+</div>
            <div className="text-slate-300">Law Firms Helped</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">4X</div>
            <div className="text-slate-300">Average ROI Increase</div>
          </div>
          <div className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20">
            <div className="text-3xl font-bold text-amber-400 mb-2">98%</div>
            <div className="text-slate-300">Client Satisfaction</div>
          </div>
        </motion.div>

        {/* Client Logos Grid */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 md:gap-8 mb-16"
        >
          {lawFirms.map((firm, index) => (
            <ClientLogo key={index} firm={firm} index={index} />
          ))}
        </motion.div>

        {/* Testimonials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Don't Just Take Our Word For It
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {lawFirms.slice(0, 3).map((firm, index) => (
              <TestimonialCard key={index} firm={firm} index={index} />
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready To Get Started?
            </h3>
            <p className="text-slate-300 mb-6">
              Join hundreds of law firms already scaling with AI-driven marketing
            </p>
            <a
              href="#strategy-call"
              className="inline-flex items-center bg-gradient-to-r from-amber-400 to-amber-500 text-slate-900 px-8 py-3 rounded-full font-semibold text-lg hover:from-amber-500 hover:to-amber-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Book Your Free Strategy Call
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

function ClientLogo({ firm, index }: { firm: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="flex flex-col items-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
    >
      <div className="w-20 h-20 bg-white rounded-xl flex items-center justify-center mb-4 p-3 group-hover:shadow-lg transition-all duration-300">
        <img 
          src={firm.logo} 
          alt={`${firm.name} logo`}
          className="w-full h-full object-contain filter brightness-0 invert opacity-70 group-hover:opacity-100 transition-opacity"
        />
      </div>
      <h3 className="text-sm font-bold text-white mb-1 text-center">
        {firm.name}
      </h3>
      <p className="text-xs text-slate-400 text-center">
        {firm.location}
      </p>
    </motion.div>
  )
}

function TestimonialCard({ firm, index }: { firm: any; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 * index }}
      viewport={{ once: true }}
      className="p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
    >
      <div className="flex items-center mb-4">
        <Quote className="w-6 h-6 text-amber-400 mr-2" />
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 text-amber-400 fill-current" />
          ))}
        </div>
      </div>
      <p className="text-slate-300 mb-4 italic">
        "{firm.testimonial}"
      </p>
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center mr-3 p-2">
          <img 
            src={firm.logo} 
            alt={`${firm.name} logo`}
            className="w-full h-full object-contain filter brightness-0 invert opacity-70"
          />
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{firm.name}</div>
          <div className="text-slate-400 text-xs">{firm.location}</div>
        </div>
      </div>
    </motion.div>
  )
} 