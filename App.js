import React, { Component } from 'react'
import Header from './src/components/Header'
import {View, Text } from 'react-native'
import Post from './src/components/Post'

export default class App extends Component {
    render() {
		const comments = [{
			nickname: 'john Cenaaaa',
			comment: 'Johnnnnn Cenaaaaaaaaaa!!!'
		},
		{
			nickname: 'Cachorrin fiadaputa',
			comment: 'ele faz muita bagunça'
		}]
		
		return(
			<View style = {{flex: 1 }}>
				<Header />
				<Post image = {require('./assets/imgs/fence.jpg')}
					comments={comments}
				/>
			</View>
		)
    }
}