# ipfs-website
 my first forey into ipfs web deveoplment


# install
## prerequisite 
- ipfs installed and can run '>ipfs daemon'
```
npm install
node ./app.js
```


## installed packages
```
>npm install ipfs-http-client ejs express express-fileupload body-parser
```

# build docker 
```
docker build -t wisehackermonkey/ipfs-website:latest .
docker run -it --rm -p 3000:3000 wisehackermonkey/ipfs-website:latest
```
# run in docker 
```powershell
$env:ipfs_staging = "${pwd}\staging"
$env:ipfs_data = "${pwd}\data"
docker run -d --name ipfs_host -v $env:ipfs_staging:/export -v $env:ipfs_data:/data/ipfs -p 4001:4001 -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 ipfs/go-ipfs:latest

docker run -it --rm --name ipfs_host -v $env:ipfs_staging:/export -v $env:ipfs_data:/data/ipfs -p 4001:4001 -p 127.0.0.1:8080:8080 -p 127.0.0.1:5001:5001 ipfs/go-ipfs:latest

```

# todo
## resources
- [Building an IPFS app with Node.js - YouTube](https://www.youtube.com/watch?v=RMlo9_wfKYU) (added 20200515)
