import { Button, Container, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import Excels from "./Excels";
import data from "../dbReponse.json";

const Ui = () => {
  const [reportCode, setReportCode] = useState("");
  const [excels, setExcels] = useState([]);
  console.log(data);
  const handleAddExcel = () => {
    setExcels([...excels, {}]);
  };

  const handleDeleteExcel = (index) => {
    setExcels(excels.filter((_, i) => i !== index));
  };

  useEffect(() => {
    if (data?.reportCode) {
      setReportCode(data.reportCode);
    }
    if (data?.excels) {
      setExcels(data.excels);
    }
  }, []);
  return (
    <Container maxWidth='xl' sx={{ backgroundColor: "#FFF7F1" }}>
      <TextField
        id='outlined-basic'
        label='Report Code'
        variant='outlined'
        placeholder='Report Code'
        sx={{ marginRight: "10px" }}
        value={reportCode}
        onChange={(e) => setReportCode(e.target.value)}
      />
      <Button variant='contained' onClick={handleAddExcel}>
        Add Excel
      </Button>
      <Container sx={{ backgroundColor: "#BBE2EC" }} maxWidth='xl'>
        {excels &&
          excels.map((excel, index) => (
            <Excels
              handleDelete={() => handleDeleteExcel(index)}
              key={index}
              data={excel}
            />
          ))}
      </Container>
    </Container>
  );
};

export default Ui;
