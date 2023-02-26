import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import ThumbUpOffAltIcon from "@mui/icons-material/ThumbUpOffAlt";
import {
  Chip,
  Dialog,
  DialogContent,
  Divider,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

import axios from "axios";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDialogContent-root": {
      padding: 0, // remove padding from the DialogContent component
    },
  },
  notchedOutline: {
    borderWidth: "1px",
    // borderColor: Colors.blue,
  },
}));

export default function ImgCard({ image }) {
  const classes = useStyles();
  const theme = useTheme();

  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [open, setOpen] = React.useState(false);
  const [singleImage, setSingleImage] = React.useState();

  const [darkMode, setDarkMode] = React.useState(
    localStorage.getItem("darkmode")
      ? localStorage.getItem("darkmode") == "true"
      : false
  );
  React.useEffect(() => {
    setInterval(() => {
      setDarkMode(
        localStorage.getItem("darkmode")
          ? localStorage.getItem("darkmode") == "true"
          : false
      );
    }, 100);
  });

  const handleClickOpen = (id) => {
    axios
      .get("https://api.unsplash.com/photos/" + id, {
        headers: {
          Authorization: "Client-ID " + process.env.REACT_APP_UNSPLASH_API_KEY,
        },
      })
      .then((res) => {
        setSingleImage(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    setOpen(true);
  };

  return (
    <>
      <Card
        sx={{
          height: "auto",
          borderRadius: 3,
          backgroundColor: darkMode ? "#141414" : "#E5E5E5",
          color: darkMode ? "#E5E5E5" : " #4F4F4F",
        }}
        onClick={() => handleClickOpen(image.id)}
      >
        <CardMedia
          component="img"
          // height={image.height}
          image={image.urls.small}
          alt="Paella dish"
        />
        <CardHeader
          avatar={
            <Avatar alt="Remy Sharp" src={image.user.profile_image.medium} />
          }
          style={{ textAlign: "left" }}
          action={
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexWrap: "wrap",
                padding: "0.7rem",
              }}
            >
              <ThumbUpOffAltIcon style={{ alignItems: "center" }} />
              <span style={{ alignItems: "center", textAlign: "center" }}>
                {" "}
                {image.likes}K
              </span>
            </div>
          }
          subheaderTypographyProps={{
            color: "#A7A7A7",
          }}
          title={image.user.name}
          subheader={`@${image.user.username}`}
        />
      </Card>
      {singleImage && (
        <Dialog
          fullWidth
          style={{ zIndex: 1302 }}
          open={open}
          fullScreen={matchesSM}
          onClose={() => setOpen(false)}
          classes={{ root: classes.root }}
          PaperProps={{
            style: {
              // padding: 0
              // backgroundColor: darkTheme ? "#171C28" : "#FFFFFF",
              // paddingTop: matchesXS ? "1em" : "5em",
              // paddingBottom: matchesXS ? "1em" : "5em",
              // paddingLeft: matchesSM ? 0 : matchesMD ? "5em" : "15em",
              // paddingRight: matchesSM ? 0 : matchesMD ? "5em" : "15em",
            },
          }}
        >
          <DialogContent>
            <Card>
              <CardMedia
                component="img"
                width="100%"
                height="400px"
                style={{ objectFit: "cover" }}
                // height={image.height}
                image={singleImage && singleImage.urls.small}
                alt="Paella dish"
              />
              <CardHeader
                avatar={
                  <Avatar
                    alt="Remy Sharp"
                    src={singleImage && singleImage.user.profile_image.medium}
                  />
                }
                style={{ textAlign: "left" }}
                action={
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexWrap: "wrap",
                      textAlign: "center",
                    }}
                  >
                    <span style={{ marginRight: "1rem" }}>
                      {singleImage && singleImage.downloads} Downloads
                    </span>
                    <ThumbUpOffAltIcon />
                    <span> {singleImage && singleImage.likes}K</span>
                  </div>
                }
                title={image.user.name}
                subheader={`@${image.user.username}`}
              />
              <Divider />
              <CardContent>
                <div style={{ padding: "0px 0px" }}>
                  {singleImage.user.social?.instagram_username && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        //  justifyContent: "center",
                        flexWrap: "wrap",
                        //  textAlign: "center",
                      }}
                    >
                      <InstagramIcon />
                      <Typography
                        style={{ marginLeft: "0.5rem" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {singleImage &&
                          singleImage.user.social.instagram_username}
                      </Typography>
                    </div>
                  )}
                  {singleImage.user.social?.twitter_username && (
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        //  justifyContent: "center",
                        flexWrap: "wrap",
                        //  textAlign: "center",
                      }}
                    >
                      <TwitterIcon />
                      <Typography
                        style={{ marginLeft: "0.5rem" }}
                        variant="body2"
                        color="text.secondary"
                      >
                        {singleImage &&
                          singleImage.user.social.twitter_username}
                      </Typography>
                    </div>
                  )}
                  {singleImage.user.social?.portfolio_url && (
                    <Typography variant="body2" color="text.secondary">
                      Portfolio:{" "}
                      {singleImage && singleImage.user.social.portfolio_url}
                    </Typography>
                  )}
                </div>
                <Divider style={{ marginTop: "1rem" }} />
              </CardContent>
              <CardContent>
                {singleImage.tags.length > 0 && (
                  <div>
                    <br />
                    <Typography variant="body2" color="text.secondary">
                      Related Tags
                    </Typography>
                    <div
                      style={{
                        marginBottom: "20px",
                        marginRight: 20,
                        marginTop: 20,
                        width: "fit-content",

                        // spacing:3
                      }}
                    >
                      {singleImage.tags.map((elm) => {
                        return <Chip label={elm.title} sx={{ margin: 0.8 }} />;
                      })}
                    </div>
                    <br />
                  </div>
                )}
              </CardContent>
            </Card>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}
