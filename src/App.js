import React from "react";
import Comment from "./Comment"
import faker from "faker";
import Card from "./Card"

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
    text: "Happy New Year!"
  },
];

const loggedIn = true

function App() {
  return (
    <section className="comments">
      {comments.map((comment) => (
        <Card>
          <Comment {...comment} foo="bar" />
        </Card>
      ))}
      {loggedIn && <Card>
        <h1>You are logged in</h1>
      </Card>}
    </section>
  );
}

export default App;
