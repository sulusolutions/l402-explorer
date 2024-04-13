import { ReactNode, useEffect } from "react";

type FormWrapperProps = {
  title: string;
  isLoading?: boolean;
  children: ReactNode;
};

export function FormWrapper({
  title,
  isLoading = false,
  children,
}: FormWrapperProps) {
  return (
    <>
      <h2 style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}>
        {title}
      </h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
        {isLoading && (
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              background: "rgba(255, 255, 255, 0.8)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
            }}
          >
            <p>Loading...</p>
          </div>
        )}
      </div>
    </>
  );
}
