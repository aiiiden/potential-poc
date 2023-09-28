"use client";

interface CodeViewProps {
  as: "div" | "dd";
  children: React.ReactNode;
}

export default function CodeView({ as, children }: CodeViewProps) {
  const Element = as || "div";

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children as string);
    alert("Copied!");
  };

  return (
    <Element
      className="overflow-auto max-w-[180px] p-2 bg-gray-200 rounded-lg cursor-pointer border border-transparent hover:border-black"
      onClick={handleCopy}
    >
      <code className="text-xs font-mono text-gray-700">{children}</code>
    </Element>
  );
}
