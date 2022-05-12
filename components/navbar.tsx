import { HomeOutlined } from "@ant-design/icons";
import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  const selectHandler = ({ key }: any) => {
    router.push(key);
  };
  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        items={[
          {
            key: "/",
            label: "Home",
            icon: <HomeOutlined />,
          },
          {
            key: "/test",
            label: "Test",
          },
        ]}
        onSelect={selectHandler}
      />
    </Header>
  );
};

export default Navbar;
