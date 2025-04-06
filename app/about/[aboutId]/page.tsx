import { redirect } from "next/navigation";
import Link from "next/link";
import React from "react";

const DynamicAbout = async ({
  params,
  searchParams,
}: {
  params: Promise<{ aboutId: string }>;
  searchParams: Promise<{ lang: string }>;
}) => {
  const { aboutId } = await params;
  const { lang } = await searchParams;

  if(aboutId==="Ajay"){
    redirect("/")
  }

  return (
    <>
    <Link href={`/about/${aboutId}?lang=en`}>
            <li>Home -en</li>
          </Link>
          <Link href={`/about/${aboutId}?lang=fr`}>
            <li>About-fr</li>
          </Link>
          <Link href={`/about/${aboutId}?lang=hi`}>
            <li>Profile-hi</li>
          </Link>
      <div>DynamicAbout in Leanguage {lang}</div>
      <div>Dynamic About with {aboutId}</div>
    </>
  );
};

export default DynamicAbout;
