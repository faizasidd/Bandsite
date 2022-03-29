const commentsArray = [
    {
      author: 'Miles Acosta',
      timestamp: '12/20/2020',
      text: 'I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.',
      img: ''
    },
    {
      author: 'Emilie Beach',
      timestamp: '01/09/2021',
      text: 'I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.',
      img: ''
    },
    {
      author: 'Connor Walton',
      timestamp: '02/17/2021',
      text: 'This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.',
      img: ''
    }
  ]

const displayComment = () => {
const commentContainer = document.querySelector('.comments__list');
commentContainer.innerHTML = ''; 

for (let i = commentsArray.length - 1; i >= 0; i--) {
const author = createElement('div','comment__author', commentsArray[i].author);
const timestamp = createElement('h3',
'comment__timestamp', commentsArray[i].timestamp);
const text = createElement('p','comment__text', commentsArray[i].text);
const img = createElement('img','comment__img', '', commentsArray[i].img);
const commentCard = createElement('div', 'comment');
    
commentCard.appendChild(img);
commentCard.appendChild(author);
commentCard.appendChild(timestamp);
commentCard.appendChild(text);
    
commentContainer.appendChild(commentCard);
}
}

document.addEventListener('DOMContentLoaded', () => {
displayComment();
  
const commentForm = document.querySelector('.com-form');
commentForm.addEventListener('submit', e => {
e.preventDefault();
  
commentsArray.push({
author: e.target.name.value,
timestamp: getDateString(new Date()),
text: e.target.comment.value,
img: './assets/images/Mohan-muruge.jpg'
});
  
e.target.comment.value = ''; // Clear the comment after posting, keep name
//e.target.name.value = '';
displayComment();
});
});

