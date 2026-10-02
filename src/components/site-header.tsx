import type { NavigationItem } from "@/data/portfolio";

export function SiteHeader({
  initials,
  navigation,
}: {
  initials: string;
  navigation: NavigationItem[];
}) {
  return (
    <header className="site-header">
      <div className="site-shell header-inner">
        <a className="wordmark" href="#top" aria-label="Back to top">
          <span className="brand-symbol" aria-hidden="true">
            {"\u2733\uFE0E"}
          </span>
          {initials}
          <span className="brand-period">.</span>
        </a>
        <nav aria-label="Main navigation">
          <ul>
            {navigation.map((item) => (
              <li key={item.href}>
                <a href={item.href}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="header-contact mono" href="#contact">
          LET’S TALK <span aria-hidden="true">{"\u2197\uFE0E"}</span>
        </a>
      </div>
    </header>
  );
}
