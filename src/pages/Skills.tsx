import { Card } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { 
  Code2, 
  Database, 
  Shield, 
  Server, 
  Globe, 
  Terminal, 
  Cpu,
  Layers,
  Lock,
  Bug
} from "lucide-react"

const skillCategories = [
  {
    title: "Frontend Development",
    icon: Globe,
    color: "text-terminal-blue",
    skills: [
      { name: "React.js", level: 75, description: "Advanced component development, hooks, context" },
      // { name: "TypeScript", level: 85, description: "Type-safe development, advanced patterns" },
      { name: "Next.js", level: 50, description: "SSR, SSG, API routes, optimization" },
      { name: "Tailwind CSS", level:50, description: "Responsive design, custom components" },
      { name: "JavaScript", level:60, description: "ES6+, async programming, DOM manipulation" },
    ]
  },
  {
    title: "Backend Development",
    icon: Server,
    color: "text-terminal-green",
    skills: [
      { name: "Node.js", level: 70, description: "Express, middleware, API development" },
      { name: "Python", level: 60, description: "Django, Flask, automation scripts" },
      { name: "PHP", level: 30, description: "Laravel, CodeIgniter, custom solutions" },
      // { name: "REST APIs", level: 90, description: "Design, documentation, versioning" },
      // { name: "GraphQL", level: 75, description: "Schema design, resolvers, optimization" },
    ]
  },
  {
    title: "Database & DevOps",
    icon: Database,
    color: "text-terminal-purple",
    skills: [
      { name: "MySQL", level: 70, description: "Complex queries, optimization, replication" },
      // { name: "PostgreSQL", level: 80, description: "Advanced features, JSON support" },
      { name: "MongoDB", level: 50, description: "Document design, aggregation pipelines" },
      // { name: "Docker", level: 82, description: "Containerization, multi-stage builds" },
      // { name: "AWS", level: 75, description: "EC2, S3, Lambda, RDS deployment" },
    ]
  },
  {
    title: "Cybersecurity",
    icon: Shield,
    color: "text-terminal-red",
    skills: [
      { name: "Penetration Testing", level: 70, description: "Web apps, networks, mobile security" },
      { name: "Web Exploitation", level: 50, description: "Vulnerability assessment and mitigation" },
      // { name: "Burp Suite", level: 40, description: "Web application security testing" },
      // { name: "Nmap & Reconnaissance", level: 30, description: "Network discovery and enumeration" },
      { name: "Threat Hunting", level: 60, description: "Awareness training, phishing simulation" },
    ]
  }
]

const tools = [
  { name: "VS Code", category: "Development" },
  { name: "Git & GitHub", category: "Version Control" },
  { name: "Figma, Canva", category: "Design" },
  // { name: "Postman", category: "API Testing" },
  { name: "Kali Linux", category: "Security" },
  { name: "Wireshark", category: "Network Analysis" },
  { name: "Metasploit", category: "Penetration Testing" },
]

const certifications = [
  { name: "CEH (Certified Ethical Hacker)", status: "Completed", year: "2024" },
  { name: "React Professional", status: "Self-Taught", year: "2025" },
]

export default function Skills() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Skills & Expertise
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical skills, tools, and continuous learning journey.
          </p>
        </div>

        {/* Skills Categories */}
        <div className="grid lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <Card key={category.title} className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
              <div className="flex items-center gap-3 mb-6">
                <category.icon className={`w-6 h-6 ${category.color}`} />
                <h2 className="text-xl font-bold">{category.title}</h2>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <Progress value={skill.level} className="h-2" />
                    <p className="text-xs text-muted-foreground">{skill.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          ))}
        </div>

        {/* Tools & Technologies */}
        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border hover-lift mb-8">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Terminal className="w-6 h-6 text-primary" />
            Tools & Technologies
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {tools.map((tool) => (
              <div key={tool.name} className="p-4 bg-secondary/30 rounded-lg hover-lift">
                <div className="font-medium text-sm">{tool.name}</div>
                <div className="text-xs text-muted-foreground">{tool.category}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Learning & Certifications */}
        <div className="grid lg:grid-cols-2 gap-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Lock className="w-5 h-5 text-terminal-green" />
              Certifications
            </h3>
            <div className="space-y-3">
              {certifications.map((cert) => (
                <div key={cert.name} className="p-3 bg-secondary/30 rounded-lg">
                  <div className="font-medium text-sm">{cert.name}</div>
                  <div className="flex justify-between items-center mt-1">
                    <Badge variant={cert.status === "Pursuing" ? "default" : "secondary"} className="text-xs">
                      {cert.status}
                    </Badge>
                    <span className="text-xs text-muted-foreground">{cert.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
            <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
              <Bug className="w-5 h-5 text-terminal-red" />
              Security Specializations
            </h3>
            <div className="space-y-3">
              <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg">
                <div className="font-medium text-sm text-red-400">Web Application Security</div>
                <div className="text-xs text-muted-foreground mt-1">SQL injection, XSS, CSRF prevention</div>
              </div>
              <div className="p-3 bg-blue-500/10 border border-blue-500/20 rounded-lg">
                <div className="font-medium text-sm text-blue-400">Network Security</div>
                <div className="text-xs text-muted-foreground mt-1">Port scanning, vulnerability assessment</div>
              </div>
              <div className="p-3 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="font-medium text-sm text-green-400">Secure Coding</div>
                <div className="text-xs text-muted-foreground mt-1">Security best practices, code review</div>
              </div>
            </div>
          </Card>
        </div>

        {/* Current Learning */}
        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-border hover-lift">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">Currently Learning</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {/* <Badge variant="outline" className="hover-lift">Kubernetes</Badge> */}
              <Badge variant="outline" className="hover-lift">Advanced React Patterns</Badge>
              <Badge variant="outline" className="hover-lift">Cloud Security</Badge>
              <Badge variant="outline" className="hover-lift">Machine Learning for Security</Badge>
              <Badge variant="outline" className="hover-lift">Blockchain Security</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}