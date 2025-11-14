import { FormControlLabel, Link, Switch, Typography } from "@mui/material";
import type { FC } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

type HeaderProps = {
  darkMode: boolean;
  toggle: () => void;
};

const Header: FC<HeaderProps> = ({ darkMode, toggle }) => {
  const label = { inputProps: { "aria-label": "Switch theme" } };

  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link href={"/"}>
          <Typography variant={"h3"} sx={{ color: "#fff" }}>
            Job Market
          </Typography>
        </Link>

        <FormControlLabel
          control={<Switch checked={darkMode} onChange={toggle} {...label} />}
          label={darkMode ? "Dark Mode" : "Light Mode"}
        />
      </Toolbar>
    </AppBar>
  );
};

export { Header, type HeaderProps };
