// import React, { useState } from "react";

// const ChatBot = () => {
//   const [formData, setFormData] = useState({ name: "", email: "", time: "" });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       await fetch("http://localhost:5000/api/book-demo", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });
//       setSubmitted(true);
//     } catch (err) {
//       console.error("Submission failed", err);
//     }
//   };

//   return (
//     <div style={{ maxWidth: "400px", margin: "0 auto" }}>
//       {submitted ? (
//         <p>🎉 Thank you! Your demo is booked.</p>
//       ) : (
//         <form onSubmit={handleSubmit}>
//           <input
//             name="name"
//             placeholder="Your Name"
//             onChange={handleChange}
//             required
//           /><br /><br />
//           <input
//             name="email"
//             placeholder="Your Email"
//             type="email"
//             onChange={handleChange}
//             required
//           /><br /><br />
//           <input
//             name="time"
//             placeholder="Preferred Demo Time"
//             onChange={handleChange}
//             required
//           /><br /><br />
//           <button type="submit">Book Demo</button>
//         </form>
//       )}
//     </div>
//   );
// };

// export default ChatBot;



// import React, { useState } from "react";

// const ChatBot = () => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({ name: "", email: "", time: "" });
//   const [input, setInput] = useState("");
//   const [chat, setChat] = useState([
//     { sender: "bot", text: "👋 Hi there! Want to book a free demo?" },
//     { sender: "bot", text: "What's your name?" }
//   ]);
//   const [done, setDone] = useState(false);

//   const handleUserInput = async (e) => {
//     e.preventDefault();
//     if (!input.trim()) return;

//     const userText = input.trim();
//     const newChat = [...chat, { sender: "user", text: userText }];
//     let nextStep = step + 1;

//     if (step === 0) {
//       setFormData({ ...formData, name: userText });
//       newChat.push({ sender: "bot", text: `Nice to meet you, ${userText}! What's your email?` });
//     } else if (step === 1) {
//       setFormData({ ...formData, email: userText });
//       newChat.push({ sender: "bot", text: "Awesome! What time would you prefer for the demo?" });
//     } else if (step === 2) {
//       const updatedData = { ...formData, time: userText };
//       setFormData(updatedData);

//       newChat.push({ sender: "bot", text: "⏳ Booking your demo..." });

//       try {
//         await fetch("http://localhost:5000/api/book-demo", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(updatedData),
//         });

//         newChat.push({
//           sender: "bot",
//           text: "🎉 Your demo is booked! We'll contact you soon.",
//         });

//         setDone(true);
//       } catch (err) {
//         console.error("Booking failed", err);
//         newChat.push({
//           sender: "bot",
//           text: "❌ Sorry! Something went wrong. Try again later.",
//         });
//       }
//     }

//     setChat(newChat);
//     setStep(nextStep);
//     setInput("");
//   };

//   return (
//     <div style={styles.chatWrapper}>
//       <div style={styles.chatBox}>
//         {chat.map((msg, idx) => (
//           <div key={idx} style={msg.sender === "bot" ? styles.bot : styles.user}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       {!done && (
//         <form onSubmit={handleUserInput} style={styles.inputRow}>
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your response..."
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Send</button>
//         </form>
//       )}
//     </div>
//   );
// };

// const styles = {
//   chatWrapper: {
//     maxWidth: "450px",
//     margin: "0 auto",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     padding: "1rem",
//     fontFamily: "sans-serif",
//     background: "#f9f9f9",
//   },
//   chatBox: {
//     maxHeight: "400px",
//     overflowY: "auto",
//     paddingBottom: "1rem",
//   },
//   bot: {
//     background: "#e0f0ff",
//     padding: "10px",
//     margin: "5px 0",
//     borderRadius: "6px",
//     textAlign: "left",
//   },
//   user: {
//     background: "#d1ffd6",
//     padding: "10px",
//     margin: "5px 0",
//     borderRadius: "6px",
//     textAlign: "right",
//   },
//   inputRow: {
//     display: "flex",
//     gap: "0.5rem",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #ccc",
//   },
//   button: {
//     padding: "10px 16px",
//     borderRadius: "5px",
//     background: "#007bff",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
// };

