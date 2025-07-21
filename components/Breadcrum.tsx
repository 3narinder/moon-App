"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const PATH_LABELS: Record<string, string> = {
  shop: "Shop",
  product: "Product",
  cart: "Shopping Cart",
  payment: "Payment",
  account: "Account",
  orders: "My Orders",
  wishlist: "Wishlist",
  checkout: "Checkout",
  // Add more as needed
};

interface BreadcrumbProps {
  productName?: string;
}

const Breadcrumb = ({ productName }: BreadcrumbProps) => {
  const pathname = usePathname();
  const segments = pathname?.split("/").filter(Boolean);

  const virtualSegments =
    pathname === "/payment" ? ["cart", "payment"] : segments;

  const buildHref = (index: number) =>
    "/" + virtualSegments?.slice(0, index + 1).join("/");

  return (
    <nav className="text-sm text-neutral-6 mb-4">
      <ul className="flex items-center gap-2 lg:ml-0 ml-4">
        <li>
          <Link href="/" className="hover:text-warm-black">
            Home
          </Link>
        </li>

        {virtualSegments.map((segment, index) => {
          const isLast = index === virtualSegments.length - 1;
          const href = buildHref(index);

          // Product page override
          if (
            virtualSegments.includes("product") &&
            isLast &&
            productName &&
            segment !== "product"
          ) {
            return (
              <li key={index} className="flex items-center">
                <span className="mx-2">/</span>
                <span className="text-neutral-8 font-medium">
                  {productName}
                </span>
              </li>
            );
          }

          const label =
            PATH_LABELS[segment.toLowerCase()] ||
            segment.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

          return (
            <li key={index} className="flex items-center">
              <span className="mx-2">/</span>
              {isLast ? (
                <span className="text-neutral-8 font-medium">{label}</span>
              ) : (
                <Link href={href} className="hover:text-warm-black">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
