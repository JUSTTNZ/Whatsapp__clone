const messages = [
  {
    id: "1",
    timestamp: 1652742000,
    sender: "John Doe",
    content: "Hey, how are you?",
    status: "sent",
    picture: "https://images.pexels.com/photos/1237119/pexels-photo-1237119.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "2",
    timestamp: 1652742060,
    sender: "Emily Clark",
    content: "I'm good, thanks! How about you?",
    status: "delivered",
    picture: "https://images.pexels.com/photos/1059878/pexels-photo-1059878.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "3",
    timestamp: 1652742120,
    sender: "Michael Brown",
    content: "I'm doing great. Just got back from a vacation.",
    status: "read",
    picture: "https://images.pexels.com/photos/1459398/pexels-photo-1459398.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "4",
    timestamp: 1652742180,
    sender: "Sarah Johnson",
    content: "That's awesome! Where did you go?",
    status: "read",
    picture: "https://images.pexels.com/photos/129105/pexels-photo-129105.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "5",
    timestamp: 1652742240,
    sender: "David Wilson",
    content: "Went to Hawaii. It was amazing!",
    status: "sent",
    picture: "https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "6",
    timestamp: 1652742300,
    sender: "Sophia Martinez",
    content: "Wow, I've always wanted to visit Hawaii!",
    status: "delivered",
    picture: "https://images.pexels.com/photos/678734/pexels-photo-678734.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "7",
    timestamp: 1652742360,
    sender: "James Anderson",
    content: "You should definitely go. The beaches are beautiful.",
    status: "read",
    picture: "https://images.pexels.com/photos/346529/pexels-photo-346529.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "8",
    timestamp: 1652742420,
    sender: "Olivia Lee",
    content: "I'll plan a trip soon. Any recommendations?",
    status: "read",
    picture: "https://images.pexels.com/photos/416153/pexels-photo-416153.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "10",
    timestamp: 1652742480,
    sender: "Daniel Harris",
    content: "Visit Maui and Kauai, they're stunning!",
    status: "sent",
    picture: "https://images.pexels.com/photos/1025469/pexels-photo-1025469.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "11",
    timestamp: 1652742540,
    sender: "Ava Lewis",
    content: "Thanks for the tips! I'll keep them in mind.",
    status: "delivered",
    picture: "https://images.pexels.com/photos/1738986/pexels-photo-1738986.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "12",
    timestamp: 1652742600,
    sender: "Matthew Young",
    content: "No problem! Let me know if you need any more info.",
    status: "read",
    picture: "https://images.pexels.com/photos/1279058/pexels-photo-1279058.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "13",
    timestamp: 1652742660,
    sender: "Isabella King",
    content: "Will do! How's everything else going?",
    status: "read",
    picture: "https://images.pexels.com/photos/210186/pexels-photo-210186.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "14",
    timestamp: 1652742720,
    sender: "Alexander Scott",
    content: "Everything's good. Busy with work though.",
    status: "sent",
    picture: "https://images.pexels.com/photos/1148820/pexels-photo-1148820.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "15",
    timestamp: 1652742780,
    sender: "Mia Hall",
    content: "I can relate. Work has been hectic here too.",
    status: "delivered",
    picture: "https://images.pexels.com/photos/1534034/pexels-photo-1534034.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "16",
    timestamp: 1652742840,
    sender: "Benjamin Allen",
    content: "Hang in there! We should catch up soon.",
    status: "read",
    picture: "https://images.pexels.com/photos/132037/pexels-photo-132037.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "17",
    timestamp: 1652742900,
    sender: "Charlotte Walker",
    content: "Definitely! Let's plan something for next weekend.",
    status: "read",
    picture: "https://images.pexels.com/photos/2101187/pexels-photo-2101187.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "18",
    timestamp: 1652742960,
    sender: "Henry Wright",
    content: "Sounds good to me. I'll check my schedule.",
    status: "sent",
    picture: "https://images.pexels.com/photos/2101861/pexels-photo-2101861.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "19",
    timestamp: 1652743020,
    sender: "Amelia Green",
    content: "Great! Looking forward to it.",
    status: "delivered",
    picture: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "20",
    timestamp: 1652743080,
    sender: "Lucas Baker",
    content: "Me too! Talk to you soon.",
    status: "read",
    picture: "https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&w=300"
  },
  {
    id: "21",
    timestamp: 1652743140,
    sender: "Harper Adams",
    content: "Bye for now!",
    status: "read",
    picture: "https://images.pexels.com/photos/2100121/pexels-photo-2100121.jpeg?auto=compress&cs=tinysrgb&w=300"
  }
];

export default messages