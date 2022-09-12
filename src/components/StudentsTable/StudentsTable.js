import './StudentsTable.scss';

function StudentsTable( {students} ) {
    return (
        <div className="students-table-wrapper">
            <table>
              <tbody>

                {students.map((item, index, arr) => {
                    return (
                      <tr>
                          <td>{item.id + 1}</td>
                          <td>Name: {item.name}</td>
                          <td>Age: {item.age}</td>
                          <td>IsMarried: {item.isMarried ? '+' : '-'}</td>
                      </tr>
                    )
                })}

              </tbody>
            </table>
        </div>
    );
}

export default StudentsTable;
