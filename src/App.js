import { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "😷": {
    name: "Face with Medical Mask",
    meaning: "May be worn to avoid sickness or spreading airborne diseases."
  },
  "😀": {
    name: "Grinning Face",
    meaning: "Often conveys general pleasure and good cheer or humor"
  },
  "🙃": {
    name: "Upside-Down Face",
    meaning:
      "Commonly used to convey irony, sarcasm, joking, or a sense of goofiness or silliness."
  },
  "😁": {
    name: "Beaming Face with Smiling Eyes",
    meaning:
      "Often expresses a radiant, gratified happiness. Tone varies, including warm, silly, amused, or proud."
  },

  "😌": {
    name: "Relieved Face",
    meaning:
      "Conveys various pleasant feelings, including contentment, calm, peace, and relief. May also convey feelings of happiness or good-natured humor more generally."
  },
  "😍": {
    name: "Smiling Face with Heart-Eyes",
    meaning:
      "Often conveys enthusiastic feelings of love, infatuation, and adoration, e.g., I love/am in love with this person or thing."
  },
  "😉": {
    name: "Winking Face",
    meaning:
      "May signal a joke, flirtation, hidden meaning, or general positivity. Tone varies, including playful, affectionate, suggestive, or ironic."
  },

  "😂": {
    name: "Face with Tears of Joy",
    meaning: "Widely used to show something is funny or pleasing."
  }
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [emoji, setEmoji] = useState("");
  const [name, setName] = useState("");
  const [meaning, setMeaning] = useState("");

  function findEmoji(emoji) {
    if (emojiDictionary[emoji]) {
      setName(emojiDictionary[emoji].name);
      setMeaning(emojiDictionary[emoji].meaning);
    }
  }

  function inputChangeHandler(e) {
    let inputEmoji = e.target.value;
    emojiClickHandler(inputEmoji);
  }

  function emojiClickHandler(emoji) {
    setEmoji(emoji);
    findEmoji(emoji);
  }

  return (
    <div className="App">
      <div className="center">
        <h1>Emoji Interpreter</h1>
        <input
        autofocus
        value={emoji}
          type="text"
          placeholder="Paste an emoji!"
          onChange={inputChangeHandler}
        />

        {emojiDictionary[emoji] ? (
          <div className="emojiDetails">
          <h1>
            <span role="img" aria-label="emoji">
              {emoji}
            </span>
          </h1>
          <h2>{name}</h2>
          <p className="meaning">
            <span role="img" aria-label="right finger" className="rightFinger">
              👉
            </span>
            {meaning}
          </p>
        </div>
        ):(
          <div
          style={{
            display: !emoji && !emojiDictionary[emoji] ? "none" : "inline"
          }}
          className="noEmoji"
        >
          <h3>No emoji in the dictionary!</h3>
          <p>Try something else</p>
          <h4>Or</h4>
        </div>
        )}

        <div>
          <h3>
            Select an emoji below
            <span className="down-finger" role="img" aria-label="down finger">
              👇
            </span>
          </h3>
          {emojiList.map(function (emoji) {
            return (
              <span
                className="emojiList"
                key={emoji}
                onClick={() => emojiClickHandler(emoji)}
              >
                {emoji}
              </span>
            );
          })}
        </div>
        <footer className="footer">
          <p>
            See
            <a
              className="github"
              href="https://github.com/anmoldewanrai/Mark-Seven-Groot-Translator"
              target="_blank"
              s
            >
              Github
            </a>
            <a
              className="codesandbox"
              href="https://codesandbox.io/s/mark-eight-emoji-interpreter-ojijx?file=/src/App.js"
              target="_blank"
              s
            >
              CodeSandbox
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}
