import React from "react";
import { Wrapper } from "@/components/ui/wrapper";
import Logo from "@/src/root/components/logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
const Header: React.FC = () => {
  return (
    <header className="">
      <Wrapper className="flex items-center justify-between py-4">
        <Logo />
        <Button
          variant={"outline"}
          size={"lg"}
          className="border-gray-900 rounded-full group"
        >
          <Link href="/auth" className="flex gap-2 items-center">
            Sign In
            <ArrowRight />
          </Link>
        </Button>
      </Wrapper>
    </header>
  );
};

export default Header;
