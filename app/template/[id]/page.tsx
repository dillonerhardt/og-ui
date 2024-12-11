import { redirect } from "next/navigation";

export default async function TemplatePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id as string;
  redirect(`/template/${id}/preview`);
}
