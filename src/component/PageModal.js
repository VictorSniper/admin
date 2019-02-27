import React from 'react';
import { Modal, Button } from 'antd';

class PageModal extends React.Component {
  state = { visible: false }
  showModal = () => {
    this.setState({
      visible: true,
    });
  }
  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  render() {
    console.log(this.props.name)
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          {this.props.name}
        </Button>
        <Modal
          centered
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some 项目名称...</p>
          <p>Some 收支类型...</p>
          <p>Some 金额...</p>
          <p>Some 时间...</p>
          <p>Some 备注...</p>
        </Modal>
      </div>
    );
  }
}
export default PageModal;
