import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Sheet from "./Sheet";

const Excels = ({ handleDelete }) => {
  const [excelCode, setExcelCode] = useState("");
  const [excelName, setExcelName] = useState("");
  const [sheet, setSheet] = useState([]);

  const handleAddSheet = () => {
    setSheet([...sheet, {}]);
  };

  const handleDeleteSheet = (index) => {
    setSheet(sheet.filter((_, i) => i !== index));
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: "#D4E7C5",
        }}
      >
        <Container
          maxWidth='xl'
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <TextField
              id='outlined-basic'
              label='Excel Code'
              variant='filled'
              placeholder='Excel Code'
              sx={{ marginRight: "25px" }}
              value={excelCode}
              onChange={(e) => setExcelCode(e.target.value)}
            />
            <TextField
              id='outlined-basic'
              label='Excel Name'
              variant='filled'
              placeholder='Excel Name'
              sx={{ marginRight: "25px" }}
              value={excelName}
              onChange={(e) => setExcelName(e.target.value)}
            />
            <Button variant='contained' onClick={handleAddSheet}>
              Add Sheet
            </Button>
          </Box>
          <IconButton aria-label='delete' onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Container>

        <Container
          sx={{
            backgroundColor: "#D4E7C5",
          }}
          maxWidth='xl'
        >
          {sheet.map((s, index) => (
            <Sheet key={index} handleDelete={() => handleDeleteSheet(index)} />
          ))}
        </Container>
      </Box>
    </>
  );
};

export default Excels;
