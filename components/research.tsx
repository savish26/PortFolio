"use client"

import { ExternalLink, BookOpen, Award } from "lucide-react"

export function Research() {
  return (
    <section id="research" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm mb-6">
            <Award className="w-4 h-4 text-primary" />
            <span className="text-primary font-mono text-sm">Published Research</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Academic Publications
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Peer-reviewed research contributions advancing the field of computer vision and health technology.
          </p>
        </div>

        {/* Featured Publication */}
        <article className="group relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/5 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          <div className="relative p-8 md:p-12 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-md hover:border-primary/30 transition-all duration-500">
            <div className="flex flex-col lg:flex-row lg:items-start gap-8">
              {/* Publication Icon */}
              <div className="shrink-0">
                <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <BookOpen className="w-10 h-10 text-primary" />
                </div>
              </div>
              
              {/* Content */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-3 py-1 text-xs font-mono bg-primary/10 text-primary rounded-full border border-primary/20">
                    Springer
                  </span>
                  <span className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full">
                    Computer Vision
                  </span>
                  <span className="px-3 py-1 text-xs font-mono bg-secondary text-muted-foreground rounded-full">
                    Health Tech
                  </span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                  Non-Invasive Heart Rate Tracking Using Facial Feature Extraction
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  A novel approach to contactless heart rate monitoring through advanced video processing 
                  and facial feature extraction techniques. This research explores real-time physiological 
                  signal detection using computer vision algorithms, enabling health metrics extraction 
                  without physical contact with the subject.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-8">
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Focus Areas</p>
                    <p className="text-foreground">Video Processing, Signal Analysis, ML for Healthcare</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground font-mono uppercase tracking-wider mb-1">Technologies</p>
                    <p className="text-foreground">OpenCV, Python, Deep Learning, Signal Processing</p>
                  </div>
                </div>
                
                <a 
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-primary/10 text-primary font-medium rounded-lg border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  <span>Read Publication</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
