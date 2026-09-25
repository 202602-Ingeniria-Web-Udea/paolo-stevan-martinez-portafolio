export default function Footer() {
  return (
    <footer className="border-t border-slate-800 px-6 py-10 lg:px-12">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-semibold text-white">
            Mi Portafolio
          </p>

          <p className="mt-1 text-sm text-slate-500">
            Diseñado y desarrollado con Next.js, TypeScript y Tailwind CSS.
          </p>
        </div>

        <p className="text-sm text-slate-500">
          © {new Date().getFullYear()} Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
