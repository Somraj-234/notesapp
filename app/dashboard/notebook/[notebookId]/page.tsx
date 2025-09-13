import { CreateNote } from "@/components/create-note";
import NoteCard from "@/components/note-card";
import PageWrapper from "@/components/page-wrapper";
import { getNotebookById } from "@/server/notebooks";

type Params = Promise<{ notebookId: string }>;
export default async function NotebookPage({ params }: { params: Params }) {
  const { notebookId } = await params;
  const { notebook } = await getNotebookById(notebookId);

  return (
    <PageWrapper
      breadcrumbs={[
        { label: "Dashbaord", href: "/dashboard" },
        {
          label: notebook ? notebook?.name : "Notebook",
          href: `dashboard/notebook/${notebookId}`,
        },
      ]}
    >
      <div className="w-full flex flex-col items-start justify-start gap-4 px-4 pt-4">
      <h1> {notebook?.name}</h1>
        <CreateNote notebookId={notebookId} />
      </div>

      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {notebook?.notes?.length !== 0 ? (
          notebook?.notes?.map((note) => (
            <NoteCard key={notebook.id} note={note} />
          ))
        ) : (
          <div className="px-4 flex flex-col gap-4">No notes found</div>
        )}
      </div>
    </PageWrapper>
  );
}
