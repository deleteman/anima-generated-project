import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";

export const Cover = () => {
  const projects = [
    {
      title: "Task Manager Pro",
      description: "JavaScript, Local Storage",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/rectangle-1181@2x.png",
    },
    {
      title: "Modern Calculator",
      description: "HTML5, CSS3, Grid Layout",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/rectangle-1181-1@2x.png",
    },
    {
      title: "Weather API",
      description: "Node.js, RESTful API",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/rectangle-1181-2@2x.png",
    },
    {
      title: "Cloud Solutions",
      description: "AWS, Infrastructure",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/rectangle-1181-3@2x.png",
    },
    {
      title: "Open Source",
      description: "Contributions, Projects",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/rectangle-1181-4@2x.png",
    },
    {
      title: "Tech Leadership",
      description: "Team Management",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/rectangle-1181-5@2x.png",
    },
  ];

  const skills = [
    {
      title: "Backend Development",
      description: "Expert in Node.js, Python, and various backend technologies with 20 years of experience",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/skills-card-icon.svg",
    },
    {
      title: "System Architecture",
      description: "Designing scalable and maintainable software systems",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/skills-card-icon-1.svg",
    },
    {
      title: "Tech Leadership",
      description: "Leading development teams and managing technical projects",
      imgSrc: "/img/skills-card-icon.png",
    },
    {
      title: "Cloud Computing",
      description: "AWS certified with extensive experience in cloud architecture",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/skills-card-icon-2.svg",
    },
    {
      title: "Technical Writing",
      description: "Published author of technical books and articles",
      imgSrc: "/img/image.png",
    },
    {
      title: "API Design",
      description: "Creating robust and scalable API architectures",
      imgSrc: "https://c.animaapp.com/f4vO4wlV/img/skills-card-icon-3.svg",
    },
    {
      title: "DevOps",
      description: "Implementing CI/CD pipelines and infrastructure automation",
      imgSrc: "/img/skills-card-icon-2.png",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: "#3b3b3b",
        display: "flex",
        justifyContent: "flex-start",
        width: "100%",
        minWidth: 1800,
        overflowX: "auto"
      }}
    >
      <Box
        sx={{
          backgroundColor: "#3b3b3b",
          width: 1800,
          height: 960,
          position: "relative",
        }}
      >
        <Box
          sx={{
            width: 619,
            height: 532,
            top: 439,
            left: 636,
            position: "absolute",
            backgroundColor: "white",
            transform: "rotate(-0.15deg)",
            padding: "20px",
            overflow: "hidden"
          }}
        >
          <Typography
            variant="h2"
            sx={{
              position: "absolute",
              top: 6,
              left: 263,
              color: "#2d2d2d",
              textAlign: "center",
            }}
          >
            Latest work
          </Typography>
          <Grid
            container
            spacing={2}
            sx={{ 
              position: "absolute", 
              top: 72, 
              left: 12,
              maxHeight: "calc(100% - 80px)",
              overflowY: "auto",
              padding: "0 10px"
            }}
          >
            {projects.map((project, index) => (
              <Grid item xs={4} key={index}>
                <Card 
                  sx={{ 
                    height: "auto",
                    minHeight: 180,
                    maxHeight: 200,
                    display: "flex",
                    flexDirection: "column",
                    marginBottom: 1
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.imgSrc}
                    alt="Rectangle"
                    sx={{
                      width: "100%",
                      height: 120,
                      objectFit: "cover"
                    }}
                  />
                  <CardContent sx={{ padding: "8px !important" }}>
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        color: "#2d2d2d",
                        fontSize: "14px",
                        lineHeight: "1.2"
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        color: "#2d2d2d",
                        fontSize: "12px",
                        lineHeight: "1.2"
                      }}
                    >
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            width: 617,
            alignItems: "center",
            justifyContent: "end",
            gap: 2,
            padding: 2,
            position: "absolute",
            top: 88,
            left: 635,
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              minWidth: 201.5,
              maxWidth: 390.41,
              alignItems: "start",
              gap: 2,
              flex: 1,
            }}
          >
            <Typography variant="subtitle1" sx={{ color: "black" }}>
              Software Development | Tech Leadership
            </Typography>
            <Typography variant="h1" sx={{ color: "black" }}>
              Fernando Doglio
            </Typography>
            <Typography variant="body1" sx={{ color: "black" }}>
              Software developer with 20 years of experience in building scalable applications and leading development teams.{" "}
              <br />
              Specialized in Node.js, Cloud Architecture, and API Design.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              href="mailto:fernando@example.com"
              target="_blank"
              sx={{ backgroundColor: "#2d2d2d" }}
            >
              Contact
            </Button>
          </Box>
          <CardMedia
            component="img"
            image="https://c.animaapp.com/f4vO4wlV/img/headerimage-1@2x.png"
            alt="Headerimage"
            sx={{ minWidth: 201.5, maxWidth: 302.25, height: 226.69, flex: 1 }}
          />
        </Box>

        <Box
          sx={{
            width: 818,
            padding: 2,
            position: "absolute",
            top: 88,
            left: 1282,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            {skills.slice(0, 3).map((skill, index) => (
              <Grid item xs={4} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    backgroundColor: "white",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={skill.imgSrc}
                    alt="Skills card icon"
                    sx={{ width: 59.87, height: 59.87 }}
                  />
                  <CardContent sx={{ padding: 0, textAlign: "center" }}>
                    <Typography variant="h3" sx={{ color: "black" }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "black" }}>
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            width: 818,
            padding: 2,
            position: "absolute",
            top: 367,
            left: 1282,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            backgroundColor: "white",
          }}
        >
          <Grid container spacing={2} sx={{ width: "100%" }}>
            {skills.slice(3, 5).map((skill, index) => (
              <Grid item xs={6} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    padding: 2,
                    backgroundColor: "white",
                  }}
                >
                  <CardMedia
                    component="img"
                    image={skill.imgSrc}
                    alt="Skills card icon"
                    sx={{ width: 30.9, height: 30.9 }}
                  />
                  <CardContent sx={{ padding: 0, textAlign: "center" }}>
                    <Typography variant="h3" sx={{ color: "black" }}>
                      {skill.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "black" }}>
                      {skill.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box
          sx={{
            width: 818,
            padding: 2,
            position: "absolute",
            top: 689,
            left: 1282,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
            backgroundColor: "white",
          }}
        >
          <Typography variant="h2" sx={{ color: "black", textAlign: "center" }}>
            Latest work
          </Typography>
          <Grid container spacing={2} sx={{ width: "100%" }}>
            {projects.slice(0, 6).map((project, index) => (
              <Grid item xs={4} key={index}>
                <Card
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    gap: 1,
                  }}
                >
                  <CardMedia
                    component="img"
                    image={project.imgSrc}
                    alt="Image"
                    sx={{ width: "100%", height: 159.33, objectFit: "cover" }}
                  />
                  <CardContent sx={{ padding: 0 }}>
                    <Typography variant="subtitle1" sx={{ color: "black" }}>
                      {project.title}
                    </Typography>
                    <Typography variant="body1" sx={{ color: "black" }}>
                      {project.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <CardMedia
          component="img"
          image="https://c.animaapp.com/f4vO4wlV/img/line-1.svg"
          alt="Line"
          sx={{
            width: 422,
            height: 1,
            position: "absolute",
            top: 356,
            left: 20,
          }}
        />

        <CardMedia
          component="img"
          image="https://c.animaapp.com/f4vO4wlV/img/group@2x.png"
          alt="Group"
          sx={{
            width: 274,
            height: 72,
            position: "absolute",
            top: 786,
            left: 86,
            zIndex: 1
          }}
        />

        <Typography
          variant="h1"
          sx={{ position: "absolute", top: 101, left: 20, color: "white" }}
        >
          Senior Software<br />
          Developer
        </Typography>

        <Typography
          variant="h2"
          sx={{ 
            position: "absolute", 
            top: 429, 
            left: 20, 
            color: "white",
            maxWidth: "400px",
            lineHeight: "1.2",
            backgroundColor: "#3b3b3b",
            padding: "10px 20px 10px 0",
            zIndex: 2
          }}
        >
          20 Years of<br />
          Development Excellence
        </Typography>
      </Box>
    </Box>
  );
};
