import React, { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";

const ComplimentaryGuide = () => {
  const [open, setOpen] = useState(false);
  const [form, setForm] = useState({ name: "", email: "" });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: handle form submission (API call, etc.)
    handleClose();
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgcolor="rgba(40,30,20,0.7)"
      borderRadius={3}
      boxShadow={4}
      maxWidth={1200}
      gap={5}
      p={{ xs: 2, md: 8 }}
      flexDirection={{ xs: "column", md: "row" }}
    >
      <Box flex={1} display="flex" justifyContent="center" alignItems="center">
        <img
          src={require("../../assets/images/books.webp")}
          alt="Step-by-step guide to start building your dream home"
          style={{
            maxWidth: 450,
            borderRadius: 16,
            boxShadow: "0 4px 16px rgba(0,0,0,0.2)",
            width: "100%",
            height: "auto",
          }}
        />
      </Box>
      <Box
        flex={1}
        color="#fff"
        display="flex"
        flexDirection="column"
        alignItems="center"
        textAlign="center"
        gap={2}
        maxWidth={500}
      >
        <Typography variant="h4" fontWeight={600} color="#f5d6b4" gutterBottom>
          Please Accept Our Complimentary Guide
        </Typography>
        <Typography variant="h6" fontWeight={700} color="#fff" gutterBottom>
          The Simplified Roadmap To Get Your Dream Home Started
        </Typography>
        <Typography variant="body1" color="#e0e0e0" mb={2}>
          Discover the 5 Simplified Steps Every Homeowner Needs to Know Before Breaking Ground
        </Typography>
        <Button
          variant="contained"
          sx={{
            background: "#ffc178",
            color: "#3a2c1a",
            fontWeight: 700,
            fontSize: "1.2rem",
            px: 4,
            py: 2,
            borderRadius: 2,
            mt: 2,
            mb: 1,
            "&:hover": { background: "#ffb347" },
          }}
          onClick={handleOpen}
        >
          Click Here For FREE Download
        </Button>
      </Box>

      <Dialog open={open} onClose={handleClose} fullScreen={fullScreen} maxWidth="sm" fullWidth>
        <DialogTitle sx={{ textAlign: "center", fontWeight: 700, fontSize: "2rem" }}>
          Where should we send you your <span style={{ color: "#800000" }}>FREE Guide?</span>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" flexDirection="column" alignItems="center" gap={2} mt={1}>
            <Typography variant="subtitle1" color="text.secondary" textAlign="center" mb={2}>
              Fill Up Your Name And Email Below To Get The Free Guide Delivered To Your Inbox In Just 60 Sec
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              width="100%"
              display="flex"
              flexDirection="column"
              gap={2}
            >
              <TextField
                label="First Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
              />
              <TextField
                label="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                type="email"
              />
              <Button
                type="submit"
                variant="contained"
                fullWidth
                sx={{
                  background: "#800000",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: "1.4rem",
                  py: 1.5,
                  mt: 2,
                  "&:hover": { background: "#a00000" },
                }}
              >
                Send Me My FREE Guide
              </Button>
            </Box>
          </Box>
        </DialogContent>
      </Dialog>
    </Box>
  );
};

export default ComplimentaryGuide;