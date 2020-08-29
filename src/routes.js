import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Answer from './Component/answer';
import Main from './Component/main';

const Router = createStackNavigator({
    Main: {
        screen: Main,
    },
    Answer: {
        screen: Answer,
    },
});

export const AppRouter = createAppContainer(Router);