import {Fragment, useCallback} from "react";
import {Button, Col, Form, Image, Input, Row} from "antd";

export default () => {
  const downLoad = useCallback(() => {
    console.log('fsfsfsdf')
  }, [])
  return <Fragment>
    <Form.Item label="封面">
      <Row>
        <Col span={7}>
          <Input placeholder="请粘贴游戏封面的网址"/>
        </Col>
        <Col span={2} offset={1}>
          <Button onClick={downLoad}>下载</Button>
        </Col>
      </Row>
    </Form.Item>
    <Form.Item>
      <Row>
        <Col offset={2}>
          <Image width={100} height={100} src=""/></Col>
      </Row>
    </Form.Item>

  </Fragment>
}
