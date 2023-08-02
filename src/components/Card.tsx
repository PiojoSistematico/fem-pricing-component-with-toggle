type propObj = {
  price: string;
  storage: string;
  users: string;
  sendUpTo: string;
};

type CardProps = {
  title: string;
  properties: {
    basic: propObj;
    professional: propObj;
    master: propObj;
  };
};

const Card: React.FunctionComponent<CardProps> = ({ title, properties }) => {
  console.log("card", properties);
  return (
    <div>
      <h2>{title}</h2>
      <span>{properties[title]["price"]}</span>
      <span>{properties[title]["storage"]} Storage</span>
      <span>{properties[title]["users"]} Users Allowed</span>
      <span> Send up to {properties[title]["sendUpTo"]}</span>
      <button>Learn More</button>
    </div>
  );
};

export default Card;
