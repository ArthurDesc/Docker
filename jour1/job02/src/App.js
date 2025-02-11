import "./App.css";
import Confetti from "./Confetti";
import { CyberEl1 } from "react-cyber-elements";

const shareMessage = "I just ran my first container using Docker";
const shareLink = "https://docker.com/";

const App = () => {
  return (
    <div className="App cyberpunk-background">
      <Confetti />
      <header className="App-header">
        <CyberEl1
          style={{
            width: "150px",
            height: "150px",
            marginBottom: "20px",
          }}
          className="cyber-icon"
        />
        <h1 className="cyberpunk-title">Yessss bien joué!!!</h1>
        <p className="cyberpunk-text">
          Vous avez lancer votre premier conteneur.
        </p>
        <div className="cyberpunk-buttons">
          <a
            target="_blank"
            href={
              "https://twitter.com/intent/tweet?text=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            className="cyber-btn"
            rel="noopener noreferrer"
          >
            Share on Twitter
          </a>
          <a
            target="_blank"
            href={
              "https://www.linkedin.com/sharing/share-offsite/?url=" + shareLink
            }
            className="cyber-btn"
            rel="noopener noreferrer"
          >
            Share on LinkedIn
          </a>
          <a
            target="_blank"
            href={
              "https://reddit.com/submit?title=" +
              shareMessage +
              "&url=" +
              shareLink
            }
            className="cyber-btn"
            rel="noopener noreferrer"
          >
            Share on Reddit
          </a>
        </div>
      </header>
    </div>
  );
};

export default App;
