// content.js

// Define the Student object
const Student = {
    name: "John Doe",
    age: 20,
    grade: "A"
  };
  
  // Add the Student object to the window object of the web page
window.Student = Student;
  
  // Optionally, you can log the Student object to the console for verification
console.log("Injected Student object:", window.Student);
const event = new CustomEvent("studentData", { detail: Student });
document.dispatchEvent(event);

// content.js

// Listen for messages from web page
window.addEventListener("message", (event) => {
    // Check if the message is from the React webpage
    if (event.source !== window) return;
  
    // Check the message content
    if (event.data && event.data.action === "openPopup") {
      // Send message to background script
      chrome.runtime.sendMessage({ action: "openPopup" });
    }
  });
  