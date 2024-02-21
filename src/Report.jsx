import React, { useState } from 'react';

const Report = () => {
  const [reportCode, setReportCode] = useState('');
  const [excels, setExcels] = useState([]);

  const handleAddExcel = () => {
    setExcels([...excels, <Excel key={excels.length} />]);
  };

  return (
    <div>
      <input
        type="text"
        value={reportCode}
        onChange={(e) => setReportCode(e.target.value)}
        placeholder="Report Code"
      />
      <button onClick={handleAddExcel}>Add Excel</button>
      {excels.map((excel, index) => (
        <div key={index}>
          {excel}
          <hr />
        </div>
      ))}
    </div>
  );
};

const Excel = () => {
  const [excelCode, setExcelCode] = useState('');
  const [excelName, setExcelName] = useState('');
  const [sheets, setSheets] = useState([]);

  const handleAddSheet = () => {
    setSheets([...sheets, <Sheet key={sheets.length} />]);
  };

  return (
    <div>
      <input
        type="text"
        value={excelCode}
        onChange={(e) => setExcelCode(e.target.value)}
        placeholder="Excel Code"
      />
      <input
        type="text"
        value={excelName}
        onChange={(e) => setExcelName(e.target.value)}
        placeholder="Excel Name"
      />
      <button onClick={handleAddSheet}>Add Sheet</button>
      {sheets.map((sheet, index) => (
        <div key={index}>
          {sheet}
          <button onClick={() => {
            const updatedSheets = [...sheets];
            updatedSheets.splice(index, 1);
            setSheets(updatedSheets);
          }}>X</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

const Sheet = () => {
  const [sheetCode, setSheetCode] = useState('');
  const [sheetName, setSheetName] = useState('');
  const [components, setComponents] = useState([]);

  const handleAddComponent = () => {
    setComponents([...components, <Component key={components.length} />]);
  };

  return (
    <div>
      <input
        type="text"
        value={sheetCode}
        onChange={(e) => setSheetCode(e.target.value)}
        placeholder="Sheet Code"
      />
      <input
        type="text"
        value={sheetName}
        onChange={(e) => setSheetName(e.target.value)}
        placeholder="Sheet Name"
      />
      <button onClick={handleAddComponent}>Add Component</button>
      {components.map((component, index) => (
        <div key={index}>
          {component}
          <button onClick={() => {
            const updatedComponents = [...components];
            updatedComponents.splice(index, 1);
            setComponents(updatedComponents);
          }}>X</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

const Component = () => {
  const [componentCode, setComponentCode] = useState('');
  const [source, setSource] = useState('');
  const [dbTableName, setDbTableName] = useState('');
  const [apiMethod, setApiMethod] = useState('');
  const [apiEndpoint, setApiEndpoint] = useState('');
  const [componentType, setComponentType] = useState('');
  const [configs, setConfigs] = useState([]);

  const handleAddConfig = () => {
    if (componentType === 'TABLE') {
      setConfigs([...configs, <TableConfig key={configs.length} />]);
    } else if (componentType === 'BAR CHART') {
      setConfigs([...configs, <BarChartConfig key={configs.length} />]);
    } else if (componentType === 'PIE CHART') {
      setConfigs([...configs, <PieChartConfig key={configs.length} />]);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={componentCode}
        onChange={(e) => setComponentCode(e.target.value)}
        placeholder="Component Code"
      />
      <select
        value={source}
        onChange={(e) => setSource(e.target.value)}
      >
        <option value="">Select Source</option>
        <option value="db">DB</option>
        <option value="api">API</option>
      </select>
      {source === 'db' && (
        <input
          type="text"
          value={dbTableName}
          onChange={(e) => setDbTableName(e.target.value)}
          placeholder="DB Table Name"
        />
      )}
      {source === 'api' && (
        <>
          <input
            type="text"
            value={apiMethod}
            onChange={(e) => setApiMethod(e.target.value)}
            placeholder="API Method"
          />
          <input
            type="text"
            value={apiEndpoint}
            onChange={(e) => setApiEndpoint(e.target.value)}
            placeholder="API Endpoint"
          />
        </>
      )}
      <select
        value={componentType}
        onChange={(e) => setComponentType(e.target.value)}
      >
        <option value="">Select Component Type</option>
        <option value="TABLE">Table</option>
        <option value="BAR CHART">Bar Chart</option>
        <option value="PIE CHART">Pie Chart</option>
      </select>
      <button onClick={handleAddConfig}>Add Config</button>
      {configs.map((config, index) => (
        <div key={index}>
          {config}
          <button onClick={() => {
            const updatedConfigs = [...configs];
            updatedConfigs.splice(index, 1);
            setConfigs(updatedConfigs);
          }}>X</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

const TableConfig = () => {
  const [columnName, setColumnName] = useState('');
  const [bold, setBold] = useState(false);
  const [font, setFont] = useState('Calibri');
  const [fontSize, setFontSize] = useState('8');
  const [backgroundColor, setBackgroundColor] = useState('NONE');
  const [dbColumnName, setDbColumnName] = useState('');
  const [cellFormula, setCellFormula] = useState('');
  const [columns, setColumns] = useState([]);

  const handleAddColumn = () => {
    setColumns([
      ...columns,
      {
        columnName,
        bold,
        font,
        fontSize,
        backgroundColor,
        dbColumnName,
        cellFormula,
      },
    ]);
    setColumnName('');
    setBold(false);
    setFont('Calibri');
    setFontSize('8');
    setBackgroundColor('NONE');
    setDbColumnName('');
    setCellFormula('');
  };

  return (
    <div>
      <input
        type="text"
        value={columnName}
        onChange={(e) => setColumnName(e.target.value)}
        placeholder="Column Name"
      />
      <input
        type="checkbox"
        checked={bold}
        onChange={(e) => setBold(e.target.checked)}
      />
      <select value={font} onChange={(e) => setFont(e.target.value)}>
        <option value="Calibri">Calibri</option>
        <option value="Arial">Arial</option>
      </select>
      <select
        value={fontSize}
        onChange={(e) => setFontSize(e.target.value)}
      >
        <option value="8">8</option>
        <option value="10">10</option>
        <option value="12">12</option>
        <option value="14">14</option>
        <option value="16">16</option>
      </select>
      <select
        value={backgroundColor}
        onChange={(e) => setBackgroundColor(e.target.value)}
      >
        <option value="NONE">None</option>
        <option value="BLUE">Blue</option>
        <option value="GREEN">Green</option>
        <option value="YELLOW">Yellow</option>
        <option value="RED">Red</option>
      </select>
      {backgroundColor === 'NONE' && (
        <>
          <input
            type="text"
            value={dbColumnName}
            onChange={(e) => setDbColumnName(e.target.value)}
            placeholder="DB Column Name"
          />
          <input
            type="text"
            value={cellFormula}
            onChange={(e) => setCellFormula(e.target.value)}
            placeholder="Cell Formula"
          />
        </>
      )}
      <button onClick={handleAddColumn}>Add Another Column</button>
      <hr />
      {columns.map((column, index) => (
        <div key={index}>
          <div>Column Name: {column.columnName}</div>
          <div>Bold: {String(column.bold)}</div>
          <div>Font: {column.font}</div>
          <div>Font Size: {column.fontSize}</div>
          <div>Background Color: {column.backgroundColor}</div>
          {column.backgroundColor === 'NONE' && (
            <>
              <div>DB Column Name: {column.dbColumnName}</div>
              <div>Cell Formula: {column.cellFormula}</div>
            </>
          )}
          <button onClick={() => {
            const updatedColumns = [...columns];
            updatedColumns.splice(index, 1);
            setColumns(updatedColumns);
          }}>X</button>
          <hr />
        </div>
      ))}
    </div>
  );
};

const BarChartConfig = () => {
  const [xAxis, setXAxis] = useState('');
  const [yAxis, setYAxis] = useState('');
  const [chartTitle, setChartTitle] = useState('');
  const [referenceComponentCode, setReferenceComponentCode] = useState('');

  return (
    <div>
      <input
        type="text"
        value={xAxis}
        onChange={(e) => setXAxis(e.target.value)}
        placeholder="X Axis"
      />
      <input
        type="text"
        value={yAxis}
        onChange={(e) => setYAxis(e.target.value)}
        placeholder="Y Axis"
      />
      <input
        type="text"
        value={chartTitle}
        onChange={(e) => setChartTitle(e.target.value)}
        placeholder="Chart Title"
      />
      <input
        type="text"
        value={referenceComponentCode}
        onChange={(e) => setReferenceComponentCode(e.target.value)}
        placeholder="Reference Component Code"
      />
      <button onClick={() => {}}>X</button>
    </div>
  );
};

const PieChartConfig = () => {
  const [values, setValues] = useState('');
  const [category, setCategory] = useState('');
  const [chartTitle, setChartTitle] = useState('');
  const [referenceComponentCode, setReferenceComponentCode] = useState('');

  return (
    <div>
      <input
        type="text"
        value={values}
        onChange={(e) => setValues(e.target.value)}
        placeholder="Values"
      />
      <input
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Category"
      />
      <input
        type="text"
        value={chartTitle}
        onChange={(e) => setChartTitle(e.target.value)}
        placeholder="Chart Title"
      />
      <input
        type="text"
        value={referenceComponentCode}
        onChange={(e) => setReferenceComponentCode(e.target.value)}
        placeholder="Reference Component Code"
      />
      <button onClick={() => {}}>X</button>
    </div>
  );
};

export default Report;
