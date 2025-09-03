import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Heart, Code, Shield, Globe, User } from "lucide-react"
import { Gamepad } from "lucide-react"

export default function About() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate Game and web developer and ethical hacker from Nepal, dedicated to showing creativity and innovative solutions.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Personal Info */}
          <Card className="lg:col-span-2 p-8 bg-card/50 backdrop-blur-sm border-border hover-lift">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <User className="w-6 h-6 text-primary" />
              Personal Story
            </h2>
            
            <div className="space-y-6 text-muted-foreground">
              <p className="text-lg leading-relaxed">
                Myself Nitish Baniya, a passionate full-stack developer and ethical hacker based in the beautiful country of Nepal. 
                My journey in technology began with curiosity about how things work, which naturally led me to both building and securing digital solutions.
              </p>
              
              <p className="leading-relaxed">
                As a full-stack developer, I enjoy creating end-to-end solutions that not only look great but also function seamlessly. 
                I believe in writing clean, maintainable code and staying updated with the latest technologies and best practices.
              </p>
              
              <p className="leading-relaxed">
                My interest in cybersecurity stems from a deep belief that security should be built into applications from the ground up, 
                not added as an afterthought. As an ethical hacker, I help organizations identify vulnerabilities and strengthen their defenses.
              </p>
            </div>

            {/* Interests */}
            <div className="mt-8">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                What I Love
              </h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="hover-lift">Problem Solving</Badge>
                <Badge variant="secondary" className="hover-lift">Roasting weak security</Badge>
                <Badge variant="secondary" className="hover-lift">Cybersecurity</Badge>
                <Badge variant="secondary" className="hover-lift">Learning New Tech</Badge>
                <Badge variant="secondary" className="hover-lift">Showing Creativity</Badge>
                <Badge variant="secondary" className="hover-lift">Music and Gaming</Badge>
              </div>
            </div>
          </Card>

          {/* Quick Facts */}
          <div className="space-y-6">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
              <h3 className="text-lg font-semibold mb-4">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-terminal-red" />
                  <span className="text-sm">Kathmandu, Nepal</span>
                </div>
                <div className="flex items-center gap-3">
                  <Code className="w-4 h-4 text-terminal-blue" />
                  <span className="text-sm">Full Stack Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Gamepad className="w-4 h-4 text-terminal-green" />
                  <span className="text-sm">Game Cheats Developer</span>
                </div>
                <div className="flex items-center gap-3">
                  <Shield className="w-4 h-4 text-terminal-green" />
                  <span className="text-sm">Ethical Hacker</span>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
              <h3 className="text-lg font-semibold mb-4">Current Focus</h3>
              <div className="space-y-3">
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-sm font-medium text-primary"> Learning Skills </div>
                  <div className="text-xs text-muted-foreground">Learning new tech and cybersecurity things</div>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-sm font-medium text-primary">Game Cheats Development</div>
                  <div className="text-xs text-muted-foreground"> Making battle-royale games panels for good performance</div>
                </div>
                <div className="p-3 bg-secondary/30 rounded-lg">
                  <div className="text-sm font-medium text-primary">Building New Projects</div>
                  <div className="text-xs text-muted-foreground">Making new projects to show my creativity and show my innovations</div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Philosophy */}
        <Card className="mt-8 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-border hover-lift">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">My Philosophy</h3>
            <blockquote className="text-lg italic text-muted-foreground max-w-4xl mx-auto">
              "Security and usability should go hand in hand. The best security measures are the ones users don't even notice, 
              and the best applications are the ones that work flawlessly while keeping users safe."
            </blockquote>
          </div>
        </Card>
      </div>
    </div>
  )
}