import React from "react";
import Comment from "./Comment"
import Card from "./Card"
import comments from "../data/comment_data"

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
