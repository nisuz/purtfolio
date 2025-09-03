import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import { 
  Home, 
  User, 
  Code2, 
  Mail, 
  Shield, 
  Briefcase,
  Terminal,
  ChevronRight,
  Github,
  Linkedin,
  Twitter
} from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  useSidebar,
} from "@/components/ui/sidebar"

const navigationItems = [
  { title: "Home", url: "/", icon: Home },
  { title: "About", url: "/about", icon: User },
  { title: "Skills", url: "/skills", icon: Terminal },
  { title: "Experience", url: "/experience", icon: Briefcase },
  { title: "Projects", url: "/projects", icon: Code2 },
  { title: "Contact", url: "/contact", icon: Mail },
]

const socialLinks = [
  { name: "GitHub", icon: Github, url: "https://github.com/nisuz" },
  { name: "LinkedIn", icon: Linkedin, url: "https://linkedin.com" },
  { name: "Twitter", icon: Twitter, url: "https://twitter.com" },
]

export function AppSidebar() {
  const { state } = useSidebar()
  const location = useLocation()
  const currentPath = location.pathname
  
  const isCollapsed = state === "collapsed"
  const isActive = (path: string) => currentPath === path

  return (
    <Sidebar className={`${isCollapsed ? "w-16" : "w-64"} border-r border-border bg-card/50 backdrop-blur-sm`}>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <div className="terminal-window w-8 h-8 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-lg flex items-center justify-center">
            <Terminal className="w-4 h-4 text-background" />
          </div>
          {!isCollapsed && (
            <div>
              <h2 className="font-semibold text-sm text-gradient-primary">NITISH BANIYA</h2>
              <p className="text-xs text-muted-foreground">Full Stack Dev</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-2">
        <SidebarGroup>
          <SidebarGroupLabel className={isCollapsed ? "sr-only" : ""}>
            Navigation
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {navigationItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton 
                    asChild 
                    className={`group relative overflow-hidden ${
                      isActive(item.url) 
                        ? "bg-primary/20 text-primary border-l-2 border-primary" 
                        : "hover:bg-secondary/50"
                    }`}
                  >
                    <NavLink to={item.url} className="flex items-center gap-3 p-3">
                      <item.icon className={`w-4 h-4 ${isActive(item.url) ? "text-primary" : ""}`} />
                      {!isCollapsed && (
                        <>
                          <span className="font-medium">{item.title}</span>
                          {isActive(item.url) && (
                            <ChevronRight className="w-3 h-3 ml-auto text-primary" />
                          )}
                        </>
                      )}
                      {isActive(item.url) && (
                        <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-primary to-accent animate-glow" />
                      )}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter className="p-4">
        {!isCollapsed && (
          <div className="space-y-2">
            <div className="text-xs text-muted-foreground mb-2">Connect with me</div>
            <div className="flex gap-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  className="p-2 rounded-lg bg-secondary/50 hover:bg-primary/20 hover:text-primary transition-all duration-300 hover-lift"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
            <div className="text-xs text-muted-foreground/70 pt-2">
             Based in Nepal
            </div>
          </div>
        )}
      </SidebarFooter>
    </Sidebar>
  )
}