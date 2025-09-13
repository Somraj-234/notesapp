"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { NoteBook } from "@/db/schema";
import Link from "next/link";
import { Button } from "./ui/button";
import { Loader, Trash2 } from "lucide-react";
import { deleteNotebook } from "@/server/notebooks";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useState } from "react";

interface NotebookCardProps {
  notebook: NoteBook;
}

export default function NotebookCard({ notebook }: NotebookCardProps) {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const numberofNotes = notebook.notes?.length;

  const handleDelete = async () => {
    try {
      setIsDeleting(true);
      const response = await deleteNotebook(notebook.id);
      if (response.success) {
        toast.success("Notebook deleted");
        router.refresh();
      }
    } catch {
      toast.error("Failed to delete notebook");
    } finally {
      setIsDeleting(false);
      setIsOpen(false);
    }
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle className="truncate">{notebook.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          {numberofNotes
            ? numberofNotes > 1
              ? `${numberofNotes} notes`
              : "1 note"
            : "No Notes"}
        </p>
      </CardContent>
      <CardFooter className="space-x-2 justify-end">
        <Link href={`/dashboard/notebook/${notebook.id}`}>
          <Button variant={"outline"} className="cursor-pointer">
            View
          </Button>
        </Link>
        <AlertDialog open={isOpen} onOpenChange={setIsOpen}>
          <AlertDialogTrigger>
            <Button variant={"destructive"} className="cursor-pointer">
              {isDeleting ? (
                <Loader className="size-4" />
              ) : (
                <Trash2 className="size-4" />
              )}
            </Button>
          </AlertDialogTrigger>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
              <AlertDialogDescription>
                This action cannot be undone. This will permanently delete your
                notebook and all the notes from this notebook.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction disabled={isDeleting} onClick={handleDelete}>
                Continue
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </CardFooter>
    </Card>
  );
}
