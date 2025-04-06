import React from "react";

import "../globals.css";
import Link from "next/link";

interface Metadata {
  title: string;
  description: string;
}
export const metadata: Metadata = {
  title: "Next Blog App",
  description: "Nextjs blog article",
};
export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <Link href={"/"} replace={true}>
        blog hell fire
      </Link>
      {children}
    </div>
  );
}
