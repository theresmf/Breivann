import Page from "../Layout/Page";
import "./Overview.css";

function Overview() {
  const data = [
    {
      description: "økjaødkghdfighøskdfhgøskdhgøkrdsg",
      author: "Therese",
    },
    {
      description: "LoremIpsiom og alt det der",
      author: "marion",
    },
  ];
  return (
    <Page>
      <h1>Oversikt</h1>
      {data.map((d) => (
        <Card
          key={d.description}
          description={d.description}
          author={d.author}
        />
      ))}
    </Page>
  );
}

type CardProps = {
  description: string;
  author: string;
};

const Card = (props: CardProps) => {
  return (
    <div className="card">
      <p className="cardDescription">{props.description}</p>
      <span className="cardAuthor">{props.author}</span>
    </div>
  );
};

export default Overview;
