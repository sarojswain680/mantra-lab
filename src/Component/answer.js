import React, { Component } from 'react';
import { ActivityIndicator, FlatList, RefreshControl, View } from 'react-native';
import Card from '../Common/Card';
import Data from '../Component/data.json';
import styles from './ListStyles';

class Answer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refresh: false,
            data: Data.quiz[0],
            answer: []
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


    componentDidMount = () => {
        const answer = this.props.navigation.state.params.answer;
        this.setState({ answer: answer })
    }

    onPullDown = () => {
        this.setState({ refresh: true });
        this.setState({ refresh: false });
    };


    renderItem = ({ item }) => {
        return (
            <Card
                question={item.question}
                id={item.id}
                showAnswer={true}
                value={item.value}
                correctoption={item.correctoption}
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
                            data={this.state.answer}
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
            </View>
        );
    }
}

export default Answer;