### add your Google maps and analytics api keys
create a .env file in the route directory with:
 
```
REACT_APP_GOOGLE_API_KEY = "YOUR API KEY"
REACT_APP_GOOGLE_ANALYTICS_ID = "UA-XXXXXXX-1" 
```

### dev
`npm start`

### test
`npm test`

### build
`npm build`

### deploy to aws
After installing and setting up aws cli (see: https://docs.aws.amazon.com/cli/latest/userguide/installing.html and https://docs.aws.amazon.com/cli/latest/userguide/cli-chap-getting-started.html)

`npm run build && aws s3 sync build/ s3://whatsmyaltitude.fraser-hart.co.uk`

(replace whatsmyaltitude.fraser-hart.co.uk with your S3 bucket name)

### demo
[check out the demo at whatsmyaltitude.fraser-hart.co.uk](https://whatsmyaltitude.fraser-hart.co.uk)
