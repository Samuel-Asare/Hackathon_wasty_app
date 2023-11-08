import * as React from "react";
import "../../css/Request_Page.css";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import UserInformation from "./UserInformation";
import WasteInformation from "./WasteInformation";
import ReviewRequest from "./ReviewRequest";

// .........................

const steps = ["User Details", "Waste details", "Review your Details"];

function getStepContent(step) {
  switch (step) {
    case 0:
      return <UserInformation />;
    case 1:
      return <WasteInformation />;
    case 2:
      return <ReviewRequest />;
    default:
      throw new Error("Unknown step");
  }
}

export default function Checkout() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep(activeStep + 1);
  };

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const handleSubmit = async () => {
    setActiveStep(activeStep + 1);
  };

  return (
    <div className="form_wrapper">
      <div className="booking">
        {/* ALERT */}
        {alert === true && (
          <div className="alert alert-danger" role="alert">
            Required Field Is Empty
          </div>
        )}
        {/* END ALERT */}
        <React.Fragment>
          <CssBaseline />
          <Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Paper
              variant="outlined"
              sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}
              className="connect_glassy_div"
            >
              <Typography component="h1" variant="h4" align="center">
                Request For Service
              </Typography>
              <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
                {steps.map((label) => (
                  <Step key={label}>
                    <StepLabel>{label}</StepLabel>
                  </Step>
                ))}
              </Stepper>
              {activeStep === steps.length ? (
                <React.Fragment>
                  <Typography variant="h5" gutterBottom>
                    Thank you for requesting our service 👍
                  </Typography>
                  <Typography variant="subtitle1">
                    Your waste collection request has been successfully
                    submitted. We have sent you a confirmation email. Thank you
                    for using our service!
                  </Typography>
                </React.Fragment>
              ) : (
                <React.Fragment>
                  {getStepContent(activeStep)}
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    {activeStep !== 0 && (
                      <Button onClick={handleBack} sx={{ mt: 3, ml: 1 }}>
                        Back
                      </Button>
                    )}

                    {activeStep === steps.length - 1 ? (
                      <Button
                        variant="contained"
                        sx={{ mt: 3, ml: 1 }}
                        onClick={handleSubmit}
                      >
                        Request Now
                      </Button>
                    ) : (
                      <Button
                        variant="contained"
                        onClick={handleNext}
                        sx={{ mt: 3, ml: 1 }}
                      >
                        Next
                      </Button>
                    )}
                  </Box>
                </React.Fragment>
              )}
            </Paper>
          </Container>
        </React.Fragment>
      </div>
    </div>
  );
}
