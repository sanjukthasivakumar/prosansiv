
const ParentComponent = () =>{
    return (
        <div>
            <ChildComponent name="john" >im a button</ChildComponent>
        </div>
    );
};


const ChildComponent = (props) =>{
    return (
        <div>
            <h1>props illustration </h1>
            <hr/>
            <h1> Hello Mr. {props.name}</h1>
            <button> {props.children}</button>
        </div>
    )
};

export default ParentComponent;
