# ROUTES
<!-- ROUTES -->

### Auth
<!-- Auth -->
- '/api/auth' - root
- POST - '/' -> Login user and get back jsw token
- GET - '/' -> Get authorized User *this is a test route*

### User
<!-- User -->
- '/api/users' - root
- POST - '/' -> Register's user

### Dashboard
- '/api/dashboard' - root
- GET - '/' -> Gets user dashboard
<!-- journal -->
- PUT - '/journal' -> Creates journal entry
- GET - '/journal/:id' -> Gets journal entry by id
- DELETE - '/journal/:id' -> Deletes journal entry by id
<!-- calendar -->
- PUT - '/calendar' -> Creates calendar entry
- GET - '/calendar/:id' -> Gets calendar entry
- DELETE - '/calendar/:id' -> Deletes calendar entry
<!--  -->

# MODELS
<!-- MODELS -->
- Dashboard
- User
<!--  -->

# MIDDLEWARE
<!-- MIDDLEWARE -->

### Users
<!-- USERS -->
- register
- login

### Dashboard
<!-- Dashboard -->
- calendar_post
- journal_post

### Auth
<!-- Auth -->
- authorized
<!--  -->