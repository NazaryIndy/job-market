import { FormControlLabel, Switch, Typography } from "@mui/material";
import type { FC } from "react";
import styles from "./Header.module.scss";

type HeaderProps = {
  darkMode: boolean;
  toggle: () => void;
};

const Header: FC<HeaderProps> = ({ darkMode, toggle }) => {
  const label = { inputProps: { "aria-label": "Switch theme" } };

  return (
    <header className={styles.header}>
      <Typography variant="h4" component="p" gutterBottom>
        Job Market
      </Typography>
      <FormControlLabel
        control={<Switch checked={darkMode} onChange={toggle} {...label} />}
        label={darkMode ? "Dark Mode" : "Light Mode"}
      />
    </header>
  );
};

export { Header, type HeaderProps };
