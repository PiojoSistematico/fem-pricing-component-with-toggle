type propObj = {
  price: string;
  storage: string;
  users: string;
  sendUpTo: string;
};

type CardProps = {
  title: string;
  index: number;
  properties: {
    [key: string]: propObj;
  };
};

const Card: React.FunctionComponent<CardProps> = ({
  title,
  index,
  properties,
}) => {
  return (
    <>
      {properties ? (
        <article className={index % 2 == 0 ? "card" : "card dark"}>
          <h2>{title}</h2>
          <span className="price border-bottom">{properties[title].price}</span>
          <span className="details border-bottom">
            {properties[title].storage} Storage
          </span>
          <span className="details border-bottom">
            {properties[title].users} Users Allowed
          </span>
          <span className="details border-bottom">
            {" "}
            Send up to {properties[title].sendUpTo}
          </span>
          <button>Learn More</button>
        </article>
      ) : (
        <article>
          <h2>ups</h2>
        </article>
      )}
    </>
  );
};

export default Card;
