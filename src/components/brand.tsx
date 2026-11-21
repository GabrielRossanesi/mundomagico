import Image from "next/image";
import { business } from "@/lib/business";

export function Brand({ inverse = false }: { inverse?: boolean }) {
  return (
    <a className={inverse ? "brand brand--inverse" : "brand"} href="#inicio" aria-label={`${business.name}, início`}>
      {business.logo && (
        <Image {...business.logo} alt={business.logo.alt} className="brand-logo"
          sizes={inverse ? "72px" : "(min-width: 64rem) 64px, 56px"} loading={inverse ? undefined : "eager"} />
      )}
      <span className="brand-name" aria-hidden="true">
        {business.shortName}
        <span>{business.service}</span>
      </span>
    </a>
  );
}
