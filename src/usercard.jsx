function UserCard() {
  return (
    <div
      style={{
        border: "1px solid #007acc", // Vibrant Blue
        borderRadius: "10px",
        width: "200px",
        height: "300px",
        padding: "10px",
        margin: "20px",
        display: "flex",
        flexDirection: "column",
        backgroundColor: "#1e1e1e", // Dark Gray background
        transition: "transform 0.3s ease-in-out",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2a2a2a", // Darker Gray card background
          flex: 2,
          display: "flex",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <img
          src="src/assets/face.png"
          alt="User"
          style={{ height: "160px", width: "160px", borderRadius: "50%" }}
        />
      </div>
      <div
        style={{
          backgroundColor: "#007acc", // Vibrant Blue footer background
          flex: 1,
          paddingLeft: "10px",
          display: "flex",
          alignItems: "center",
          transition: "background-color 0.3s ease-in-out",
        }}
      >
        <h2 style={{ color: "#ffffff" }}>User Name</h2> {/* White text color */}
      </div>
    </div>
  );
}

export default UserCard;