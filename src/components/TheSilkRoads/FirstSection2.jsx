import React from "react";

function FirstSection2() {
  return (
    <section className="w-full h-[auto] text-[#414141]">
      <div className="w-full h-[550px] container mx-[auto] flex items-center justify-center">
        <div className="w-full flex items-center justify-center">
          <video
            autoPlay
            loop
            muted
            playsInline
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "650px",
              objectFit: "cover",
              zIndex: -1,
            }}
          >
            <source
              src="https://video.wixstatic.com/video/11062b_d6c2bcf6fd5146f2afc7cd492d424e5d/1080p/mp4/file.mp4"
              type="video/mp4"
            />
          </video>
          LOgo
        </div>
      </div>
    </section>
  );
}

export default FirstSection2;
