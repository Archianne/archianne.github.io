import useLocalStorage from "../_Hooks/useLocalStorage";
import styled from "styled-components";
import Icons from "../../theme/icons";
import Link from "../_Styled/link";
import Toggle from "../_Styled/toggle";
import DropdownMenu from "../_Styled/dropdown";

const NavBar = (props) => {
  const [isOn, setIsOn] = useLocalStorage("isOn", false);
  const tabs = [
    {
      title: "Home",
      path: "",
    },
    {
      title: "Portfolio",
      path: "portfolio",
    },
    {
      title: "Links",
      path: "links",
    },
    {
      title: "Blog",
      path: "blog",
    },
    {
      title: "Contact",
      path: "contact",
    },
  ];

  return (
    <StyledNavBar>
      <DropdownMenu />
      <Link href={"/#/"} aria-label="Home">
        <Icons.Archer className="logo-icon" />
      </Link>
      <FlexDiv>
        {tabs.map((tab, index) => {
          return (
            <Link href={"/#/" + tab.path} key={index}>
              <p>{tab.title}</p>
            </Link>
          );
        })}
        <Toggle
          isOn={isOn}
          handleToggle={() => {
            props.changeTheme();
            setIsOn(!isOn);
          }}
        />
      </FlexDiv>
    </StyledNavBar>
  );
};

export default NavBar;

const StyledNavBar = styled.nav`
  display: flex;
  flex-flow: row no-wrap;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  line-height: 21px;
  height: 70px;
  background: ${(props) => props.theme.navBg};
  color: ${(props) => props.theme.navFontColor};
  @media (max-width: 768px) {
    padding: 16px 16px;
  }

  #toggle {
    margin-top: -18px;
    width: 50px;
  }

  a {
    color: ${(props) => props.theme.navFontColor};
    margin-right: 16px;
  }

  .logo-icon {
    width: 32px;
    height: auto;
    cursor: pointer;
  }
`;

const FlexDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  @media (max-width: 768px) {
    a {
      display: none;
    }
  }
`;
