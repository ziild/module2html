import Card from "./Card";
import { useState } from "react";

function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        fetch("http://localhost/cv-api/process.php", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                message: message
            })
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message);
        })
        .catch(error => {
            console.error("Error:", error);
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

                    <textarea
                        placeholder="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                    ></textarea>

                    <button type="submit" id="submitBtn">
                        Send
                    </button>
                </form>
            </Card>
        </div>
    );
}

export default Contact;