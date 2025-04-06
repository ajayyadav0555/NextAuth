import React from "react";

const Docs = async ({ params }: { params: Promise<{ slug: string[] }> }) => {
  const { slug } = await params;
  if (slug?.length === 2) {
    return (
      <h1>
        viewing docs for {slug[0]} and {slug[1]}
      </h1>
    );
  } else if (slug?.length === 1) {
    return <h1>viewing docs for {slug[0]}</h1>;
  }
  return <div>page slug page</div>;
};

export default Docs;
