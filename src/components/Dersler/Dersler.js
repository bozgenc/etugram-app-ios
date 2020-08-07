import React, { Component } from 'react';
import {Alert, Dimensions, FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {Header, Left, Right} from "native-base";
import veriler from "../Veriler/TumBilgiler";

var screen = Dimensions.get('window');

export default class Dersler extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dersler: [],
        }
    }

    componentDidMount() {
        const data = veriler.createDersListesi()
        this.setState({dersler: data})
    }

    render() {
        return (
            <View style = {{flex: 1,}}>
                <View>
                    <Header style = {{backgroundColor: 'white'}} >
                        <Left>
                            <TouchableOpacity
                                onPress={() => this.props.navigation.openDrawer()}
                                style={{color: "black" }}
                            >
                                <Text style = {{marginLeft: 10, fontSize: 30, color: '#B00D23'}}>
                                    ≡
                                </Text>
                            </TouchableOpacity>
                        </Left>

                        <Text style = {{marginTop: 10, fontSize: 30, fontFamily: "Helvetica-Bold"}}>dersler</Text>

                        <Right>
                        </Right>
                    </Header>
                </View>

                <View style = {{flex: 1, justifyContent: 'center', alignItems: 'flex-start', marginLeft: 4.3, marginRight: 10, backgroundColor: '#faf8f8'}}>
                    <FlatList
                        directionalLockEnabled = {true}
                        showsVerticalScrollIndicator = {false}
                        showsHorizontalScrollIndicator = {false}
                        keyExtractor={(item) => item.dersKodu}
                        data = {this.state.dersler}
                        renderItem={({item}) => (
                            <TouchableOpacity
                                onPress = {() => {console.log(item.ad)}}
                            >
                                <View flexDirection = "row" style = {styles.arrayItem}>
                                    <Text style = {styles.textStyle}>{item.dersKodu} {":"} </Text>
                                    <Text style = {styles.textStyle}>{item.ad} </Text>
                                </View>
                            </TouchableOpacity>
                        )}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    arrayItem: {
        marginTop: 8,
        paddingVertical: 2,
        paddingHorizontal: 20,
        backgroundColor: '#efebeb',
        borderWidth: 0.2,
        borderColor: '#B00D23',
        borderRadius: 5,
        height: 50,
        width: screen.width * 96.6 / 100,
    },
    textStyle: {
        marginTop: 5,
        paddingVertical: 5,
        marginLeft: 2,
        fontSize: 14,
        fontFamily: 'HelveticaNeue-Medium'
    },
});
