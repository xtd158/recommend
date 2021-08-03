import {Card, Row, Col} from 'antd';
import ProForm, {ProFormUploadButton, ProFormText, ProFormCheckbox, ProFormRadio} from '@ant-design/pro-form';
import {PageContainer} from '@ant-design/pro-layout';
import styles from './style.less';

export default () => {
  return <PageContainer content="添加编辑游戏">
    <Card bordered={false}>
      <ProForm
        name="basic"
        layout="horizontal"
        labelCol={{span: 2}}
      >
        <ProFormText
          width="md"
          label="中文名称"
          name="chinese"
          placeholder="游戏的名字"
        />

        <ProFormText
          width="md"
          label="英文名称"
          name="english"
          placeholder="游戏的名字"
        />
        <ProFormUploadButton
          name="upload"
          label="封面"
          max={2}
          fieldProps={{
            name: 'file',
            listType: 'picture-card',
          }}
          action="/upload.do"
        />
        <ProFormRadio.Group
          name="radio"
          label="游玩人数"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />
        <ProFormRadio.Group
          name="radio"
          label="类型"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />
        <ProFormRadio.Group
          name="radio"
          label="人群"
          options={[
            {
              label: 'item 1',
              value: 'a',
            },
            {
              label: 'item 2',
              value: 'b',
            },
            {
              label: 'item 3',
              value: 'c',
            },
          ]}
        />
        <ProFormCheckbox.Group
          name="checkbox-group"
          label="属性"
          options={['A', 'B', 'C', 'D', 'E', 'F']}
        />
      </ProForm>
    </Card>
  </PageContainer>
}
