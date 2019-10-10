export default {
  "places": [
   {
    "id": 0,
    "text": "Playground",
    "requiredStars": 0,
    "image": "playground.png",
    "coordinates": [
     23,
     12
    ],
    "interactions": [
     {
      "id": 1,
      "text": "Leonie and Reuben fighting",
      "image": "leoniereuben.png",
      "coordinates": [
       20,
       10
      ],
      "radius": 12,
      "requiredStars": 0,
      "answers": [
       {
        "id": 2,
        "text": "they are fighting",
        "correct": true,
        "response": "Correct! They look like they are fighting"
       },
       {
        "id": 3,
        "text": "playing",
        "correct": false,
        "response": "Look again! Do they look like they are having fun?"
       },
       {
        "id": 4,
        "text": "upset",
        "correct": true,
        "response": "Correct! They look upset"
       },
       {
        "id": 5,
        "text": "happy",
        "correct": false,
        "response": "Look again, are they smiling?"
       }
      ],
      "hints": [
       {
        "id": 6,
        "text": "Look at their faces, are they smiling?",
        "answers": [
         4,
         5
        ]
       },
       {
        "id": 7,
        "text": "Look if they are having fun?",
        "answers": [
         2,
         3
        ]
       }
      ]
     },
     {
      "id": 8,
      "text": "Jan is crying",
      "image": "janisababy.png",
      "coordinates": [
       80,
       60
      ],
      "radius": 8,
      "requiredStars": 1,
      "answers": [
       {
        "id": 9,
        "text": "upset",
        "correct": true,
        "response": "Correct! He looks upset"
       },
       {
        "id": 10,
        "text": "happy",
        "correct": false,
        "response": "Look again, are is he smiling?"
       }
      ],
      "hints": [
       {
        "id": 11,
        "text": "Look at his face, are they smiling?",
        "answers": [
         9,
         10
        ]
       }
      ]
     },
     {
      "id": 24,
      "text": "Third Interaction on Playground",
      "image": "leoniereuben.png",
      "coordinates": [
       "12",
       "33"
      ],
      "radius": "33",
      "requiredStars": "2",
      "answers": [
       {
        "id": 25,
        "text": "good",
        "correct": true,
        "response": "Good!"
       },
       {
        "id": 26,
        "text": "bad",
        "correct": false,
        "response": "Not Good!"
       },
       {
        "id": 27,
        "text": "so so",
        "correct": false,
        "response": "Hmmm"
       },
       {
        "id": 28,
        "text": "okeyish",
        "correct": true,
        "response": "We'll let that pass"
       }
      ],
      "hints": [
       {
        "id": 29,
        "text": "Look at the names of them",
        "answers": [
         25,
         26
        ]
       },
       {
        "id": 30,
        "text": "Least bad of them",
        "answers": [
         27,
         28
        ]
       }
      ]
     }
    ]
   },
   {
    "id": 12,
    "text": "The Old Cementary",
    "requiredStars": 2,
    "image": "cemetary.png",
    "coordinates": [
     "73",
     "56"
    ],
    "interactions": [
     {
      "id": 13,
      "text": "Funeral",
      "image": "funeral.png",
      "coordinates": [
       20,
       10
      ],
      "radius": 12,
      "answers": [
       {
        "id": 14,
        "text": "they are fighting",
        "correct": true,
        "response": "Correct! They look like they are fighting"
       },
       {
        "id": 15,
        "text": "playing",
        "correct": false,
        "response": "Look again! Do they look like they are having fun?"
       },
       {
        "id": 16,
        "text": "upset",
        "correct": true,
        "response": "Correct! They look upset"
       },
       {
        "id": 17,
        "text": "happy",
        "correct": false,
        "response": "Look again, are they smiling?"
       }
      ],
      "hints": [
       {
        "id": 18,
        "text": "Look at their faces, are they smiling?",
        "answers": [
         16,
         17
        ]
       },
       {
        "id": 19,
        "text": "Look if they are having fun?",
        "answers": [
         14,
         15
        ]
       }
      ],
      "requiredStars": "1"
     },
     {
      "id": 20,
      "text": "Grave cleaning",
      "image": "janisababy.png",
      "coordinates": [
       "20",
       "30"
      ],
      "radius": "12",
      "answers": [
       {
        "id": 21,
        "text": "bored",
        "correct": true,
        "response": "Correct! They look bored"
       },
       {
        "id": 22,
        "text": "excited",
        "correct": false,
        "response": "Look again, are is he smiling?"
       }
      ],
      "hints": [
       {
        "id": 23,
        "text": "Look at his face, are they smiling?",
        "answers": [
         21,
         22
        ]
       }
      ],
      "requiredStars": "0"
     }
    ]
   }
  ],
  "meta": {
   "sequence": 31
  }
 }
