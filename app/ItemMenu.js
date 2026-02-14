"use client";
import Link from "next/link";

const ItemMenu = ({ children, ruta, border, external }) => {
  const borderClasses = border
    ? "border-b-2 border-emerald-500"
    : "hover:border-b-2 hover:border-current";

  const content = (
    <div className={`${borderClasses} mx-3 my-6 lg:my-0 md:mx-1 lg:mx-3 transition-colors`}>
      <div className="uppercase md:text-base lg:text-lg font-medium">
        {children}
      </div>
    </div>
  );

  if (external) {
    return (
      <a href={`${ruta || "/"}`} target="_blank" rel="noopener noreferrer">
        {content}
      </a>
    );
  }

  return <Link href={`${ruta || "/"}`}>{content}</Link>;
};

export default ItemMenu;
