<!-- ROUTES -->
<!-- Auth -->
'/api/auth' - root
POST - '/' -> Login user and get back jsw token
GET - '/' -> Get authorized User *this is a test route*

<!-- User -->
'/api/users' - root
POST - '/' -> Register's user

<!-- Calendar -->
'/api/calendar' - root
POST - '/' -> Creates journal entry
GET - '/' -> Gets all journal entries for the auth user
GET - '/:id' -> Gets specific journal entry by id
DELETE - '/:id' -> Deletes specific journal entry by id

<!-- Journal -->
'/api/journal' - root
POST - '/' -> Creates journal entry
GET - '/' -> Gets all journal entries for the auth user
GET - '/:id' -> Gets specific journal entry by id
DELETE - '/:id' -> Deletes specific journal entry by id
<!--  -->

<!-- MODELS -->
Calendar
Journal
User
<!--  -->

<!-- MIDDLEWARES -->
<!-- USERS -->
register
login

<!-- CALENDAR -->
calendar_post

<!-- JOURNAL -->
journal_post

<!-- Auth -->
authorized
<!--  -->