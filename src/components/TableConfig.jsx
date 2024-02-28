import {
  Checkbox,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { fontColors } from "../utils";

const TableConfig = ({ handleDelete, data }) => {
  const [col, setCol] = useState("");
  const [dbcol, setDbcol] = useState("");
  const [formula, setFormula] = useState("");
  const [fstyle, setFstyle] = useState("");
  const [fsize, setFsize] = useState("");
  const [fcolor, setFcolor] = useState("");
  const [isBold, setIsBold] = useState(false);
  // console.log(data);
  const handleFstyle = (e) => {
    setFstyle(e.target.value);
  };

  const handleFsize = (e) => {
    setFsize(e.target.value);
  };

  const handleFcolor = (e) => {
    setFcolor(e.target.value);
  };

  useEffect(() => {
    setCol(data.columnName);
    setDbcol(data.dbColumnName);
    setFcolor(data.cellStyle.bgColor || "");
    setFormula(data.cellFormula || "");
    setFsize(data.cellStyle.size);
    setFstyle(data.cellStyle.font.toLowerCase());
    if (data.cellStyle.bold === "true") {
      setIsBold(true);
    }
  }, []);
  return (
    <Container maxWidth='xl' sx={{}}>
      <TextField
        id='outlined-basic'
        label='Col name'
        variant='filled'
        placeholder='Category'
        sx={{ marginRight: "25px" }}
        value={col}
        onChange={(e) => setCol(e.target.value)}
      />
      <Checkbox onClick={(e) => console.log(e)} checked={isBold} />
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id='type-src'>Font Style</InputLabel>
        <Select
          labelId='type-src'
          id='srctype'
          value={fstyle}
          label='Font Style'
          onChange={handleFstyle}
        >
          <MenuItem value='calibari'>Calibari</MenuItem>
          <MenuItem value='arial'>Arial</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id='type-src'>Font Size</InputLabel>
        <Select
          labelId='type-src'
          id='srctype'
          value={fsize}
          label='Font Style'
          onChange={handleFsize}
        >
          <MenuItem value='8'>8</MenuItem>
          <MenuItem value='10'>10</MenuItem>
          <MenuItem value='12'>12</MenuItem>
          <MenuItem value='14'>14</MenuItem>
          <MenuItem value='16'>16</MenuItem>
        </Select>
      </FormControl>
      <FormControl sx={{ width: "200px" }}>
        <InputLabel id='type-src'>Font Color</InputLabel>
        <Select
          labelId='type-src'
          id='srctype'
          value={fcolor}
          label='Font Style'
          onChange={handleFcolor}
        >
          {fontColors.map((col, i) => (
            <MenuItem value={col} key={i}>
              {col}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <TextField
        id='outlined-basic'
        label='DB Col Name'
        variant='filled'
        placeholder='DB Col Name'
        sx={{ marginRight: "25px" }}
        value={dbcol}
        onChange={(e) => setDbcol(e.target.value)}
      />
      <TextField
        id='outlined-basic'
        label='Cell Formula'
        variant='filled'
        placeholder='Cell Formula'
        sx={{ marginRight: "25px" }}
        value={formula}
        onChange={(e) => setFormula(e.target.value)}
      />
      <IconButton aria-label='delete' onClick={handleDelete}>
        <DeleteIcon />
      </IconButton>
    </Container>
  );
};

export default TableConfig;
