# **Interactive Kanban Board - Design Overview**

## **Board Display:**

Here are screenshots showcasing the Kanban board's different states based on selected grouping options:

### **1. Default Display**
![Kanban Default Display]()

### **2. Grouped by User**
![Grouped by User]()

### **3. Grouped by Priority**
![Grouped by Priority]()

---

## **Project Requirements:**

You will develop an interactive Kanban board using **React JS** that communicates with the provided API. The board should dynamically adjust based on user input, allowing grouping and sorting of tickets in various ways.

### **Functionality:**

The user can select from the following grouping options via the "Display" button:

1. **Status**: Tickets are categorized by their current status.
2. **User**: Tickets are grouped based on the assigned user.
3. **Priority**: Tickets are sorted by their priority level.

In addition, users can sort tickets by:
- **Priority**: Highest to lowest priority.
- **Title**: Alphabetically by title.

The application should be responsive and visually engaging, mirroring the provided examples.

---

## **Priority Levels:**

Tickets will have one of the following priority levels (received from the API):

| Priority Level | Description  |
|----------------|--------------|
| 4              | Urgent       |
| 3              | High         |
| 2              | Medium       |
| 1              | Low          |
| 0              | No priority  |

Ensure that the Kanban board reflects the priority visually to make it intuitive for users.

---

