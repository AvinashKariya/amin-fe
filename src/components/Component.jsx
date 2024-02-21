import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { typeOfComponent } from "../utils";
import TableConfig from "./TableConfig";
import ChartConfig from "./ChartConfig";
const Component = ({ handleDelete }) => {
  const [compCode, setCompCode] = useState("");
  const [dbName, setDbName] = useState("");
  const [compType, setCompType] = React.useState("");
  const [src, setSrc] = React.useState("");
  const [isTable, setIsTable] = useState(false);
  const [isDb, setIsDb] = useState(false);
  const [isApi, setIsApi] = useState(false);
  const [tableConfig, setTableConfig] = useState([]);
  const [chartConfig, setChartConfig] = useState([]);

  const handleCompTypeChange = (event) => {
    setCompType(event.target.value);
    if (event.target.value === "TABLE") {
      setIsTable(true);
    } else {
      setIsTable(false);
      setIsApi(false);
      setIsDb(false);
    }
  };
  const handleSrcChange = (event) => {
    setSrc(event.target.value);
    if (event.target.value === "db") {
      setIsDb(true);
      setIsApi(false);
    } else if (event.target.value === "api") {
      setIsApi(true);
      setIsDb(false);
    }
  };

  const handleAddConfig = () => {
    if (isTable) {
      setTableConfig([...tableConfig, {}]);
    } else if (!isTable) {
      setChartConfig([...chartConfig, {}]);
    }
  };

  const handleDeleteComponent = (index) => {
    if (isTable) {
      setTableConfig(tableConfig.filter((_, i) => i !== index));
    } else if (!isTable) {
      setChartConfig(chartConfig.filter((_, i) => i !== index));
    }
  };
  return (
    <>
      <Box
        sx={{
          backgroundColor: "#D4E7C5",
        }}
      >
        <Container
          sx={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <TextField
              id='outlined-basic'
              label='Comp Code'
              variant='filled'
              placeholder='Comp Code'
              sx={{ marginRight: "25px" }}
              value={compCode}
              onChange={(e) => setCompCode(e.target.value)}
            />
            <FormControl sx={{ width: "200px" }}>
              <InputLabel id='type-comp'>Type of component</InputLabel>
              <Select
                labelId='type-comp'
                id='comptype'
                value={compType}
                label='Age'
                onChange={handleCompTypeChange}
              >
                {typeOfComponent.map((comp, i) => (
                  <MenuItem value={comp} key={comp}>
                    {comp.toLowerCase()}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            {isTable && (
              <FormControl sx={{ width: "200px" }}>
                <InputLabel id='type-src'>Source</InputLabel>
                <Select
                  labelId='type-src'
                  id='srctype'
                  value={src}
                  label='Age'
                  onChange={handleSrcChange}
                >
                  <MenuItem value='db'>db</MenuItem>
                  <MenuItem value='api'>api</MenuItem>
                </Select>
              </FormControl>
            )}
            {isDb && (
              <TextField
                id='outlined-basic'
                label='DB Name'
                variant='filled'
                placeholder='DB Name'
                sx={{ marginRight: "25px" }}
                value={dbName}
                onChange={(e) => setDbName(e.target.value)}
              />
            )}
            {isApi && (
              <>
                <TextField
                  id='outlined-basic'
                  label='API method'
                  variant='filled'
                  placeholder='API method'
                  sx={{ marginRight: "25px" }}
                  value={dbName}
                  onChange={(e) => setDbName(e.target.value)}
                />
                <TextField
                  id='outlined-basic'
                  label='API endpoint'
                  variant='filled'
                  placeholder='API endpoint'
                  sx={{ marginRight: "25px" }}
                  value={dbName}
                  onChange={(e) => setDbName(e.target.value)}
                />
              </>
            )}
            <Button variant='contained' onClick={handleAddConfig}>
              Config
            </Button>
          </Box>
          <IconButton aria-label='delete' onClick={handleDelete}>
            <DeleteIcon />
          </IconButton>
        </Container>
        {tableConfig.map((s, index) => (
          <TableConfig
            key={index}
            handleDelete={() => handleDeleteComponent(index)}
          />
        ))}
        {chartConfig.map((s, index) => (
          <ChartConfig
            key={index}
            handleDelete={() => handleDeleteComponent(index)}
          />
        ))}
      </Box>
    </>
  );
};

export default Component;
