import { ThemeToggle } from "@/components/layout/theme-toggle";
import { DashboardSidebar } from "@/components/sidebar/app-sidebar";
import BreadcrumbHeader from "@/components/sidebar/BreadcrumbHeader";
import { Separator } from "@/components/ui/separator";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Dashboard - AIsemble",
  description: "Your AI agent team management dashboard",
};

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="flex min-h-screen">
      {/* Sidebar will go here */}
      <SidebarProvider>
        <DashboardSidebar isCollapsed={false} />
        <main className="flex-1">
          
            <header className="flex items-center px-2 py-4 h-[50px] container bg-secondary/20">
              <SidebarTrigger className="" />
              <ThemeToggle />
              <BreadcrumbHeader />
            </header>
            <Separator />
          
          {/* Header will go here */}
          <div className="container mx-auto p-4">{children}</div>
        </main>
      </SidebarProvider>
    </div>
  );
}
