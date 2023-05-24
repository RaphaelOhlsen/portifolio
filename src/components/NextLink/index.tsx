import { ReactNode } from 'react';
import Link from 'next/link';

interface NextLinkProps {
  href: string;
  children: ReactNode;
}

export default function NextLink({ href, children }: NextLinkProps) {
  return <Link href={href}>{children}</Link>;
}
