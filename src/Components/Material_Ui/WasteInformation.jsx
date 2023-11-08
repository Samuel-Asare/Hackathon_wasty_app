import * as React from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import { FormControl, InputLabel, Select } from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
// import DateTime from "./DataTimePicker";
import "../../css/Request_Page.css";

export default function WasteInformation() {
    return (
        <React.Fragment>
            <Typography variant="h6" gutterBottom>
                Waste Information
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="phone_number">
                            Waste Type
                        </InputLabel>
                        <Select
                            required
                            native
                            inputProps={{
                                name: "waste_type",
                                id: "waste_typer",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="General_Household_Waste">
                                General Household Waste
                            </option>
                            <option value="Recyclables ">
                                Recyclables (Plastic, Paper, Glass, etc.)
                            </option>
                            a
                            <option value="Hazardous_Waste ">
                                Hazardous Waste (Chemicals, Batteries, etc.)
                            </option>
                            <option value="Organic_Waste ">
                                Organic Waste (Food, Yard Waste, etc.)
                            </option>
                            {/* Add more options as needed */}
                        </Select>
                    </FormControl>
                </Grid>
                <Grid item xs={12} md={6}>
                    <TextField
                        required
                        id="quantityOfBins"
                        label="Number Of Bins"
                        fullWidth
                        autoComplete="QuantityOfBins"
                        variant="standard"
                        // type="number"
                        // onChange={handleQuantity_Of_BinsChange}
                        // value={state.quantityOfBins}
                        type="number"
                    />
                </Grid>
                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="phone_number">
                            Service Options
                        </InputLabel>
                        <Select
                            required
                            native
                            inputProps={{
                                name: "service_option",
                                id: "service_option",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="Regular_Pickup">
                                Regular Pickup (Scheduled Service)
                            </option>
                            <option value=" One-time_Pickup ">
                                One-time Pickup
                            </option>
                        </Select>
                    </FormControl>
                </Grid>

                <Grid item xs={12} md={6}>
                    <FormControl fullWidth variant="standard">
                        <InputLabel htmlFor="phone_number">
                            Bulky items for collection?
                        </InputLabel>
                        <Select
                            required
                            native
                            inputProps={{
                                name: "bulky_items",
                                id: "bulky_items",
                            }}
                        >
                            <option aria-label="None" value="" />
                            <option value="Regular_Pickup">Yes</option>
                            <option value=" One-time_Pickup ">No</option>
                        </Select>
                    </FormControl>
                </Grid>

                {/* time and date */}
                {/* <Grid item xs={12} md={12}>
                    <DateTime />
                </Grid> */}

                <Grid item xs={12} sm={12}>
                    <TextField
                        id="request"
                        name="request"
                        label="Request"
                        fullWidth
                        variant="standard"
                    />
                </Grid>

                {/* check box */}
                <Grid item xs={12}>
                    <FormControlLabel
                        control={
                            <Checkbox
                                color="primary"
                                name="saveCard"
                                value="yes"
                                required
                            />
                        }
                        label="I agree to the terms and conditions of the service."
                    />
                </Grid>
            </Grid>
        </React.Fragment>
    );
}
