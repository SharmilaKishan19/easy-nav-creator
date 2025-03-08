
<<<<<<< HEAD
import React, { useEffect, useMemo, useState } from "react";
=======
import React from "react";
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { 
  Home, 
  Settings, 
  User, 
  Menu, 
  Search, 
  Folder,
  ArrowRight
} from "lucide-react";
<<<<<<< HEAD
import { getProjects } from "@/lib/storage";
import { MenuItem } from "@/lib/types";
=======
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf

interface SidebarProps {
  open: boolean;
}

<<<<<<< HEAD

export const Sidebar: React.FC<SidebarProps> = ({ open }) => {
  const projects = getProjects();
  
  const menuItems: Array<MenuItem> = useMemo(() => {
    const projectItems: Array<MenuItem> = projects.map(item => ({
      label: item.name,
      icon: Folder,
      href: `/projects/${item.id}`
    }))
    return [
      { 
        label: "Home", 
        icon: Home, 
        href: "/", 
      },
      ...projectItems
    ]
  }, [projects]);

  const [activeItem, setActiveItem] = useState<string>(location.pathname || menuItems[0].href);  

=======
const menuItems = [
  { 
    label: "Home", 
    icon: Home, 
    href: "/", 
    active: true 
  },
  { 
    label: "Browse", 
    icon: Search, 
    href: "/browse" 
  },
  { 
    label: "Projects", 
    icon: Folder, 
    href: "/projects" 
  },
  { 
    label: "Profile", 
    icon: User, 
    href: "/profile" 
  },
  { 
    label: "Settings", 
    icon: Settings, 
    href: "/settings" 
  },
];

export const Sidebar: React.FC<SidebarProps> = ({ open }) => {
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
  return (
    <aside 
      className={cn(
        "fixed top-16 left-0 h-[calc(100vh-4rem)] bg-background border-r z-30 transition-all duration-300 ease-in-out",
        open ? "w-64" : "w-20"
      )}
    >
      <div className="h-full flex flex-col">
        <nav className="flex-1 py-6 px-3 space-y-1">
          {menuItems.map((item) => (
            <Link
              key={item.label}
              to={item.href}
<<<<<<< HEAD
              onClick={() => setActiveItem(item.href)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group",
                activeItem === item.href 
=======
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group",
                item.active 
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground/70 hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 shrink-0",
<<<<<<< HEAD
                activeItem === item.href ? "text-primary" : "text-foreground/60 group-hover:text-foreground/80"
=======
                item.active ? "text-primary" : "text-foreground/60 group-hover:text-foreground/80"
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
              )} />
              <span className={cn(
                "transition-opacity duration-300",
                open ? "opacity-100" : "opacity-0"
              )}>
                {item.label}
              </span>
<<<<<<< HEAD
              {activeItem === item.href && (
=======
              {item.active && (
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
                <div className={cn(
                  "ml-auto",
                  open ? "opacity-100" : "opacity-0",
                  "transition-opacity duration-300"
                )}>
                  <ArrowRight className="h-4 w-4 text-primary" />
                </div>
              )}
            </Link>
          ))}
        </nav>
        
<<<<<<< HEAD
        {/* <div className={cn(
=======
        <div className={cn(
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
          "p-4 border-t",
          open ? "block" : "hidden"
        )}>
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center">
              <User className="h-5 w-5 text-primary" />
            </div>
            <div className="truncate">
              <p className="text-sm font-medium truncate">John Doe</p>
              <p className="text-xs text-muted-foreground truncate">john.doe@example.com</p>
            </div>
          </div>
<<<<<<< HEAD
        </div> */}
=======
        </div>
>>>>>>> 7f8c665a3394f82893538303db092d41def27fcf
      </div>
    </aside>
  );
};
