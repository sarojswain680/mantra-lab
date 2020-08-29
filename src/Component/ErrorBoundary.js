import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true });
        logErrorToMyService(error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            <View>
                <Text>Something Went Wrong</Text>
            </View>;
        }

        return this.props.children;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'orange',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 20,
    },
});

export default ErrorBoundary;