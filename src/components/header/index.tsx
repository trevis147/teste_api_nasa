import React, { useContext } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";
import { shade } from "polished";

import Logo from "../../assets/Logo.png";
import { ContainerHeader, HeaderLeft } from "./styles";
import RoutesPage from "../../routes/routesPage";

interface Props {
  toggleTheme(): void;
}

const Header: React.FC<Props> = ({ toggleTheme }) => {
  const { colors, title } = useContext(ThemeContext);

  return (
    <ContainerHeader>
      <HeaderLeft>
        <img
          style={{ cursor: "pointer" }}
          src={Logo}
          width={65}
          onClick={() => RoutesPage.navigate("/")}
          alt="website logo"
        />
      </HeaderLeft>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Switch
          onChange={toggleTheme}
          checked={title === "dark"}
          checkedIcon={<label>🌙</label>}
          uncheckedIcon={<label style={{ marginLeft: "5px" }}>🌞</label>}
          height={20}
          width={45}
          handleDiameter={20}
          offColor={shade(0.3, colors.primary)}
          onColor={colors.secondary}
        />
      </div>
    </ContainerHeader>
  );
};

export default Header;
