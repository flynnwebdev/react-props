function hasBannedWords(input) {
  return input.match(/cool/);
}

export default function Comment({ avatar, author, date, text }) {
  return hasBannedWords(text) ? (
    <h3>Banned Comment!</h3>
  ) : (
    <article className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <main className="content">
        <a href="/" className="author">
          {author}
        </a>
        <p className="date">{date}</p>
        <p className="text">{text}</p>
      </main>
    </article>
  );
}
