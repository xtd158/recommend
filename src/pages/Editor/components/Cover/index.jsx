import {Fragment, useCallback, useEffect, useState} from "react"
import {Button, Col, Form, Image, Input, Row, Modal} from "antd"

const {ipcRenderer} = window.require('electron')
const dirName = '/Users/xiaotengda/work/code/antd_pro/public/resource'

export default ({form}) => {
  let name
  const [coverName, setCoverName] = useState('')
  const downLoad = useCallback(async () => {
    const {cover_url} = await form.validateFields(['cover_url'])
    const names = cover_url.split('/')
    const nameLast = names[names.length - 1]
    name = nameLast
    if (nameLast.includes('&')) {
      const nameFuhao = nameLast.split('&')
      name = nameFuhao[nameFuhao.length - 1]
    }
    ipcRenderer.send('load-cover:url', {cover_url, name, dirName})
  }, [])

  useEffect(() => {
    ipcRenderer.on('load-cover:url-reply', (event, args) => {
      if (args === 'success') {
        setCoverName(name)
      } else {
        Modal.error({title: "错误", content: '封面下载失败'})
      }
    })
  })
  return <Fragment>
    <Form.Item required label="封面" name="cover_url"
               rules={[{
                 type: 'url',
                 whitespace: true,
                 required: true
               },
                 {
                   validator: (_, value) => {
                     if (/\.(png|jpg|jpeg|webp)$/.test(value)) {
                       return Promise.resolve()
                     }
                     return Promise.reject(new Error('图片格式不正确'))
                   }
                 }
               ]}>
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
          <Image width={400} src={`./resource/${coverName}`}/></Col>
      </Row>
    </Form.Item>

  </Fragment>
}
