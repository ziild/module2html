function Contact() {
    return (
        <div className = "container">
        <section className="card">
            <h2>CONTACT ME</h2>
            <form>
                <input type="text" id = "name" placeholder="Name"/>
                <input type="email" id = "email" placeholder="Email"/> 
                <textarea placeholder="Message"></textarea>
                <button type="submit" id ="submitBtn">Send</button>
            </form>
        </section>
        </div>
    );
}
export default Contact;