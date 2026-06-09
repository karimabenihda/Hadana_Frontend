"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import { TooltipProvider } from "@/components/ui/tooltip"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { LayoutDashboardIcon, ListIcon, ChartBarIcon, FolderIcon, UsersIcon, CameraIcon, FileTextIcon, Settings2Icon, CircleHelpIcon, SearchIcon, DatabaseIcon, FileChartColumnIcon, FileIcon, CommandIcon } from "lucide-react"

const adminSidebar  = {
  user: {
    name: "Admin",
    email: "admin@hadana.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <LayoutDashboardIcon />
      ),
    },
    {
      title: "Enfants",
      url: "/dashboard/Admin/children",
      icon: (
        <ListIcon />
      ),
    },
    {
      title: "Parents",
      url: "/dashboard/Admin/parents",
      icon: (
        <ChartBarIcon />
      ),
    },
    {
      title: "Éducateurs",
      url: "/dashboard/Admin/educators",
      icon: (
        <FolderIcon />
      ),
    },
    {
      title: "Groupes",
      url: "/dashboard/Admin/groups",
      icon: (
        <UsersIcon />
      ),
    },  {
      title: "Salles",
      url: "/dashboard/Admin/rooms",
      icon: (
        <UsersIcon />
      ),
    },
  ],
  
  systeme: [
    {
      title: "Absences",
      url: "/dashboard/Admin/absences",
      icon: (
        <Settings2Icon />
      ),
    },
    {
      title: "Documents",
      url: "/dashboard/Admin/documents",
      icon: (
        <CircleHelpIcon />
      ),
    },
    {
      title: "Archives enfants",
      url: "/dashboard/Admin/archives",
      icon: (
        <SearchIcon />
      ),
    }, {
      title: "Paramètres",
      url: "/dashboard/Admin/settings",
      icon: (
        <Settings2Icon />
      ),
    },
  ],
  finnace: [
    {
      name: "Tarifications",
      url: "/dashboard/Admin/tarifications",
      icon: (
        <DatabaseIcon />
      ),
    },
    {
      name: "Paiements",
      url: "/dashboard/Admin/payments",
      icon: (
        <FileChartColumnIcon />
      ),
    },
    {
      name: "Factures",
      url: "/dashboard/Admin/invoices",
      icon: (
        <FileIcon />
      ),
    },
  ],
 communication: [
    {
      name: "Messages",
      url: "/dashboard/Admin/messages",
      icon: (
        <DatabaseIcon />
      ),
    },
    {
      name: "Annonces",
      url: "/dashboard/Admin/announcements",
      icon: (
        <FileChartColumnIcon />
      ),
    },
    {
      name: "Bulletins",
      url: "/dashboard/Admin/bulletins",
      icon: (
        <FileIcon />
      ),
    },{
      name: "Blogs",
      url: "/dashboard/Admin/blogs",
      icon: (
        <FileIcon />
      ),
    },
  ],
}







const parentSidebar   = {
  user: {
    name: "Parent",
    email: "parent@hadana.com",
    avatar: "/avatars/shadcn.jpg",
  },
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <LayoutDashboardIcon />
      ),
    },
    {
      title: "Mes enfants",
      url: "/dashboard/Parent/children",
      icon: (
        <ListIcon />
      ),
    },
    {
      title: "Planning",
      url: "/dashboard/Parent/planning",
      icon: (
        <ChartBarIcon />
      ),
    },
    {
      title: "Annonces",
      url: "/dashboard/Parent/announcements",
      icon: (
        <FolderIcon />
      ),
    },
    {
      title: "Team",
      url: "#",
      icon: (
        <UsersIcon />
      ),
    },
  ],
   
 systeme: [
    
    {
      title: "Documents",
      url: "/dashboard/Admin/documents",
      icon: (
        <CircleHelpIcon />
      ),
    },
      {
      title: "Paramètres",
      url: "/dashboard/Admin/settings",
      icon: (
        <Settings2Icon />
      ),
    },
  ],
  finnace: [
    {
      name: "Payments",
      url: "/dashboard/Parent/payments",
      icon: (
        <DatabaseIcon />
      ),
    },
     
    {
      name: "Factures",
      url: "/dashboard/Parent/invoices",
      icon: (
        <FileIcon />
      ),
    },
  ],
}







const educatorSidebar   = {
  user: {
    name: "Educator",
    email: "educator@hadana.com",
    avatar: "/avatars/shadcn.jpg",
  },
   systeme: [
    {
      title: "Absences",
      url: "/dashboard/Educator/absences",
      icon: (
        <Settings2Icon />
      ),
    },
    {
      title: "Documents",
      url: "/dashboard/Educator/documents",
      icon: (
        <CircleHelpIcon />
      ),
    },
    {
      title: "Archives enfants",
      url: "/dashboard/Educator/archives",
      icon: (
        <SearchIcon />
      ),
    }, {
      title: "Paramètres",
      url: "/dashboard/Educator/settings",
      icon: (
        <Settings2Icon />
      ),
    },
  ],
  navMain: [
    {
      title: "Dashboard",
      url: "/dashboard",
      icon: (
        <LayoutDashboardIcon />
      ),
    },
    {
      title: "Enfants",
      url: "/dashboard/Educator/children",
      icon: (
        <ListIcon />
      ),
    },
    {
      title: "Planning",
      url: "/dashboard/Educator/planning",
      icon: (
        <ChartBarIcon />
      ),
    },
    {
      title: "Groupes",
      url: "/dashboard/Educator/groups",
      icon: (
        <FolderIcon />
      ),
    },
    {
      title: "Annonces",
      url: "/dashboard/Educator/announcements",
      icon: (
        <UsersIcon />
      ),
    },
  ],
 
   
  suivi: [
    {
      name: "Absences",
      url: "/dashboard/Educator/absences",
      icon: (
        <DatabaseIcon />
      ),
    },
    {
      name: "Notes",
      url: "/dashboard/Educator/notes",
      icon: (
        <FileChartColumnIcon />
      ),
    },
    
  ],
}


export function AppSidebar({
  ...props
}) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className="data-[slot=sidebar-menu-button]:p-1.5!">
              <a href="/" className="flex items-center justify-center">
              <img src="/images/logo/logo.png" alt="logo"  className="w-20 flex justify-center" /> </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={adminSidebar.navMain} />
        <NavDocuments items={adminSidebar.finnace} />
        <NavDocuments items={adminSidebar.communication} />
        <NavSecondary items={adminSidebar.systeme} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={adminSidebar.user} />
      </SidebarFooter>
    </Sidebar>
  );
}
