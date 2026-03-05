import Card from "./Card";
import { useState } from "react";
function handleSubmit(e) {
    e.preventDefault();
    alert(`THANK YOUUUUUUUUUUUU ${name}!`);
}
function Contact() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    return (
        <div className="container">
            <Card title="CONTACT ME">
                <form onSubmit = {handleSubmit}>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <textarea placeholder="Message"></textarea>
                    <button type="submit" id="submitBtn">Send</button>
                </form>
            </Card>
        </div>
    );
}
export default Contact;