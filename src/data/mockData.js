export const mockProfiles = [
  {
    id: '1',
    name: 'Emma',
    age: 26,
    gender: 'Women',
    type: 'Straight',
    location: 'Downtown',
    hometown: 'Seattle',
    occupation: 'UX Designer at Tech Co',
    lookingFor: 'Long-term relationship',
    images: [
      'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    prompts: [
      {
        question: 'My perfect coffee date would be',
        answer: 'A cozy corner café with great conversation and even better espresso'
      },
      {
        question: 'I go crazy for',
        answer: 'Sunday morning farmers markets and fresh pastries'
      }
    ]
  },
  {
    id: '2',
    name: 'Alex',
    age: 28,
    gender: 'Men',
    type: 'Straight',
    location: 'Midtown',
    hometown: 'Portland',
    occupation: 'Software Engineer',
    lookingFor: 'Long-term relationship',
    images: [
      'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    prompts: [
      {
        question: 'This year, I really want to',
        answer: 'Learn to roast my own coffee beans'
      },
      {
        question: 'My simple pleasures',
        answer: 'Morning runs and perfectly brewed pour-over coffee'
      }
    ]
  },
  {
    id: '3',
    name: 'Maya',
    age: 24,
    gender: 'Women',
    type: 'Straight',
    location: 'Arts District',
    hometown: 'San Francisco',
    occupation: 'Graphic Designer',
    lookingFor: 'Something casual',
    images: [
      'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=800',
      'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=800'
    ],
    prompts: [
      {
        question: 'I geek out on',
        answer: 'Vintage coffee equipment and latte art'
      },
      {
        question: 'Best travel story',
        answer: 'Coffee plantation tour in Colombia'
      }
    ]
  }
]

export const mockLikes = [
  {
    id: '1',
    name: 'Jessica',
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=400',
    comment: 'Love your coffee setup!'
  },
  {
    id: '2',
    name: 'Rachel',
    image: 'https://images.pexels.com/photos/1181519/pexels-photo-1181519.jpeg?auto=compress&cs=tinysrgb&w=400',
    comment: null
  },
  {
    id: '3',
    name: 'Sophie',
    image: 'https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?auto=compress&cs=tinysrgb&w=400',
    comment: 'We should grab coffee sometime!'
  },
  {
    id: '4',
    name: 'Amanda',
    image: 'https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=400',
    comment: null
  }
]

export const mockChats = [
  {
    id: '1',
    name: 'Emma',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: {
      text: 'That coffee shop you recommended was amazing! ☕',
      timestamp: new Date(Date.now() - 1000 * 60 * 30) // 30 minutes ago
    },
    unreadCount: 2,
    online: true
  },
  {
    id: '2',
    name: 'Alex',
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: {
      text: 'Would love to meet up for coffee this weekend',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 2) // 2 hours ago
    },
    unreadCount: 0,
    online: false
  },
  {
    id: '3',
    name: 'Maya',
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=200',
    lastMessage: {
      text: 'Thanks for the great conversation!',
      timestamp: new Date(Date.now() - 1000 * 60 * 60 * 24) // 1 day ago
    },
    unreadCount: 1,
    online: true
  }
]