function HelloWorld(){
    return (
        <div>
            <h1>Hello World!!!</h1>;
            <hr/>       
        </div>
    );
}
//fragments----> <>--->(doesn't add to DOM) not <div>
//<hr/>--->manually closing self closing tag
export default HelloWorld; //to export the func to single
//to exporting to multiple---->export {HelloWorld};
