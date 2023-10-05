import Thumbnail from "./Thumbnail";

function Video() {
  const videos = [
    {
      thumbnail: "https://img.youtube.com/vi/bRJpcuRUNv0/sddefault.jpg",
      title: "Video 1",
      description: "Video description 1",
    },
    {
      thumbnail: "https://img.youtube.com/vi/C_4cTq7Yhnw/sddefault.jpg",
      title: "Video 2",
      description: "Video description 2",
    },
  ];

  return (
    <div>
      {videos.map((video, index) => (
        <Thumbnail key={index} thumbnail={video.thumbnail} title={video.title} description={video.description} />
      ))}
    </div>
  );
}

export default Video;
