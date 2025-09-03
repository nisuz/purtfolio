import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Shield, 
  Server, 
  Database,
  Globe,
  Lock,
  Zap,
  Heart,
  Gamepad
} from "lucide-react"

export function AboutSection() {
  const skills = [
    { name: "React.js", category: "Frontend", color: "text-terminal-blue" },
    { name: "Node.js", category: "Backend", color: "text-terminal-green" },
    { name: "C#", category: "Game Cheats", color: "text-terminal-blue" },
    { name: "Python", category: "Security", color: "text-terminal-yellow" },
    { name: "Linux", category: "Hacking", color: "text-terminal-red" },
    { name: "MySQL", category: "Database", color: "text-terminal-purple" },
    { name: "C++", category: "Game Development", color: "text-terminal-green" },
  ]

  const highlights = [
    {
      icon: Code2,
      title: "Full Stack Development",
      description: "Creating modern, full-cycle applications with innovation and industry best practices.",
      color: "text-terminal-blue"
    },
    {
      icon: Shield,
      title: "Ethical Hacking",
      description: "Uncovering vulnerabilities with ethical hacking and safeguarding with modern solutions.",
      color: "text-terminal-red"
    },
    {
      icon: Gamepad,
      title: "Game Panel Development",
      description: "Developing high-performance and undetectable aimbot systems for battle royale games, optimized for accuracy, scalability, and minimal footprint.",
      color: "text-terminal-green"
    },
    {
      icon: Lock,
      title: "Security Research",
      description: "Researching and implementing advanced security protocols and measures.",
      color: "text-terminal-yellow"
    }
  ]

  return (
    <section className="py-20 px-4 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-4">
            <Heart className="w-4 h-4 text-terminal-red" />
            <span className="text-sm font-medium">About Me</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Crafting Digital Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate developer from Nepal who loves building secure, scalable applications 
            and exploring the fascinating world of cybersecurity and vulnerabilities. With a unique blend of development 
            and security expertise, I create solutions that are both powerful and protected.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* About Text */}
          <div className="space-y-6">
            <div className="terminal-window hover-lift">
              <div className="terminal-header">
                <div className="flex gap-2">
                  <div className="terminal-dot terminal-dot-red" />
                  <div className="terminal-dot terminal-dot-yellow" />
                  <div className="terminal-dot terminal-dot-green" />
                </div>
                <div className="text-xs text-muted-foreground ml-4">about.js</div>
              </div>
              
              <div className="p-6 font-mono text-sm">
                <div className="text-terminal-green mb-2">const developer = {`{`}</div>
                <div className="ml-4 space-y-1">
                  <div><span className="text-terminal-blue">name:</span> <span className="text-terminal-yellow">"Nitish Baniya"</span>,</div>
                  <div><span className="text-terminal-blue">location:</span> <span className="text-terminal-yellow">"Nepal"</span>,</div>
                  <div><span className="text-terminal-blue">role:</span> <span className="text-terminal-yellow">"Full Stack Developer"</span>,</div>
                  <div><span className="text-terminal-blue">specialization:</span> <span className="text-terminal-yellow">"Ethical Hacking"</span>,</div>
                  <div><span className="text-terminal-blue">passion:</span> <span className="text-terminal-yellow">"Security & Innovation"</span>,</div>
                  <div><span className="text-terminal-blue">mission:</span> <span className="text-terminal-yellow">"Build. Secure. Impact."</span></div>
                </div>
                <div className="text-terminal-green mt-2">{`}`}</div>
              </div>
            </div>

            <Card className="p-6 bg-secondary/20 border-border hover-lift">
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <Globe className="w-5 h-5 text-terminal-blue" />
                My Journey
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                I was very interested in both coding and the ethics of hacking from childhood, which made me want to learn more about the digital world. As I learned more, I found exciting layers of technology, like making user interfaces that are easy to use and finding weaknesses in complex systems.  Today, I devote all of my time to bridging the gap between development and cybersecurity. I use both creativity and critical thinking to build and protect in the constantly changing tech world.
              </p>
            </Card>
          </div>

          {/* Highlights Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-card/50 border-border hover-lift group">
                <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center mb-4 group-hover:glow-primary transition-all duration-300`}>
                  <highlight.icon className={`w-6 h-6 ${highlight.color}`} />
                </div>
                <h3 className="font-semibold mb-2">{highlight.title}</h3>
                <p className="text-sm text-muted-foreground">{highlight.description}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold mb-8 text-gradient-accent">
            Technologies & Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm font-medium bg-secondary/50 hover:bg-secondary/70 transition-all duration-300 hover-lift"
              >
                <span className={skill.color}>●</span>
                <span className="ml-2">{skill.name}</span>
                <span className="ml-1 text-xs text-muted-foreground">({skill.category})</span>
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}