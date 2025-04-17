import Logo from "@/src/root/components/logo";
import Auth from "@/src/auth/components/auth";

export default function LoginPage() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Logo/>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <Auth />
          </div>
        </div>
      </div>
      <div className="relative hidden bg-blue-50 lg:block">
        {/*  right panel  */}
      </div>
    </div>
  );
}
