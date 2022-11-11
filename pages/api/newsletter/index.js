import fs from "fs";
import path from "path";

export default function handler(req, res) {
  if (req.method === "POST") {
    const email = req.body.email;

    if (!email || !email.includes("@")) {
      res.status(422).json({ message: "Invalid email address." });
      return;
    }

    const filePath = path.join(process.cwd(), "data", "newletters_email.json");
    const fileData = fs.readFileSync(filePath);
    const data = JSON.parse(fileData);
    data.push(email);

    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: "Signed Up!" });
  }
}
