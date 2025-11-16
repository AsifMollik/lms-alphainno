import SignIn from "@/components/sign-in";
import SignUp from "@/components/sign-up";

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-background flex flex-col gap-4 p-4">
      {/* <h1>Hello World</h1> */}
      <SignUp />
      <SignIn />
    </div>
  );
}
