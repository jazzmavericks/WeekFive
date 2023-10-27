import Pet from "./Pet";

const Person = (props) => {
    return (
        <div>
            <p>onClick={props.clickMe("here is some data")}. I am {props.age}.</p>
            <Pet petName={props.petName} />
        </div>
    );
};

export default Person;