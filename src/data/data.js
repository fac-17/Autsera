export default {
  places: [
    {
      id: 0,
      text: "Playground",
      icon: "/img/places_icons/Playground_icon.svg",
      requiredStars: 0,
      image: "/places_backgrounds/Playground.png",
      width: "20vw",
      coordinates: [42, 69],
      interactions: [
        {
          id: 1,
          text: "Leonie & Jan",
          question: [
            "Can you tell what Leonie and Jan are feeling?",
            "Select all the matching words"
          ],
          image: "/img/interactions/Slide_happy",
          coordinates: [39, 65],
          width: "30vw",
          requiredStars: 0,
          answers: [
            {
              id: 2,
              text: "Happy",
              correct: true,
              response: "Correct! They are having fun."
            },
            {
              id: 3,
              text: "Sad",
              correct: false,
              response: "Look again! Are they frowning?"
            },
            {
              id: 4,
              text: "Pleased",
              correct: true,
              response: "Correct! They are smiling."
            },
            {
              id: 5,
              text: "Crying",
              correct: false,
              response: "Look again! Can you see tears?"
            },
            {
              id: 6,
              text: "Gloomy",
              correct: false,
              response: "Look again! Are they smiling?"
            },
            {
              id: 7,
              text: "Angry",
              correct: false,
              response: "Look again! Are these angry faces?"
            },
            {
              id: 8,
              text: "Fighting",
              correct: false,
              response: "Look again! Are they having fun?"
            },
            {
              id: 9,
              text: "Cheerful",
              correct: true,
              response: "Correct! They look cheerful."
            }
          ],
          hints: [
            {
              id: 10,
              text: "Look at their faces, are they smiling?",
              answers: [2, 3]
            },
            {
              id: 11,
              text: "Look if they are having fun?",
              answers: [8, 4]
            },
            {
              id: 11,
              text: "Look if they are having fun?",
              answers: [9, 7]
            }
          ]
        },
        {
          id: 12,
          text: "Reuben & Christina",
          question: [
            "What can you say about this situation?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Fight_ball",
          width: "17vw",
          coordinates: [69, 48],
          requiredStars: 1,
          answers: [
            {
              id: 13,
              text: "Angry",
              correct: true,
              response: "Correct! They have an angry look."
            },
            {
              id: 14,
              text: "Having fun",
              correct: false,
              response: "Look again! Are they smiling?"
            },
            {
              id: 74,
              text: "Annoyed",
              correct: true,
              response: "Correct! They look annoyed."
            },
            {
              id: 75,
              text: "Surprised",
              correct: false,
              response: "Look again! How are they looking at each other?"
            },
            {
              id: 76,
              text: "Aggresive",
              correct: true,
              response: "Correct! They are nasty to each other."
            },
            {
              id: 77,
              text: "Friendly",
              correct: false,
              response: "Look again! Are they smiling at each other?"
            },
            {
              id: 91,
              text: "Sleepy",
              correct: false,
              response: "Look again! Do they have wide eyes?"
            },
            {
              id: 92,
              text: "Kind",
              correct: false,
              response: "Look again! Are they smiling at each other?"
            }
          ],
          hints: [
            {
              id: 15,
              text: "How are they looking at one another?",
              answers: [76]
            },
            {
              id: 216,
              text: "Why are they both holding the ball?",
              answers: [13]
            },
            {
              id: 217,
              text: "How are they looking at one another?",
              answers: [74]
            }
          ]
        },
        {
          id: 16,
          text: "Victor",
          question: [
            "Can you tell how Victor is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Slide",
          width: "25vw",
          coordinates: ["28", "5"],
          requiredStars: 2,
          answers: [
            {
              id: 17,
              text: "Scared",
              correct: true,
              response: "Correct! He looks scared."
            },
            {
              id: 18,
              text: "Calm",
              correct: false,
              response: "Look again! Look at his eyes and mouth!"
            },
            {
              id: 19,
              text: "Resting",
              correct: false,
              response: "Look again! Look at his eyes and mouth!"
            },
            {
              id: 20,
              text: "Frightened",
              correct: true,
              response: "Correct! He has a frightened look."
            },
            {
              id: 78,
              text: "Angry",
              correct: false,
              response: "Look again! Does he have angry eyes?"
            },
            {
              id: 79,
              text: "Nervous",
              correct: true,
              response: "Correct! He looks nervous."
            },
            {
              id: 80,
              text: "Aggresive",
              correct: false,
              response: "Look again! Does he scare you?"
            },
            {
              id: 81,
              text: "Surprised",
              correct: false,
              response: "Look again! Look at his eyes and mouth!"
            }
          ],
          hints: [
            {
              id: 218,
              text: "Look at his eyes!",
              answers: [17]
            },
            {
              id: 219,
              text: "Look at his mouth!",
              answers: [20]
            },
            {
              id: 220,
              text: "Look at his face, are they smiling?",
              answers: [79]
            }
          ]
        },
        {
          id: 82,
          text: "Oli & Jack",
          question: [
            "Can you tell how Jack is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Boys_ball",
          width: "15vw",
          coordinates: [41, 37],
          requiredStars: 3,
          answers: [
            {
              id: 83,
              text: "Suffering",
              correct: true,
              response: "Correct! He is suffering because of the wound!"
            },
            {
              id: 84,
              text: "Hurt",
              correct: true,
              response: "Correct! He is wounded!"
            },
            {
              id: 85,
              text: "In pain",
              correct: true,
              response: "Correct! His face shows he is in pain!"
            },
            {
              id: 86,
              text: "Happy",
              correct: false,
              response: "Look again! Is he smiling?"
            },
            {
              id: 87,
              text: "Amazed",
              correct: false,
              response: "Look again! Are his eyes bright?"
            },
            {
              id: 88,
              text: "Glad",
              correct: false,
              response: "Look again! Is he smiling?"
            },
            {
              id: 89,
              text: "Cruel",
              correct: false,
              response: "Look again! Does he have a cruel look?"
            },
            {
              id: 90,
              text: "Aggresive",
              correct: false,
              response: "Look again! Does he have a nasty look?"
            }
          ],
          hints: [
            {
              id: 221,
              text: "Look at his eyes!",
              answers: [85]
            },
            {
              id: 222,
              text: "Look at his mouth!",
              answers: [83]
            },
            {
              id: 223,
              text: "Look at his bent leg!",
              answers: [84]
            }
          ]
        },
        {
          id: 93,
          text: "Gregor",
          question: [
            "Can you tell what Gregor is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Isolation",
          width: "15vw",
          coordinates: [14, 53],
          requiredStars: 3,
          answers: [
            {
              id: 94,
              text: "Is sad",
              correct: true,
              response: "Correct! He has a sad look."
            },
            {
              id: 95,
              text: "Wants to join in play",
              correct: true,
              response: "Correct! He can’t take his eyes off them."
            },
            {
              id: 96,
              text: "Shy",
              correct: true,
              response: "Correct! He is rather shy."
            },
            {
              id: 97,
              text: "He does not like football",
              correct: false,
              response: "Look again! What is he looking at?"
            },
            {
              id: 98,
              text: "He likes to be on his own",
              correct: false,
              response: "Look again! Does he look happy?"
            },
            {
              id: 99,
              text: "He has to wait until the boys ask him to join",
              correct: false,
              response:
                "Think again! What do you do when you want to join in play?"
            }
          ],
          hints: [
            {
              id: 224,
              text: "Look at his eyes and brows!",
              answers: [94]
            },
            {
              id: 225,
              text: "What is he looking at?",
              answers: [95]
            },
            {
              id: 227,
              text: "Look at his eyes and brows!",
              answers: [96]
            }
          ]
        }
      ]
    },
    {
      id: 23,
      text: "School",
      requiredStars: 2,
      icon: "/img/places_icons/School_icon.svg",
      image: "/places_backgrounds/School.png",
      coordinates: [13, 44],
      width: "15vw",
      interactions: [
        {
          id: 24,
          text: "In the classroom",
          question: [
            "The teacher asked a question.",
            "Select all descriptions matching this situation"
          ],
          image: "/img/interactions/Classroom",
          width: "26vw",
          coordinates: [60, 53],
          answers: [
            {
              id: 25,
              text: "Not all kids know the answer",
              correct: true,
              response: "Correct!"
            },
            {
              id: 26,
              text: "Some kids are still thinking",
              correct: true,
              response: "Correct!"
            },
            {
              id: 27,
              text: "All kids know the answer",
              correct: false,
              response: "Look again."
            },
            {
              id: 28,
              text: "All kids do not know the answer",
              correct: false,
              response: "Look again.?"
            }
          ],
          hints: [
            {
              id: 29,
              text: "Look at their faces, are they smiling?",
              answers: [16, 17]
            },
            {
              id: 30,
              text: "Look if they are having fun?",
              answers: [14, 15]
            }
          ],
          requiredStars: 0
        },
        {
          id: 31,
          text: "At the blackboard",
          image: "/img/interactions/Blackboard",
          question: [
            "Can you tell what the kids are feeling?",
            "Select all the matching answers"
          ],
          coordinates: ["30", "51"],
          width: "18vw",
          answers: [
            {
              id: 32,
              text: "Tony does not know the answer",
              correct: true,
              response: "Correct! "
            },
            {
              id: 33,
              text: "Martha is excited",
              correct: true,
              response: "Correct!"
            },
            {
              id: 100,
              text: "Martha knows the answer",
              correct: true,
              response: "Correct!"
            },
            {
              id: 102,
              text: "Martha doesn't know the answer",
              correct: false,
              response: "Look again!"
            },
            {
              id: 103,
              text: "Tony knows the answer",
              correct: false,
              response: "Look again"
            },
            {
              id: 104,
              text: "Tony does not need any maths practice",
              correct: false,
              response: "Look again!"
            },
            {
              id: 105,
              text: "Martha needs a lot of maths practice",
              correct: false,
              response: "Look again"
            }
          ],
          hints: [
            {
              id: 34,
              text: "Look at his face, are they smiling?",
              answers: [21, 22]
            }
          ],
          requiredStars: 1
        },
        {
          id: 106,
          text: "Outside school",
          image: "/img/interactions/Bullying",
          question: ["The three girls are...?", "Select all matches"],
          width: "21vw",
          coordinates: ["66", "21"],
          answers: [
            {
              id: 107,
              text: "making fun of the girl",
              correct: true,
              response: "Correct! "
            },
            {
              id: 108,
              text: "cruel",
              correct: true,
              response: "Correct!"
            },
            {
              id: 109,
              text: "mean",
              correct: true,
              response: "Correct!"
            },
            {
              id: 110,
              text: "nice",
              correct: false,
              response: "Look again!"
            },
            {
              id: 111,
              text: "polite",
              correct: false,
              response: "Look again"
            },
            {
              id: 112,
              text: "kind",
              correct: false,
              response: "Look again!"
            },
            {
              id: 113,
              text: "caring",
              correct: false,
              response: "Look again"
            }
          ],
          hints: [],
          requiredStars: 2
        }
      ]
    },
    {
      id: 35,
      text: "Airport",
      icon: "/img/places_icons/Airport_icon.svg",
      requiredStars: 6,
      image: "/places_backgrounds/Airport.png",
      coordinates: [48, 27],
      width: "25vw",
      interactions: [
        {
          id: 36,
          text: "Emmanuel & Georgia",
          question: [
            "What is happening here?",
            "Select all the matching answers"
          ],
          image: "/img/interactions/Running",
          coordinates: [44, 37],
          width: "18vw",
          requiredStars: 0,
          answers: [
            {
              id: 37,
              text: "They are late for their flight",
              correct: true,
              response: "Correct! They look like they are late."
            },
            {
              id: 38,
              text: "They are running to the flight gate",
              correct: true,
              response: "Correct!"
            },
            {
              id: 39,
              text: "The flight gate will close soon",
              correct: true,
              response: "Correct!"
            },
            {
              id: 40,
              text: "They arrived early to the airport",
              correct: false,
              response: "Look again!"
            },
            {
              id: 141,
              text: "They are waiting at the flight gate",
              correct: false,
              response: "Look again!"
            },
            {
              id: 142,
              text: "Their flight gate is not open yet",
              correct: false,
              response: "Look again!"
            }
          ],
          hints: [
            {
              id: 41,
              text: "Look at their faces, are they smiling?",
              answers: [4, 5]
            },
            {
              id: 42,
              text: "Look if they are having fun?",
              answers: [2, 3]
            }
          ]
        },
        {
          id: 43,
          text: "Francesca & Andy",
          question: [
            "What is the situation here?",
            "Select all the matching answers"
          ],
          image: "/img/interactions/Hugging",
          coordinates: [74, 58],
          width: "12vw",
          requiredStars: 1,
          answers: [
            {
              id: 44,
              text: "Only one of them will travel",
              correct: true,
              response: "Correct! Only one will travel"
            },
            {
              id: 45,
              text: "They will miss each other",
              correct: true,
              response: "Correct!"
            },
            {
              id: 143,
              text: "They are at the airport",
              correct: true,
              response: "Correct!"
            },
            {
              id: 144,
              text: "They are travelling together",
              correct: false,
              response: "Look again!"
            },
            {
              id: 145,
              text: "One of them is waiting for his train",
              correct: false,
              response: "Look again!"
            },
            {
              id: 146,
              text: "They have just met for the first time",
              correct: false,
              response: "Look again!"
            }
          ],
          hints: [
            {
              id: 46,
              text: "Look at his face, are they smiling?",
              answers: [9, 10]
            }
          ]
        },
        {
          id: 47,
          text: "Gigi & Christine",
          question: ["The girls are...?", "Select all the matching answers"],
          image: "/img/interactions/Talking",
          coordinates: [14, 43],
          width: "28vw",
          requiredStars: 2,
          answers: [
            {
              id: 48,
              text: "They are friends",
              correct: true,
              response: "Good!"
            },
            {
              id: 49,
              text: "They are travelling together",
              correct: true,
              response: "Correct!"
            },
            {
              id: 50,
              text: "They are waiting for their flight",
              correct: true,
              response: "Correct"
            },
            {
              id: 51,
              text: "They do not know each other",
              correct: false,
              response: "Look again"
            },
            {
              id: 148,
              text: "They are watching a movie",
              correct: false,
              response: "Look again"
            },
            {
              id: 149,
              text: "They are in a train station",
              correct: false,
              response: "Look again"
            }
          ],
          hints: [
            {
              id: 52,
              text: "Look at the names of them",
              answers: [25, 26]
            },
            {
              id: 53,
              text: "Least bad of them",
              answers: [27, 28]
            }
          ]
        }
      ]
    }
  ],
  meta: {
    sequence: 73
  }
};
