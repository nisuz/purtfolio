import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { 
  ChevronDown, 
  Terminal, 
  Shield, 
  Code2, 
  MapPin,
  Github,
  Linkedin,
  Mail
} from "lucide-react"

const typewriterTexts = [
  "Full Stack Developer",
  "Ethical Hacker", 
  "Game Cheats Developer",
]

export function HeroSection() {
  const [currentText, setCurrentText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const timeout = setTimeout(() => {
      const current = typewriterTexts[currentIndex]
      
      if (isDeleting) {
        setCurrentText(current.substring(0, currentText.length - 1))
      } else {
        setCurrentText(current.substring(0, currentText.length + 1))
      }

      if (!isDeleting && currentText === current) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentText === "") {
        setIsDeleting(false)
        setCurrentIndex((prev) => (prev + 1) % typewriterTexts.length)
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [currentText, currentIndex, isDeleting])

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:50px_50px]" />
      
      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-br from-terminal-green/20 to-transparent rounded-full blur-xl animate-float" />
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-br from-terminal-blue/20 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-terminal-purple/20 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }} />

      <div className="container px-4 mx-auto text-center relative z-10">
        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-8">
          {/* Photo Section */}
          <div className="lg:col-span-1 flex justify-center">
            <div className="relative group">
              <div className="w-64 h-64 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 border-4 border-primary/30 overflow-hidden flex items-center justify-center hover-lift">
                <img 
                  src="../../heroimage.png" 
                  alt="Nitish Baniya" 
                  className="w-full h-full rounded-full object-cover shadow-lg transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-full flex items-center justify-center animate-float">
                <Terminal className="w-8 h-8 text-background" />
              </div>
            </div>
          </div>

          {/* Terminal Window */}
          <div className="lg:col-span-2">
            <div className="terminal-window w-full hover-lift">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                </div>
                <div className="text-xs text-muted-foreground ml-4">portfolio.sh</div>
              </div>
              
              <div className="p-8 space-y-4">
                <div className="text-left font-mono text-sm">
                  <div className="text-terminal-green">$ name  </div>
                  <div className="text-foreground">nitish_baniya</div>
                  
                  <div className="text-terminal-green mt-4">$ introduction.txt</div>
                  <div className="text-foreground">
                    <div className="text-3xl md:text-5xl font-bold mb-4">
                    <span className="text-gradient-primary">Nitish Baniya</span>
                    </div>
                    <div className="text-lg md:text-xl text-muted-foreground mb-6 flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-terminal-red" />
                    Kathmandu, Nepal
                    </div>
                  </div>
                  
                  <div className="text-terminal-green mt-6">$ echo $ROLE</div>
                  <div className="text-lg md:text-xl text-accent font-semibold min-h-[2rem]">
                    {currentText}<span className="animate-pulse">|</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Badges */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border hover-lift">
            <Code2 className="w-4 h-4 text-terminal-blue" />
            <span className="text-sm font-medium">Full Stack Development</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border hover-lift">
            <Shield className="w-4 h-4 text-terminal-red" />
            <span className="text-sm font-medium">Ethical Hacking</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border hover-lift">
            <Terminal className="w-4 h-4 text-terminal-green" />
            <span className="text-sm font-medium">Game Cheats Developer </span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button asChild size="lg" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary">
            <a href="contact">
              <Mail className="w-5 h-5 mr-2" />
              Get In Touch
            </a>
          </Button>
          <Button asChild variant="outline" size="lg" className="hover-lift">
            <a href="projects">
              <Github className="w-5 h-5 mr-2" />
              View My Work
            </a>
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown className="w-6 h-6 mx-auto text-muted-foreground" />
        </div>
      </div>
    </section>
  )
}