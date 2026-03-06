import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { Research } from "@/components/research"
import { Projects } from "@/components/projects"
import { Skills } from "@/components/skills"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <Research />
      <Projects />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}
