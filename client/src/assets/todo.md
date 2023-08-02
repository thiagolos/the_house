**HTML & CSS**

- Create CSS variables folder to make code DRY
- Refactor HTML for simplicity and consistency
- SASS? PostCSS?
- Make it responsive

**Database & Models**

- Drop top tracks table and replace with all artist tracks (we can filter by popularity anyway)
- Refactor database models so tables store API responses exactly as they come (adjust types in Types.ts as needed)
- Repopulate new dbs
- Set up cron job to auto fetch new dataset weekly

**New Logic**

- Write logic which compares week on week change for each metric
- Each metric should have a "toggle chart view" option

**Authentication**

- Use passport JS to build Spotify + Google login

**Features**

- Users to be able to provide a spotify link to an Artist to add them to the list
- New view containing all of the artists in the database, split into popularity ranks. Can be filtered by genre,
  "ones to watch" list remains curated.
- Voting system to decide on which artist to feature on the home page next month? (maybe premium user feature?)
