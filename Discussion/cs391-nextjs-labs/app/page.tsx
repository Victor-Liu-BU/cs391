import PostPreview from "@/components/PostPreview";

export default function Home() {
  return (
      <div className="flex flex-col justify-center items-center gap-4 bg-blue-200 p-4">
        <PostPreview
            post={{
            id: "id",
            title: "demo post",
            content: "something",
            upvotes: 20,
            downvotes: 4,
        }}/>
      </div>
  );
}
