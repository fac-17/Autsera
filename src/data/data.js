export default {
  places: [
    {
      id: 0,
      text: "Playground",
      icon: "/SVG/Places/Playground_icon.svg",
      requiredStars: 0,
      image: "playground.png",
      coordinates: [44, 70],
      interactions: [
        {
          id: 1,
          text: "Leonie and Reuben fighting",
          question: [
            "Can you tell what Susi & Lisa are feeling?",
            "Select all the matching words"
          ],
          image: "/img/interactions/01_LeonieAndReuben.png",
          coordinates: [20, 10],
          radius: 12,
          requiredStars: 0,
          answers: [
            {
              id: 2,
              text: "they are fighting",
              correct: true,
              response: "Correct! They look like they are fighting"
            },
            {
              id: 3,
              text: "playing",
              correct: false,
              response: "Look again! Do they look like they are having fun?"
            },
            {
              id: 4,
              text: "upset",
              correct: true,
              response: "Correct! They look upset"
            },
            {
              id: 5,
              text: "amazed",
              correct: false,
              response: "Look again? Focus on their eyes"
            },
            {
              id: 6,
              text: "thrilled",
              correct: false,
              response: "Look again, are they excited?"
            },
            {
              id: 7,
              text: "surprised",
              correct: false,
              response: "Look again, are their eyes wide opened?"
            },
            {
              id: 8,
              text: "tired",
              correct: false,
              response: "Look again, do they have small eyes?"
            },
            {
              id: 9,
              text: "bored",
              correct: false,
              response: "Look again, focus on their eyes."
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
          text: "Jan is crying",
          question: [
            "Can you tell what Jan is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/02_Jan.png",
          coordinates: [80, 60],
          radius: 8,
          requiredStars: 1,
          answers: [
            {
              id: 13,
              text: "upset",
              correct: true,
              response: "Correct! He looks upset"
            },
            {
              id: 14,
              text: "happy",
              correct: false,
              response: "Look again, are is he smiling?"
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
          text: "Victor playing",
          question: [
            "Can you tell how Victor is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/03_Victor.png",
          coordinates: ["12", "33"],
          radius: "33",
          requiredStars: "2",
          answers: [
            {
              id: 17,
              text: "good",
              correct: true,
              response: "Good!"
            },
            {
              id: 18,
              text: "bad",
              correct: false,
              response: "Not Good!"
            },
            {
              id: 19,
              text: "so so",
              correct: false,
              response: "Hmmm"
            },
            {
              id: 20,
              text: "okeyish",
              correct: true,
              response: "We'll let that pass"
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
      text: "Pool",
      requiredStars: 2,
      icon: "/SVG/Places/Pool_icon.svg",
      image: "cemetary.png",
      coordinates: [18, 46],
      interactions: [
        {
          id: 24,
          text: "Splashing",
          question: [
            "Can you tell what the kids are feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/01_LeonieAndReuben.png",
          coordinates: [10, 10],
          radius: 12,
          answers: [
            {
              id: 25,
              text: "they are fighting",
              correct: true,
              response: "Correct! They look like they are fighting"
            },
            {
              id: 26,
              text: "playing",
              correct: false,
              response: "Look again! Do they look like they are having fun?"
            },
            {
              id: 27,
              text: "upset",
              correct: true,
              response: "Correct! They look upset"
            },
            {
              id: 28,
              text: "happy",
              correct: false,
              response: "Look again, are they smiling?"
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
          requiredStars: "1"
        },
        {
          id: 31,
          text: "Water sport",
          image: "/img/interactions/01_LeonieAndReuben.png",
          question: [
            "Can you tell what the kids are feeling?",
            "Select all the matching emotions"
          ],
          coordinates: ["20", "30"],
          radius: "12",
          answers: [
            {
              id: 32,
              text: "bored",
              correct: true,
              response: "Correct! They look bored"
            },
            {
              id: 33,
              text: "excited",
              correct: false,
              response: "Look again, are is he smiling?"
            }
          ],
          hints: [
            {
              id: 34,
              text: "Look at his face, are they smiling?",
              answers: [21, 22]
            }
          ],
          requiredStars: "0"
        }
      ]
    },
    {
      id: 35,
      text: "School",
      icon: "/SVG/Places/School_icon.svg",
      requiredStars: 5,
      image: "school.png",
      coordinates: [46, 30],
      interactions: [
        {
          id: 36,
          text: "Francesca and Martha reading",
          question: [
            "Can you tell what Francesca and Martha are feeling?",
            "Select all the matching words"
          ],
          image: "/img/interactions/01_LeonieAndReuben.png",
          coordinates: [20, 10],
          radius: 12,
          requiredStars: 0,
          answers: [
            {
              id: 37,
              text: "happy",
              correct: true,
              response: "Correct! They look like they are happy"
            },
            {
              id: 38,
              text: "sad",
              correct: false,
              response: "Look again! Do they look like they are having fun?"
            },
            {
              id: 39,
              text: "upset",
              correct: false,
              response: "Think again! Look closely on their mouthes"
            },
            {
              id: 40,
              text: "angry",
              correct: false,
              response: "Look again, are they smiling?"
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
          text: "Jan is crying",
          question: [
            "Can you tell what Jan is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/02_Jan.png",
          coordinates: [80, 60],
          radius: 8,
          requiredStars: 1,
          answers: [
            {
              id: 44,
              text: "upset",
              correct: true,
              response: "Correct! He looks upset"
            },
            {
              id: 45,
              text: "happy",
              correct: false,
              response: "Look again, are is he smiling?"
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
          text: "Victor playing",
          question: [
            "Can you tell how Victor is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/03_Victor.png",
          coordinates: ["12", "33"],
          radius: "33",
          requiredStars: "2",
          answers: [
            {
              id: 48,
              text: "good",
              correct: true,
              response: "Good!"
            },
            {
              id: 49,
              text: "bad",
              correct: false,
              response: "Not Good!"
            },
            {
              id: 50,
              text: "so so",
              correct: false,
              response: "Hmmm"
            },
            {
              id: 51,
              text: "okeyish",
              correct: true,
              response: "We'll let that pass"
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
    },
    {
      id: 54,
      text: "Library",
      icon: "/SVG/Places/Library_icon.svg",
      requiredStars: 7,
      image: "school.png",
      coordinates: [15, 6],
      interactions: [
        {
          id: 55,
          text: "Francesca and Martha reading",
          question: [
            "Can you tell what Francesca and Martha are feeling?",
            "Select all the matching words"
          ],
          image: "/img/interactions/01_LeonieAndReuben.png",
          coordinates: [20, 10],
          radius: 12,
          requiredStars: 0,
          answers: [
            {
              id: 56,
              text: "happy",
              correct: true,
              response: "Correct! They look like they are happy"
            },
            {
              id: 57,
              text: "sad",
              correct: false,
              response: "Look again! Do they look like they are having fun?"
            },
            {
              id: 58,
              text: "upset",
              correct: false,
              response: "Think again! Look closely on their mouthes"
            },
            {
              id: 59,
              text: "angry",
              correct: false,
              response: "Look again, are they smiling?"
            }
          ],
          hints: [
            {
              id: 60,
              text: "Look at their faces, are they smiling?",
              answers: [4, 5]
            },
            {
              id: 61,
              text: "Look if they are having fun?",
              answers: [2, 3]
            }
          ]
        },
        {
          id: 62,
          text: "Jan is crying",
          question: [
            "Can you tell what Jan is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/02_Jan.png",
          coordinates: [80, 60],
          radius: 8,
          requiredStars: 1,
          answers: [
            {
              id: 63,
              text: "upset",
              correct: true,
              response: "Correct! He looks upset"
            },
            {
              id: 64,
              text: "happy",
              correct: false,
              response: "Look again, are is he smiling?"
            }
          ],
          hints: [
            {
              id: 65,
              text: "Look at his face, are they smiling?",
              answers: [9, 10]
            }
          ]
        },
        {
          id: 66,
          text: "Victor playing",
          question: [
            "Can you tell how Victor is feeling?",
            "Select all the matching emotions"
          ],
          image: "/img/interactions/03_Victor.png",
          coordinates: ["12", "33"],
          radius: "33",
          requiredStars: "2",
          answers: [
            {
              id: 67,
              text: "good",
              correct: true,
              response: "Good!"
            },
            {
              id: 68,
              text: "bad",
              correct: false,
              response: "Not Good!"
            },
            {
              id: 69,
              text: "so so",
              correct: false,
              response: "Hmmm"
            },
            {
              id: 70,
              text: "okeyish",
              correct: true,
              response: "We'll let that pass"
            }
          ],
          hints: [
            {
              id: 71,
              text: "Look at the names of them",
              answers: [25, 26]
            },
            {
              id: 72,
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
