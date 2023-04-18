import express from 'express';
const app = express();
const Students = [
    "eman",
    "noha",
    "omer",
    "fady",
    "ali"
]
const Student = (req, res) => {
    let output = "<ul>"
    for (let i = 0; i < Students.length; i++) {
        output += "<li>" + Students[i] + "</li>";
    }
    output += "</ul>"
    res.send(output)
}
app.get("/students", Student)
app.listen(5000)