import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import { ImagePicker } from 'antd-mobile';


const data = [{
  url: 'https://zos.alipayobjects.com/rmsportal/PZUUCKTRIHWiZSY.jpeg',
  id: '2121',
}, {
  url: 'https://zos.alipayobjects.com/rmsportal/hqQWgTXdrlmVVYi.jpeg',
  id: '2122',
}];

class ImagePickerExample extends React.Component {

	constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
          files: data
  }
  };

  onChange(files, type, index) {
    console.log(files, type, index);
    this.setState({
      files:files
    });
  }
  render() {
    const { files } = this.state;
    return (
      <div>
        <ImagePicker
          files={files}
          onChange={this.onChange.bind(this)}
          onImageClick={(index, fs) => console.log(index, fs)}
          selectable={files.length < 5}
        />
      </div>
    );
  }
}

export default ImagePickerExample