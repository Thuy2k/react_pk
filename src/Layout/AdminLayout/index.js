
import { CloseOutlined } from '@ant-design/icons';
import { Button, Layout, Tooltip } from 'antd';
import PropTypes from 'prop-types';
import React, { memo, Profiler, useContext, useEffect, useState } from 'react';
import { Outlet } from "react-router-dom";
import { useWindowSize } from 'react-use';
import Loading from '../../Components/Loading';
import MenuIcon from '../../Components/Icons/menu';
import UserIcon from '../../Components/Icons/user';
import { RootContext } from '../../RootContext';
import MainMenu from './menu';
import MenuStateContext from './menuStateContext';
import styles from './style.module.css';

import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Menu, theme } from 'antd';

const { Header, Content, Sider } = Layout;

const AuthLayout = memo(({ navigate, location, data, client }) => {
  const [collapsed, setCollapsed] = useState(false);
  const [isOpenViewLogoutMessage, onClickViewLogoutMessage] = useState(false);
  const context = useContext(RootContext);
  const username = "";
  const windowSize = useWindowSize();

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 1180) {
        setCollapsed(true);
      } else {
        setCollapsed(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);

  }, []);

  const logOut = () => {
    navigate("log-out");
  };

  const onClickCollapse = () => {
    setCollapsed(!collapsed);
    if (isOpenViewLogoutMessage) {
      onClickViewLogoutMessage(false)
    }
  };

  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  // const didNotGetFullUserDetail = (!(context?.user_attrs) || !(context.user) || !(context?.timezone) || !(context?.user_attrs?.user_role));
  // if (didNotGetFullUserDetail) {
  //   return <Loading />
  // }

  return (
    <Profiler id="layout" onRender={(...rest) => { }}>
      {/* <Layout className={styles.layoutCustom} >
        <div className={styles.menuButton} style={{ width: collapsed ? "80px" : "250px" }}>
          <Button type="secondary" size="large" onClick={onClickCollapse} style={{ marginBottom: 0, borderRadius: "0px", width: "80px" }}>
            <MenuIcon style={{ fontSize: "25px" }} />
          </Button>
        </div>
        <Sider
          collapsed={collapsed}
          className={styles.siderCustom}
          style={{
            overflow: 'hidden',
            height: 'calc(100vh - 40px)',
            left: 0,
            top: 40,
          }}
          width="250"
        >
          <MainMenu
            isOpenViewLogoutMessage={isOpenViewLogoutMessage}
            onClickViewLogoutMessage={onClickViewLogoutMessage}
            navigate={navigate}
            location={location}
          ></MainMenu>

          <div className={styles.descriptionFooterSidebar} style={{ width: collapsed ? "80px" : "250px" }}>
            <Tooltip placement="top" title={username} className={styles.userLogin} onClick={() => onClickViewLogoutMessage(true)}>
              <UserIcon style={{ fontSize: '24px' }} />{' '}
              {!collapsed &&
                <>
                  {(username && username.length) > 15
                    ? username.substr(0, 15) + '...'
                    : username
                      ? username
                      : ''}
                </>
              }
            </Tooltip>
          </div>
        </Sider>
        <Layout className={styles.mainCustom}>
          <Header className={styles.scrrenHeader}>
            <div className={styles.scrrenHeaderLogo}>
              5 Nhất Nhất
            </div>
          </Header>
          <MenuStateContext.Provider value={collapsed}>
            <Content style={{ margin: '0 0 0 16px', minHeight: 280, overflowY: "auto" }} onClick={() => onClickViewLogoutMessage(false)}>
              <Outlet />
            </Content>
          </MenuStateContext.Provider>
        </Layout>
      </Layout> */}
      <Layout
        style={{
          minHeight: '100vh',
        }}
      >
        <Sider collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
          <div className={styles.logoVertical} />
          {/* <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} /> */}
          <MainMenu
            isOpenViewLogoutMessage={isOpenViewLogoutMessage}
            onClickViewLogoutMessage={onClickViewLogoutMessage}
            navigate={navigate}
            location={location}
          ></MainMenu>
        </Sider>
        <Layout>
          <Header
            style={{
              padding: 0,
              background: colorBgContainer,
            }}
          />
          {/* <Content
            style={{
              margin: '0 16px',
            }}
          >
            <Breadcrumb
              style={{
                margin: '16px 0',
              }}
            >
              <Breadcrumb.Item>User</Breadcrumb.Item>
              <Breadcrumb.Item>Bill</Breadcrumb.Item>
            </Breadcrumb>
            <div
              style={{
                padding: 24,
                minHeight: 360,
                background: colorBgContainer,
                borderRadius: borderRadiusLG,
              }}
            >
              Bill is a cat.
            </div>
          </Content> */}
          <MenuStateContext.Provider value={collapsed}>
            <Content style={{ margin: '0 0 0 16px', minHeight: 280, overflowY: "auto" }} onClick={() => onClickViewLogoutMessage(false)}>
              <Outlet />
            </Content>
          </MenuStateContext.Provider>
        </Layout>
      </Layout>
      {isOpenViewLogoutMessage &&
        <div className={styles.userProfile} style={{
          position: "absolute",
          top: "40px",
          left: collapsed ? "80px" : "250px",
          height: (windowSize.height - 40) + "px",
          width: "260px",
          transition: "all 0.2s"
        }}>
          <strong>User Profile</strong>
          <div className={styles.profileContent}>
            <p>{context.user_attrs.name}</p>
          </div>
          <div style={{
            position: "absolute",
            bottom: "20px",
            width: "230px"
          }}>
            <Button block size="large" onClick={() => logOut()}>Logout</Button>
          </div>
          <div style={{
            position: "absolute",
            top: "5px",
            right: "5px"
          }}>
            <Button type="text" shape="circle" onClick={() => onClickViewLogoutMessage(false)}><CloseOutlined /></Button>
          </div>
        </div>
      }
    </Profiler>
  );
});

AuthLayout.propTypes = {
  children: PropTypes.any,
  navigate: PropTypes.object,
  data: PropTypes.object,
};

export default AuthLayout;