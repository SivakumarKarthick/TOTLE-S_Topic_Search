import React, { useState } from "react";

const topicsData = [
  { id: 1, name: "Thermodynamics", category: "Physics" },
  { id: 2, name: "Organic Chemistry", category: "Chemistry" },
  { id: 3, name: "Linear Algebra", category: "Mathematics" },
  { id: 4, name: "World War II", category: "History" },
  { id: 5, name: "Human Anatomy", category: "Biology" },
];

const TopicSearch = () => {
  const [query, setQuery] = useState("");
  const [hovered, setHovered] = useState(null);

  const filteredTopics = topicsData.filter((topic) =>
    topic.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Topic Catalogue</h2>

      {/* Search Box */}
      <input
        type="text"
        placeholder="Search topics..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}R
        style={styles.search}
      />

      {/* Topic List */}
      <div style={styles.list}>
        {filteredTopics.length > 0 ? (
          filteredTopics.map((topic) => (
            <div
              key={topic.id}
              style={{
                ...styles.card,
                ...(hovered === topic.id ? styles.cardHover : {}),
                animation: "fadeIn 0.5s ease",
              }}
              onMouseEnter={() => setHovered(topic.id)}
              onMouseLeave={() => setHovered(null)}
            >
              <h3 style={styles.cardTitle}>{topic.name}</h3>
              <p style={styles.cardCategory}>{topic.category}</p>
            </div>
          ))
        ) : (
          <p style={styles.noResults}>No topics found</p>
        )}
      </div>

     
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.96); }
            to   { opacity: 1; transform: scale(1); }
          }
        `}
      </style>
    </div>
  );
};

const styles = {
  container: {
    width: "420px",
    margin: "40px auto",
    textAlign: "center",
    fontFamily: "Poppins, Arial, sans-serif",
  },

  title: {
    fontSize: "28px",
    fontWeight: "600",
    marginBottom: "20px",
    color: "#333",
  },

  search: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    marginBottom: "25px",
    transition: "all 0.3s ease",
    boxShadow: "0px 0px 5px rgba(0,0,0,0.05)",
  },

  list: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },

  card: {
    padding: "15px",
    border: "1px solid #ececec",
    borderRadius: "12px",
    backgroundColor: "white",
    textAlign: "left",
    cursor: "pointer",
    transition: "all 0.3s ease",
    boxShadow: "0px 2px 5px rgba(0,0,0,0.08)",
  },

  
  cardHover: {
    transform: "translateY(-5px) scale(1.02)",
    backgroundColor: "#6aaaefff",
    border: "1px solid #0965b4ff",
    boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
  },

  cardTitle: {
    margin: "0 0 5px",
    fontSize: "20px",
    fontWeight: "bold",
  },

  cardCategory: {
    margin: 0,
    fontSize: "14px",
    color: "#555",
  },

  noResults: {
    color: "#d9534f",
    fontSize: "16px",
    fontWeight: "600",
    animation: "fadeIn 0.5s ease",
  },
};

export default TopicSearch;
