import { Card, Col } from "antd";
import Meta from "antd/lib/card/Meta";

export interface Anime {
  anime_id: string;
  name: string;
  anime_url: string;
  title: string;
  synopsis?: string;
  main_pic?: string;
  type?: string;
  source_type?: string;
  num_episode?: number;
  status?: string;
  start_date: string;
  studios: string;
  genres?: string;
  pics?: string;
}

const AnimeLists = ({
  items,
  selectedItems,
  onSlectedItem,
}: {
  items: Anime[];
  selectedItems: Anime[];
  onSlectedItem: any;
}) => {
  return (
    <>
      {items.map((item: any) => (
        <Col md={{ span: 8 }} lg={{ span: 4 }} key={item.anime_id}>
          <Card
            hoverable
            onClick={() => onSlectedItem(item)}
            cover={<img alt="cover" src={item.main_pic} />}
            className={selectedItems.includes(item) ? "selected" : ""}
          >
            <Meta
              style={{
                textAlign: "center",
              }}
              title={item.title}
              description={item.studios}
            />
          </Card>
        </Col>
      ))}
    </>
  );
};
export default AnimeLists;
