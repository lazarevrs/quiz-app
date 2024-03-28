## Quiz App

![Preview](./assets/preview.png)

### Build docker image
```bash
docker build -t quiz-app:0.0.1 .
```


### Start container
```bash
docker run -d --name quiz-app --restart=always \
           -e ENV=PROD \
           -e API_GATEWAY_HOST=127.0.0.1 \
           -e API_GATEWAY_POST=8200 \
           -p 5000:5000 quiz-app:0.0.1
```