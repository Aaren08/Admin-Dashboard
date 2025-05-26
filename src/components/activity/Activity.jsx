import { customers } from "../../data";
import Button from "../button/Button";
import "./Activity.css";

function Activity() {
  return (
    <div className="activity">
      <div className="heading flex">
        <h1>Recent Activity</h1>
        <Button />
      </div>

      <div className="customers grid">
        {customers.map((customer, id) => (
          <div className="customer flex" key={id}>
            <img src={customer.image} alt={customer.name} />
            <div className="customer-details">
              <span className="name">{customer.title}</span>
              <small>{customer.content}</small>
            </div>
            <div className="duration">{customer.duration}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Activity;
