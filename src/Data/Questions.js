const base = '/';

const Questions = [{
    id: 1,
    Name: '题一',
    TotalAnswered: 5,
    Correct: 13,
    Wrong: 2,
    correctAnswer: "A",
    NamesAll: ['赵一','赵二','赵三','赵四','赵五'],
    Correct_Names: ['赵一','赵二','赵三',],
    Wrong_Names: ['赵四','赵五'],
    ChooseA: ['赵一','赵二','赵三',],
    ChooseB: ['赵五'],
    ChooseC: ['赵四'],
    ChooseD: null,
    url: base + '1',
    image: 'https://jsonplaceholder.typicode.com/photos/1'
},{
    id: 2,
    Name: '题二',
    TotalAnswered: 5,
    Correct: 3,
    Wrong: 12,
    correctAnswer: "A",
    NamesAll: ['赵一','赵二','赵三','赵四','赵五'],
    Correct_Names: ['赵一','赵二','赵三',],
    Wrong_Names: ['赵四','赵五'],
    ChooseA: ['赵一','赵二','赵三',],
    ChooseB: ['赵五'],
    ChooseC: ['赵四'],
    ChooseD: null,
    url: base + '2',
    image: 'https://jsonplaceholder.typicode.com/photos/2'
},{
    id: 3,
    Name: '题三',
    TotalAnswered: 5,
    Correct: 13,
    Wrong: 11,
    correctAnswer: "A",
    NamesAll: ['赵一','赵二','赵三','赵四','赵五'],
    Correct_Names: ['赵一','赵二','赵三',],
    Wrong_Names: ['赵四','赵五'],
    ChooseA: ['赵一','赵二','赵三',],
    ChooseB: ['赵五'],
    ChooseC: ['赵四'],
    ChooseD: null,
    url: base + '3',
    image: 'https://jsonplaceholder.typicode.com/photos/3'
},{
    id: 4,
    Name: '题四',
    TotalAnswered: 5,
    Correct: 15,
    Wrong: 2,
    correctAnswer: "A",
    NamesAll: ['赵一','赵二','赵三','赵四','赵五'],
    Correct_Names: ['赵一','赵二','赵三',],
    Wrong_Names: ['赵四','赵五'],
    ChooseA: ['赵一','赵二','赵三',],
    ChooseB: ['赵五'],
    ChooseC: ['赵四'],
    ChooseD: null,
    url: base + '4',
    image: 'https://jsonplaceholder.typicode.com/photos/4'
}]

export default Questions;