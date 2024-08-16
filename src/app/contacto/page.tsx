"use client";
import { useEffect } from "react";
import { toast } from 'sonner';

export default function Contacto() {
  useEffect(() => {
    toast("Estás en la página de contacto");
  }, []);

  return (
    <div className="flex min-h-screen flex-col items-center p-24 text-3xl font-bold">
      Página de Contacto
    </div>
  );
}