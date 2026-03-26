import { useState } from "react";
import Card from "./Card";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost/cv-api/process.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
        })
        .catch(err => {
            console.error(err);
            alert("Something went wrong!");
        });
    }

    return (
        <div className="container">
            <Card title="CONTACT ME">
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Name"
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" id="submitBtn">Send</button>
                </form>
            </Card>
        </div>
    );
}

export default Contact;