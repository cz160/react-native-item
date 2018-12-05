
import React , { Component } from 'react'
import { Camera, Permissions } from 'expo';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    Button
} from 'react-native'


interface Props {

}
interface State {
    hasCameraPermission: boolean,
    type: any,
    isShow: boolean,
    imgurl:string
}

class MineContain extends Component<Props,State> {
    camera: any
      constructor(props: any) {
          super(props)
          this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            isShow: false,
            imgurl:'http://img2.3png.com/30a51ea643bbee11d2276c9a90e50bf7286a.png'
          }
      }
      async componentDidMount() {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({ hasCameraPermission: status === 'granted' });
      }
      render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
          return <View />;
        } else if (hasCameraPermission === false) {
          return <Text>No access to camera</Text>;
        } else {
          return (
            <View style={{ flex: 1 }}>
              <Button title = "拍照" onPress = {() => {
                  this.setState({ isShow: !this.state.isShow })
              }}></Button>
              {
                  !this.state.isShow && (
                        <Image
                                source={{uri:this.state.imgurl}}
                                style={{width:300,marginTop:100,marginLeft:30,height:400}}
                        >
                        </Image>
                  )
              }
              {
                  !!this.state.isShow &&  (
                    // 照相机
                    <Camera 
                    ref={(ref: any) => { this.camera = ref; }}
                    style={{ flex: 1 }} type={this.state.type}>
                        <View
                        style={{
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        }}>
                        {/* 转换前置 */}
                        <TouchableOpacity
                            style={{
                                width:"33%",
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                    ? Camera.Constants.Type.front
                                    : Camera.Constants.Type.back,
                                    imgurl:'http://img2.3png.com/30a51ea643bbee11d2276c9a90e50bf7286a.png'
                                });
                            }}>
                            <Text
                                style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                            {' '}转换摄像头{' '}
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width:"33%",
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={() => {
                                this.setState({
                                    isShow: !this.state.isShow,
                                    imgurl:'http://img2.3png.com/30a51ea643bbee11d2276c9a90e50bf7286a.png'
                                });
                            }}>
                            <Text style={{fontSize: 18, marginBottom: 10,color: 'white' }}>
                                取消拍照
                            </Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={{
                                width:"33%",
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }}
                            onPress={async () => {
                                //拍照的方法
                                let data = await this.camera.takePictureAsync()
                                this.setState({
                                    isShow: !this.state.isShow,
                                    imgurl:data.uri
                                })
                            }}>
                            <Text style={{ fontSize: 18, marginBottom: 10, color: 'white' }}>
                                拍照
                            </Text>
                        </TouchableOpacity>
                        </View>
                    </Camera>
                  )
              }
              
            </View>
          );
        }
      }
}
export default MineContain