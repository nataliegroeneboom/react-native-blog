import React, {useContext} from 'react';
import {View, Text, StyleSheet, FlatList, Button, TouchableOpacity} from 'react-native';
import { Form, TextValidator } from 'react-native-validator-form';
import {Feather} from '@expo/vector-icons';
import {Context} from '../context/BlogContext'


const IndexScreen = ({navigation}) => {

        const {state, addBlogPost, deleteBlogPost} = useContext(Context)

        return (
            <View>   
                <FlatList 
                    data={state}
                    keyExtractor={(blogPost) => blogPost.title}
                    renderItem={({item}) =>{
                    return (<TouchableOpacity 
                                onPress={() => navigation.navigate('Show', {id: item.id})}>
                                <View style={styles.row}><Text style={styles.title}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity onPress={
                                            () => deleteBlogPost(item.id)
                                            }>
                                            <Feather style={styles.icon} name="trash" />
                                    </TouchableOpacity>
                                </View>
                        </TouchableOpacity>)
                    } }
                    />
                    <Form
                        ref="form"
                        onSubmit={this.handleSubmit}
                    >
                        <TextValidator
                            name="email"
                            label="email"
                            validators={['required', 'isEmail']}
                            errorMessages={['This field is required', 'Email invalid']}
                            placeholder="Your email"
                            type="text"
                            keyboardType="email-address"
                            value={email}
                            onChangeText={this.handleChange}
                        />
                         <Button
                            title="Submit"
                            onPress={this.handleSubmit}
                        />
                    </Form>
            </View>
          )
    
  
}

IndexScreen.navigationOptions = ({navigation}) => {
    return {
        headerRight: <TouchableOpacity 
        onPress= {() => navigation.navigate('Create')}>
                        <Feather name="plus" size={30} />
                    </TouchableOpacity>
    };
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        paddingHorizontal: 10,
        borderTopWidth: 1,
        borderColor: 'gray'
    },
    title: {
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
});


export default IndexScreen;