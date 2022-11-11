import fs from "fs";
import path from "path";

export default function handler(req, res) {
  const eventId = req.query.eventId;

  const filePath = path.join(process.cwd(), "data", "events.json");
  const fileData = fs.readFileSync(filePath);
  const data = JSON.parse(fileData);

  if (req.method === "POST") {
    const updatedComments = req.body.comments;

    const updatedData = data.map((event) => {
      if (event.id === eventId) {
        return { ...event, comments: [...event.comments, updatedComments] };
      }
      return event;
    });

    fs.writeFileSync(filePath, JSON.stringify(updatedData));

    res.status(201).json({ message: "Success" });
  } else {
    const selectEvent = data.filter((event) => event.id === eventId);

    res.status(200).json({ comments: selectEvent[0].comments });
  }
}
