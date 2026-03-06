"use client"

import { Eye, Database, Bot, Code, Cpu, Cloud } from "lucide-react"

const skillCategories = [
  {
    title: "Computer Vision",
    icon: Eye,
    skills: [
      "OpenCV",
      "YOLO",
      "Image Segmentation",
      "Object Detection",
      "Video Processing",
      "TensorRT",
    ],
  },
  {
    title: "Data Science",
    icon: Database,
    skills: [
      "Python",
      "PyTorch",
      "TensorFlow",
      "Pandas",
      "NumPy",
      "Scikit-learn",
    ],
  },
  {
    title: "Robotics & Physical AI",
    icon: Bot,
    skills: [
      "ROS",
      "Sensor Fusion",
      "Motion Planning",
      "Multi-Modal Data",
      "Simulation",
      "Edge Deployment",
    ],
  },
  {
    title: "Development",
    icon: Code,
    skills: [
      "Python",
      "C++",
      "TypeScript",
      "FastAPI",
      "Docker",
      "Git",
    ],
  },
  {
    title: "ML Infrastructure",
    icon: Cpu,
    skills: [
      "MLflow",
      "Weights & Biases",
      "DVC",
      "Model Serving",
      "GPU Optimization",
      "Distributed Training",
    ],
  },
  {
    title: "Cloud & Data",
    icon: Cloud,
    skills: [
      "AWS",
      "GCP",
      "PostgreSQL",
      "Apache Spark",
      "Airflow",
      "Kubernetes",
    ],
  },
]

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 relative">
      {/* Background effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/10 to-background pointer-events-none" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="mb-16 text-center">
          <p className="text-primary font-mono text-sm mb-4 tracking-wider">// TECH_STACK</p>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Technical Expertise
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Core competencies spanning the full stack of AI/ML engineering, from research to production.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="group relative"
            >
              <div className="absolute inset-0 bg-primary/5 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative p-6 rounded-xl bg-card/50 border border-border/50 backdrop-blur-md hover:border-primary/30 transition-all duration-500 h-full">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
                    <category.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">
                    {category.title}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="text-sm px-3 py-1.5 bg-secondary/50 text-foreground/80 rounded-lg border border-border/50 hover:border-primary/30 hover:text-primary transition-all cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
