import { ChatEngine } from "react-chat-engine";
import "./App.css";
import React from "react";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {
  if (!localStorage.getItem("username")) return <LoginForm />;

  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID="
        48576ac3-96cf-4997-8cef-b6c0a2f45f64"
        userName="john"
        userSecret="qwerty"
        renderChatFeed={(chatAppProps) => <ChatFeed {...chatAppProps} />}
        onNewMessage={() =>
          new Audio(
            "https://chat-engine-assets.s3.amazonaws.com/click.mp3"
          ).play()
        }
      />
    </div>
  );
}

export default App;
