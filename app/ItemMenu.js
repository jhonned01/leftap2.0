"use client";
import Link from "next/link";

const ItemMenu = ({ children, ruta, border, external }) => {
  return (
    <>
      {external ? (
        <a
          href={`${ruta || "hay señor"}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className={`${
              border && "border-Secundario  border-b-2"
            } mx-3 my-6 lg:my-0 md:mx-1 lg:mx-3 hover:border-Secundario hover:border-b-2 `}
          >
            <div className="uppercase md:text-base lg:text-lg font-medium">
              {children}
            </div>
          </div>
        </a>
      ) : (
        <Link href={`${ruta || "hay señor"}`}>
          <div
            className={`${
              border && "border-Secundario  border-b-2"
            } mx-3 my-6 lg:my-0 md:mx-1 lg:mx-3 hover:border-Secundario hover:border-b-2 `}
          >
            <div className="uppercase md:text-base lg:text-lg font-medium">
              {children}
            </div>
          </div>
        </Link>
      )}
    </>
  );
};

export default ItemMenu;
