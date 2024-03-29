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
  Button,
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
      <Box id={"projects"} fontFamily={"Poppins"} sx={{ bgcolor: "black" }}>
        <Box sx={box}>
          <h1 className="test" style={title}>
            {i18n.t("prices.mainTitle")}
          </h1>
          {/* </Card> */}
        </Box>
        <Box
          sx={{
            color: "white",
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: 300,
              height: 300,
              bgcolor: "#4dab6d",
              display: "grid",
              justifyItems: "center",
              alignItems: "center",
              padding: 4,
              borderRadius: 20,
            }}
          >
            <h1>FlipStore</h1>
            <h3>Clique para acessar o estudo de caso</h3>
            <a
              style={{ textDecoration: "none", color: "white" }}
              href="https://docs.google.com/presentation/d/1La9uD7E2cWZeU-ZFS16g3FjZvWeytPge5GcNYohKwxI/edit#slide=id.p"
              target="_blank"
              rel="noreferrer"
            >
              <Button variant="contained">Acessar</Button>
            </a>
          </Box>
          <Box
            sx={{
              color: "white",
              display: "grid",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                width: 300,
                height: 300,
                bgcolor: "#4dab6d",
                display: "grid",
                justifyItems: "center",
                alignItems: "center",
                padding: 4,
                borderRadius: 20,
              }}
            >
              <h1>Localizador de Salas da Unicamp</h1>
              <h3>Clique para acessar o estudo de caso</h3>
              <a
                style={{ textDecoration: "none", color: "white" }}
                href="https://docs.google.com/presentation/d/1fChOZ-1Pp-U48F4INh0NdFDXeGDSMWEhtYa_X42k3xw/edit#slide=id.gcd03e5b752_0_227"
                target="_blank"
                rel="noreferrer"
              >
                <Button variant="contained">Acessar</Button>
              </a>
            </Box>
          </Box>
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
                  alt="Ping Pong game"
                  height="210"
                  image="https://github.com/GabrielGardini/PersonalPage/blob/master/src/pingpong.png?raw=true"
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
                  alt="Michael Scott"
                  height="210"
                  image="https://github.com/GabrielGardini/PersonalPage/blob/master/src/theOffice.png?raw=true"
                />

                <CardContent sx={{ height: matches ? 90 : null }}>
                  <Typography gutterBottom variant="h5" component="div">
                    The Office Quotes
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Aplicação web que contém várias frases marcantes de The
                    Office. Criada para aprimorar conceitos de consumo de Api's
                    e reprodução de áudio
                  </Typography>
                </CardContent>
                <a
                  style={{ textDecoration: "none", color: "white" }}
                  href="https://the-office-quotes-five.vercel.app/"
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
