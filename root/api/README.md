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

### Calendar
<!-- Calendar -->
- '/api/calendar' - root
- POST - '/' -> Creates journal entry
- GET - '/' -> Gets all journal entries for the auth user
- GET - '/:id' -> Gets specific journal entry by id
- DELETE - '/:id' -> Deletes specific journal entry by id

### Journal
<!-- Journal -->
- '/api/journal' - root
- POST - '/' -> Creates journal entry
- GET - '/' -> Gets all journal entries for the auth user
- GET - '/:id' -> Gets specific journal entry by id
- DELETE - '/:id' -> Deletes specific journal entry by id
<!--  -->

# MODELS
<!-- MODELS -->
- Calendar
- Journal
- User
<!--  -->

# MIDDLEWARE
<!-- MIDDLEWARE -->

### Users
<!-- USERS -->
- register
- login

### Calendar
<!-- CALENDAR -->
- calendar_post

### Journal
<!-- JOURNAL -->
- journal_post

### Auth
<!-- Auth -->
- authorized
<!--  -->