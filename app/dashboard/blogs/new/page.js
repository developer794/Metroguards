import CreateBlogForm from "../CreateBlogForm";
import PageHeader from "./_components/PageHeader";

export default function NewBlogPage() {
  return (
    <div className="space-y-8">
      <PageHeader />
      <CreateBlogForm redirectTo="/dashboard/blogs" />
    </div>
  );
}
