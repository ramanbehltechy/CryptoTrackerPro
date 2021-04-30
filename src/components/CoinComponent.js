import React, { Component } from 'react';
import Button from 'react-native-button';

import {
    Text, View, Image, Alert, Platform, TextInput, FlatList
} from 'react-native';
import { Header } from 'react-native-elements';

export default class CoinComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { id:'', name: '', price: '', symbol:'', marketcap:'', volume:'', image:'', priceChange:''};
    }
    componentDidMount(){
        this.props.onFetchCoins('asc');
    }
    render() {
        return (
           
            <View style={{ flex: 1, marginTop: Platform.OS === 'ios' ? 34 : 0 }}>
                 <View style={{width:'100%',height:'10%',flexDirection:'row',alignItems:'center',justifyContent:'center',backgroundColor:'#385775'}}>
                    <View>
                        <Text style={{fontWeight:'bold',fontSize:20,color:'#FFF'}}>CryptoTracker Pro</Text>
                    </View>
                </View>
                <FlatList
                    data={this.props.coins}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) =><View style={{flexDirection: 'row', textAlign: 'left', fontSize: 15, borderBottomColor:'#eee',borderBottomWidth:2}}>
                         <Image style={{ width: 50,height: 50,borderRadius:50}} source={{uri: item.image}} alt='crypto'/>
                         <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 15, 
                        color: 'black',
                        backgroundColor: 'white',
                        alignSelf: "center",
                        flex:1,
                        flexWrap:'wrap'
                    }}>
                        {`${item.name}`}
                    </Text>
                    <Text style={{
                        padding: 10,
                        fontWeight: 'bold',
                        fontSize: 15, 
                        color: '#696969',
                        backgroundColor: 'white',
                        alignSelf: "center",
                        flex:1,
                        flexWrap:'wrap'
                    }}>{`${item.symbol}`}</Text>
                    <Text style={{flex:1,alignSelf: "center"}}>{`$${item.current_price}`}</Text>
                    <Text style={{flex:1,alignSelf: "center"}}>{`${item.price_change_24h.toFixed(2)}%`}</Text>
                    </View>
                    }
                />
                <View style={{flex: 1,alignItems: 'center',marginTop:0}}>
                    <Button>+ Add a Cryptocurrency</Button>
                </View>
            </View>);
    }
}
