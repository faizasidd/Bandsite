const apiKey = "33c092c8-f84f-497b-9e06-b1f2c281ccdf";

// Create show cards based on the above array

const displayShows = () => {
    const showContainer = document.querySelector('.shows__list');

    // Labels

    const labels = document.createElement('div');
    labels.classList.add(['labels']);
    dateLabel = document.createElement('h3');
    dateLabel.classList.add(['show-card__labels']);
    dateLabel.innerText = 'DATE';
    venueLabel = document.createElement('h3');
    venueLabel.classList.add(['show-card__labels'], ['show-card__labels-venue']);
    venueLabel.innerText = 'VENUE';
    locationLabel = document.createElement('h3');
    locationLabel.classList.add(['show-card__labels'], ['show-card__labels-location']);
    locationLabel.innerText = "LOCATION";

    labels.appendChild(dateLabel);
    labels.appendChild(venueLabel);
    labels.appendChild(locationLabel);

    showContainer.appendChild(labels);

    // Function

    axios.get(`https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`)
        .then(response => {
            console.log(response.data);
            response.data.forEach((show) => {
                dateLabel = document.createElement('h3');
                dateLabel.classList.add(['show-card__label']);
                dateLabel.innerText = 'Date';
                venueLabel = document.createElement('h3');
                venueLabel.classList.add(['show-card__label'], ['show-card__label-venue']);
                venueLabel.innerText = 'Venue';
                locationLabel = document.createElement('h3');
                locationLabel.classList.add(['show-card__label'], ['show-card__label-location']);
                locationLabel.innerText = 'Location';

                // Show date in a Weekday Month Date Year format

                const numDate = parseInt(show.date);
                const newDate = new Date(numDate);
                const weekday = newDate.toLocaleString("en-ca", { weekday: "short" });
                const month = newDate.toLocaleString("en-ca", { month: "short" });
                const day = newDate.getDate();
                const year = newDate.getFullYear();
                const dateOne = weekday + ' ' + month + ' ' + day + ' ' + year;


                // Create date, venue and location class

                const date = document.createElement('h3');
                date.classList.add(['show-card__date']);
                date.innerText = dateOne;
                const place = document.createElement('p');
                place.classList.add(['show-card__text']);
                place.innerText = show.place;
                const location = document.createElement('p');
                location.classList.add(['show-card__text']);
                location.innerText = show.location;
                const button = document.createElement('button');
                button.classList.add(['btn'], ['btn--ticket']);
                button.innerText = 'Buy Tickets';

                const showCard = document.createElement('div');
                showCard.classList.add('show-card');
                showCard.addEventListener("click", onClick);

                showCard.appendChild(dateLabel);
                showCard.appendChild(date);
                showCard.appendChild(venueLabel);
                showCard.appendChild(place);
                showCard.appendChild(locationLabel);
                showCard.appendChild(location);
                showCard.appendChild(button);

                showContainer.appendChild(showCard);
            })
        }).catch(error => {
            console.log(error);
        })
}

// Clicking on an individual row "selected" or "active"

const elements = document.querySelectorAll('show-card');

const onClick = (event) => {
    const clickedElement = event.currentTarget;
    clickedElement.classList.add('show-card__active');

    for (let i = 0; i < elements.length; i++) {
        if (clickedElement !== elements) {
            clickedElement.classList.remove('show-card__active');
        } else {
            clickedElement.classList.add('show-card__active');
        }
    }
}

displayShows();
