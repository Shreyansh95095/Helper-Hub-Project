import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet, ActivityIndicator, Alert } from 'react-native';
import axios from 'axios';
import { Ionicons } from '@expo/vector-icons';
import { url } from '../../config/env';

const Notifications = ({ navigation }) => {
    const [notifications, setNotifications] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // TODO: Replace this hardcoded userId with a dynamic value from your authentication context or user session.
    // For example, if you have an AuthContext providing the userId:
    // const { userId } = useAuth(); 
    // const userId = '673aff26f236a02c4995dca8';
    const userId = axios.get(`${url}/u/${_id}`);

    const getNotifications = async () => {
        try {
            
            setLoading(true);
            setError(null);
            const response = await axios.get(`${url}/notifications/${userId}`);
            setNotifications(response.data.notifications);
        } catch (err) {
            console.error('Error fetching notifications:', err);
            setError('Failed to load notifications. Please try again later.');
            Alert.alert('Error', 'Failed to load notifications. Please check your network connection.');
        } finally {
            setLoading(false);
        }
    };

    const markAsRead = async (notificationId) => {
        try {
            await axios.post(`${url}/notifications/read/${notificationId}`);
            getNotifications(); // Refresh notifications list after marking as read
        } catch (err) {
            console.error('Error marking notification as read:', err);
            Alert.alert('Error', 'Failed to mark notification as read. Please try again.');
        }
    };

    useEffect(() => {
        if (userId) {
            getNotifications();
        } else {
            setError('User ID not available. Please log in.');
            setLoading(false);
        }
    }, [userId]);

    const renderNotification = ({ item }) => (
        <TouchableOpacity
            style={styles.notificationCard}
            onPress={() => markAsRead(item._id)}
            disabled={item.isRead} // Disable touch if already read
        >
            <Text style={item.isRead ? styles.readText : styles.unreadText}>{item.message}</Text>
            {!item.isRead && (
                <Ionicons name="ellipse" size={10} color="blue" style={styles.unreadIndicator} />
            )}
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            {loading && <ActivityIndicator size="large" color="#0000ff" style={styles.loadingIndicator} />}
            {error && <Text style={styles.errorText}>{error}</Text>}
            {!loading && !error && (
                <FlatList
                    data={notifications}
                    renderItem={renderNotification}
                    keyExtractor={(item) => item._id}
                    ListEmptyComponent={<Text style={styles.emptyText}>No notifications yet.</Text>}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#F5F5F5',
    },
    notificationCard: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
        backgroundColor: '#fff',
        borderRadius: 5,
        marginBottom: 10,
        flexDirection: 'row', // Added for unread indicator
        alignItems: 'center', // Added for unread indicator
    },
    unreadText: {
        fontWeight: 'bold',
        color: '#333',
        flex: 1, // Allow text to take available space
    },
    readText: {
        color: '#777',
    },
    emptyText: {
        textAlign: 'center',
        marginTop: 20,
        color: '#888',
    },
    loadingIndicator: {
        marginTop: 20,
    },
    errorText: {
        textAlign: 'center',
        color: 'red',
        marginTop: 20,
    },
    unreadIndicator: {
        marginLeft: 5, // Space between text and indicator
    },
});

export default Notifications;
