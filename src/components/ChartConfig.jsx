import { Container, IconButton, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

const ChartConfig = ({ handleDelete, data }) => {
  const [cat, setCat] = useState("");
  const [val, setVal] = useState("");
  const [chartTitle, setChartTitle] = useState("");
  const [ref, setRef] = useState("");
  // console.log(data);
  useEffect(() => {
    setCat(data.category);
    setVal(data.values);
    setChartTitle(data.chartTitle);
    setRef(data.referenceComponentCode);
  }, []);
  return (
    <Container maxWidth='xl' sx={{}}>
      <TextField
        id='outlined-basic'
        label='Category'
        variant='filled'
        placeholder='Category'
        sx={{ marginRight: "25px" }}
        value={cat}
        onChange={(e) => setCat(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Value'
        variant='filled'
        placeholder='Value'
        sx={{ marginRight: "25px" }}
        value={val}
        onChange={(e) => setVal(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Chart Title'
        variant='filled'
        placeholder='Chart Title'
        sx={{ marginRight: "25px" }}
        value={chartTitle}
        onChange={(e) => setChartTitle(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Comp Ref Code'
        variant='filled'
        placeholder='Comp Ref Code'
        sx={{ marginRight: "25px" }}
        value={ref}
        onChange={(e) => setRef(e.target.value)}
      />
      <IconButton aria-label='delete' onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Container>
  );
};

export default ChartConfig;
