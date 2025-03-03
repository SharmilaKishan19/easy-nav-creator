
import React from "react";
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

interface SidebarProps {
  open: boolean;
}

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
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-md text-sm font-medium transition-all duration-200 group",
                item.active 
                  ? "bg-primary/10 text-primary" 
                  : "text-foreground/70 hover:bg-secondary hover:text-foreground"
              )}
            >
              <item.icon className={cn(
                "h-5 w-5 shrink-0",
                item.active ? "text-primary" : "text-foreground/60 group-hover:text-foreground/80"
              )} />
              <span className={cn(
                "transition-opacity duration-300",
                open ? "opacity-100" : "opacity-0"
              )}>
                {item.label}
              </span>
              {item.active && (
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
        
        <div className={cn(
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
        </div>
      </div>
    </aside>
  );
};
