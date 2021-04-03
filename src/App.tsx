import './App.css';
import { Grid, Column } from './components/Grid';
import { getSampleData } from './helpers/generateSampleData';

const data = getSampleData();

const columns: Column[] = [
  {
    key: "uuid",
    displayName: "ID",
  },
  {
    key: "firstName",
    displayName: "first name",
  },
  {
    key: "lastName",
    displayName: "last name",
  },

  {
    key: "city",
    displayName: "city",
  },
  {
    key: "birthDate",
    displayName: "birth date",
  },
];

function App() {
  return (
    <div className="App">
      <Grid data={data} columns={columns} dataKey="uuid"/>
    </div>
  );
}

export default App;
