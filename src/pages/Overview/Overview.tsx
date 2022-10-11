import { useEffect, useState } from "react";
import { supabase } from "../../supabaseClient";
import Page from "../Layout/Page";
import "./Overview.css";

type Post = {
  description: string;
  author: string;
};

function Overview() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Post[]>([]);

  console.log("data: ", data);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    try {
      setLoading(true);
      let { data, error } = await supabase
        .from("report")
        .select("description, author")
        .limit(5);

      if (error) {
        throw error;
      }

      if (data) {
        setData(data);
      }
    } catch (error) {
      alert(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Page>
      <h1>Oversikt</h1>
      {loading ? <>Henter </> : null}
      {data.map((post) => (
        <Card description={post.description} author={post.author} />
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
