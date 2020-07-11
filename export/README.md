
# Roam export 

This is a dirty cli to export the RoamResearch database, inspired from https://github.com/MatthieuBizien/roam-to-git
 but it didn't work on my PC.

## install dependencies

```
npm install
```


## Run it

set the correct env variables:

- `ROAM_USERNAME` ## Your email
- `ROAM_PASSWORD` ## your password
- `ROAM_URL`      ## the base of the url https://roamresearch.com/#/app/my-database-here


run `node index.js`

wait a couple seconds and you should have a zip file in the current working folder.


