import {useState} from 'react'
import './Content.css'

let quotes = [
    {
        title: 'The purpose of our lives is to be happy.',
        author: 'Dalai Lama',
    },
    {
        title: 'Life is what happens when you\'re busy making other plans.',
        author: 'John Lennon',
    },
    {
        title: 'Get busy living or get busy dying.',
        author: 'Stephen King',
    },
    {
        title: 'You only live once, but if you do it right, once is enough.',
        author: 'Mae West',
    },
    {
        title: 'If you want to live a happy life, tie it to a goal, not to people or things.',
        author: 'Albert Einstein',
    },
    {
        title: 'Never let the fear of striking out keep you from playing the game.',
        author: 'Babe Ruth',
    },
    {
        title: 'Money and success don\'t change people; they merely amplify what is already there.',
        author: 'Will Smith',
    },
    {
        title: 'Not how long, but how well you have lived is the main thing.',
        author: 'Seneca',
    },
];

let tempQuotes = [];
let colorBgs = ['#337357', '#3E5C76', '#748CAB', '#994636', '#895B1E', 
'#DBD8AE', '#F49E4C', '#AB3428', '#2D728F', '#401F3E', '#453F78', '#EB9FEF',
'#011C27', '#36382E', '#DAA89B', '#CB429F', '#6F2DBD', '#A663CC',
'#EEF36A', '#98B9AB', '#E8985E', '#899D78', '#2F2F2F', '#F18F01', '#99C24D'];
let tempColorBgs = [];
function Content(){
    const [title, setTitle] = useState('' || 'Welcome to random quote');
    const [author, setAuthor] = useState('' || 'unknown');
    const [color, setColor] = useState('red');

    const handleChange = () => {
        if(quotes.length === 1){
            const indexQuote = Math.floor(Math.random() * quotes.length);
            const itemQuote = quotes[indexQuote];
            quotes.splice(indexQuote,1);  
            quotes = [...tempQuotes];
            tempQuotes = [];
            tempQuotes.push(itemQuote);
            setTitle(itemQuote.title);
            setAuthor(itemQuote.author);
            
        }
        else{
            const indexQuote = Math.floor(Math.random() * quotes.length);
            const itemQuote = quotes[indexQuote];
            quotes.splice(indexQuote,1);  
            console.log('else ' + quotes.length + " " + itemQuote.author);
            tempQuotes.push(itemQuote);
            setTitle(itemQuote.title);
            setAuthor(itemQuote.author);
        }
        if(colorBgs.length === 1){
            const indexColor = Math.floor(Math.random() * colorBgs.length);
            const itemColor = colorBgs.splice(indexColor,1);
            colorBgs = [...tempColorBgs];
            tempColorBgs = [];
            tempColorBgs.push(itemColor);
            setColor(itemColor);
        }
        else{
            const indexColor = Math.floor(Math.random() * colorBgs.length);
            const itemColor = colorBgs.splice(indexColor,1);
            tempColorBgs.push(itemColor);
            setColor(itemColor);
        }
    }
    
    //console.log(tempQuotes);

    const colorStyle = {
        color : color,
    };
    const btnStyle = {
        backgroundColor : color,
    };
    
    const bodyQuoteStyle = {
        border: `1px solid ${color}`,
        boxShadow: `10px 10px ${color}`,
    }
    return (
        <div className='body-quote' style={bodyQuoteStyle}>
            <p className='content-quote' style={colorStyle}>{title}</p>
            <p className='author-quote' style={colorStyle}>- {author}</p>
            <button onClick={handleChange} className='btn-change' style={btnStyle}>New quote!!</button>
        </div>
    )
}

export default Content;