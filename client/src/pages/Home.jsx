import { useContext, useEffect } from "react";
import TextField from "@mui/material/TextField";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";

import JobItem from "./JobItem";

import AuthContext from "../context/auth/AuthContext";

function Home() {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
  }, []);

  return (
    <div>
      <h3>Job Description</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <h3>Location</h3>
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <FormGroup>
        <FormControlLabel
          control={<Checkbox defaultChecked />}
          label="Full Time Only"
        />
      </FormGroup>
      <Button variant="contained">Search</Button>
      {authContext.user.map((job) => (
        <JobItem key={job.id} job={job} />
      ))}
    </div>
  );
}

export default Home;
