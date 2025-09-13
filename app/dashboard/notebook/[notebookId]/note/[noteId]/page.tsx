import PageWrapper from "@/components/page-wrapper";
import { SimpleEditor } from "@/components/tiptap-templates/simple/simple-editor";
import { getNoteById } from "@/server/notes";
import { JSONContent } from "@tiptap/react";

type Params = Promise<{ noteId: string }>;
export default async function NotePage({ params }: { params: Params }) {
  const { noteId } = await params;
  const { note } = await getNoteById(noteId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashbaord", href: "/dashboard" },
        {
          label: note?.notebook?.name ?? "Notebook",
          href: `/dashboard/notebook/${note?.notebook?.id}`,
        },
        {
          label: note ? note?.title : "Note",
          href: `dashboard/note/${noteId}`,
        },
      ]}
    >
      {/* {note?.[0].title} */}

      <SimpleEditor content={note?.content as JSONContent[]} noteId={noteId} />
    </PageWrapper>
  );
}
