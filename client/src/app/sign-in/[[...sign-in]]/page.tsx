import { SignIn } from "@clerk/nextjs";

export default function Page() {
  return (
    <main className="flex w-full flex-col min-h-screen dark:bg-black bg-white dark:bg-dot-white/[0.1] bg-dot-black/[0.1]">
      <div className="container mx-auto flex h-full items-center justify-center py-4 px-8 md:px-12 text-center gap-4">
        <SignIn />
      </div>
    </main>
  );
}
