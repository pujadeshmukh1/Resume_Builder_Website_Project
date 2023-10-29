import { Stack, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import EmailIcon from "@mui/icons-material/Email";
import { Box } from "@mui/system";
import Navbar from "../Components/Head_Part/Navbar";

export default function ButtonMUI() {
  return (
    <>
    
      <Navbar />
      <Stack p={{ xs: "15px", sm: "25px", md: "40px", lg: "60px " }}>
        <h2 className="template-header-title">Resume Builder</h2>
        <Stack

          className="midContainer"
          direction={{
            xs: "column-reverse",
            sm: "column-reverse",
            md: "column-reverse",
            lg: "row",
          }}

          spacing={{ xs: 1, sm: 2, md: 4 }}
          mt="20px">
          <Typography
            sx={{
              fontSize: {
                xs: "13px",
                sm: "15px",
                md: "17px",
                lg: "19px",
              },
              paddingRight: {
                xs: "15px",
                sm: "18px",
                lg: "25px",
              },
              textAlign: "justify"

            }}>
            Resume Builder offers free, HR-approved resume templates to help you
            create a professional resume in minutes. Choose from some of the selected templates that can land you to your dream job.
            Create an account to save your progress and multiple
            versions, plus download as a PDF.Resume Builder offers free,
            HR-approved resume templates to help you create a professional
            resume in minutes. Choose from several template options and even
            pre-populate a resume from your LinkedIn profile. Create an account
            to save your progress and multiple versions, plus download as a
            PDF.Resume Builder offers free, HR-approved resume templates to help
            you create a professional resume in minutes. Choose from several
            template options and even pre-populate a resume from your LinkedIn
            profile. Create an account to save your progress and multiple
            versions, plus download as a PDF.
          </Typography>
          <Stack>
            <img
              src="https://media.istockphoto.com/vectors/people-vector-illustration-flat-cartoon-character-landing-page-vector-id1137470880?k=20&m=1137470880&s=612x612&w=0&h=G12BhLwmpqRaSnBY0S9SiJ1Ia1Ao5PjrLX1Y98KZ1vE="
              alt="img"
            />
          </Stack>
        </Stack>
        <Box mt="25px">

          <Typography
            sx={{
              fontSize: {
                xs: "22px",
                sm: "25px",
                md: "27px",
                lg: "30px",
              },

              fontWeight: "400",
              color: "dark",
            }}>
            Share with your friends
          </Typography>
          <Box className="icons">
            <LinkedInIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <FacebookOutlinedIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="primary"
            />
            <WhatsAppIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="success"
            />
            <TwitterIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="info"
            />
            <EmailIcon
              sx={{ fontSize: "40px", paddingLeft: "15px" }}
              color="error"
            />
          </Box>
        </Box>
      </Stack>
    </>
  );
}
