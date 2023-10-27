const Job = (props) => {
    return (

        <div>
            <p>Job Available: {props.title}. <br /> 
            Salary: {props.wage}.<br /></p>
        </div>
    );
};

export default Job;