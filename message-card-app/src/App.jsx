import MessageCard from "./components/MessageCard";

function App() {
  return (
    <div>
      <h1>Message Cards</h1>

      <MessageCard
        title="Welcome"
        message="Welcome to our React application!"
      />

      <MessageCard
        title="Success"
        message="Your data has been saved successfully."
      />

      <MessageCard
        title="Warning"
        message="Please check the form fields carefully."
      />

      <MessageCard
        title="Info"
        message="New updates are available."
      />
    </div>
  );
}

export default App;
