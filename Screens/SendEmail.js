import React from 'react'
import { StyleSheet, Button, View } from 'react-native'
import email from 'react-native-email'

export default class SendEmail extends React.Component {

    state = {
        label : this.props.route.params.clicked
    }
    render() {
        return (
            <View style={styles.container}>
                <Button title="Send Mail" onPress={this.handleEmail} />
            </View>
        )
    }

    updateState() {

    }

    handleEmail = () => {
        const to = ['dayo.atobiloye@pzcussons.com', 'kabiru.yusuf@pzcussons.com'] // string or array of email addresses
        email(to, {
            // Optional additional arguments
            //cc: ['bazzy@moo.com', 'doooo@daaa.com'], // string or array of email addresses
            //bcc: 'mee@mee.com', // string or array of email addresses
            subject: 'Label',
            body : this.props.route.params.clicked
        }).catch(console.error)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
})