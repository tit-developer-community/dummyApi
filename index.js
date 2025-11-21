import express from "express";

const app = express();
const PORT = 3000;

const users = [
  {
    username: "arjun_dev",
    email: "arjun.dev@example.com",
    profilePic: "https://avatar.iran.liara.run/public/7",
  },
  {
    username: "megha_codes",
    email: "megha.codes@example.com",
    profilePic: "https://avatar.iran.liara.run/public/7",
  },
  {
    username: "rohan_x",
    email: "rohan.x@example.com",
    profilePic: "https://avatar.iran.liara.run/public/7",
  },
  {
    username: "kavya_ui",
    email: "kavya.ui@example.com",
    profilePic: "https://avatar.iran.liara.run/public/7",
  },
];

app.get("/", (req, res) => {
  try {
    // fake: if users not found
    if (!users) {
      return res.status(404).send("Users not found");
    }

    res.status(200).send(users);
  } catch (error) {
    res.status(500).send("Something went wrong");
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
