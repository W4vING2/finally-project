import React from 'react';
import { Avatar, List } from 'antd';

const data = [
  {
    title: 'Данила Ваганов',
  },
  {
    title: 'Матвей Соснин',
  },
  {
    title: 'Костя Майоров',
  },
  {
    title: 'Леха Козлов',
  },
  {
    title: 'Саня Синев'
  },
  {
    title: 'Миша Глатких'
  }
];

const Dev: React.FC = () => (
  <List
    itemLayout="horizontal"
    dataSource={data}
    renderItem={(item, index) => (
      <List.Item>
        <List.Item.Meta
          avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index+3}`} />}
          title={<a href="https://www.dota2.com/home">{item.title}</a>}
          description="участник 4-ой группы, работал над проектом"
        />
      </List.Item>
    )}
  />
);

export default Dev;