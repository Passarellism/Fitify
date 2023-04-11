import React, { useState, useEffect } from "react";
import { withRouter, Link } from "react-router-dom";

function Profile({ user }) {

    // console.log(user.first_name)

    return(
        <div>
            <h1>
            {user.first_name}
            </h1>
            <h1>
            {user.last_name}
            </h1>
            <h1>
            {user.username}
            </h1>
            <h1>
            {user.email}
            </h1>
            <h1>
            {user.phone_number}
            </h1>
            <Link to={`/user/${user.id}/edit`}>
                <button type="submit" value='Save'>Edit Profile</button>
            </Link>
        </div>
    )
    }

export default withRouter(Profile);