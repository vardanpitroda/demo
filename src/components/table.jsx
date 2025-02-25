import { useNavigate } from "react-router-dom";

function Table(props) {
  const { data } = props;
  const navigate = useNavigate()
  console.log(data);
  return (
    <div>
      <div className="container mt-5">
        <div className="row">
          <div className="col-5 m-auto">
            <button className="btn btn-info" onClick={() => {navigate('/form')}}>Add Data</button>
            <table className="table">
              <thead>
                <tr>
                  <th>Username</th>
                  <th>Email</th>
                </tr>
              </thead>
              <tbody>
                {data.map((ele, index) => {
                  return (
                    <tr key={index}>
                      <td>{ele.username}</td>
                      <td>{ele.email}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Table;