// export default ChatBot;



// import React, { useState } from "react";

// const ChatBot = () => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     brand: "",
//     email: "",
//     phone: "",
//     service: "",
//     description: "",
//     budget: ""
//   });
//   const [input, setInput] = useState("");
//   const [chat, setChat] = useState([
//     { sender: "bot", text: "👋 Welcome! Let’s collect your project details." },
//     { sender: "bot", text: "First, what's your full name?" }
//   ]);
//   const [done, setDone] = useState(false);

//   const handleUserInput = async (e) => {
//     e.preventDefault();
//     const userText = input.trim();
//     if (!userText) return;

//     const newChat = [...chat, { sender: "user", text: userText }];
//     let nextStep = step + 1;

//     switch (step) {
//       case 0:
//         setFormData({ ...formData, name: userText });
//         newChat.push({ sender: "bot", text: "Great! What’s your company or brand name?" });
//         break;
//       case 1:
//         setFormData({ ...formData, brand: userText });
//         newChat.push({ sender: "bot", text: "Your email address?" });
//         break;
//       case 2:
//         setFormData({ ...formData, email: userText });
//         newChat.push({ sender: "bot", text: "Phone number (WhatsApp preferred)?" });
//         break;
//       case 3:
//         setFormData({ ...formData, phone: userText });
//         newChat.push({
//           sender: "bot",
//           text: "What type of service are you looking for?\n(AI Chatbot, WhatsApp Bot, MVP, SaaS, Custom App?)"
//         });
//         break;
//       case 4:
//         setFormData({ ...formData, service: userText });
//         newChat.push({ sender: "bot", text: "Briefly describe your project or idea." });
//         break;
//       case 5:
//         setFormData({ ...formData, description: userText });
//         newChat.push({
//           sender: "bot",
//           text: "Optional: Any budget or deadline?"
//         });
//         break;
//       case 6:
//         const updatedData = { ...formData, budget: userText };
//         setFormData(updatedData);
//         newChat.push({ sender: "bot", text: "⏳ Submitting your info..." });

//         try {
//           await fetch("http://localhost:5000/api/book-demo", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedData),
//           });
//           newChat.push({ sender: "bot", text: "✅ Thanks! We’ll get back to you shortly." });
//           setDone(true);
//         } catch (err) {
//           console.error("Error:", err);
//           newChat.push({ sender: "bot", text: "❌ Something went wrong. Try again later." });
//         }
//         break;
//       default:
//         break;
//     }

//     setChat(newChat);
//     setStep(nextStep);
//     setInput("");
//   };

//   return (
//     <div style={styles.chatWrapper}>
//       <div style={styles.chatBox}>
//         {chat.map((msg, idx) => (
//           <div key={idx} style={msg.sender === "bot" ? styles.bot : styles.user}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       {!done && (
//         <form onSubmit={handleUserInput} style={styles.inputRow}>
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type your response..."
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Send</button>
//         </form>
//       )}
//     </div>
//   );
// };

// const styles = {
//   chatWrapper: {
//     maxWidth: "480px",
//     margin: "2rem auto",
//     border: "1px solid #ccc",
//     borderRadius: "8px",
//     padding: "1rem",
//     fontFamily: "sans-serif",
//     background: "#f9f9f9",
//   },
//   chatBox: {
//     maxHeight: "500px",
//     overflowY: "auto",
//     paddingBottom: "1rem",
//   },
//   bot: {
//     background: "#e6f7ff",
//     padding: "10px",
//     margin: "6px 0",
//     borderRadius: "6px",
//     textAlign: "left",
//   },
//   user: {
//     background: "#d2f8d2",
//     padding: "10px",
//     margin: "6px 0",
//     borderRadius: "6px",
//     textAlign: "right",
//   },
//   inputRow: {
//     display: "flex",
//     gap: "0.5rem",
//     marginTop: "10px",
//   },
//   input: {
//     flex: 1,
//     padding: "10px",
//     borderRadius: "5px",
//     border: "1px solid #aaa",
//   },
//   button: {
//     padding: "10px 16px",
//     borderRadius: "5px",
//     background: "#007bff",
//     color: "#fff",
//     border: "none",
//     cursor: "pointer",
//   },
// };

