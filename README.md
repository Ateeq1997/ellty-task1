📄 All Pages Dropdown Component (React)

This project is a React-based UI implementation of a Home page component designed from a Figma mockup.
It includes multiple “All pages” buttons, each with its own independent dropdown containing selectable pages, matching the provided design and interaction requirements.

Live Preview:https://ellty-task1-fawn.vercel.app/

🔍 Task Overview

The goal of this task was to:

Recreate the Home page UI based on provided Figma designs

Implement a dropdown component that opens from each “All pages” button

Ensure independent state management for each button

Match the styling, layout, and interaction behavior shown in the designs

Use React with clean, readable, and well-organized code

🛠️ Technologies Used

React (Functional Components + Hooks)

JavaScript (ES6+)

HTML5

CSS3

No external UI frameworks (custom components used for full control)

✨ Features
Home Page

Displays 5 identical “All pages” buttons

Each button contains:

Label: All pages

Checkbox indicator

More (⋮) icon

Clicking any button opens its own dropdown

Dropdown Component

Shows:

“All pages” checkbox

Individual page options (Page 1 – Page 4)

Done button to close dropdown

Selecting “All pages” selects all page options

Selecting individual pages updates only the current button

Each dropdown is fully independent

Closing the dropdown does not affect other buttons

Checkbox Implementation

Uses a custom checkbox component

Ensures:

Consistent size

Consistent alignment

Pixel-perfect appearance

Avoids browser inconsistencies from native checkbox scaling

🧠 State Management Logic

Each “All pages” button maintains its own state

State structure:

{
  id: number,
  selectedPages: string[]
}


Dropdown actions update only the selected button

No shared or global checkbox state

📁 Project Structure
src/
│── App.js          # Main component logic
│── Checkbox.jsx    # Custom checkbox component
│── App.css         # Styling
│── index.js        # Entry point

🚀 Getting Started
1️⃣ Clone the Repository
git clone https://github.com/your-username/all-pages-dropdown.git

2️⃣ Install Dependencies
npm install

3️⃣ Run the Project
npm start


The app will run on:

http://localhost:3000

📸 UI Behavior Summary
Action	Result
Click “All pages” button	Opens dropdown
Select “All pages” in dropdown	Selects all pages for that button only
Select individual pages	Updates only that button
Click Done	Closes dropdown
Other buttons	Remain unaffected
✅ Key Highlights

Clean and readable React code

Independent dropdown logic

Custom checkbox for visual consistency

Fully functional interactions

Matches Figma design behavior

Easy to extend or customize

📌 Notes

The UI can be further enhanced with:

Animations

Accessibility improvements

Keyboard navigation

Exact Figma color tokens

These were intentionally kept minimal to focus on correctness and clarity.

👤 Author
Ateeq ur Rehman

<img width="1527" height="634" alt="Screenshot 2025-12-29 154728" src="https://github.com/user-attachments/assets/ec027b25-dce0-4873-826e-c5030752881d" />
<img width="1040" height="738" alt="Screenshot 2025-12-29 154826" src="https://github.com/user-attachments/assets/50fa5cd9-fca9-4fdd-ae81-ef47d046c07b" />
<img width="1235" height="769" alt="Screenshot 2025-12-29 154816" src="https://github.com/user-attachments/assets/4e3b2080-cab1-465b-b82a-d2c4d5626d73" />
<img width="1078" height="807" alt="Screenshot 2025-12-29 154751" src="https://github.com/user-attachments/assets/1284573d-e1b9-4b9d-b104-74c2b20b593c" />
<img width="1312" height="786" alt="Screenshot 2025-12-29 154741" src="https://github.com/user-attachments/assets/02584468-f786-4def-9c97-56a169df96b3" />


