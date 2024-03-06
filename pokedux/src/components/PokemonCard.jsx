import { Card } from "antd";
import { StarOutlined } from "@ant-design/icons";

const { Meta } = Card;

export default function PokemonCard({name, image}) {
  return (
    <Card
      hoverable
      style={{
        width: 250,
      }}
      cover={
        <img
          alt={name}
          src={image}
        />
      }
      extra={<StarOutlined />}
    >
      <Meta title={name} description="fire, magic" />
    </Card>
  );
}
