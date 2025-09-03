import { SidebarTrigger } from "@/components/ui/sidebar"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Terminal, Download, ExternalLink, Sun, Moon } from "lucide-react"
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-black/90 backdrop-blur-md">
      <div className="flex h-16 items-center justify-between px-4">
        <div className="flex items-center gap-4">
          <SidebarTrigger className="hover:bg-secondary/50 p-2 rounded-lg transition-colors" />
          
          <div className="flex items-center gap-2">
            <div className="terminal-window w-8 h-8 bg-gradient-to-br from-terminal-green to-terminal-blue rounded-lg flex items-center justify-center glow-primary">
              <Terminal className="w-4 h-4 text-background" />
            </div>
            <div className="hidden sm:block">
              <span className="font-semibold text-gradient-primary">NITISH BANIYA</span>
              <span className="ml-2 text-sm text-muted-foreground">Portfolio v2.0</span>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          {mounted && (
            <div className="flex items-center gap-2">
              <Sun className="w-4 h-4 text-yellow-500" />
              <Switch 
                checked={theme === "dark"} 
                onCheckedChange={toggleTheme}
                className="data-[state=checked]:bg-primary"
              />
              <Moon className="w-4 h-4 text-blue-400" />
            </div>
          )}
          
          <Button variant="outline" size="sm" className="hidden md:flex items-center gap-2 hover-lift border-white/20 text-white hover:bg-white/10">
            <Download className="w-4 h-4" />
            Resume
          </Button>
          
          <Link to="/contact">
            <Button size="sm" className="bg-gradient-to-r from-primary to-accent hover:opacity-90 glow-primary">
              <ExternalLink className="w-4 h-4 mr-2" />
              Hire Me
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}