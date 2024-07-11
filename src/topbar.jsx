import React from "react";

const FloatingNavbar = () => {
  return (
    <div
      style={{
        justifyContent: "center",
        alignItems: "center",
        display: "flex",
        position: "sticky",
        top: '20px',
        zIndex: "1000",
      }}
    >
      <div
        id="top"
        style={{display: "flex", alignItems: "center", justifyContent: "space-between", padding: "16px 20px",width: "80%", backgroundColor: "rgba(42, 157, 143, 0.7)",borderRadius: "10px", boxShadow: "0 4px 30px rgba(0, 0, 0, 0.9)", backdropFilter: "blur(10px)",border: "1px solid rgba(42, 157, 143, 0.3)",}}
      >
        <div className="logo">
          <h1 id="company" style={{ fontFamily: "Dancing Script, cursive", margin: 0,color: "#E9C46A", }}
            >
            Logo
          </h1>
        </div>

        <div
          className="search-container"
          style={{
            display: "flex",
            alignItems: "center",
            backgroundColor: "#E9C46A",
            border: "1px solid #ccc",
            borderRadius: "5px",
            padding: "5px 10px",
            flexWrap: "nowrap",
          }}
        >
          <input
            type="text"
            placeholder="Search..."
            className="search-input"
            style={{
              border: "none",
              outline: "none",
              padding: "5px",
              fontSize: "16px",
              flex: 1,
              backgroundColor: "#E9C46A",
            }}
          />
          <button
            type="submit"
            className="search-button"
            style={{
              backgroundColor: "#F4A261",
              color: "white",
              border: "none",
              borderRadius: "5px",
              padding: "5px 10px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "background-color 0.3s",
            }}
          >
            Search
          </button>
        </div>
      </div>
    </div>
  );
};

export default FloatingNavbar;
