import StarfieldAnimation from "react-starfield-animation";
//import background from "../../assets/images/stars.jpg";

export default function StarField() {
  return (
    <div
      style={{
        opacity: 0.2,
        backgroundSize: "stretch",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
      className="bg-opacity-10"
    >
      <StarfieldAnimation
        style={{
          position: "absolute",

          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: -1,
        }}
        numParticles={600}
        lineWidth={2}
        alphaFactor={1}
        depth={5300}
      />
    </div>
  );
}
