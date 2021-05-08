import { Typography } from "@material-ui/core";

export const Copyright = () => {
  const githubDevelopper = "https://github.com/97Fakhreddine";
  const contactDevelopper = () => {
    window.open(githubDevelopper, "_blank");
  };
  return (
    <Typography variant='body2' color='textSecondary' align='center'>
      {"Copyright © "}
      {new Date().getFullYear()}
      {"."} {" Developped with ❤️ By "}{" "}
      <span
        onClick={contactDevelopper}
        style={{ cursor: "pointer", textDecoration: "underline" }}>
        Fakhreddine
      </span>
    </Typography>
  );
};
