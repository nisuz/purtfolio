import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { 
  ExternalLink, 
  Github, 
  Shield, 
  Database, 
  Globe,
  Terminal,
  Zap,
  Lock
} from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Notes-Sathi",
      description: "A collaborative note-taking web application with real-time editing, markdown support, and offline access.",
      tags: ["React", "Node.js"],
      icon: Globe,
      color: "text-terminal-blue",
      features: ["User Authentication", "Real-time Collaboration", "Markdown Support", "Offline Access"],
      status: "On-going"
    },
    // {
    //   title: "VulnScanner Pro",
    //   description: "Automated vulnerability scanner for web applications with detailed reporting and remediation suggestions.",
    //   tags: ["Python", "Security", "Automation", "Reporting"],
    //   icon: Terminal,
    //   color: "text-terminal-green",
    //   features: ["SQL Injection Detection", "XSS Scanning", "Port Scanning", "Report Generation"],
    //   status: "Beta"
    // },
    // {
    //   title: "DevSecOps Dashboard",
    //   description: "Real-time monitoring dashboard for security metrics and development pipeline integration.",
    //   tags: ["React", "TypeScript", "D3.js", "WebSocket"],
    //   icon: Zap,
    //   color: "text-terminal-blue",
    //   features: ["Real-time Monitoring", "Custom Metrics", "Alert System", "Pipeline Integration"],
    //   status: "Development"
    // },
    // {
    //   title: "CryptoVault",
    //   description: "Secure file encryption and storage system with zero-knowledge architecture and client-side encryption.",
    //   tags: ["Encryption", "Security", "Storage", "Privacy"],
    //   icon: Lock,
    //   color: "text-terminal-yellow",
    //   features: ["Zero-Knowledge", "End-to-End Encryption", "Secure Sharing", "Audit Trail"],
    //   status: "Concept"
    // }
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Production": return "bg-terminal-green/20 text-terminal-green border-terminal-green/50"
      case "Beta": return "bg-terminal-blue/20 text-terminal-blue border-terminal-blue/50"
      case "Development": return "bg-terminal-yellow/20 text-terminal-yellow border-terminal-yellow/50"
      default: return "bg-terminal-purple/20 text-terminal-purple border-terminal-purple/50"
    }
  }

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-4">
            <Github className="w-4 h-4 text-terminal-green" />
            <span className="text-sm font-medium">My Projects</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Building the Future
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            From secure authentication systems to vulnerability scanners, here are some of the projects 
            that showcase my expertise in both development and cybersecurity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="p-6 bg-card/50 border-border hover-lift group overflow-hidden relative">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] opacity-20" />
              
              <div className="relative z-10">
                {/* Project Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:glow-primary transition-all duration-300`}>
                      <project.icon className={`w-6 h-6 ${project.color}`} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{project.title}</h3>
                      <Badge className={`text-xs ${getStatusColor(project.status)}`}>
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="mb-4">
                  <h4 className="text-sm font-medium mb-2 text-foreground/90">Key Features:</h4>
                  <div className="grid grid-cols-2 gap-1 text-xs text-muted-foreground">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-1">
                        <div className={`w-1 h-1 rounded-full ${project.color.replace('text-', 'bg-')}`} />
                        {feature}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, idx) => (
                    <Badge key={idx} variant="secondary" className="text-xs bg-secondary/50">
                      {tag}
                    </Badge>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent hover:opacity-90">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Terminal Window with GitHub Stats */}
        <div className="mt-16">
          <div className="terminal-window max-w-4xl mx-auto hover-lift">
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
              </div>
              <div className="text-xs text-muted-foreground ml-4">github-stats.sh</div>
            </div>
            
            <div className="p-6 font-mono text-sm">
              <div className="text-terminal-green mb-2">$ git --version && echo "Fetching developer stats..."</div>
              <div className="text-muted-foreground mb-4">git version 2.42.0</div>
              
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <div className="text-2xl font-bold text-terminal-green">10+</div>
                  <div className="text-sm text-muted-foreground">Repositories</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-terminal-blue">100+</div>
                  <div className="text-sm text-muted-foreground">Commits</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-terminal-purple">10+</div>
                  <div className="text-sm text-muted-foreground">Active Projects</div>
                </div>
              </div>
              
              <div className="mt-4 text-terminal-green">$ echo "Ready to collaborate!"</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}