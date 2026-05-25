import { createClient } from "@/utils/supabase/server";
import { notFound } from "next/navigation";
import { EditFormWrapper } from "./EditFormWrapper";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditPostPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();

  // Busca o post atual correspondente ao ID vindo da URL
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single();

  if (!post) {
    notFound();
  }

  return <EditFormWrapper initialData={post} />;
}