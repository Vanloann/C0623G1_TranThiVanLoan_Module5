import "bootstrap/dist/css/bootstrap.css";
const students = [
    {
        company: 'Alfreds Futterkiste',
        contact: 'Maria Anders',
        country: 'Germany'
    },
    {
        company: 'Centro comercial Moctezuma',
        contact: 'Francisco Chang',
        country: 'Mexico'
    },
    {
        company: 'Ernst Handel',
        contact: 'Roland Mendel',
        country: 'Austria'
    },
    {
        company: 'Island Trading',
        contact: 'Helen Bennett',
        country: 'UK'
    },
    {
        company: 'Laughing Bacchus Winecellars',
        contact: 'Yoshi Tannamuri',
        country: 'Canada'
    },
    {
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
                  <tr>
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