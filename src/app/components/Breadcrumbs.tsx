import { Link } from "react-router";
import { ChevronRight, Home } from "lucide-react";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Breadcrumb"
      className="flex items-center flex-wrap gap-1.5 mb-(--space-stack-md)"
    >
      {/* Home link */}
      <Link
        to="/"
        className="flex items-center gap-1 font-body text-muted-foreground hover:text-foreground transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 text-body-sm"
      >
        <Home className="size-3.5" strokeWidth={1.8} />
        <span>Home</span>
      </Link>

      {items.map((item, i) => {
        const isLast = i === items.length - 1;
        return (
          <span key={i} className="flex items-center gap-1.5">
            <ChevronRight
              className="size-3 text-muted-foreground/50 shrink-0"
              strokeWidth={2}
            />
            {isLast || !item.href ? (
              <span
                className="font-body text-foreground truncate max-w-[200px] md:max-w-[320px] text-body-sm font-medium"
                title={item.label}
              >
                {item.label}
              </span>
            ) : (
              <Link
                to={item.href}
                className="font-body text-muted-foreground hover:text-foreground transition-colors rounded-sm outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-1 truncate max-w-[200px] md:max-w-[320px] text-body-sm"
                title={item.label}
              >
                {item.label}
              </Link>
            )}
          </span>
        );
      })}
    </nav>
  );
}
