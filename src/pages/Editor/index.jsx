import {Card, Row, Col, Checkbox, Form, Image} from 'antd';
import ProForm, {ProFormUploadButton, ProFormText, ProFormCheckbox, ProFormRadio} from '@ant-design/pro-form';
import {PageContainer} from '@ant-design/pro-layout';
import {players, genre, language, group, tags} from './options_data'

export default () => {
  return <PageContainer content="添加编辑游戏">
    <Card bordered={false}>
      <ProForm
        name="basic"
        layout="horizontal"
        labelCol={{span: 2}}
        onFinish={() => {
        }}
      >
        <ProFormText
          width="md"
          label="中文名称"
          name="chinese"
          placeholder="请输入游戏的中文名称"
          required
        />
        <ProFormText
          width="md"
          label="英文名称"
          name="english"
          placeholder="请输入游戏的英文名称"
          required
        />
        <ProFormText
          width="md"
          label="别名"
          name="chinese"
          placeholder="请输入游戏的其他名称，比如简称"
        />
        <ProFormText
          width="md"
          label="封面"
          name="chinese"
          placeholder="请粘贴游戏封面的网址"
          rules={[]}
        />
        <Row>
          <Col offset={2}>
            <Image width={100} height={100} src=""/></Col>
        </Row>
        <ProFormRadio.Group
          name="radio"
          label="游玩人数"
          options={players}
          required
        />
        <ProFormCheckbox.Group
          name="radio"
          label="类型"
          options={genre}
          required
        />
        <ProFormRadio.Group
          name="radio"
          label="语言"
          options={language}
          required
        />
        <ProFormRadio.Group
          name="radio"
          label="人群"
          options={group}
          required
        />
        {/*<ProFormCheckbox.Group*/}
        {/*  name="checkbox-group"*/}
        {/*  label="属性"*/}
        {/*  options={tags}*/}
        {/*/>*/}
        <Form.Item label="属性"
                   required>
          <Checkbox.Group style={{width: '100%'}}>
            <Row gutter={[0, 8]}>
              {
                tags.map(({label, value}) => <Col span={4} key={value}>
                  <Checkbox value={value}>{label}</Checkbox>
                </Col>)
              }
            </Row>
          </Checkbox.Group>
        </Form.Item>
      </ProForm>
    </Card>
  </PageContainer>
}
