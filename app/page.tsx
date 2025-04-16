import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <p className="text-xl">Welcome to my Next.js app!</p>
      <p className="text-lg">This is a simple example of using Tailwind CSS.</p>
      <Button className="font-bold">Button</Button>
    </div>
  );
}
