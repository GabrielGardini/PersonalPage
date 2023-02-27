import React from "react";
import { Box, Card, Grid, useMediaQuery } from "@mui/material";
import { i18n } from "../translate/i18n";
import { BsPatchCheckFill } from "react-icons/bs";
import "./experience.css";

const Solutions = () => {
  //ESTILOS SOLUTIONS
  const matches = useMediaQuery("(min-width:1000px)");
  const box = {
    // marginY: 2,
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    fontFamily: "Poppins",
    fontSize: matches ? 24 : 18,
  };
  const titleCard = {
    backgroundColor: "#4dab6d",
    borderRadius: 2,
  };
  const title = {
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: "#4dab6d",
    color: "trasparent",
  };
  const gridContainerWhite = {
    p: 5,
    color: "white",
    width: matches ? "70%" : "100%",
  };
  const gridContainerBlue = {
    p: 5,
    color: "#1976d2",
    width: matches ? "70%" : "100%",
  };
  const solutionBoxBlue = {
    fontFamily: "Poppins",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
  };
  const solutionBoxWhite = {
    fontFamily: "Poppins",
    backgroundColor: "black",
    display: "flex",
    justifyContent: "center",
  };

  return (
    <>
      <Box sx={{ backgroundColor: "black" }}>
        <Box id={"solucoes"} data-anime={"center"} sx={box}>
          {/* <Card elevation={4} sx={titleCard}> */}
          <h1 className="test" style={title}>
            {i18n.t("solutions.mainTitle")}
          </h1>
          {/* </Card> */}
        </Box>
        <Box sx={solutionBoxBlue}>
          <Grid container sx={gridContainerWhite}>
            <Grid
              className="gradient"
              data-anime={"center"}
              sx={{ backgroundColor: "#4dab6d", borderRadius: 5, p: 3 }}
              item
              md={5.6}
              xs={12}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <h3>Desenvolvimento FrontEnd</h3>
              </Box>
              <Grid container>
                <Grid item md={6}>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>HTML</h3>
                      <small className="text-light">Intermediário</small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>CSS</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Intermediário
                      </small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>JavaScript</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Avançado
                      </small>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>React</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Avançado
                      </small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>React Native</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Avançado
                      </small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>Figma</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Básico
                      </small>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={0.8} xs={12}>
              <p style={{ color: "#1976d2" }}> .</p>
            </Grid>
            <Grid
              data-anime={"center"}
              className="gradient2"
              sx={{ backgroundColor: "#4dab6d", borderRadius: 5, p: 3 }}
              item
              md={5.6}
              xs={12}
            >
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <h3>Desenvolvimento BackEnd</h3>
              </Box>
              <Grid container>
                <Grid item md={6}>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>Python</h3>
                      <small className="text-light">Avançado</small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>C</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Intermediário
                      </small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>Java</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Intermediário
                      </small>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item md={6} xs={12}>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>SQL</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Intermediário
                      </small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>Node Js</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Intermediário
                      </small>
                    </Grid>
                  </Grid>
                  <Grid container sx={{ p: 1 }}>
                    <Grid item md={2} sx={{ textAlign: "center" }}>
                      <BsPatchCheckFill className="experience_details-icon" />
                    </Grid>
                    <Grid item md={10}>
                      <h3>Hardware</h3>
                      <small
                        style={{ marginBottom: 10 }}
                        className="text-light"
                      >
                        Avançado
                      </small>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Solutions;
