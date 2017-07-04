# demoeventlistapi
A rework of https://www.codementor.io/olatundegaruba/nodejs-restful-apis-in-10-minutes-q0sgsfhbd to provide a simple API that would list events along with an img URL and a status.
[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

Usage:

1.Create yourself a Heroku account (free).
2. In Heroku note your app URL (you can access this in settings).
3. Open Postman - Select GET, paste the app URL, then add events to the end of the URL (e.g. myapp.com/events).
4. Click SEND and the DB tables are created (you'll see [] in the response).
5. Select POST (keep the URL the same) and enter in 3 key values event_name (any text), event_status (pending, ongoing, complete) and event_img (any URL) and click SEND.
6. Retrieve your events by switching back to GET and click SEND.
