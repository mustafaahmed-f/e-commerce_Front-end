const words = Array.from({ length: 10 }, () =>
  Math.random()
    .toString(36)
    .substring(2, 10)
    .replace(/[^a-z]/gi, "")
    .toLowerCase()
);

function Home() {
  return (
    <div className="flex flex-col">
      {words.map((word) => (
        <p className="block my-2" key={word}>
          {word}
        </p>
      ))}
    </div>
  );
}
export default Home;
