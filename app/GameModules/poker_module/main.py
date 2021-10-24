import random
# import this #can i use this to block access to data? will code still work?

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

# card = Card(2, 'Hearts')
# print(card.value)
# print(card.suit)
# print(card)

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


class Player(object):
    def __init__(self, name):
        self.name = name
        self.hand = []

    def __repr__(self):
        return f"Player {self.name} has {len(self.hand)} cards"

    def draw(self, deck):
        self.hand.append(deck.deal())
        return f"{self.name} drew a {self.hand[-1]}"

    def discard(self):
        return self.hand.pop()

    def cardCount(self):
        return len(self.hand)

    def checkHand(self):
        values = [Card.value for Card in self.hand]
        return list(values)

    def checkSuits(self):
        suits = [Card.suit for Card in self.hand]
        return list(suits)

    # def straight(self):
    #     values = [Card.value for Card in self.hand]
    #     values.sort()
    #     if values == [2, 3, 4, 5, 14]:
    #         return True
    #     for i in range(len(values) - 1):
    #         if values[i] + 1 != values[i + 1]:
    #             return False
    #     return True

    # def pairs(self):
    #     values = [Card.value for Card in self.hand]
    #     values.sort()
    #     pairs = []
    #     for i in range(len(values) - 1):
    #         if values[i] == values[i + 1]:
    #             pairs.append(values[i])
    #     return pairs

    # def highCard(self):
    #     values = [Card.value for Card in self.hand]
    #     values.sort()
    #     return values[-1]



class PokerScorer(object):
    def __init__(self, cards):
        if not len(cards) == 5:
            return "Need 5 cards to evaluate!"
        self.cards = cards

    def checkSuits(self):
        suits = [Card.suit for Card in self.cards]
        # return list(set(suits))
        if len(set(suits)) == 1:
            return "Flush"
        else:
            return list(set(suits))

    def straight(self):
        values = [Card.value for Card in self.cards]
        values.sort()
        if values == [2, 3, 4, 5, 14]:
            return True
        for i in range(len(values) - 1):
            if values[i] + 1 != values[i + 1]:
                return False
        return True

    def straightFlush(self):
        if self.straight() and self.checkSuits() == "Flush":
            return True
        else:
            return False

    def pairs(self):
        values = [Card.value for Card in self.cards]
        values.sort()
        pairs = []
        for i in range(len(values) - 1):
            if values[i] == values[i + 1]:
                pairs.append(values[i])
        return pairs

    def highCard(self):
        values = [Card.value for Card in self.cards]
        values.sort()
        return values[-1]

    



# deck = Deck()
# print(deck.shuffle())
# print(deck)
# # print(len(deck))
# deck.pop()
# print(deck)
# print(deck.pop())
# randomCard = deck.pop()
# print(randomCard)
# randomCard.showing = True
# print(randomCard)
# player = Player('test')
# print(player)
# print(player.draw(deck))
# print(player.hand)
# print(player)
# print(player.draw(deck))
# print(player.draw(deck))
# print(player.draw(deck))
# print(player.draw(deck))
# print(player.hand)
# print('--------------------------')
# print(player.checkSuits())
# print(player.checkHand())
# # print(player.pairs(), 'pairs')
# # print(player.highCard(), 'highcard')
# print('--------------------------')
# print(player.cardCount())