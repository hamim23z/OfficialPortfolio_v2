"use client";
import React from "react";
import {
  Box,
  Typography,
  Paper,
  Container,
  Card,
  CardContent,
  Button,
} from "@mui/material";

import Grid from "@mui/material/Grid2";
import { styled } from "@mui/material/styles";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Tooltip from "@mui/material/Tooltip";
import { useState } from "react";

{
  /*Navbar Icons*/
}
import HomeIcon from "@mui/icons-material/Home";
import FolderIcon from "@mui/icons-material/Folder";
import BuildIcon from "@mui/icons-material/Build";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";

{
  /*Images and Image Stuff*/
}
import Image from "next/image";
import github_cool from "../public/github_cool.jpg";
import smart_study_logo from "../public/smart_study_logo.png";
import smart_translate_logo from "../public/smart_translate_logo.png";
import html_logo from "../public/html_logo.png";
import css_logo from "../public/css_logo.png";
import javascript_logo from "../public/javascript_logo.png";
import nextjs_logo from "../public/nextjs_logo.png";
import react_logo from "../public/react_logo.png";
import mui_logo from "../public/mui_logo.png";
import python_logo from "../public/python_logo.png";
import flask_logo from "../public/flask_logo.png";
import docker_logo from "../public/docker_logo.png";
import openai_logo from "../public/openai_logo.png";
import firebase_logo from "../public/firebase_logo.png";
import mysql_logo from "../public/mysql_logo.png";
import chronicleai_logo from "../public/chronicleai_logo.png";
import blizzardbot_logo from "../public/blizzardbot_logo.png";
import nycddc_logo from "../public/nycddc_logo.png";
import fyllan_logo from "../public/fyllan_logo.png";
import trademark_logo from "../public/trademark_logo.png";
import doris_logo from "../public/doris_logo.png";
import mapcs from "../public/mapcs.png";

{
  /*Icons for Fixed Column on Left*/
}
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import EmailIcon from "@mui/icons-material/Email";
import Link from "next/link";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
  ...theme.applyStyles("dark", {
    backgroundColor: "#1A2027",
  }),
}));

