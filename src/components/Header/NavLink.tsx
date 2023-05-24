import { useRouter } from 'next/router';
import NextLink from '../NextLink';
import { NavLinkContainer } from './styles';

interface NavLinkProps {
  title: string;
  path: string;
  includes?: boolean;
}

export default function NavLink({
  title,
  path,
  includes = false
}: NavLinkProps) {
  const router = useRouter();

  const verifyIfIsInclude = () => {
    if (includes) {
      return router.pathname.includes(path);
    }

    return path === router.pathname;
  };

  const isActive = verifyIfIsInclude();

  return (
    <NavLinkContainer isActive={isActive}>
      <NextLink href={path}>{title}</NextLink>
    </NavLinkContainer>
  );
}
