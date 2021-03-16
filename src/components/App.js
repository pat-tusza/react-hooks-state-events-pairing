import video from "../data/video.js";
import VideoCard from "./VideoCard";
import VideoHeader from "./VideoHeader";
import CommentList from "./CommentList";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <VideoCard video={video} /> 
      <VideoHeader video={video} />
      <CommentList comments={video.comments} />
      {/* <iframe
        width="919"
        height="525"
        src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        frameborder="0"
        allowfullscreen
        title="Thinking in React"
      /> */}
    </div>
  );
}

export default App;
