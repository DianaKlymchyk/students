import './StudentsTable.scss';

function StudentsTable( {students} ) {
    return (
        <div className="students-table-wrapper">
            <table>
              <tbody>
              <tr>
                  <td style={{visibility: 'hidden'}}></td>
                  <td>Name</td>
                  <td>Age</td>
                  <td>Married</td>
              </tr>
                {students.map((item) => {
                    return (
                      <tr key={item.id}>
                          <td>{item.id + 1}</td>
                          <td>{item.name}</td>
                          <td>{item.age}</td>
                          <td>{item.isMarried ? 'YES' : 'NO'}</td>
                      </tr>
                    )
                })}

              </tbody>
            </table>
        </div>
    );
}

export default StudentsTable;
