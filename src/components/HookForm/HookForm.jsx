
const HookForm = () => {

    const handleSubmit = e =>{
        e.preventDefault();
        // console.log(e.target.name.value);
        // console.log(e.target.email.value);
        // console.log(e.target.phone.value);
        // console.log("Form submitted");
    }

    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name"  id="" />
                <br />
                <input type="email" name="email" id="" />
                <br />
                <input type="password" name="password" id="" />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default HookForm;