import { useState } from "react";

function Form2() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();
    setData((preval) => {return [...preval, {username, email}]});
    console.log(data)
    setEmail("")
    setUsername("")
  }
  return (
    <div>
      <div>
        <div className="container">
          <div className="row">
            <div className="col-5 m-auto mt-5">
              <form action="" onSubmit={handleSubmit}>
                <div className="input-group mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Username"
                    aria-label="Username"
                    aria-describedby="basic-addon1"
                    value={username}
                    onChange={(e) => {
                      setUsername(e.target.value);
                    }}
                  />
                </div>
                <div className="input-group mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Email"
                    aria-label="email"
                    aria-describedby="basic-addon1"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                  />
                </div>
                <button type="submit" className="btn btn-success">
                  Submit
                </button>
              </form>
              <table className="table">
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((ele, index) => {
                            return (
                                <tr key={index}>
                                    <td>{ele.username}</td>
                                    <td>{ele.email}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form2;