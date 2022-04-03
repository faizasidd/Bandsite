// Creates Array of Show objects

const showsArray = [
    {
        date: 'Mon Sept 06 2021',
        venue: 'Ronald Lane',
        location: 'San Francisco, CA',
    },
    {
        date: 'Tue Sept 21 2021',
        venue: 'Pier 3 East',
        location: 'San Francisco, CA',
    },
    {
        date: 'Fri Oct 15 2021',
        venue: 'View Lounge',
        location: 'San Francisco, CA',
    },
    {
        date: 'Sat Nov 06 2021',
        venue: 'Hyatt Agency',
        location: 'San Francisco, CA',
    },
    {
        date: 'Fri Nov 26 2021',
        venue: 'Moscow Center',
        location: 'San Francisco, CA',
    },
    {
        date: 'Wed Dec 15 2021',
        venue: 'Pres Club',
        location: 'San Francisco, CA',
    },
];

// Create show cards based on the above array

const displayShows = () => {
    const showContainer = document.querySelector('.shows__list');
   // showContainer.innerHTML = '';

// Labels

      const labels = document.createElement('div');
      labels.classList.add('labels');
      dateLabel = document.createElement('h3');
      dateLabel.classList.add('show-card__labels');
      dateLabel.innerText = 'DATE';
      venueLabel = document.createElement('h3');
      venueLabel.classList.add('show-card__labels', 'show-card__labels--venue');
      venueLabel.innerText = 'VENUE';
      locationLabel = document.createElement('h3');
      locationLabel.classList.add('show-card__labels', 'show-card__labels--location');
      locationLabel.innerText = "LOCATION";
  
      labels.appendChild(dateLabel);
      labels.appendChild(venueLabel);
      labels.appendChild(locationLabel);
  
      showContainer.appendChild(labels);
    
// Function

    showsArray.forEach((show) => {
    dateLabel = document.createElement('h3');
    dateLabel.classList.add('show-card__label');
    dateLabel.innerText = 'Date';
     venueLabel = document.createElement('h3');
     venueLabel.classList.add('show-card__label', 'show-card__label--venue');
     venueLabel.innerText = 'Venue';
     locationLabel = document.createElement('h3');
     locationLabel.classList.add('show-card__label', 'show-card__label--location');
     locationLabel.innerText = 'Location';
  
// Create date, venue and location class

const date = document.createElement('h3');
date.classList.add('show-card__date');
date.innerText = show.date;
const venue = document.createElement('p');
venue.classList.add('show-card__text');
venue.innerText = show.venue;
const location = document.createElement('p');
location.classList.add('show-card__text');
location.innerText = show.location;
const button = document.createElement('button');
button.classList.add('btn', 'btn--ticket');
button.innerText = 'Buy Tickets';

const showCard = document.createElement('div');
showCard.classList.add('show-card');

    showCard.appendChild(dateLabel);
    showCard.appendChild(date);
    showCard.appendChild(venueLabel);
    showCard.appendChild(venue);
    showCard.appendChild(locationLabel);
    showCard.appendChild(location);
    showCard.appendChild(button);

    showContainer.appendChild(showCard);
})
}

// Clicking on an individual row "selected" or "active"

const onClick = (event) => {
    const clickedElement = event.target;
    clickedElement.classList.add('show-card__active');
  }

document.addEventListener("click", onClick);

    displayShows();
