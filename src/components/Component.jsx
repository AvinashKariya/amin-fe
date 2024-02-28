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
import React, { useEffect, useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import { typeOfComponent } from "../utils";
import TableConfig from "./TableConfig";
import ChartConfig from "./ChartConfig";
const Component = ({ handleDelete, data }) => {
  const [compCode, setCompCode] = useState("");
  const [dbName, setDbName] = useState("");
  const [method, setMethod] = useState("");
  const [url, setUrl] = useState("");
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

  useEffect(() => {
    if (data) {
      setCompCode(data.componentCode);
      setCompType(data.componentType);
      setSrc(data?.componentConfig.source);

      if (data.componentType === "TABLE") {
        setIsTable(true);
        setTableConfig(data.componentConfig.tableConfig);
      } else {
        setIsTable(false);
        setIsApi(false);
        setIsDb(false);
        setChartConfig([data.componentConfig.chartConfig]);
      }
      if (data.componentConfig.source === "db") {
        setIsDb(true);
        setIsApi(false);
        setDbName(data.componentConfig.dbTableName);
      } else {
        setIsApi(true);
        setIsDb(false);
        setMethod(data.componentConfig.apiMethod);
        setUrl(data.componentConfig.apiUrl);
      }
    }
  }, []);
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
            {isDb && isTable && (
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
            {isApi && isTable && (
              <>
                <TextField
                  id='outlined-basic'
                  label='API method'
                  variant='filled'
                  placeholder='API method'
                  sx={{ marginRight: "25px" }}
                  value={method}
                  onChange={(e) => setMethod(e.target.value)}
                />
                <TextField
                  id='outlined-basic'
                  label='API endpoint'
                  variant='filled'
                  placeholder='API endpoint'
                  sx={{ marginRight: "25px" }}
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
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
        {tableConfig.map((tc, index) => (
          <TableConfig
            key={index}
            handleDelete={() => handleDeleteComponent(index)}
            data={tc}
          />
        ))}
        {chartConfig.map((cc, index) => (
          <ChartConfig
            key={index}
            handleDelete={() => handleDeleteComponent(index)}
            data={cc}
          />
        ))}
      </Box>
    </>
  );
};

export default Component;
