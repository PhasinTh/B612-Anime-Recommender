import { Spin, Layout, Row } from "antd";
import { useEffect, useState } from "react";
import AnimeLists, { Anime } from "../components/animeLists";
import Navbar from "../components/navbar";
import Searchbar from "../components/searchbar";
const { Content, Footer } = Layout;
const Home = () => {
  const [data, setData] = useState<Anime[]>([]);
  const [selectedItems, setSelectedItems] = useState<Anime[]>([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetch("api/anime")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      });
  }, []);

  return (
    <Layout>
      <Navbar />
      <Content className="site-layout" style={{ marginTop: 64 }}>
        <div
          style={{
            padding: 24,
            minHeight: 650,
            background: "#fff",
          }}
        >
          <Searchbar />
          {isLoading ? (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignContent: "center",
              }}
            >
              <Spin spinning={isLoading} size="large" />
            </div>
          ) : (
            <Row gutter={[16, 16]} style={{ marginTop: 32 }}>
              <AnimeLists
                items={data}
                selectedItems={selectedItems}
                onSlectedItem={(item: Anime) =>
                  setSelectedItems(
                    selectedItems.includes(item)
                      ? selectedItems.filter((i) => i !== item)
                      : [...selectedItems, item]
                  )
                }
              />
            </Row>
          )}
        </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>B612 ©2022</Footer>
    </Layout>
  );
};

export default Home;
