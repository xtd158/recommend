import {useState} from 'react'
import {Card, Tag, Row, Col, Input, Tooltip} from 'antd';
import {PageContainer} from '@ant-design/pro-layout';
import ProForm, {ProFormUploadButton, ProFormText, ProFormCheckbox, ProFormRadio} from '@ant-design/pro-form';
import {PlusOutlined} from '@ant-design/icons';
import styles from './style.less';

export default () => {
  const [list, setList] = useState([])
  return <PageContainer>
    <Card>
      {
        list.map((name) => <Tag key={name}>{name}</Tag>)
      }
      <Tag><PlusOutlined/>添加</Tag>
    </Card>
  </PageContainer>
}
