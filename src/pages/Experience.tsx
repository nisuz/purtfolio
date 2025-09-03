import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Users,
  Code,
  Shield,
  Rocket
} from "lucide-react"
import { Link } from "react-router-dom"

const experiences = [
  {
    title: "Technician",
    company: "Autodesk IT",
    location: "Kathmandu, Nepal",
    duration: "2023 - 2024",
    type: "Full-time",
    description: "Worked as technician for a year, responsible for maintaining and managing computer systems. Skilled in resolving technical issues, handling intercom setups, and server management.",
    achievements: [
      "Successfully maintained and managed computer systems, ensuring 99% system uptime throughout the year.",
      "Managed server operations, leading to optimized data handling and improved system reliability.",
      "Streamlined day-to-day IT operations, resulting in faster issue resolution and smoother workflow management.",
    ],
    technologies: ["React", "Node.js"]
  },
  // {
  //   title: "Ethical Hacker & Security Consultant",
  //   company: "CyberGuard Nepal",
  //   location: "Kathmandu, Nepal",
  //   duration: "2022 - 2023",
  //   type: "Contract",
  //   description: "Performed penetration testing and security assessments for various organizations. Developed security policies and provided training on cybersecurity best practices.",
  //   achievements: [
  //     "Conducted security assessments for 30+ organizations",
  //     "Identified and helped fix 200+ security vulnerabilities",
  //     "Developed custom security tools that are now used company-wide",
  //     "Achieved 98% client satisfaction rate for security consulting services"
  //   ],
  //   technologies: ["Burp Suite", "Metasploit", "Nmap", "Python", "Kali Linux", "OWASP ZAP"]
  // },
  // {
  //   title: "Full Stack Developer",
  //   company: "Digital Innovation Labs",
  //   location: "Pokhara, Nepal",
  //   duration: "2021 - 2022",
  //   type: "Full-time",
  //   description: "Developed and maintained multiple client projects ranging from e-commerce platforms to educational management systems. Collaborated with cross-functional teams to deliver high-quality solutions.",
  //   achievements: [
  //     "Built 15+ web applications serving 10,000+ active users",
  //     "Improved application performance by 60% through optimization techniques",
  //     "Integrated payment gateways and third-party APIs for various clients",
  //     "Mentored 3 junior developers and conducted code review sessions"
  //   ],
  //   technologies: ["React", "Laravel", "MySQL", "JavaScript", "PHP", "Bootstrap"]
  // },
  // {
  //   title: "Junior Web Developer",
  //   company: "StartUp Hub Nepal",
  //   location: "Kathmandu, Nepal",
  //   duration: "2020 - 2021",
  //   type: "Full-time",
  //   description: "Started my professional journey working on various web development projects. Gained hands-on experience with modern web technologies and agile development practices.",
  //   achievements: [
  //     "Contributed to 8+ successful project deliveries",
  //     "Learned and implemented responsive design principles",
  //     "Collaborated with designers to convert mockups into functional interfaces",
  //     "Participated in daily standups and sprint planning sessions"
  //   ],
  //   technologies: ["HTML", "CSS", "JavaScript", "jQuery", "PHP", "MySQL"]
  // }
]

const education = [
  {
    degree: "Bachelor of Science in Computer Science and Information Technology",
    institution: "SANN International College",
    location: "Kathmandu, Nepal",
    duration: "2024 - Present",
    description: "Focused on software engineering and web technologies.",
    achievements: [
      "President of Game and Web Development Club (2024 - Present)",
      "Hosted different Webinars and Workshops related to Game Development and Web Technologies",
    ]
  },
  {
    degree: "Higher Secondary Education (Science)",
    institution: "Sainik Awasiya Mahavidyalaya",
    location: "Kathmandu, Nepal",
    duration: "2022 - 2024",
    description: "Completed higher secondary education with focus on Mathematics and Physics.",
    achievements: [
      "Scored 3.31 GPA in board examinations out of 4.0",
      "Passed Out as a Excellent Student with Good Grades and Discipline"
    ]
  }
  
]

const projects = [
  {
    title: "Notes-Sathi",
    role: "Developer & Security Architect",
    duration: "6 months",
    description: "Your friendly study companion",
    impact: "Student Friendly Website with 200+ active users"
  },
  // {
  //   title: "VulnScanner - Automated Security Tool",
  //   role: "Creator & Maintainer",
  //   duration: "Ongoing",
  //   description: "Developed an open-source web vulnerability scanner that automates common security tests and generates detailed reports for developers.",
  //   impact: "1000+ downloads, adopted by 20+ organizations"
  // },
  // {
  //   title: "EduManage - School Management System",
  //   role: "Full Stack Developer",
  //   duration: "4 months",
  //   description: "Created a comprehensive school management system handling student records, attendance, grades, and parent communication.",
  //   impact: "Used by 5+ schools, managing 2000+ students"
  // }
]

export default function Experience() {
  return (
    <div className="min-h-screen p-6 space-y-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gradient-primary mb-4">
            Experience & Journey
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey through-out my career as a Developer and Ethical Hacker.
          </p>
        </div>

        {/* Work Experience */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-primary" />
            Work Experience
          </h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                    <div className="text-lg font-medium">{exp.company}</div>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {exp.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {exp.duration}
                      </span>
                      <Badge variant="outline" className="text-xs">{exp.type}</Badge>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{exp.description}</p>
                
                <div className="mb-4">
                  <h4 className="font-medium mb-2">Key Achievements:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="text-xs hover-lift">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <GraduationCap className="w-6 h-6 text-primary" />
            Education
          </h2>
          
          <div className="space-y-6">
            {education.map((edu, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-primary">{edu.degree}</h3>
                    <div className="text-lg font-medium">{edu.institution}</div>
                    <div className="flex items-center gap-4 text-muted-foreground text-sm mt-1">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {edu.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3 h-3" />
                        {edu.duration}
                      </span>
                    </div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{edu.description}</p>
                
                <div>
                  <h4 className="font-medium mb-2">Highlights:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Notable Projects */}
        <section>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Rocket className="w-6 h-6 text-primary" />
            Notable Projects
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border hover-lift">
                <h3 className="text-lg font-bold text-primary mb-2">{project.title}</h3>
                <div className="flex items-center gap-2 text-sm text-muted-foreground mb-3">
                  <Badge variant="outline" className="text-xs">{project.role}</Badge>
                  <span>{project.duration}</span>
                </div>
                <p className="text-muted-foreground mb-3">{project.description}</p>
                <div className="p-3 bg-primary/10 rounded-lg">
                  <div className="text-sm font-medium text-primary">Impact:</div>
                  <div className="text-sm text-muted-foreground">{project.impact}</div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Call to Action */}
        <Card className="mt-12 p-8 bg-gradient-to-br from-primary/5 to-accent/5 border-border hover-lift">
          <div className="text-center">
            <Link to="/contact">
              <h3 className="text-2xl font-bold mb-4 text-gradient-primary cursor-pointer hover:underline">Let's Work Together</h3>
            </Link>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              I'm always interested in new opportunities and exciting projects. Whether you need a secure web application 
              or want to improve your organization's security posture, let's connect!
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Badge variant="outline" className="hover-lift">Available for Projects</Badge>
              <Badge variant="outline" className="hover-lift">Security Consulting</Badge>
              <Badge variant="outline" className="hover-lift">Technical Mentoring</Badge>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}