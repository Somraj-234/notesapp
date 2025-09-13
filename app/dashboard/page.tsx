import { CreateNoteBook } from "@/components/create-notebook";
import NotebookCard from "@/components/notebook-card";
import PageWrapper from "@/components/page-wrapper";
import { getNoteBooks } from "@/server/notebooks";

export default async function page() {
  const notebooks = await getNoteBooks();

  return (
    <PageWrapper breadcrumbs={[{ label: "Dashbaord", href: "/dashboard" }]}>
      <div className="w-full flex flex-col items-start justify-start gap-4 px-4 pt-4">
        <CreateNoteBook />
      </div>
      <div className="p-4 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {notebooks.success &&
          notebooks?.notebooks?.map((notebook) => (
            <NotebookCard key={notebook.id} notebook={notebook} />
          ))}
      </div>
      {notebooks.success && notebooks?.notebooks?.length === 0 && (
        <div className="px-4 flex flex-col gap-4">No notebooks found</div>
      )}
    </PageWrapper>
  );
}
