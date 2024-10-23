import { useState } from 'react';
import { Dimensions } from 'react-native';

const screenWidth = Dimensions.get('window').width;

export const UseForm = (initialWidth = 70) => {
    const [text, setText] = useState('');


    const handleTextChange = (inputText: string) => {
        setText(inputText);
    };

    return {
        text,

        handleTextChange,
    };
};
