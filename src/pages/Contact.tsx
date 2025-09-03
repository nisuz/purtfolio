import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { 
  Mail, 
  MapPin, 
  Phone, 
  Github, 
  Linkedin, 
  Twitter,
  Send,
  MessageSquare,
  Calendar,
  Clock
} from "lucide-react"

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "baniyanitish2@gmail.com",
      description: "Best for project inquiries",
      color: "text-terminal-blue",
      action: "mailto:baniyanitish2@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+977 9765556190",
      description: "Available during business hours",
      color: "text-terminal-green",
      action: "tel:+9779765556190"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Kathmandu, Nepal",
      description: "Open to remote work globally",
      color: "text-terminal-red",
      action: "#"
    }
  ]

  const socialLinks = [
    { icon: Github, name: "GitHub", url: "https://github.com/nisuz", color: "text-foreground" },
    { icon: Linkedin, name: "LinkedIn", url: "https://linkedin.com", color: "text-foreground" },
    { icon: Twitter, name: "Twitter", url: "https://twitter.com", color: "text-foreground" }
  ]

  const availability = [
    { day: "Sunday - Friday", time: "9:00 AM - 6:00 PM NPT", available: true },
    { day: "Saturday", time: "Emergency only", available: false },
  ]

  return (
    <div className="min-h-screen p-6">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/50 rounded-full border border-border mb-4">
            <MessageSquare className="w-4 h-4 text-terminal-green" />
            <span className="text-sm font-medium">Get In Touch</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gradient-primary">
            Let's Build Something Amazing
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Ready to bring your ideas to life with secure, scalable solutions? 
            I'm always excited to discuss new projects and opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="p-8 bg-card/50 border-border">
              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2">Send Me a Message</h2>
                <p className="text-muted-foreground">I'll get back to you within 24 hours</p>
              </div>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <Input placeholder="Your full name" className="bg-secondary/50" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <Input type="email" placeholder="your.email@example.com" className="bg-secondary/50" />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input placeholder="Project inquiry, collaboration, etc." className="bg-secondary/50" />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell me about your project, goals, and how I can help..."
                    className="bg-secondary/50 min-h-[120px]"
                  />
                </div>

                <Button className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary">
                  <Send className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>

          {/* Contact Info Sidebar */}
          <div className="space-y-6">
            {/* Contact Methods */}
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="text-lg font-semibold mb-4">Contact Information</h3>
              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <a
                    key={index}
                    href={method.action}
                    className="flex items-start gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <div className={`w-10 h-10 rounded-lg bg-secondary/50 flex items-center justify-center group-hover:glow-primary transition-all duration-300`}>
                      <method.icon className={`w-5 h-5 ${method.color}`} />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium">{method.title}</div>
                      <div className="text-sm text-foreground/90">{method.value}</div>
                      <div className="text-xs text-muted-foreground">{method.description}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Card>

            {/* Availability */}
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-terminal-green" />
                Availability
              </h3>
              <div className="space-y-3">
                {availability.map((slot, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div>
                      <div className="text-sm font-medium">{slot.day}</div>
                      <div className="text-xs text-muted-foreground">{slot.time}</div>
                    </div>
                    <div className={`w-3 h-3 rounded-full ${slot.available ? 'bg-terminal-green' : 'bg-terminal-red'}`} />
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Links */}
            <Card className="p-6 bg-card/50 border-border">
              <h3 className="text-lg font-semibold mb-4">Connect With Me</h3>
              <div className="space-y-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 rounded-lg hover:bg-secondary/50 transition-colors group"
                  >
                    <social.icon className={`w-5 h-5 ${social.color}`} />
                    <span className="font-medium">{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>

        {/* Terminal Quote */}
        <div className="mt-16">
          <div className="terminal-window max-w-3xl mx-auto hover-lift">
            <div className="terminal-header">
              <div className="flex gap-2">
                <div className="terminal-dot terminal-dot-red" />
                <div className="terminal-dot terminal-dot-yellow" />
                <div className="terminal-dot terminal-dot-green" />
              </div>
              <div className="text-xs text-muted-foreground ml-4">motivation.sh</div>
            </div>
            
            <div className="p-6 font-mono text-sm">
              <div className="text-terminal-green">$ echo "Let's build the future together!"</div>
              <div className="text-muted-foreground mt-2">
                "The best projects are born from great conversations. 
                Whether you have a clear vision or just an idea, 
                I'm here to help turn it into reality."
              </div>
              <div className="text-terminal-blue mt-4">- Nitish Baniya</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}