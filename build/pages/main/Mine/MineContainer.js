var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import React, { Component } from 'react';
import { Camera, Permissions } from 'expo';
import { View, TouchableOpacity, Text, Image, Button } from 'react-native';
class MineContain extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasCameraPermission: null,
            type: Camera.Constants.Type.back,
            isShow: false,
            imgurl: 'http://img2.3png.com/30a51ea643bbee11d2276c9a90e50bf7286a.png'
        };
    }
    componentDidMount() {
        return __awaiter(this, void 0, void 0, function* () {
            const { status } = yield Permissions.askAsync(Permissions.CAMERA);
            this.setState({ hasCameraPermission: status === 'granted' });
        });
    }
    render() {
        const { hasCameraPermission } = this.state;
        if (hasCameraPermission === null) {
            return React.createElement(View, null);
        }
        else if (hasCameraPermission === false) {
            return React.createElement(Text, null, "No access to camera");
        }
        else {
            return (React.createElement(View, { style: { flex: 1 } },
                React.createElement(Button, { title: "\u62CD\u7167", onPress: () => {
                        this.setState({ isShow: !this.state.isShow });
                    } }),
                !this.state.isShow && (React.createElement(Image, { source: { uri: this.state.imgurl }, style: { width: 300, marginTop: 100, marginLeft: 30, height: 400 } })),
                !!this.state.isShow && (
                // 照相机
                React.createElement(Camera, { ref: (ref) => { this.camera = ref; }, style: { flex: 1 }, type: this.state.type },
                    React.createElement(View, { style: {
                            flex: 1,
                            backgroundColor: 'transparent',
                            flexDirection: 'row',
                        } },
                        React.createElement(TouchableOpacity, { style: {
                                width: "33%",
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, onPress: () => {
                                this.setState({
                                    type: this.state.type === Camera.Constants.Type.back
                                        ? Camera.Constants.Type.front
                                        : Camera.Constants.Type.back,
                                    imgurl: 'http://img2.3png.com/30a51ea643bbee11d2276c9a90e50bf7286a.png'
                                });
                            } },
                            React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } },
                                ' ',
                                "\u8F6C\u6362\u6444\u50CF\u5934",
                                ' ')),
                        React.createElement(TouchableOpacity, { style: {
                                width: "33%",
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, onPress: () => {
                                this.setState({
                                    isShow: !this.state.isShow,
                                    imgurl: 'http://img2.3png.com/30a51ea643bbee11d2276c9a90e50bf7286a.png'
                                });
                            } },
                            React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } }, "\u53D6\u6D88\u62CD\u7167")),
                        React.createElement(TouchableOpacity, { style: {
                                width: "33%",
                                alignSelf: 'flex-end',
                                alignItems: 'center',
                            }, onPress: () => __awaiter(this, void 0, void 0, function* () {
                                //拍照的方法
                                let data = yield this.camera.takePictureAsync();
                                this.setState({
                                    isShow: !this.state.isShow,
                                    imgurl: data.uri
                                });
                            }) },
                            React.createElement(Text, { style: { fontSize: 18, marginBottom: 10, color: 'white' } }, "\u62CD\u7167")))))));
        }
    }
}
export default MineContain;
//# sourceMappingURL=MineContainer.js.map