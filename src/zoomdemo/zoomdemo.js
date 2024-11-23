import React from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

export default function ZoomInOutComponent() {
  return (
    <div style={styles.container}>
      <TransformWrapper
        initialScale={1}
        minScale={0.5}
        maxScale={3}
        wheel={{ step: 0.1 }}
        pinch={{ step: 0.1 }}
      >
      
          <>
           
            <TransformComponent>
              <div style={styles.box}>
                <p style={styles.text}>Zoom Me In/Out</p>
              </div>
            </TransformComponent>
          </>
      
      </TransformWrapper>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    backgroundColor: "#f5f5f5",
  },
  controls: {
    marginBottom: "10px",
  },
  button: {
    margin: "0 5px",
    padding: "10px 15px",
    fontSize: "14px",
    cursor: "pointer",
  },
  box: {
    width: "200px",
    height: "200px",
    backgroundColor: "#4CAF50",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  text: {
    color: "#fff",
    fontSize: "18px",
    fontWeight: "bold",
    textAlign: "center",
  },
};
