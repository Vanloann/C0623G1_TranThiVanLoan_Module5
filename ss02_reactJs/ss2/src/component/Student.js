import "bootstrap/dist/css/bootstrap.css";
const students = [
    {
        id: 1,
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        id: 2,
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        id: 2,
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        id: 3,
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        id: 4,
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
        id: 5,
        company: 'Magazzini Alimentari Riuniti',
        contact: 'Giovanni Rovelli',
        country: 'Italy'
    }
];

function Student() {
    return (
        <>
          <div className="container">
            <h1 className="mt-3">Student</h1>
            <table className="table table-bordered table-hover text-center mt-5">
              <thead>
              <tr className="bg-dark">
                <th>Company</th>
                <th>Contact</th>
                <th>Country</th>
              </tr>
              </thead>
              <tbody>
              {students.map(student => (
                  <tr key = {student.id}>
                    <td>{student.company}</td>
                    <td>{student.contact}</td>
                    <td>{student.country}</td>
                  </tr>
              ))}
              </tbody>
            </table>
          </div>
        </>
    );
}
export default Student;