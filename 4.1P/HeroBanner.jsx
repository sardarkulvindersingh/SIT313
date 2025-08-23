import { Segment, Image } from "semantic-ui-react";

function HeroBanner() {
  return (
    <Segment placeholder style={{ padding: 0, position: "relative" }}>
      <Image
        src="https://picsum.photos/id/1015/1200/250" 
        alt="Banner"
        style={{ width: "100%", height: "250px", objectFit: "cover" }}
      />
      <h2
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          fontSize: "2rem",
          fontWeight: "bold",
          textShadow: "1px 1px 6px rgba(180, 31, 31, 0.7)",
          margin: 0,
        }}
      >      
      </h2>
    </Segment>
  );
}

export default HeroBanner;
