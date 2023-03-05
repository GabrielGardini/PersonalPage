import React from "react";
import {
  Box,
  Card,
  useMediaQuery,
  Grid,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { i18n } from "../translate/i18n";

const Prices = () => {
  //ESTILOS PRICES
  const matches = useMediaQuery("(min-width:1000px)");

  const box = {
    display: "flex",
    backgroundColor: "black",
    justifyContent: "center",
    fontFamily: "Poppins",
    // fontSize: matches ? 20 : 18
  };

  const title = {
    fontSize: matches ? 40 : 30,
    paddingInline: 20,
    borderRadius: 20,
    backgroundColor: "#4dab6d",
    color: "white",
  };

  return (
    <>
      <Box id={"precos"} fontFamily={"Poppins"} sx={{ bgcolor: "black" }}>
        <Box sx={box}>
          <h1 className="test" style={title}>
            {i18n.t("prices.mainTitle")}
          </h1>
          {/* </Card> */}
        </Box>
        <Box sx={{ p: 5, backgroundColor: "black" }}>
          <Grid data-anime={"left"} container spacing={6}>
            <Grid item md={4} xs={12}>
              <Card sx={{ borderRadius: 4 }} elevation={2}>
                <CardMedia
                  component="img"
                  alt="Dall-e clone"
                  height="210"
                  image="https://github.com/GabrielGardini/PersonalPage/blob/master/src/dalle.png?raw=true"
                />

                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Dall-e Clone
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aplicação que gera imagens usando inteligência artificial e
                    as salva em um repositório. Criada para aprimorar meus
                    conhecimentos sobre MERN
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://dalle-clone-delta.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardActions
                    className="gradient"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4dab6d",
                    }}
                  >
                    Acesse
                  </CardActions>
                </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{ borderRadius: 4 }} elevation={2}>
                <CardMedia
                  component="img"
                  alt="cTodo list"
                  height="210"
                  image="https://github.com/GabrielGardini/PersonalPage/blob/master/src/Todos.png?raw=true"
                />
                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Todo List
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um site onde o usuário pode criar uma conta e salvar sua
                    lista de afazeres, criado para aprimorar conhecimentos sobre
                    a MERN Stack
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://todo-list-one-swart.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardActions
                    className="gradient"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4dab6d",
                    }}
                  >
                    Acesse
                  </CardActions>
                </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{ borderRadius: 4 }} elevation={2}>
                <CardMedia
                  component="img"
                  alt="Jacaré do SUS"
                  height="210"
                  image="https://img.itch.zone/aW1hZ2UvOTg0NjczLzU1OTgxNTYucG5n/347x500/nWh0OR.png"
                />
                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Jacaré do SUS
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Criado em uma maratona de desenvolvimento de jogos durante a
                    pandemia
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://pvskp.itch.io/jacar-do-sus"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardActions
                    className="gradient"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4dab6d",
                    }}
                  >
                    Acesse
                  </CardActions>
                </a>
              </Card>
            </Grid>
          </Grid>
          <Grid sx={{ mt: 1 }} data-anime={"right"} container spacing={6}>
            <Grid item md={4} xs={12}>
              <Card sx={{ borderRadius: 4 }} elevation={2}>
                <CardMedia
                  component="img"
                  alt="ISS Tracker image"
                  height="210"
                  image="https://github.com/GabrielGardini/PersonalPage/blob/master/src/iss-tracker.png?raw=true"
                />
                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    ISS Tracker
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aplicação que mostra onde a Estação Espacial Internacional
                    está localizada no momento criada para aprimorar meus
                    conhecimentos sobre consumo e API's.
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://iss-tracker-j8yq.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardActions
                    className="gradient"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4dab6d",
                    }}
                  >
                    Acesse
                  </CardActions>
                </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card sx={{ borderRadius: 4 }} elevation={2}>
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="210"
                  image="https://github.com/GabrielGardini/PersonalPage/blob/master/src/Logo_Unicamp.jpg?raw=true"
                />
                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Ping Pong Game
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Jogo de Ping Pong criado utilizando apenas javascript.
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://jogo-ping-pong-peach.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardActions
                    className="gradient"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4dab6d",
                    }}
                  >
                    Acesse
                  </CardActions>
                </a>
              </Card>
            </Grid>
            <Grid item md={4} xs={12}>
              <Card
                sx={{
                  borderRadius: 4,
                }}
                elevation={2}
              >
                <CardMedia
                  component="img"
                  alt="checkspeech Ai image"
                  height="210"
                  image="https://media.licdn.com/dms/image/C5616AQHNuU0OOAnzDg/profile-displaybackgroundimage-shrink_350_1400/0/1642131195313?e=1678320000&v=beta&t=9NCT2EHlkR87Fcmst1pFyfV8jrg8JJcPqhVGFOLZK-0"
                />

                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    CheckSpeech AI
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Um Exemplo de site para a venda de uma API de serviços de
                    conversão de áudio em texto
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://google.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CardActions
                    className="gradient"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      bgcolor: "#4dab6d",
                    }}
                  >
                    Acesse
                  </CardActions>
                </a>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </>
  );
};

export default Prices;
