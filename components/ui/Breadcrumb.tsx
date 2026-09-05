import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

export function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
      <ol className="flex items-center flex-wrap gap-y-2">
        {items.map((item, i) => (
          <li key={i} className="breadcrumb-item flex items-center">
            {item.href ? (
              <Link href={item.href} className="hover:text-primary transition-colors">
                {item.label}
       </Link>
            ) : (
              <span className="text-primary">{item.label}</span>
            )}
         </li>
        ))}
     </ol>
   </nav>
  );
}
