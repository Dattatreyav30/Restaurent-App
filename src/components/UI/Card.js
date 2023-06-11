import "./Card.css";

const Card = () => {
  return (
    <section className="totalmeal-overlay">
      <p>Chicken biriyani</p>
      <h3>Total Amount</h3>
      <h3 id="price">₹200</h3>
      <button>close</button>
      <button>order</button>
    </section>
  );
};

export default Card;
