import React from "react";
import { Box, Grid, Typography, Paper } from "@mui/material";
import {
    SiMysql,
    SiFirebase,
    SiOpenai,
} from "react-icons/si";

export function TechStack3() {
  // Tech stack data
  const techStack = [
    { name: "SQL", icon: <SiMysql size={40} />, color: "#4479A1" },
    { name: "OpenAI", icon: <SiOpenai size={40} />, color: "#412991" },
    { name: "Firebase", icon: <SiFirebase size={40} />, color: "#FFCA28" },
  ];

  return (
    <Box
      sx={{
        marginTop: "50px",
        padding: "20px",
        textAlign: "center",
        backgroundColor: "#151312",
        borderRadius: "10px",
      }}
    >
      <Grid container spacing={4} justifyContent="center">
        {techStack.map((tech, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <Paper
              elevation={3}
              sx={{
                padding: "20px",
                textAlign: "center",
                backgroundColor: "#151312",
                borderRadius: "10px",
                border: "1px solid #fff",
                color: "white",
                transition: "transform 0.3s",
                "&:hover": {
                  transform: "scale(1.1)",
                },
              }}
            >
              <Box
                sx={{
                  color: tech.color,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                {tech.icon}
              </Box>
              <Typography variant="body1" sx={{ fontWeight: 600 }}>
                {tech.name}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}