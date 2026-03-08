"use client"

import { ExternalLink, Github, Bot, Heart, TrendingUp, Bug } from "lucide-react"

const projects = [
  {
    title: "Project Axiom",
    subtitle: "Robotics Data Foundry",
    description: "Building comprehensive multi-modal datasets for humanoid robotics and physical AI systems. A data foundry approach to creating high-quality training data for next-generation robotic applications.",
    tags: ["Computer Vision", "Robotics", "Multi-Modal AI", "Data Engineering"],
    icon: Bot,
    featured: true,
    github: "https://github.com/savish26",
    demo: "https://axiom.corizo.site",
  },
  {
    title: "Non-Invasive Heart Rate Tracking",
    subtitle: "Health Tech Research",
    description: "Research project focused on contactless heart rate monitoring through facial feature extraction and advanced video processing techniques for health metrics.",
    tags: ["OpenCV", "Deep Learning", "Signal Processing", "Python"],
    icon: Heart,
    featured: false,
    github: "https://github.com/savish26",
  },
  {
    title: "Quantitative Crypto Analysis",
    subtitle: "Financial ML",
    description: "Machine learning models for market-flow analysis and predictive trading strategies. Utilizing advanced quantitative methods for cryptocurrency market insights.",
    tags: ["Time Series", "PyTorch", "Quantitative Finance", "Trading"],
    icon: TrendingUp,
    featured: false,
    github: "https://github.com/savish26",
    demo: "https://demo.com",
  },
  {
    title: "Model Validator & Debugger",
    subtitle: "MLOps Tool",
    description: "Automated testing and debugging tool for ML models. Streamlines the process of validating model performance, identifying edge cases, and refining model behavior.",
    tags: ["MLOps", "Testing", "Python", "Automation"],
    icon: Bug,
    featured: false,
    github: "https://github.com/savish26",
  },
]

export function Projects() {
  const featuredProject = projects.find(p => p.featured)
  const otherProjects = projects.filter(p => !p.featured)

  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 relative">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">// PROJECT_GALLERY</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Featured Work
          </h2>
          <p className="text-muted-foreground max-w-2xl text-lg">
            A collection of projects spanning robotics data systems, computer vision research, 
            and machine learning applications.
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div className="mb-12">
            <article className="group relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-8 md:p-10 rounded-2xl bg-card/50 border border-border/50 backdrop-blur-md hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row md:items-start gap-6">
                  <div className="shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <featuredProject.icon className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 text-xs font-mono bg-primary text-primary-foreground rounded-full">
                        Featured
                      </span>
                      <span className="text-sm text-muted-foreground font-mono">
                        {featuredProject.subtitle}
                      </span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {featuredProject.title}
                    </h3>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6 max-w-3xl">
                      {featuredProject.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredProject.tags.map((tag, tagIndex) => (
                        <span 
                          key={tagIndex}
                          className="text-xs font-mono px-3 py-1.5 bg-secondary/80 text-secondary-foreground rounded-lg border border-border/50"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    <div className="flex gap-4">
                      <a 
                        href={featuredProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View GitHub repository"
                      >
                        <Github className="w-4 h-4" />
                        <span>Source</span>
                      </a>
                      {featuredProject.demo && (
                        <a 
                          href={featuredProject.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-4 py-2 text-sm bg-primary/10 text-primary rounded-lg hover:bg-primary hover:text-primary-foreground transition-all"
                          aria-label="View live demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherProjects.map((project, index) => (
            <article 
              key={index} 
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative h-full p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-md hover:border-primary/30 transition-all duration-500 flex flex-col">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-secondary/80 border border-border/50 flex items-center justify-center">
                    <project.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      aria-label="View GitHub repository"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                    {project.demo && (
                      <a 
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View live demo"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>
                
                <p className="text-xs text-muted-foreground font-mono mb-1">{project.subtitle}</p>
                <h3 className="text-lg font-bold text-foreground group-hover:text-primary transition-colors mb-3">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4 flex-1">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-1.5">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <span 
                      key={tagIndex}
                      className="text-xs font-mono px-2 py-1 bg-secondary/50 text-muted-foreground rounded"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="text-xs font-mono px-2 py-1 text-muted-foreground">
                      +{project.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
