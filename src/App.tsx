import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  SolutionOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu, theme } from 'antd';
import Apps from './components/InList.tsx'
import Dev from './components/Developers.tsx'
import ButtonCase from './components/Button.tsx'

const { Header, Sider, Content } = Layout;

const App: React.FC = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedMenuItemKey, setSelectedMenuItemKey] = useState('1')
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  function renderContent(){
    if (selectedMenuItemKey === '1'){
      return 'profile'
    }
    else if(selectedMenuItemKey === '2'){
      return <Apps/>
    }
    else if(selectedMenuItemKey === '3'){
    return 'places'
    }
    else if(selectedMenuItemKey === '4'){
    return <Dev/>
    } 
  }

  return (
    <Layout style={{minHeight: '100vh', minWidth: '100vw' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={[
            {
              key: '1',
              icon: <UserOutlined />,
              label: 'Профиль',
              onClick: () => setSelectedMenuItemKey('1')
            },
            {
              key: '2',
              icon: <VideoCameraOutlined />,
              label: 'Интересы',
              onClick: () => setSelectedMenuItemKey('2')
            },
            {
              key: '3',
              icon: <UploadOutlined />,
              label: 'Места',
              onClick: () => setSelectedMenuItemKey('3')
            },
            {
              key: '4',
              icon: <SolutionOutlined />,
              label: 'Разработчики',
              onClick: () => setSelectedMenuItemKey('4')
            }
          ]}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >{renderContent()}
        <ButtonCase/>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;