// export default ChatBot;


// // File: frontend/src/components/ChatBot.jsx
// import React, { useEffect, useState } from "react";

// const ChatBot = () => {
//   const [step, setStep] = useState(0);
//   const [formData, setFormData] = useState({
//     name: "",
//     brand: "",
//     email: "",
//     phone: "",
//     service: "",
//     description: "",
//     budget: "",
//     country: ""
//   });
//   const [input, setInput] = useState("");
//   const [chat, setChat] = useState([
//     { sender: "bot", text: "👋 Hi! Let’s get your project started." },
//     { sender: "bot", text: "What’s your full name?" }
//   ]);
//   const [done, setDone] = useState(false);

//   useEffect(() => {
//     fetch("https://ipapi.co/json")
//       .then((res) => res.json())
//       .then((data) => {
//         setFormData((prev) => ({ ...prev, country: data.country_name }));
//       });
//   }, []);

//   const handleUserInput = async (e) => {
//     e.preventDefault();
//     const userText = input.trim();
//     if (!userText) return;

//     const newChat = [...chat, { sender: "user", text: userText }];
//     let nextStep = step + 1;

//     switch (step) {
//       case 0:
//         setFormData({ ...formData, name: userText });
//         newChat.push({ sender: "bot", text: "What’s your brand or company name?" });
//         break;
//       case 1:
//         setFormData({ ...formData, brand: userText });
//         newChat.push({ sender: "bot", text: "Your email address?" });
//         break;
//       case 2:
//         setFormData({ ...formData, email: userText });
//         newChat.push({ sender: "bot", text: "Got it! What's your phone number?" });
//         break;
//       case 3:
//         setFormData({ ...formData, phone: userText });
//         newChat.push({ sender: "bot", text: "Choose the service you need." });
//         nextStep = 4;
//         break;
//       case 4:
//         setFormData({ ...formData, service: userText });
//         newChat.push({ sender: "bot", text: "Describe your project or idea." });
//         break;
//       case 5:
//         setFormData({ ...formData, description: userText });
//         newChat.push({ sender: "bot", text: "Any budget or timeline you have in mind?" });
//         break;
//       case 6:
//         const updatedData = { ...formData, budget: userText };
//         setFormData(updatedData);
//         newChat.push({ sender: "bot", text: "⏳ Submitting your details..." });

//         try {
//           await fetch("http://localhost:5000/api/book-demo", {
//             method: "POST",
//             headers: { "Content-Type": "application/json" },
//             body: JSON.stringify(updatedData),
//           });
//           newChat.push({ sender: "bot", text: "✅ Thank you! We'll get in touch shortly." });
//           setDone(true);
//         } catch (err) {
//           console.error("Error:", err);
//           newChat.push({ sender: "bot", text: "❌ Something went wrong. Please try again later." });
//         }
//         break;
//       default:
//         break;
//     }

//     setChat(newChat);
//     setStep(nextStep);
//     setInput("");
//   };

