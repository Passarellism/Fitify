import {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import { useFormik } from "formik";
import { useHistory } from 'react-router-dom';

export default function EditProfile({ user }){

    const history = useHistory();
    const {id} = useParams();  
    const [profile, setProfile] = useState({
        first_name: '',
        last_name: '',
        username: '',
        phone_number: '',
        });
    const [isLoaded, setIsLoaded] = useState(true);
    useEffect(()=>{
        console.log(id)
        fetch(`http://localhost:5555/user/${id}`)
        .then(res=>res.json())
        .then((data) => {
            setProfile(data);
            setIsLoaded(true);
        })
    }, [id])

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: profile,
        onSubmit: (values) => {
            fetch(`/user/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(values)
            })
            .then(res => {
                if (res.ok) {
                    res.json().then(data => {
                        setProfile(data)
                        history.push('/profile')
                    })
                } else {
                    res.json().then(error => console.log(error.message))
                };
        })
        }
    })


    if (!isLoaded) return <h1>Loading...</h1>;
    if ((user&&user.is_admin === false) || (!user)) {
        return <h1>Cannot edit this Profile</h1>
    } else {
        return (
            <>
                <div className='new-review-form'>
                    <h2>Edit Profile</h2>
                    <form onSubmit={formik.handleSubmit} >
                        <label >First Name:</label>
                        <input type="text"  name="first_name" value={formik.values.first_name} onChange={formik.handleChange} />
                        <br></br>
                        <label >Last Name:</label>
                        <input type="text"  name="last_name" value={formik.values.last_name} onChange={formik.handleChange} />
                        <br></br>
                        <label >Username:</label>
                        <input type="text"  name="username" value={formik.values.username} onChange={formik.handleChange} />
                        <br></br>
                        <label >Email:</label>
                        <input type="text"  name="email" value={formik.values.email} onChange={formik.handleChange} />
                        <br></br>
                        <label >Phone Number:</label>
                        <input type="text"  name="phone_number" value={formik.values.phone_number} onChange={formik.handleChange} />
                        <br></br>
                        <button type="submit" value='Save'>Update</button>
                        <button type="button" onClick={() => history.goBack()}>Cancel</button>
                    </form>
                </div>
            </>
        )
 
    }


}