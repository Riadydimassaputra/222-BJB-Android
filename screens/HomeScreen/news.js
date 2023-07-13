import React, { Component } from 'react'
import { View, Text, Image, ScrollView, SafeAreaView, StyleSheet, FlatList, TouchableOpacity, ActivityIndicator } from 'react-native'


class news extends Component{
    constructor(props){
        super(props);

        this.state ={
            data: [],
            isLoading: true, 
        };
    }

    componentDidMount(){
        fetch("http://api.mediastack.com/v1/news?access_key=25bc23801214d0190b836152acacfc50")
        .then((response) => response.json())
        .then((json) => this.setState({data:json.data}))
        .catch((error) => console.error(error))
        .finally(() => this.setState({isLoading:false}));
    }

    render(){
        const {data, isLoading} = this.state;
        

        return (
        <SafeAreaView style={styles.container}>
            {isLoading ?(
                <ActivityIndicator color="$c00"/>
            ):(
                <FlatList
                data={data}   
                keyExtractor={(item) => item.url + Math.random()}
                renderItem={({item}) => {
                    return <TouchableOpacity>
                        <View style={styles.newsItem}>
                            {/* left */}
                            <View>
                                <Image
                                source = {{uri:item.image}}
                                style = {styles.thumbnail}>

                                </Image>
                            </View>

                            {/* right */}
                            <View style={styles.rightSection}>
                            <Text style={styles.title}>{item.title} - </Text>
                                <Text style={styles.type}>{item.category} - </Text>
                                <Text style={styles.time}>{item.author}</Text>
                            </View>         
                        </View>
                    </TouchableOpacity>;
                }}/>
            )}
        </SafeAreaView>
    );
}
};


    const styles = StyleSheet.create({
        container : {
            flex :1,
            justifyContent:"center",
        },
        newsItem : {
            padding :15,
            borderColor : "black",
            borderWidth : 1,
            flex :1,
            flexDirection:"row",
        },
        thumbnail:{
            width:100,
            height:100
        },
        title:{
            fontSize:18,
            fontWeight:"bold",
        },
        rightSection:{
            flexShrink:1,
            paddingLeft:15, 
        },
        type:{
            fontSize:12,
            color: "#c00",
            fontWeight:"bold",
        },
        time:{
            fontSize:12,
        },
    });

    export default news;