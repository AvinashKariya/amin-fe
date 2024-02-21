import { Box, Button, Container, IconButton, TextField } from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import Component from "./Component";

const Sheet = ({ handleDelete }) => {
  const [sheetCode, setSheetCode] = useState("");
  const [sheetName, setSheetName] = useState("");
  const [component, setComponents] = useState([]);

  const handleAddComponent = () => {
    setComponents([...component, {}]);
  };

  const handleDeleteComponent = (index) => {
    setComponents(component.filter((_, i) => i !== index));
  };
  return (
    <>
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
            label='Sheet Code'
            variant='filled'
            placeholder='Sheet Code'
            sx={{ marginRight: "25px" }}
            value={sheetCode}
            onChange={(e) => setSheetCode(e.target.value)}
          />
          <TextField
            id='outlined-basic'
            label='Sheet Name'
            variant='filled'
            placeholder='Sheet Name'
            sx={{ marginRight: "25px" }}
            value={sheetName}
            onChange={(e) => setSheetName(e.target.value)}
          />
          <Button variant='contained' onClick={handleAddComponent}>
            Add Component
          </Button>
        </Box>
        <IconButton aria-label='delete' onClick={handleDelete}>
          <DeleteIcon />
        </IconButton>
      </Container>
      <Container
        sx={{
          backgroundColor: "#BBE2EC",
        }}
      >
        {component.map((s, index) => (
          <Component
            key={index}
            handleDelete={() => handleDeleteComponent(index)}
          />
        ))}
      </Container>
    </>
  );
};

export default Sheet;
