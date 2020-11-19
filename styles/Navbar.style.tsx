import styled from "styled-components";
import Navbarbg from "../utils/svg/Navbg.svg";
import NewQuestionIcon from "../utils/svg/NewQuestion.svg";
import LogoutIcon from "../utils/svg/LogoutIcon.svg";
import UserIcon from "../utils/svg/UserIcon.svg";
import Link from "next/link";
import { auth } from "../config/config";
import { useRouter } from "next/router";

export const Nav = styled.nav`
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 600px;
`;
export const SvgContainer = styled.div`
  position: relative;
  width: 100%;
  max-width: 600px;
  height: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  > svg {
    position: absolute;
    bottom: 0rem;
    height: 50%;
  }
  .bg1 {
    transform: translateX(-5px);
    fill: ${({ theme: { colors } }) => colors.blue};
  }
  .bg2 {
    transform: translateX(5px);
    fill: ${({ theme: { colors } }) => colors.red};
  }
  .bg3 {
    fill: ${({ theme: { colors } }) => colors.black};
  }
`;
export const Tooltip = styled.span`
  display: block;
  position: absolute;
  align-self: center;
  justify-self: center;
  top: -80%;
  background: ${({ theme: { colors } }) => colors.darkblue};
  color: ${({ theme: { colors } }) => colors.white};
  padding: ${({ theme: { spaces } }) => spaces.sm};
  text-align: center;
  border-radius: 0.3rem;
  opacity: 0;
  transition: 0.5s;
`;
export const NewQuestionLink = styled.a`
  background: ${({ theme: { colors } }) => colors.black};
  width: 8vw;
  max-width: 70px;
  max-height: 70px;
  min-height: 60px;
  min-width: 60px;
  height: 8vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 8vw;
  padding: ${({ theme: { spaces } }) => spaces.sm};
  border: none;
  margin-bottom: -3.5rem;
  position: relative;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.blue};
    z-index: -1;
    border-radius: 100%;
    transform: translateX(-3px);
    transition: 0.3s;
  }
  ::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: ${({ theme: { colors } }) => colors.red};
    z-index: -1;
    border-radius: 100%;
    transform: translateX(3px);
    transition: 0.3s;
  }
  :hover {
    ::before {
      transform: translateX(3px);
    }
    ::after {
      transform: translateX(-3px);
    }
    > span {
      opacity: 1;
    }
  }
  > svg {
    width: 90%;
  }
`;
export const NavbarLogoutButton = styled.button`
  background: transparent;
  border: none;
  position: absolute;
  left: 0.5rem;
  bottom: 0.5rem;
  cursor: pointer;
  svg {
    max-width: 2rem;
  }
  :hover {
    span {
      opacity: 1;
    }
  }
`;
export const NavBarButtonProfile = styled.a`
  background: transparent;
  border: none;
  position: absolute;
  right: 0.5rem;
  bottom: 0.5rem;
  svg {
    max-width: 2rem;
  }
  :hover {
    span {
      opacity: 1;
    }
  }
`;

export default function NavContainer() {
  const handleSignout = async () => {
    await auth.signOut();
  };
  return (
    <Nav>
      <SvgContainer>
        <Navbarbg className="bg1" />
        <Navbarbg className="bg2" />
        <Navbarbg className="bg3" />
        <Link href="/" passHref>
          <NewQuestionLink>
            <NewQuestionIcon />
            <Tooltip>New Question</Tooltip>
          </NewQuestionLink>
        </Link>
      </SvgContainer>
      <NavbarLogoutButton onClick={handleSignout}>
        <LogoutIcon />
        <Tooltip>Logout</Tooltip>
      </NavbarLogoutButton>
      <Link href="/profile/" passHref>
        <NavBarButtonProfile>
          <UserIcon />
          <Tooltip>Profile</Tooltip>
        </NavBarButtonProfile>
      </Link>
    </Nav>
  );
}
