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
          coordinates: [20, 66],
          width: "25vw",
          radius: 12,
          requiredStars: 0,
          answers: [
            {
              id: 2,
              text: "Happy",
              correct: true,
              response: "Correct! They look like they are happy"
            },
            {
              id: 3,
              text: "Sad",
              correct: false,
              response: "Look again! Do they look like they are sad?"
            },
            {
              id: 4,
              text: "Pleased",
              correct: true,
              response: "Correct! They look pleased"
            },
            {
              id: 5,
              text: "Crying",
              correct: false,
              response: "Look again? Focus on their eyes"
            },
            {
              id: 6,
              text: "Gloomy",
              correct: false,
              response: "Look again, are they sad?"
            },
            {
              id: 7,
              text: "Angry",
              correct: false,
              response: "Look again, are their angry?"
            },
            {
              id: 8,
              text: "Fighting",
              correct: false,
              response: "Look again, are they fighting?"
            },
            {
              id: 9,
              text: "Cheerful",
              correct: true,
              response: "Correct, they are cheerful"
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
          width: "18vw",
          coordinates: [60, 42],
          radius: 8,
          requiredStars: 1,
          answers: [
            {
              id: 13,
              text: "Angry",
              correct: true,
              response: "Correct! They look angry"
            },
            {
              id: 14,
              text: "Having fun",
              correct: false,
              response: "Look again, are they smiling?"
            },
            {
              id: 74,
              text: "Annoyed",
              correct: true,
              response: "Correct! They look annoyed"
            },
            {
              id: 75,
              text: "Surprised",
              correct: false,
              response: "Look again, are they surprised?"
            },
            {
              id: 76,
              text: "Physical",
              correct: true,
              response: "Correct!"
            },
            {
              id: 77,
              text: "Friendly",
              correct: false,
              response: "Look again, are they friendly with each other?"
            },
            {
              id: 91,
              text: "Sleepy",
              correct: false,
              response: "Look again?"
            },
            {
              id: 92,
              text: "Kind",
              correct: false,
              response: "Look again?"
            }
          ],
          hints: [
            {
              id: 15,
              text: "Look at his face, are they smiling?",
              answers: [9, 10]
            }
          ]
        },
        {
          id: 16,
          text: "Victor",
          question: [
            "Can you tell how Victor is feeling?",
            "Select all the matching emotions",
          ],
          image: "/img/interactions/Slide",
          width: "25vw",
          coordinates: ["39", "8"],
          radius: "33",
          requiredStars: 2,
          answers: [
            {
              id: 17,
              text: "Scared",
              correct: true,
              response: "Correct!"
            },
            {
              id: 18,
              text: "Calm",
              correct: false,
              response: "Look again!"
            },
            {
              id: 19,
              text: "Resting",
              correct: false,
              response: "Look again!"
            },
            {
              id: 20,
              text: "Frightened",
              correct: true,
              response: "Yes, he looks frightened."
            },
            {
              id: 78,
              text: "Angry",
              correct: false,
              response: "Does he look angry?"
            },
            {
              id: 79,
              text: "Excited",
              correct: true,
              response: "Correct!"
            },
            {
              id: 80,
              text: "Aggresive",
              correct: false,
              response: "Does he look aggresive?"
            },
            {
              id: 81,
              text: "Surprised",
              correct: false,
              response: "Look again!"
            }
          ],
          hints: [
            {
              id: 21,
              text: "Look at the names of them",
              answers: [25, 26],
            },
            {
              id: 22,
              text: "Least bad of them",
              answers: [27, 28]
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
          width: "18vw",
          coordinates: ["29", "35"],
          radius: "33",
          requiredStars: 3,
          answers: [
            {
              id: 83,
              text: "Wounded",
              correct: true,
              response: "Correct! He is wounded."
            },
            {
              id: 84,
              text: "Hurt",
              correct: true,
              response: "That's correct!"
            },
            {
              id: 85,
              text: "In pain",
              correct: true,
              response: "Yes, he looks like he is in pain!"
            },
            {
              id: 86,
              text: "Happy",
              correct: false,
              response: "Look again."
            },
            {
              id: 87,
              text: "Amazed",
              correct: false,
              response: "Does he look amazed?"
            },
            {
              id: 88,
              text: "Glad",
              correct: false,
              response: "Look again."
            },
            {
              id: 89,
              text: "Cruel",
              correct: false,
              response: "Does he look cruel?"
            },
            {
              id: 90,
              text: "Aggresive",
              correct: false,
              response: "Look again?"
            }
          ],
          hints: [
            {
              id: 21,
              text: "Look at the names of them",
              answers: [25, 26]
            },
            {
              id: 22,
              text: "Least bad of them",
              answers: [27, 28]
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
          width: "20vw",
          coordinates: ["50", "75"],
          radius: "33",
          requiredStars: 3,
          answers: [
            {
              id: 94,
              text: "Is sad",
              correct: true,
              response: "Correct! He is sad."
            },
            {
              id: 95,
              text: "Wants to join in play",
              correct: true,
              response: "That's correct!"
            },
            {
              id: 96,
              text: "Can ask the boys to join in",
              correct: true,
              response: "Yes, he can!"
            },
            {
              id: 97,
              text: "Paul does not like football",
              correct: false,
              response: "Look again."
            },
            {
              id: 98,
              text: "Paul likes to be on his own",
              correct: false,
              response: "Does he look amazed?"
            },
            {
              id: 99,
              text: "Paul has to wait until the boys ask him to join",
              correct: false,
              response: "Look again."
            },
            {
              id: 89,
              text: "Cruel",
              correct: false,
              response: "Does he look cruel?"
            },
            {
              id: 90,
              text: "Aggresive",
              correct: false,
              response: "Look again?"
            }
          ],
          hints: [
            {
              id: 21,
              text: "Look at the names of them",
              answers: [25, 26]
            },
            {
              id: 22,
              text: "Least bad of them",
              answers: [27, 28]
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
          width: "23vw",
          coordinates: [62, 53],
          radius: 12,
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
          radius: "12",
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
          width: "18vw",
          coordinates: ["69", "24"],
          radius: "12",
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
      requiredStars: 5,
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
          radius: 12,
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
          radius: 8,
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
          radius: "33",
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
