import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";
import styles from "./CTAButton.module.css";

export default function CTAButton({
  href = "/contact#contact-form",
  children = "Let's Talk",
  variant = "solid",
  fullWidth = false,
  className,
  ariaLabel,
}) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel ?? children}
      className={cn(
        styles.button,
        styles[variant],
        fullWidth && styles.fullWidth,
        className,
      )}
    >
      <span>{children}</span>
      <span className={styles.icon} aria-hidden="true">
        <ArrowUpRight size={18} />
      </span>
    </Link>
  );
}
