import { useState } from "react";

// creat a form to be able to aff info about friends, render the friends list
//  we need to create a form and also create a state for handling the
// input change in our form plus a onchange function to handle the actual
// the info we want about our friends are
// first name
// last name
// email


const FriendsExample = () => {
    const [person,setPerson] = useState ({
        firstName: "",
        lastName:"",
        email:"",
    });
        // state for holding all our friends,an array would be great for that!


    const [friends, setFriends] = useState([]);

    const handleChange = (e) =>{
        const name = e.target.name;
        const value = e.target.value;

        // console.log("name:" + name,"value:" + value)
        // update the person state
        setPerson({...person, [name]: value});
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        // we need to creat a middle handler,kinda a little "driver"
        // that is going to pass our person onto our friends  array
        if (person.firstName && person.lastName && person.email){
        const newPerson = {...person};

        // we want to update our friends array with the new person
        setFriends([...friends, newPerson]);

        // clearinput field in form
        setPerson ({firstName:"",lastName:"",email:""});
        }
    };

  return <div >
    <form className="form">
        <h1>Friends</h1>
        <div className="form-control">
            <label htmlFor="firstName">First Name:</label>
            <input 
            type="text"
             id="firstName"
             name="firstName" 
             value={person.firstName} 
             onChange={handleChange} />
        </div>
        <div className="form-control">
            <label htmlFor="lastName">Last Name:</label>
            <input
             type="text" 
             id="lastName" 
             name="lastName" 
             value={person.lastName} 
             onChange={handleChange} />
        </div>
        <div className="form-control">
            <label htmlFor="Email">Email:</label>
            <input 
            type="text"
             id="email"
             name="email" 
             value={person.email} 
             onChange={handleChange}  />
        </div>
        <button className="form-btn" type="submit" onClick={handleSubmit}>
            Add friend
            </button>
    </form>
    <div>
        {friends.map((person) => {
            const {firstName, lastName, email} = person;
            return(
                <div className="item"> 
                    <div className="item-row">
                        <p>{firstName} {lastName} </p>
                        <p> {email} </p>

                    </div>

                </div>
            )
        })}
    </div>
  </div>
}

export default FriendsExample;