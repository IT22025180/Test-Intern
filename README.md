---Set up project---
Create a folder called Backend and install express dependency to create the server in that folder.
After installation create server.js file to assign a port and mongodb string to start the server.

--Api endpoints--
1.Create user 
Create a user using name,username and password with jwt auth token and hashing the password to unreadble with bycrypt.
If the username already exists in the database it occure some endpoint error 'user already exists'.

2.Checking user
Get users uname and password from frotnend and validate it with user queries.
If password or uname is not matched occurs error 'Invalid username or password'

3.Add post
Adding post from given type.
Title and content are stored as strings and createdAt generates when api is procces correctly and and updatedAt updates when updatePost api triggers.
author attribute filled as the registed user's uname from frontend.

4.Get all posts
Get all the post without filtering

5.Get user defined posts
Get registerd user's uname and filtered post by it and get them.

6.Update post
Update post by  _id attribute and it collabrate with user defined posts which can only updated by its own user
updatesAt attribute generates automatically when this api triggers and store local date and time in query

7.Delete post
Delete post by  _id attribute and it collabrate with user defined posts which can only delete by its own user