//   return (
//     <div style={styles.chatWrapper}>
//       <div style={styles.chatBox}>
//         {chat.map((msg, idx) => (
//           <div key={idx} style={msg.sender === "bot" ? styles.bot : styles.user}>
//             {msg.text}
//           </div>
//         ))}
//       </div>
//       {!done && (
//         <form onSubmit={handleUserInput} style={styles.inputRow}>
//           <input
//             value={input}
//             onChange={(e) => setInput(e.target.value)}
//             placeholder="Type here..."
//             style={styles.input}
//           />
//           <button type="submit" style={styles.button}>Send</button>
//         </form>
//       )}
//       {step === 4 && (
//         <div style={styles.options}>
//           {["AI Website Chatbot", "WhatsApp Chatbot", "AI Agents", "SaaS MVP", "Popup Agent", "Custom Project"].map((option) => (
//             <button
//               key={option}
//               onClick={() => {
//                 setInput(option);
//                 document.querySelector("form").dispatchEvent(new Event("submit", { cancelable: true, bubbles: true }));
//               }}
//               style={styles.optionButton}
//             >
//               {option}
//             </button>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// const styles = {
//   chatWrapper: { maxWidth: "500px", margin: "2rem auto", border: "1px solid #ccc", borderRadius: "10px", padding: "1rem", background: "#fff" },
//   chatBox: { maxHeight: "500px", overflowY: "auto", paddingBottom: "1rem" },
//   bot: { background: "#eef", padding: "10px", margin: "6px 0", borderRadius: "6px", textAlign: "left" },
//   user: { background: "#cfc", padding: "10px", margin: "6px 0", borderRadius: "6px", textAlign: "right" },
//   inputRow: { display: "flex", gap: "0.5rem", marginTop: "10px" },
//   input: { flex: 1, padding: "10px", borderRadius: "5px", border: "1px solid #aaa" },
//   button: { padding: "10px 16px", borderRadius: "5px", background: "#007bff", color: "#fff", border: "none", cursor: "pointer" },
//   options: { marginTop: "10px", display: "flex", flexWrap: "wrap", gap: "0.5rem" },
//   optionButton: { padding: "8px 12px", borderRadius: "5px", border: "1px solid #007bff", background: "#e6f0ff", cursor: "pointer" }
// };

// export default ChatBot;







// File: frontend/src/components/ChatBot.jsx
import React, { useEffect, useState } from "react";

