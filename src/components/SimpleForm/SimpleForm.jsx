import useInputState from "../../hooks/useInputState";

const SimpleForm = () => {

    const [name, handleNameChange] = useInputState('Rezwan')

    const handleSubmit = e =>{
        e.preventDefault();
        console.log(name);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={name} onChange={handleNameChange} type="text" name="name"  id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="text" name="phone" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default SimpleForm;


