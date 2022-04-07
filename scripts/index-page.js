const apiKey = "33c092c8-f84f-497b-9e06-b1f2c281ccdf";

// Creates HTML comment cards based off the above array

const displayComment = () => {
    const commentContainer = document.querySelector('.comments__list');
    while (commentContainer.hasChildNodes()) { // wipe all comments and regenerate
        commentContainer.removeChild(commentContainer.lastChild);
      }

    axios.get(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`)
    .then(response => {
        const commentsArray = response.data;
    for (let i = commentsArray.length - 1; i >= 0; i--) {
        const author = createElement('div',['comment__author'], commentsArray[i].author);
        const timestamp = createElement('h3',['comment__timestamp'], commentsArray[i].timestamp);
        const text = createElement('p',['comment__text'], commentsArray[i].text);
        const img = createElement('img',['comment__img'], '', commentsArray[i].img);

        const commentCard = createElement('div', ['comment']);

        commentCard.appendChild(img);
        commentCard.appendChild(author);
        commentCard.appendChild(timestamp);
        commentCard.appendChild(text);

        commentContainer.appendChild(commentCard);
    }
})
}

//  Creates HTML element with classname, content and src

const createElement = (elementType, className, content = '', src = '') => {
    let element = elementType === 'img' && !src
        ? document.createElement('div') // If img src is empty then create a div with same class (grey background)
        : document.createElement(elementType);
    let classList = className.split(' ');
    classList.forEach(className => {
        element.classList.add(className);
    });

    if (elementType === 'img' && src) {
        element.setAttribute('src', src);
    } else {
        element.innerText = content;
    }

    return element;
}

document.addEventListener('DOMContentLoaded', () => {
    displayComment();

    const commentForm = document.querySelector('.com-form');
    commentForm.addEventListener('submit', e => {
        e.preventDefault(); // prevent Refresh

    axios.post(`https://project-1-api.herokuapp.com/comments?api_key=${apiKey}`,
            {
              name: e.target.name.value,
              comment: e.target.comment.value
            }
          )
          .then(response => {
            displayComment();
          })
          .catch(error => {
            console.log(error);
          })

// Clear the comment after posting

        e.target.comment.value = ''; 
        
// Clear the name after posting

        e.target.name.value = ''; 
        
        displayComment();
    });
});

