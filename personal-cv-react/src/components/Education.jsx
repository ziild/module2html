import Card from "./Card";
function Education({education}) {
    return (
        <div className="container">
            <Card title="EDUCATION">
                <table class="table">
                    <thead>
                        <tr>
                            <th>Program</th>
                            <th>Institution</th>
                            <th>Year Graduated</th>
                        </tr>
                    </thead>
                    <tbody>
                        {education.map((item, index) => (
                            <tr key={index}>
                                <td>{item.level}</td>
                                <td>{item.school}</td>
                                <td>{item.year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </Card>
        </div>
    );
}
export default Education;