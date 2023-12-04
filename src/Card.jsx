// Importing necessary icons from react-icons library
import { FaCheck, FaTimes } from "react-icons/fa";

// Defining the Card functional component
function Card({ details }) {
  return (
    <div className="col-lg-4">
      <div className="card mb-5 mb-lg-0">
        <div className="card-body">
          {/* Displaying the price */}
          <h5 className="card-title text-muted text-uppercase text-center">
            {details.price}
          </h5>
          {/* Displaying the period and month */}
          <h6 className="card-price text-center">
            {details.period}
            <span className="period">{details.month}</span>
          </h6>
          <hr />
          {/* Displaying the list of features */}
          <ul>
            {/* Mapping through each feature */}
            {details.features.map((feature) => {
              return (
                <li className={feature.enable ? "" : "text-muted"}>
                  {/* Displaying either a checkmark or a cross based on 'enable' property */}
                  {feature.enable ? (
                    <FaCheck className="fas fa-check" />
                  ) : (
                    <FaTimes className="fas fa-times" />
                  )}
                  &ensp; {feature.name}
                </li>
              );
            })}
          </ul>
          {/* Button */}
          <div className="d-grid">
            <a href="#" className="btn btn-primary text-uppercase">
              Button
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

// Exporting the Card component as default
export default Card;
