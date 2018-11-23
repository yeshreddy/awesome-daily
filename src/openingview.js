import React from 'react';
import { Text, AppRegistry, View, StyleSheet } from 'react-native';


export class OpeningView extends React.Component{
    render() {
        return (
            <View style={styles.container}>
                <View style = {styles.titler}>
                    <View style={{ flex:1, flexDirection:'row', backgroundColor: 'skyblue'}} >
                        <View style={{  width:50, backgroundColor: 'powderblue'}} />
                        <View style={{ justifyContent:'center'}} >
                            <Text style={styles.appTitle}> Awesome Daily </Text>
                        </View>
                    </View>
                </View>
            </View> 
        );
      }
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#f2f2f2',
    },
    titler: {
        height: 70,
        flexDirection:'row', 
        backgroundColor: 'red' 
    },
    appTitle :{
        fontSize: 20,
        fontWeight: 'bold',
        padding:20,
        color:'#808000'
    }
    
  });


AppRegistry.registerComponent('awesome', () => OpeningView);