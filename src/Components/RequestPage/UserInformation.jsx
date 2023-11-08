import "../../css/Request_Page.css";
import * as React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

export default function UserInformation() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                User Request Details
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="firstName"
                        name="firstName"
                        label="First name"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="lastName"
                        name="lastName"
                        label="Last name"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="phone_number"
                        name="Phone Number"
                        label="Phone Number"
                        // value={state.phone}
                        fullWidth
                        variant="standard"
                        inputProps={{ type: "tel", pattern: "^0\\d{9}$" }}
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="town"
                        name="town"
                        label="Town"
                        fullWidth
                        variant="standard"
                    />
                </Grid>
                <Grid item xs={12} sm={6}>
                    <TextField
                        required
                        id="landmark"
                        name="landmark"
                        label="Landmark"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12} sm={6}>
                    <TextField
                        id="additional_information"
                        name="additional_information"
                        label="Additional Information"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                name="saveAddress"
                                required
                            />
                        }
                        label="I provided the right information"
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
