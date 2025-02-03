# PetersPlace!

PetersPlace was inspired by PartyPoker of old but due to time limitations the poker logic was cut. In it's current iteration, it features anonymous chat with no messages saved on a database, following users and creating gametables which function as chat rooms.

## Live site

https://peterpoker.fly.dev/

## Technologies used

- ### Frontend
  - CSS, Javascript, React, Redux
- ### Backend
  - Flask, SQLAlchemy, Python, PostgreSQL

## Screenshots

### Splash Page/Signup

![splash](https://user-images.githubusercontent.com/30166373/139664119-c7f1711d-ea94-4e86-b741-8e51ea2b2858.png)

### Home Page

![home](https://user-images.githubusercontent.com/30166373/139664102-712c0ff3-e6c1-4c01-a20b-b07cf7f322e6.png)

### Chat Page

![chat](https://user-images.githubusercontent.com/30166373/139664097-36cbe936-aff0-47a2-bc9c-85480eb5f70b.png)


### Profile Page

![profile](https://user-images.githubusercontent.com/30166373/139664090-f5d94dd8-5695-45be-bc57-b049f605043b.png)

## Features

Users are able to create a game table which currently functions as chat room. Upon entering the socket will emit a join msg to that particular room. Each gametable is associated with a different room. Users can also follow other users and post/edit/delete comments on their profile page.

## Challenges

- Application Design

  - Designing a poker game logic from scratch proved difficult under the time constraints. The app does have code for a card/deck/player classes but decided to pivot to a simple chat app (websockets) to create a base for future projects. Finding reference material was also difficult.

  - Had issues with the database with multiple foreign keys refs. Learnt I should pivot faster and use a different schema if it also works.

- Working with Redux Store

  - PetersPlace is my third project with Redux. I am getting more comfortable with using it but still had a few issues in this project. There are a few places I would like to refactor the organization of my components and the shape of redux state.

- Working with Websockets

  - Using websockets for the first time was a welcome challenge. Creating events for broadcasting has shown me a path to attach poker logic for future expansion.

  - Creating custom events for websockets becomes a huge task. Will definitely need more practice for more advanced websocket functionality.


```Python
class Card(object):
    def __init__(self, name, value, suit):
        self.value = value
        self.suit = suit
        self.name = name
        self.showing = True

    def __repr__(self):
        if self.showing:
            return f"{self.name} of {self.suit}"
        else:
            return "Card"

class Deck(list):
    def __init__(self):
        suits = ['Hearts', 'Spades', 'Diamonds', 'Clubs']
        values = {'Two': 2, 'Three': 3, 'Four': 4, 'Five': 5, 'Six': 6, 'Seven': 7, 'Eight': 8, 'Nine': 9, 'Ten': 10, 'Jack': 11, 'Queen': 12, 'King': 13, 'Ace': 14}

        for objkey in values:
            for suit in suits:
                self.append(Card(objkey, values[objkey], suit))

    def __repr__(self):
        return f"Deck with {len(self)} cards left"


    def shuffle(self):
        random.shuffle(self)
        return f"Deck shuffled"

    def deal(self):
        return self.pop()
```