export default function HomePage() {
  const [value, setValue] = React.useState("recents");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const StyledRoot = styled("div")(() => ({
    position: "relative",
    borderRadius: "1rem",
    minWidth: 320,
    paddingTop: 60,
    "&:before": {
      transition: "0.2s",
      position: "absolute",
      width: "100%",
      height: "100%",
      content: '""',
      display: "block",
      borderRadius: "1rem",
      zIndex: 0,
      bottom: 0,
      backgroundColor: "#6e00b3",
    },
    "&:hover": {
      "&:before": {
        bottom: -6,
      },
    },
  }));

  const CardMediaCover = styled(Box)(() => ({
    borderRadius: "1rem",
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 0,
  }));

  const StyledContent = styled("div")(() => ({
    position: "relative",
    zIndex: 1,
    padding: "1rem",
    borderRadius: "1rem",
    "&:before": {
      content: '""',
      display: "block",
      position: "absolute",
      left: 0,
      top: 1,
      zIndex: 0,
      width: "100%",
      height: "100%",
      clipPath:
        "polygon(0% 100%, 0% 35%, 0.3% 33%, 1% 31%, 1.5% 30%, 2% 29%, 2.5% 28.4%, 3% 27.9%, 3.3% 27.6%, 5% 27%,95% 0%,100% 0%, 100% 100%)",
      borderRadius: "1rem",
      background: "#151312",
    },
  }));

  const AvatarLogo = styled(Box)(() => ({
    transition: "0.3s",
    width: 100,
    height: 100,
    borderRadius: "1rem",
    position: "relative",
    overflow: "hidden",
  }));

  const ProjectCard = ({ cover, logo, title, brand, date }) => {
    return (
      <StyledRoot>
        <CardMediaCover>
          <Image
            src={cover}
            alt="Project Cover"
            fill
            style={{
              objectFit: "cover",
              borderRadius: "1rem",
            }}
          />
        </CardMediaCover>
        <StyledContent>
          <Box position={"relative"} zIndex={1}>
            <Box display="flex" p={0} gap={2} sx={{ flexWrap: "nowrap" }}>
              <Box>
                <AvatarLogo>
                  <Image
                    src={logo}
                    alt="Project Logo"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </AvatarLogo>
              </Box>
              <Box alignSelf="flex-end">
                <Typography
                  variant="h5"
                  sx={{
                    fontFamily: "Kanit",
                    fontWeight: 700,
                    color: "#fff",
                    margin: 0,
                  }}
                >
                  {title}
                </Typography>
              </Box>
            </Box>
            <Box display="flex" mt={4} alignItems={"center"}>
              <Box>
                <Typography
                  variant="subtitle2"
                  sx={{
                    fontFamily: "Kanit",
                  }}
                >
                  {brand}
                </Typography>
              </Box>
              <Box ml="auto">
                <Typography
                  variant="caption"
                  sx={{
                    fontFamily: "Kanit",
                    color: "#fff",
                    padding: "0.25rem 0.5rem",
                    borderRadius: "12px",
                  }}
                >
                  {date}
                </Typography>
              </Box>
            </Box>
          </Box>
        </StyledContent>
      </StyledRoot>
    );
  };

  const [isOpen, setIsOpen] = useState(false);
  const [openCardId, setOpenCardId] = useState(null);

  const handleNavigation = (section) => {
    const element = document.getElementById(section);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Box>
        <BottomNavigation
          showLabels
          value={value}
          onChange={(event, newValue) => setValue(newValue)}
          sx={{
            background: "#151312",
            display: "flex",
          }}
        >
          <Tooltip title="Home" arrow>
            <BottomNavigationAction
              icon={<HomeIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("home")}
            />
          </Tooltip>

          <Tooltip title="Projects" arrow>
            <BottomNavigationAction
              icon={<FolderIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("projects")}
            />
          </Tooltip>

          <Tooltip title="Experience" arrow>
            <BottomNavigationAction
              icon={<WorkHistoryIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("experience")}
            />
          </Tooltip>

          <Tooltip title="Tech Stack" arrow>
            <BottomNavigationAction
              icon={<BuildIcon sx={{ color: "white" }} />}
              onClick={() => handleNavigation("tech_stack")}
            />
          </Tooltip>
        </BottomNavigation>
      </Box>

      {/* All components will go in here. Besides the navbar */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={20}>
          <Grid item xs={12} sm={4}>
            <Container fixed>
              <Box
                sx={{
                  backgroundColor: "#151312",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  height: "500px",
                  maxWidth: "300px",
                  width: "100%",
                  flexDirection: "column",
                  borderRadius: "10px",
                  marginTop: "80px",
                  border: "2px solid #fff",
                  padding: 2,
                  marginLeft: { xs: "auto", md: "50px" },
                  marginRight: { xs: "auto", lg: "auto" }, // Center for laptops and larger
                  "@media (min-width: 1024px) and (max-width: 1440px)": {
                    // Target laptop screens
                    marginLeft: "auto",
                    marginRight: "auto",
                    marginTop: "100px", // Adjust vertical alignment for laptops
                  },
                }}
              >
                <Image
                  src={github_cool}
                  alt="Description"
                  width={200}
                  height={200}
                  style={{
                    borderRadius: "100%",
                  }}
                />

                <Box>
                  <Typography
                    variant="h5"
                    sx={{
                      color: "white",
                      textTransform: "uppercase",
                      textAlign: "center",
                      fontFamily: "Kanit",
                      fontWeight: 900,
                      paddingTop: "20px",
                    }}
                  >
                    Hamim Choudhury
                  </Typography>

                  <Typography
                    variant="subtitle1"
                    sx={{
                      color: "white",
                      fontFamily: "Kanit",
                      textAlign: "center",
                      fontWeight: 400,
                      marginTop: "10px",
                      lineHeight: "24px",
                      wordWrap: "break-word",
                      wordBreak: "break-word",
                      maxWidth: "100%",
                    }}
                  >
                    A software engineer with a passion to develop projects, big
                    or small.
                  </Typography>
                </Box>

                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    gap: 3,
                    marginTop: "20px",
                  }}
                >
                  <Link
                    href="https://www.linkedin.com/in/hamimc/"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <LinkedInIcon sx={{ fontSize: "30px" }} />
                  </Link>

                  <Link
                    href="https://github.com/hamim23z"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <GitHubIcon sx={{ fontSize: "30px" }} />
                  </Link>

                  <Link
                    href="https://drive.google.com/file/d/1bP4svtLhOd14Z6ETjaB4nnav04BX9_EI/view?usp=sharing"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <FileCopyIcon sx={{ fontSize: "30px" }} />
                  </Link>

                  <Link
                    href="mailto:hamimc232@gmail.com"
                    target="_blank"
                    passHref
                    style={{
                      color: "white",
                      textDecoration: "none",
                    }}
                  >
                    <EmailIcon sx={{ fontSize: "30px" }} />
                  </Link>
                </Box>
              </Box>
            </Container>
          </Grid>

          {/* Right Section */}
          <Grid item xs={12} sm={8}>
            <Box
              sx={{ marginTop: "70px", paddingX: { xs: "10px", md: "50px" } }}
            >
              <Typography
                variant="h1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 900,
                  textTransform: "uppercase",
                  fontSize: { xs: "2rem", md: "3rem" },
                  textAlign: { xs: "center", md: "left" },
                  maxWidth: "800px",
                }}
              >
                Software Engineer
              </Typography>

              <Typography
                variant="subtitle1"
                sx={{
                  fontFamily: "Kanit",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  fontSize: { xs: "0.9rem", md: "1.2rem" },
                  lineHeight: { xs: "1.5", md: "1.8" },
                  textAlign: "left",
                  maxWidth: "1100px",
                  marginTop: "20px",
                }}
              >
                Hey! I&apos;m Hamim Choudhury, a Computer Science student at The
                City College of New York. My journey of coding started in middle
                school, where I took a computer course and used MIT&apos;s
                Scratch as my first language. <br></br> <br></br>And that is how
                my passion for coding began. I started off by building simple
                websites and I explored how to code myself. I now code on a
                regular basis, learning a multitude of languages and using them
                very often. <br></br> <br></br> I started off as a frontend
                engineer only, but have now become a full-stack engineer. I love
                to build projects that can solve real-world problems and ones
                that people will use on a regular basis.
              </Typography>

              <Box mt={4}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    maxWidth: "800px",
                    marginX: "auto",
                    flexDirection: { xs: "column", md: "row" },
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: { xs: "100%", md: "48%" },
                      marginBottom: { xs: "20px", md: "0" },
                    }}
                  >
                    <ProjectCard
                      brand={"Personal Project"}
                      date={"Currently Working On"}
                      cover={smart_study_logo}
                      logo={smart_study_logo}
                      title={"Smart Study"}
                    />
                  </Grid>

                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: { xs: "100%", md: "48%" },
                    }}
                  >
                    <ProjectCard
                      brand={"Personal Project"}
                      date={"Currently Working On"}
                      cover={smart_translate_logo}
                      logo={smart_translate_logo}
                      title={"Smart Translate"}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/*This is the second section on the right side. Projects section*/}
            <Box
              sx={{ marginTop: "70px", paddingX: { xs: "10px", md: "50px" } }}
            >
              <div id="projects">
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Kanit",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: "2rem", md: "3rem" },
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: "800px",
                  }}
                >
                  Personal Projects
                </Typography>
              </div>

              <Box mt={4} sx={{ maxWidth: "1100px" }}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    maxWidth: "100",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: { xs: "100%", md: "100%" },
                    }}
                  >
                    {/*First Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "550px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "50%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={smart_study_logo}
                            alt="Smart Study Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          CURRENT PROJECT | JavaScript, Next.js, React, MUI,
                          OpenAI, Firebase
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Smart Study
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Smart Study is a project that I began working on in
                          August. The purpose of this project is to serve as a
                          study website strictly for engineering students. Users
                          will be able to create flashcards, generate cards
                          using AI, watch videos, take quizzes, and much more.
                          The waitlist for Smart Study is live, click the button
                          to join!
                        </Typography>
                        <Link
                          href="https://smartstudycs.vercel.app/"
                          target="_blank"
                        >
                          <Button
                            sx={{
                              backgroundColor: "red",
                              borderRadius: 100,
                              paddingLeft: 3,
                              paddingRight: 3,
                              color: "#ffffff",
                              fontFamily: "Kanit",
                              marginLeft: "-5px",
                            }}
                          >
                            Read more
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    {/*Second Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "650px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "88%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={smart_translate_logo}
                            alt="Smart Translate Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          CURRENT PROJECT | JavaScript, Next.JS, React, MUI,
                          Google APIs
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Smart Translate
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Smart Translate is a project that I began working on
                          very recently. The purpose of this project is to serve
                          as a translation website for text, speech, and videos.
                          Users will be able to enter text, use their mic, or
                          input a YouTube video and then select a language for
                          it to be translated. There is no site or waitlist for
                          this project yet, but check out the GitHub repo below!
                        </Typography>
                        <Link
                          href="https://github.com/hamim23z/SmartTranslate-Main"
                          target="_blank"
                        >
                          <Button
                            sx={{
                              backgroundColor: "red",
                              borderRadius: 100,
                              paddingLeft: 3,
                              paddingRight: 3,
                              color: "#ffffff",
                              fontFamily: "Kanit",
                              marginLeft: "-5px",
                            }}
                          >
                            Read more
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    {/*Third Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "650px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "88%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={chronicleai_logo}
                            alt="ChronicleAI Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          August 2024 | JavaScript, Next.JS, React, MUI, OpenAI
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Chronicle AI
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          ChronicleAI is a project that me and my friends worked
                          on in August 2024, a lot of the project was completed
                          in August and we made minor tweaks after. The purpose
                          of this project is to serve as an AI chatbot for
                          Computer Science students. Users can ask anything CS
                          related . The project is completed, click the button
                          to check it out!
                        </Typography>
                        <Link
                          href="https://chronicle-ai-omega.vercel.app/"
                          target="_blank"
                        >
                          <Button
                            sx={{
                              backgroundColor: "red",
                              borderRadius: 100,
                              paddingLeft: 3,
                              paddingRight: 3,
                              color: "#ffffff",
                              fontFamily: "Kanit",
                              marginLeft: "-5px",
                            }}
                          >
                            Read more
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>

                    {/*Fourth Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "625px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "88%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={blizzardbot_logo}
                            alt="Blizzard Bot Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          January 2023 | Python, Discord.py
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Blizzard Bot
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Blizzard Bot is a Discord based bot that I worked on
                          early 2023 very frequently. The purpose of this
                          project was to allow users in Discord servers to
                          convert shoe sizes, check websites for bot security,
                          give information about which companies are the best.
                          This project is completed, click the button to check
                          it out!
                        </Typography>
                        <Link
                          href="https://github.com/hamim23z/BlizzardBot1"
                          target="_blank"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Button
                            sx={{
                              backgroundColor: "red",
                              borderRadius: 100,
                              paddingLeft: 3,
                              paddingRight: 3,
                              color: "#ffffff",
                              fontFamily: "Kanit",
                              marginLeft: "-5px",
                            }}
                          >
                            Read more
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/*This is the third section on the right side. Experience section*/}
            <Box
              sx={{ marginTop: "70px", paddingX: { xs: "10px", md: "50px" } }}
            >
              <div id="experience">
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Kanit",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: "2rem", md: "3rem" },
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: "800px",
                  }}
                >
                  Professional Experience
                </Typography>
              </div>

              <Box mt={4} sx={{ maxWidth: "1100px" }}>
                <Grid
                  container
                  spacing={4}
                  sx={{
                    maxWidth: "100",
                    flexDirection: { xs: "column", md: "row" },
                  }}
                >
                  <Grid
                    item
                    xs={12}
                    md={6}
                    sx={{
                      width: { xs: "100%", md: "100%" },
                    }}
                  >
                    {/*First Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "550px",
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "50%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={doris_logo}
                            alt="DORIS Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          July 2024 - Jan 2024 | NYC Department of Records
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Software Engineer Intern
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Developed a Python-based website monitoring system
                          using Docker and Azure, increasing uptime by 15% and
                          reducing false positives by 40% while enabling
                          proactive issue resolution for critical web services.
                          Created a custom script to compress PDF files
                          efficiently, reducing file sizes by 60% and improving
                          performance for web-based document delivery systems.
                          Led a redesign of the internal company website,
                          focusing on user-centric design principles to create a
                          more efficient and visually appealing platform.
                        </Typography>
                      </CardContent>
                    </Card>

                    {/*Second Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "670px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "88%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={nycddc_logo}
                            alt="DDC Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          June 2023 - Oct 2023 | NYC Department of Design and
                          Construction
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Software Engineer & IT Intern
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Developed and implemented a Python-based Hash File
                          system to efficiently identify Laptop device IDs,
                          reducing vulnerability assessment time and improving
                          overall responses. Managed a cross-functional team in
                          executing a major software system rollout, device
                          updates and software installations; resulting in a 25%
                          reduction in downtime. Led the identification of
                          vulnerabilities, performed repairs, updated hundreds
                          of devices, and deployed new software, alongside
                          creating user and support accounts on laptops and
                          mobile devices.
                        </Typography>
                      </CardContent>
                    </Card>

                    {/*Third Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "650px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "88%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={trademark_logo}
                            alt="Trademark Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          July 2021 - June 2023 | Trademark Services
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Sneaker Information Developer
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Designed a sophisticated multi-tiered Discord bot
                          using Python and JavaScript to provide instant updates
                          on sneaker and clothing releases, including essential
                          details like location and timing. Optimized the
                          software platform by integrating new features that led
                          to an increase in monthly subscriptions and improved
                          customer retention through valuable user insights.
                          Facilitated pull requests, code reviews, and stress
                          testing to ensure the quality of data throughout the
                          Software Development Life Cycle.
                        </Typography>
                      </CardContent>
                    </Card>

                    {/*Fourth Card*/}
                    <Card
                      sx={(theme) => ({
                        marginTop: theme.spacing(7),
                        borderRadius: theme.spacing(2),
                        transition: "all 0.3s ease-in-out",
                        position: "relative",
                        maxWidth: "100%",
                        overflow: "initial",
                        background: "#151312",
                        color: "white",
                        border: "1px solid white",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        paddingBottom: theme.spacing(2),
                        [theme.breakpoints.up("md")]: {
                          flexDirection: "row",
                          paddingTop: theme.spacing(2),
                        },
                        width: "100%",
                        height: "320px",
                        [theme.breakpoints.down("sm")]: {
                          height: "625px", // Increased height for smaller screens
                        },
                        "&:hover": {
                          transform: "translateY(-4px)",
                        },
                      })}
                    >
                      <Box
                        sx={(theme) => ({
                          width: "88%",
                          maxWidth: 300,
                          position: "relative",
                          marginTop: theme.spacing(-3),
                          aspectRatio: "1/1",
                          [theme.breakpoints.up("md")]: {
                            width: 300,
                            marginLeft: theme.spacing(-3),
                            marginTop: 0,
                            flexShrink: 0,
                          },
                        })}
                      >
                        <Box
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            width: "100%",
                            height: "100%",
                          }}
                        >
                          <Image
                            src={fyllan_logo}
                            alt="Fyllan Logo"
                            style={{
                              objectFit: "cover",
                              borderRadius: "150px",
                              background: "transparent",
                              width: "200px",
                              height: "200px",
                            }}
                          />
                        </Box>
                      </Box>
                      <CardContent>
                        <Typography
                          variant="overline"
                          sx={{
                            letterSpacing: "1px",
                            fontSize: 12,
                            marginBottom: "0.875em",
                            display: "inline-block",
                          }}
                        >
                          Oct 2020 - Feb 2021 | Fyllan
                        </Typography>
                        <Typography
                          variant="h5"
                          sx={{
                            fontWeight: "bold",
                            marginBottom: "0.35em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Web Development Intern
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            marginBottom: 2,
                            letterSpacing: "0.00938em",
                            fontFamily: "Kanit",
                          }}
                        >
                          Created an interactive reservation system with
                          real-time availability updates using JavaScript and
                          AJAX, leading to a 30% increase in online bookings for
                          Fyllan restaurants. Integrated third-party APIs using
                          JavaScript&apos;s fetch API, enhancing website
                          functionality with features like real-time restaurant
                          updates and social media feeds. Collaborated with
                          senior developers to design and implement interfaces,
                          merging feedback to refine the UI/UX.
                        </Typography>
                      </CardContent>
                    </Card>
                  </Grid>
                </Grid>
              </Box>
            </Box>

            {/*This is the fourth and final section on the right side. Tech Stack*/}
            <Box
              sx={{ marginTop: "70px", paddingX: { xs: "10px", md: "50px" } }}
            >
              <div id="tech_stack">
                <Typography
                  variant="h1"
                  sx={{
                    fontFamily: "Kanit",
                    fontWeight: 900,
                    textTransform: "uppercase",
                    fontSize: { xs: "2rem", md: "3rem" },
                    textAlign: { xs: "center", md: "left" },
                    maxWidth: "800px",
                  }}
                >
                  Tech Stack
                </Typography>
              </div>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
