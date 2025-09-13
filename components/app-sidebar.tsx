import * as React from "react";

import { SearchForm } from "@/components/search-form";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { getNoteBooks } from "@/server/notebooks";
import SidebarData from "./ui/sidebar-data";

export async function AppSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const notebooks = await getNoteBooks();

  const data = {
    navMain: [
      ...(notebooks?.notebooks?.map((notebook) => ({
        title: notebook.name,
        url: `/dashboard/${notebook.id}/`,
        items: (notebook.notes ?? []).map((note) => ({
          title: note.title,
          url: `/dashboard/notebook/${notebook.id}/note/${note.id}`,
        })),
      })) ?? []),
    ],
  };

  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <div>
          <h2 className="font-semibold text-2xl">📝NotesApp</h2>
        </div>
        <React.Suspense>
          <SearchForm />
        </React.Suspense>
      </SidebarHeader>
      <SidebarContent className="gap-0">
        {/* We create a collapsible SidebarGroup for each parent. */}
        <SidebarData data={data} />
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
