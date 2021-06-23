import faker from "faker";

const comments = [
  {
    author: "Mary Smith",
    avatar: faker.image.avatar(),
    date: "11/12 6:00pm",
    text: "I think this is cool!",
  },
  {
    author: "Joe Bloggs",
    avatar: faker.image.avatar(),
    date: "05/07 4:00pm",
    text: "Awesome!",
  },
  {
    author: "Alan Smithee",
    avatar: faker.image.avatar(),
    date: "01/01 12:00am",
    text: "Happy New Year!",
  },
];

export default comments
