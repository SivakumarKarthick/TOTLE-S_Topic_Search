# 📘 TopicSearch – React Search & Filter Component

A responsive and interactive Topic Catalogue Search Component built using React, inline styling, and lightweight animations.
Designed as part of a case study task to simulate TOTLE’s Catalogue Management System search interface.

Here is the link : https://github.com/SivakumarKarthick/TOTLE-S_Topic_Search  of the github repository and the video file that how can we able run the Topic_Search project completely


🚀 **Features**

🔍 Real-time search filtering

🎨 Fully inline styling (no CSS files)

🖱 Smooth hover animations

💡 Fade-in animation on results

❌ “No topics found” fallback UI

📦 In-memory topic dataset

⚛️ Built using React functional components & hooks

🏗️ Project Structure

topic-search-app/

     │
     └── src/
    │── App.js
    │── TopicSearch.js
    │── index.js

🛠 **Technologies Used**

React

JavaScript (ES6+)

useState

Inline CSS Styles

**CSS Keyframe Animation**

📍 1. Step-by-Step Workflow Process

✅ **Step 1 **— Create React Project

    npx create-react-app topic-search-app
    cd topic-search-app

✅ **Step 2 **— Create Component File

Inside src/, create:

**TopicSearch.js**

✅ **Step 3**— Add In-Memory Data

Inside TopicSearch.js, define topic objects:

    const topicsData = [
      { id: 1, name: "Thermodynamics", category: "Physics" },
  
      { id: 2, name: "Organic Chemistry", category: "Chemistry" },
      ...
      ];

✅ **Step 4** — Manage States

Using useState:

    const [query, setQuery] = useState("");

    const [hovered, setHovered] = useState(null);

✅ **Step 5** — Apply Search Filter

    const filteredTopics = topicsData.filter((topic) =>

       topic.name.toLowerCase().includes(query.toLowerCase())
    );

✅ **Step 6** — Build the UI (Search + Cards)

Title

Search Input

Topic Cards

Hover effects

No Results message

✅ **Step 7** — Add Hover & Animation

When hovered:

Background turns light blue

Card lifts up

Deep shadow applied

Fade-in animation defined inline:

    <style>
    {`
      @keyframes fadeIn {
        from { opacity: 0; transform: scale(0.96); }
    
        to { opacity: 1; transform: scale(1); }
      }
    `}
    </style>

✅ **Step 8** — Add Inline Styles

All styles stored inside:

    const styles = { ... }


This avoids external CSS and keeps everything in one file.

✅ **Step 9** — Connect Component to App.js

    import TopicSearch from "./TopicSearch";

    function App() {

      return <TopicSearch />;
    }

✅ **Step 10** — Run the App

    npm start
  
