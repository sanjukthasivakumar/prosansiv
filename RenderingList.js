export default function RenderingList(){
    const fruits = ["Apple", "Banana", "Cherry"];

    return (
        <div>
            <h2>List of Fruits</h2>
            <ul>
                {fruits.map((fruit, index) => (
                   <div key = {index}>
                    <p>
                        {fruit}-{index}
                    </p>
                   </div>
                ))}
            </ul>
        </div>
    );
}