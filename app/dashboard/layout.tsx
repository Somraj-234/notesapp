import { AppSidebar } from "@/components/app-sidebar";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Suspense } from "react";

function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <Suspense fallback={<div>Loading...</div>}>
        <AppSidebar />
      </Suspense>
      <main className="flex-1">{children}</main>
    </SidebarProvider>
  );
}

export default Layout;
