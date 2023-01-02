import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "./App.css";
import Nav from "./components/Nav";
import SingleCard from "./components/SingleCard";
import propertList from "./propertyList";
function App() {
  console.log(propertList);
  return (
    <div className="container-fluid">
      <Nav />
      <div className="row">
        <form class="row g-3">
          <div class="col-auto">
              <select class="form-select" aria-label="Default select example">
              <option selected>Location</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
         
          <div class="col-auto">
              <select class="form-select" aria-label="Default select example">
              <option selected>Delhi</option>
              <option value="1">UP</option>
              <option value="2">Haryana</option>
              <option value="3">Punjab</option>
            </select>
          </div>
          <div class="col-auto">
              <select class="form-select" aria-label="Default select example">
              <option selected>Price</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
              <select class="form-select" aria-label="Default select example">
              <option selected>Property Type</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="col-auto">
            <button type="submit" class="btn btn-primary mb-3">
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="container m-5 d-flex  flex-row justify-content-between">
        {propertList.map((element, index) => {
          return <SingleCard key={index} data={element} />;
        })}
      </div>
    </div>
  );
}

export default App;
