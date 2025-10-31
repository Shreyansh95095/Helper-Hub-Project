import { ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

function Messages() {
    return (
        <ScrollView>
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text style={styles.title}>Messages</Text>
                    <View style={styles.search}>
                        <TextInput style={styles.searchInput} placeholder='Search' />
                    </View>
                    <View style={styles.active}>
                        <Text style={styles.activeText}>Active</Text>
                        <ScrollView horizontal={true}>
                            <View style={styles.activeUsers}>
                                <View style={styles.activeUserVew}></View>
                                <View style={styles.activeUserVew}></View>
                                <View style={styles.activeUserVew}></View>
                                <View style={styles.activeUserVew}></View>
                                <View style={styles.activeUserVew}></View>
                                <View style={styles.activeUserVew}></View>
                            </View>
                        </ScrollView>
                    </View>
                    <View style={styles.messages}>
                        <Text style={styles.messagesText}>Messages</Text>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View>
                            </View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                            <View style={styles.messagesView}>
                                <View style={styles.messagesUserProfileImg}></View>
                                <View style={styles.messagesUserInfo}>
                                    <Text style={styles.messagesUserName}>John Doe</Text>
                                    <Text style={styles.messagesUserMessage}>Hello, how are you?</Text>
                                </View></View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default Messages

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 15,
        width: '100%',
        height: '100%'
    },
    header: {
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 20,
        fontWeight: '600',
        color: '#000',
        marginLeft: '40%'
    },
    search: {
        width: '100%',
        height: 50,
        backgroundColor: '#D9D9D9',
        borderRadius: 10,
        paddingLeft: 15,
        marginTop: 20,
    },
    searchInput: {
        width: '100%',
        height: 50,
        fontSize: 15,
        fontWeight: '700',
        color: '#000'
    },
    active: {
        marginTop: 20,
    },
    activeText: {
        fontSize: 23,
        fontWeight: '500',
        color: '#000'
    },
    activeUsers: {
        display: 'flex',
        flexDirection: 'row',
        height: 100,
        gap: 15,
        marginTop: 20,
    },
    activeUserVew: {
        height: 80,
        width: 80,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    messages: {
        marginTop: 20,
        height: '100%',
    },
    messagesText: {
        fontSize: 23,
        fontWeight: '500',
        color: '#000',
    },
    messagesView: {
        display: 'flex',
        flexDirection: 'row',
        gap: 20,
        height: 100,
        width: '100%',
        padding: 10,
    },
    messagesUserProfileImg: {
        height: 70,
        width: 70,
        backgroundColor: '#D9D9D9',
        borderRadius: 50,
    },
    messagesUserInfo: {
        height: '100%',
        width: '100%',
        alignItems: 'flex-start',
        justifyContent: 'center',
        gap: 5,
    },
    messagesUserName: {
        fontSize: 23,
        fontWeight: '500',
        color: '#000',
    },
    messagesUserMessage: {
        fontSize: 15,
        fontWeight: '400',
        color: '#000',
    },
})
