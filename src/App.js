import "./styles.css";

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

export default function App() {
  return (
    <div className="App">
      <h1 style={{ color: getRandomColor() }}>Hello World</h1>
      <p style={{ color: getRandomColor() }}>My name is CHRISTOPHER MESAYA</p>
      <p style={{ color: getRandomColor() }}>I am a handsome human being</p>
      <p style={{ color: getRandomColor() }}>I love to learn JavaScript</p>
      <p style={{ color: getRandomColor() }}>I am a super high quality student</p>
      <p style={{ color: getRandomColor() }}>I am going to be a super star</p>
    </div>
  );
}
