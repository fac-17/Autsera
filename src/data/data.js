export default {
  places: [
    {
      id: 0,
      text: "Playground",
      icon: "/SVG/Places/Playground_icon.svg",
      requiredStars: 0,
      image: "Playground.png",
      width: "200px",
      coordinates: [42, 70],
      interactions: [
        {
          id: 1,
          text: "Kids on the swing",
          question: [
            "Can you tell what Leonie and Reuben are feeling?",
            "Select all the matching words"
          ],
          image: "/img/interactions/Slide_happy",
          coordinates: [20, 66],
          width: "225px",
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
              answers: [4, 5]
            },
            {
              id: 11,
              text: "Look if they are having fun?",
              answers: [2, 3]
            }
          ]
        },
        {
          id: 12,
          text: "Robert and Katie",
          question: [
            "What can you say about this situation?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Fight_ball",
          width: "190px",
          coordinates: [60, 47],
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
          text: "Victor on the swing",
          question: [
            "Can you tell how Victor is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Slide",
          width: "260px",
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
          id: 82,
          text: "Jack",
          question: [
            "Can you tell how Jack is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Boys_ball",
          width: "160",
          coordinates: ["29", "39"],
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
          text: "Paul",
          question: [
            "Can you tell what Paul is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/Boys_ball",
          width: "160px",
          coordinates: ["50", "80"],
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
      icon: "/SVG/Places/School_icon.svg",
      image: "School.png",
      coordinates: [16, 46],
      width: "170px",
      interactions: [
        {
          id: 24,
          text: "In the classroom",
          question: [
            "The teacher asked a question.",
            "Select all that matches this situation"
          ],
          image: "/img/interactions/Classroom",
          width: "252px",
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
            "Select all the matching emotions"
          ],
          coordinates: ["30", "51"],
          width: "225px",
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
          text: "Girls laughing",
          image: "/img/interactions/Bullying",
          question: ["The three girls are...?", "Select all matches"],
          width: "230px",
          coordinates: ["67", "22"],
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
    }
    // {
    //   id: 35,
    //   text: "Market",
    //   icon: "/SVG/Places/-TODO-",
    //   requiredStars: 5,
    //   image: "s-TODO-",
    //   coordinates: [46, 30],
    //   interactions: [
    //     {
    //       id: 36,
    //       text: "Francesca and Martha reading",
    //       question: ["Can you tell what Francesca and Martha are feeling?", "Select all the matching words"],
    //       image: "/img/interactions/01_LeonieAndReuben.png",
    //       coordinates: [20, 10],
    //       radius: 12,
    //       requiredStars: 5,
    //       answers: [
    //         {
    //           id: 37,
    //           text: "happy",
    //           correct: true,
    //           response: "Correct! They look like they are happy",
    //         },
    //         {
    //           id: 38,
    //           text: "sad",
    //           correct: false,
    //           response: "Look again! Do they look like they are having fun?",
    //         },
    //         {
    //           id: 39,
    //           text: "upset",
    //           correct: false,
    //           response: "Think again! Look closely on their mouthes",
    //         },
    //         {
    //           id: 40,
    //           text: "angry",
    //           correct: false,
    //           response: "Look again, are they smiling?",
    //         },
    //       ],
    //       hints: [
    //         {
    //           id: 41,
    //           text: "Look at their faces, are they smiling?",
    //           answers: [4, 5],
    //         },
    //         {
    //           id: 42,
    //           text: "Look if they are having fun?",
    //           answers: [2, 3],
    //         },
    //       ],
    //     },
    //     {
    //       id: 43,
    //       text: "Jan is crying",
    //       question: ["Can you tell what Jan is feeling?", "Select all the matching emotions"],
    //       image: "/img/interactions/02_Jan.png",
    //       coordinates: [80, 60],
    //       radius: 8,
    //       requiredStars: 6,
    //       answers: [
    //         {
    //           id: 44,
    //           text: "upset",
    //           correct: true,
    //           response: "Correct! He looks upset",
    //         },
    //         {
    //           id: 45,
    //           text: "happy",
    //           correct: false,
    //           response: "Look again, are is he smiling?",
    //         },
    //       ],
    //       hints: [
    //         {
    //           id: 46,
    //           text: "Look at his face, are they smiling?",
    //           answers: [9, 10],
    //         },
    //       ],
    //     },
    //     {
    //       id: 47,
    //       text: "Victor playing",
    //       question: ["Can you tell how Victor is feeling?", "Select all the matching emotions"],
    //       image: "/img/interactions/03_Victor.png",
    //       coordinates: ["12", "33"],
    //       radius: "33",
    //       requiredStars: 7,
    //       answers: [
    //         {
    //           id: 48,
    //           text: "good",
    //           correct: true,
    //           response: "Good!",
    //         },
    //         {
    //           id: 49,
    //           text: "bad",
    //           correct: false,
    //           response: "Not Good!",
    //         },
    //         {
    //           id: 50,
    //           text: "so so",
    //           correct: false,
    //           response: "Hmmm",
    //         },
    //         {
    //           id: 51,
    //           text: "okeyish",
    //           correct: true,
    //           response: "We'll let that pass",
    //         },
    //       ],
    //       hints: [
    //         {
    //           id: 52,
    //           text: "Look at the names of them",
    //           answers: [25, 26],
    //         },
    //         {
    //           id: 53,
    //           text: "Least bad of them",
    //           answers: [27, 28]
    //         }
    //       ]
    //     }
    //   ]
    // }
  ],
  meta: {
    sequence: 73
  }
};
