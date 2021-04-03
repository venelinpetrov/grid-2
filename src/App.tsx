import faker from 'faker';
import './App.css';
import { Grid, Column } from './components/Grid';

const data = Array(50).fill(null).map((_, i) => ({
  uuid: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  city: faker.address.city(),
  birthDate: faker.date.past().toDateString()
}));

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
