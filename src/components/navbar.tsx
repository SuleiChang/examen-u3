"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { buttonVariants } from "./ui/button";
import { cn } from "@/lib/utils";

function Navbar() {
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/servicios", label: "Servicios" },
    { href: "/proyectos", label: "Proyectos" },
    { href: "/clientes", label: "Clientes" },
    { href: "/blog", label: "Blog" },
    { href: "/contacto", label: "Contacto" },
  ];

  return (
    <nav className="flex justify-between py-5">
      <Link href="/">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
          Examen
        </h1>
      </Link>

      <div className="flex gap-x-2 items-center">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: "ghost" }),
              pathname === item.href
                ? "bg-emerald-200 text-emerald-900"
                : "hover:text-emerald-200",
              "transition-colors"
            )}
          >
            {item.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;