const ChatBot = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    email: "",
    phone: "",
    service: "",
    description: "",
    budget: "",
    country: "",
  });
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([
    { sender: "bot", text: "👋 Hi! Let’s get your project started." },
    { sender: "bot", text: "What’s your full name?" },
  ]);
  const [done, setDone] = useState(false);
  const [open, setOpen] = useState(false); // Floating button toggle

  useEffect(() => {
    fetch("https://ipapi.co/json")
      .then((res) => res.json())
      .then((data) => {
        setFormData((prev) => ({ ...prev, country: data.country_name }));
      });
  }, []);

  const handleUserInput = async (e) => {
    e.preventDefault();
    const userText = input.trim();
    if (!userText) return;

    const newChat = [...chat, { sender: "user", text: userText }];
    let nextStep = step + 1;

    switch (step) {
      case 0:
        setFormData({ ...formData, name: userText });
        newChat.push({
          sender: "bot",
          text: "What’s your brand or company name?",
        });
        break;
      case 1:
        setFormData({ ...formData, brand: userText });
        newChat.push({ sender: "bot", text: "Your email address?" });
        break;
      case 2:
        setFormData({ ...formData, email: userText });
        newChat.push({
          sender: "bot",
          text: "Got it! What's your phone number?",
        });
        break;
      case 3:
        setFormData({ ...formData, phone: userText });
        newChat.push({ sender: "bot", text: "Choose the service you need." });
        nextStep = 4;
        break;
      case 4:
        setFormData({ ...formData, service: userText });
        newChat.push({ sender: "bot", text: "Describe your project or idea." });
        break;
      case 5:
        setFormData({ ...formData, description: userText });
        newChat.push({
          sender: "bot",
          text: "Any budget or timeline you have in mind?",
        });
        break;
      case 6:
        const updatedData = { ...formData, budget: userText };
        setFormData(updatedData);
        newChat.push({
          sender: "bot",
          text: "⏳ Submitting your details...",
        });

        try {
          await fetch("http://localhost:5000/api/book-demo", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(updatedData),
          });
          newChat.push({
            sender: "bot",
            text: "✅ Thank you! We'll get in touch shortly.",
          });
          setDone(true);

          // Auto-close after 3 seconds
          setTimeout(() => setOpen(false), 3000);
        } catch (err) {
          console.error("Error:", err);
          newChat.push({
            sender: "bot",
            text: "❌ Something went wrong. Please try again later.",
          });
        }
        break;
      default:
        break;
    }

    setChat(newChat);
    setStep(nextStep);
    setInput("");
  };

  return (
    <>
      {/* Floating Button */}
      {!open && (
        <button onClick={() => setOpen(true)} style={styles.floatingButton}>
          💬
        </button>
      )}

      {/* Chatbot Window */}
      {open && (
        <div style={styles.chatWrapper}>
          <div style={styles.closeBar}>
            <button onClick={() => setOpen(false)} style={styles.closeBtn}>
              ✖
            </button>
          </div>

          <div style={styles.chatBox}>
            {chat.map((msg, idx) => (
              <div
                key={idx}
                style={msg.sender === "bot" ? styles.bot : styles.user}
              >
                {msg.text}
              </div>
            ))}
          </div>

          {!done && (
            <form onSubmit={handleUserInput} style={styles.inputRow}>
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type here..."
                style={styles.input}
              />
              <button type="submit" style={styles.button}>
                Send
              </button>
            </form>
          )}

          {step === 4 && (
            <div style={styles.options}>
              {[
                "AI Website Chatbot",
                "WhatsApp Chatbot",
                "AI Agents",
                "SaaS MVP",
                "Popup Agent",
                "Custom Project",
              ].map((option) => (
                <button
                  key={option}
                  onClick={() => {
                    setInput(option);
                    document
                      .querySelector("form")
                      .dispatchEvent(
                        new Event("submit", {
                          cancelable: true,
                          bubbles: true,
                        })
                      );
                  }}
                  style={styles.optionButton}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

const styles = {
  floatingButton: {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    background: "#007bff",
    color: "#fff",
    border: "none",
    fontSize: "24px",
    cursor: "pointer",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    zIndex: 9999,
  },
  chatWrapper: {
    position: "fixed",
    bottom: "90px",
    right: "20px",
    width: "90%",
    maxWidth: "320px",
    maxHeight: "70vh",
    border: "1px solid #ccc",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    display: "flex",
    flexDirection: "column",
    zIndex: 9999,
  },
  closeBar: {
    display: "flex",
    justifyContent: "flex-end",
    padding: "5px",
    borderBottom: "1px solid #eee",
  },
  closeBtn: {
    background: "transparent",
    border: "none",
    fontSize: "18px",
    cursor: "pointer",
  },
  chatBox: {
    flex: 1,
    overflowY: "auto",
    padding: "10px",
  },
  bot: {
    background: "#eef",
    padding: "8px",
    margin: "4px 0",
    borderRadius: "6px",
    textAlign: "left",
  },
  user: {
    background: "#cfc",
    padding: "8px",
    margin: "4px 0",
    borderRadius: "6px",
    textAlign: "right",
  },
  inputRow: {
    display: "flex",
    gap: "0.5rem",
    padding: "10px",
    borderTop: "1px solid #eee",
  },
  input: {
    flex: 1,
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #aaa",
  },
  button: {
    padding: "10px 14px",
    borderRadius: "5px",
    background: "#007bff",
    color: "#fff",
    border: "none",
    cursor: "pointer",
  },
  options: {
    margin: "10px",
    display: "flex",
    flexWrap: "wrap",
    gap: "0.5rem",
  },
  optionButton: {
    padding: "6px 10px",
    borderRadius: "5px",
    border: "1px solid #007bff",
    background: "#e6f0ff",
    cursor: "pointer",
  },
};

export default ChatBot;
