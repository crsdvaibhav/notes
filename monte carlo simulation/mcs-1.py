# Monte Carlo Simulation helps visualize potential outcomes

"""
Example: A Gambling game where, if user rolls [1,50],
house wins, if he rolls [51,99] he wins, if he rolls
100 he losses. The house has a slight edge in this ex.
"""

import random
import matplotlib
import matplotlib.pyplot as plt


def rollDice():
    roll = random.randint(1,100)
    # print(roll)

    if roll == 100:
        return False
    elif roll <= 50:
        return False
    elif roll > 50 & roll < 100:
        return True

def simple_better(funds, initial_wager, wager_count):
    value = funds
    wager = initial_wager

    wX = []
    vY = []

    current_wager = 1

    while current_wager <= wager_count:
        if rollDice():
            value += wager
        else:
            value -= wager

        wX.append(current_wager)
        vY.append(value)

        current_wager += 1

    plt.plot(wX,vY)

# From 100 betters
x=0
while x<100:
    simple_better(10000, 100, 100000)
    x+=1

plt.ylabel('Account Value')
plt.xlabel('Wager Count')
plt.show()