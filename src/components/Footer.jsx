import React from "react";
import { Box, Divider, Grid, Typography, useMediaQuery } from "@mui/material";
import CallIcon from "@mui/icons-material/Call";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import BoyIcon from "@mui/icons-material/Boy";
import BatchPredictionIcon from "@mui/icons-material/BatchPrediction";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LogoFooter from "./LogoFooter";
import { i18n } from "../translate/i18n";

const Footer = () => {
  const matches = useMediaQuery("(min-width:900px)");
  //ESTILOS FOOTER
  const footer = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    overflow: "hidden",
    height: matches ? 110 : 300,
    fontFamily: "Poppins",
  };
  const option = {
    color: "white",
    fontSize: 24,
    textDecoration: "none",
  };

  return (
    <>
      <div className="gradient">
        <footer className="gradient" style={footer}>
          <Grid container>
            <Grid
              item
              md={4}
              xs={12}
              sx={{ mb: matches ? 0 : 2, mt: matches ? 2 : 0 }}
            >
              <Typography fontFamily={"Poppins"} textAlign="center">
                <a href={"#solucoes"} style={option}>
                  {"Sobre mim"}
                </a>
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              sx={{ mb: matches ? 0 : 2, mt: matches ? 2 : 0 }}
            >
              <Typography fontFamily={"Poppins"} textAlign="center">
                <a href={"#solucoes"} style={option}>
                  {"Minhas habilidades"}
                </a>
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
              sx={{ mb: matches ? 0 : 2, mt: matches ? 2 : 0 }}
            >
              <Typography fontFamily={"Poppins"} textAlign="center">
                <a href={"#solucoes"} style={option}>
                  {"Projetos"}
                </a>
              </Typography>
            </Grid>
            <Grid item xs={12} sx={{ mb: 2, mt: matches ? 2 : 3 }}>
              <Typography sx={option} fontFamily={"Poppins"} textAlign="center">
                {`Developed by Gabriel Gardini. ${new Date().getFullYear()}`}
              </Typography>
            </Grid>
          </Grid>
        </footer>

        {/* <h3
          style={{
            color: "white",
            justifyContent: "center",
            display: "flex",
            fontFamily: "Poppins",
            overflow: "hidden",
          }}
        >{`Developed by Gabriel Gardini. ${new Date().getFullYear()}`}</h3> */}
      </div>
    </>
  );
};

export default Footer;
