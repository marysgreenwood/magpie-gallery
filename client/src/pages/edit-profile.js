import React from "react";

export default function EditProfile () {
    return (
        <div class="container row">
    <div class="jumbotron col-sm-4 pull-center">
        <form action="/api/users/edit-profile" method="post">
            <div>
                <label>Username:</label>
                <input type="text" name="username"/>
            </div>   
            {/* {{!-- <div>
                <label>Old password:</label>
                <input type="password" name="oldPassword"/>
            </div> --}} */}
            <div>
                <label>New password:</label>
                <input type="password" name="password"/>
            </div>
            {/* {{!-- <div>
                <label>Type new password:</label>
                <input type="password" name="secondPassword"/>
            </div> --}} */}
            <div>
                <input class="btn btn-primary" type="submit" value="Edit Profile"/>
            </div>
        </form>                  
    </div>     
</div>
    )
}