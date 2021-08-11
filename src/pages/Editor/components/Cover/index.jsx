import {Fragment, useCallback} from "react"
import {Button, Col, Form, Image, Input, Row} from "antd"

const {ipcRenderer} = window.require('electron')

export default ({form}) => {
  const downLoad = useCallback(() => {
    ipcRenderer.send('load-cover:url', 'fsdfsdfsfss')
  }, [])
  return <Fragment>
    <Form.Item label="封面" name="cover_url">
      <Row>
        <Col span={7}>
          <Input placeholder="请粘贴游戏封面的网址"/>
        </Col>
        <Col span={2} offset={1}>
          <Button onClick={downLoad}>下载</Button>
        </Col>
      </Row>
    </Form.Item>
    <Form.Item name="cover_name">
      <Row>
        <Col offset={2}>
          <Image width={100} height={100} src=""/></Col>
      </Row>
    </Form.Item>

  </Fragment>
}
