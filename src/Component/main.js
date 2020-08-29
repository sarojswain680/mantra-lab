import React, { Component } from 'react';
import { ActivityIndicator, Button, FlatList, RefreshControl, View } from 'react-native';
import Card from '../Common/Card';
import Data from '../Component/data.json';
import styles from './ListStyles';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            data: Data.quiz[0],
            value: []
        };
    }

    static navigationOptions = {
        title: 'React Quiz',
        headdingStyle: {
            fontWeight: '300',
        },
        headerStyle: {
            backgroundColor: '#3db0f7',
        },
        headerTitleStyle: { alignSelf: 'center', color: 'white' },
    };

    onPullDown = () => {
        this.setState({ refresh: true });
        this.setState({ refresh: false });
    };

    onSubmit = (id, value, correctoption, question) => {
        const data = {
            id: id,
            value: value,
            correctoption: correctoption,
            question: question
        }
        const newData = [...this.state.value, data]
        this.setState({ value: newData })
    }

    renderItem = ({ item }) => {
        return (
            <Card
                question={item.question}
                options={item.options}
                onPress={(value) => this.onSubmit(item.id, value, item.correctoption, item.question)}
            />
        );
    };
    render() {
        return (
            <View style={styles.container}>
                {this.props.loading ? (
                    <ActivityIndicator
                        style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}
                        size="large"
                        color="black"
                    />
                ) : (
                        <FlatList
                            data={this.state.data}
                            renderItem={(item) => this.renderItem(item)}
                            keyExtractor={(item, index) => index.toString()}
                            refreshControl={
                                <RefreshControl
                                    refreshing={this.state.refresh}
                                    onRefresh={this.onPullDown}
                                />
                            }
                        />
                    )}
                <Button
                    onPress={() => this.props.navigation.navigate("Answer", { answer: this.state.value })}
                    title="Submit"
                    color="#841584"
                />
            </View>
        );
    }
}

export default Main;