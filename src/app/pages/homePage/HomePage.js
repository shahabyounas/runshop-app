import { Box, Autocomplete, TextField } from "@mui/material";
import DataTable from "../../components/table";
import { useHomePage } from "./hooks/useHomePage";

const columns = [
  { field: "fixture_id", headerName: "Fixture", width: 100 },
  { field: "market_id", headerName: "Market", width: 100 },
  { field: "selection", headerName: "Selection", width: 100 },
  { field: "price", headerName: "Price", width: 100 },
  { field: "stake_size", headerName: "Stack", width: 100 },
  { field: "bet_time", headerName: "Created at", width: 200 },
  { field: "value", headerName: "Value", type: "number", width: 100 },
];

function HomePage() {
  const {
    bets,
    fixtures,
    selectedFixtureType,
    setSelectedFixtureType,
    inputValue,
    setInputValue,
    fixtureTypes,
    fixture,
    fixtureValue,
    handleFixtureSelect,
  } = useHomePage();

  return (
    <Box>
      <Box sx={{ display: "flex", gap: 2 }}>
        {/* List Fixtures types options */}
        <Box sx={{ py: 2 }}>
          <Autocomplete
            value={selectedFixtureType}
            onChange={(event, newValue) => {
              setSelectedFixtureType(newValue);
            }}
            inputValue={inputValue}
            onInputChange={(event, newInputValue) => {
              setInputValue(newInputValue);
            }}
            id="controllable-states-demo"
            options={fixtureTypes}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>

        {/* List Selected Fixtures by type */}
        <Box sx={{ py: 2 }}>
          <Autocomplete
            value={fixture}
            onChange={(event, newValue) => {
              handleFixtureSelect(newValue);
            }}
            inputValue={
              fixtureValue && fixtureValue !== "undefined" ? fixtureValue : ""
            }
            getOptionLabel={(option) => option.label}
            onInputChange={(event, newInputValue) => {
              handleFixtureSelect(newInputValue);
            }}
            id="controllable-states-demo"
            options={fixtures}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} />}
          />
        </Box>
      </Box>
      <DataTable rows={bets} columns={columns} />
    </Box>
  );
}

export default HomePage;
