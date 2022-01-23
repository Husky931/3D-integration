import React from "react";
//@ts-ignore
import movie0Src from "../../assets/movie0.mp4";
//@ts-ignore
import movie1Src from "../../assets/movie1.mp4";
//@ts-ignore
import movie2Src from "../../assets/movie2.mp4";
//@ts-ignore
import poster0Src from "../../assets/poster0.png";
//@ts-ignore
import poster1Src from "../../assets/poster1.png";
//@ts-ignore
import poster2Src from "../../assets/poster2.png";
import Video from "./Video";

const VideoSection: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 sm:gap-10 lg:gap-20 mt-32 p-10 xl:p-20">
      <div>
        <div className="text-5xl sm:text-2xl lg:text-5xl font-bold whitespace-normal sm:whitespace-nowrap">
          3D Art, Simplified
        </div>
        <div className="opacity-50 sm:opacity-100 text-base sm:text-sm md:text-base my-10 sm:my-4">
          Lingo3D comes with its own modeling tools and animation editor, as
          well as a rich library of 3d models and materials. Create dazzling 3d
          scenes and stunning visual effects, all within the engine itself.
        </div>
      </div>
      <div className="h-64 aspect-w-16 aspect-h-9 rounded-3xl">
        <Video src={movie0Src} poster={poster0Src} />
      </div>

      <div className="sm:grid-area-3">
        <div className="text-5xl sm:text-2xl lg:text-5xl font-bold whitespace-normal sm:whitespace-nowrap">
          Coding, Simplified
        </div>
        <div className="opacity-50 sm:opacity-100 text-base sm:text-sm md:text-base my-10 sm:my-4">
          MindMap - our visual scripting tool, covers Lingo3D’s entire API
          surface. This enables expression of complex logic through
          drag-and-drop editing. MindMap is backed by LingoML - an HTML-like
          markup syntax built on top of LingoScript, which allows seamless
          transition from low-code to code.
        </div>
      </div>
      <div className="h-64 aspect-w-16 aspect-h-9 rounded-3xl">
        <Video src={movie1Src} poster={poster1Src} />
      </div>

      <div>
        <div className="text-5xl sm:text-2xl lg:text-5xl font-bold whitespace-normal sm:whitespace-nowrap">
          Sharing, Simplified
        </div>
        <div className="opacity-50 sm:opacity-100 text-base sm:text-sm md:text-base my-10 sm:my-4">
          Lingo3D can generate a live version of your game that can be shared
          through a simple URL or QR code. Build, Share, Play, all in an
          instant.
        </div>
      </div>
      <div className="h-64 aspect-w-16 aspect-h-9 rounded-3xl">
        <Video src={movie2Src} poster={poster2Src} />
      </div>
    </div>
  );
};

export default VideoSection;
