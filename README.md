# Volvo Cars WebdriverIO test automation framework example

This project has 4 requirements:

1. Setup the solution and its Dockerized image
2. Parallel execution of tests
3. Reporting of the results
4. Documentation

## Setup the solution and its Dockerized image

- First, we initialized the project with `npm init`. Next, we set up WDIO with default settings by running `npx wdio config`. This will also create our folder structure and a couple of examle tests.
- We will keep features, step definitions, web elements in the `./components` folder.
- There is a single webpage that we need to test, `https://www.volvocars.com/intl/v/car-safety/a-million-more`, which is passed directly in the step definition.
- This webpage will have 1 page with 3 checks: footer, header and cookie modal.

### Dockerization

To run in a Dockerized environment, we would have to make a couple of changes.


```js
exports.config = {
  ...
  ccapabilities: [
        {
            maxInstances: 3,
            browserName: 'chrome',
            'goog:chromeOptions': {
                args: ['--head', '--disable-gpu', '--window-size=1920x1080']
            }
        },
    ],
  ...
```

Next, we have to create a Dockerfile that builds our image. The requirement is that it must have at least Chrome installed:

```Dockerfile
FROM cypress/browsers:node16.17.0-chrome106

WORKDIR /testing

COPY package*.json ./

RUN npm ci

COPY . .

CMD ["npm", "run", "test:ci"]
```

Finally, we have to build and run the container:

```bash
docker build --no-cache -t testname -f Dockerfile .
docker run testname
```

**Note**: This is not supported on ARM architecture (M1 or similar Mac) as it would cause Chrome to crash inside the Docker container. If that's necessary, the Dockerfile base image would need to be replaced with a version that supports ARM Chrome and the commands would become:

```bash
docker buildx build --platform linux/amd64 --no-cache -t testname -f Dockerfile .
docker run --platform linux/amd64 testname
```

## Parallel execution of tests

Test parallelism is enabled by default in `wdio.conf.js` by setting maximum instances
```js
exports.config = {
  ...
  maxInstances: 10,
  capabilities: [{
      maxInstances: 5,
      browserName: 'chrome',
      acceptInsecureCerts: true
  }],
  ...
```

## Reporting of the results
HTML reports are configured by installing the dependency given below and adding them in wdio.conf.js file

```js
reporters: [
        ['@rpii/wdio-html-reporter', {
            outputDir: './reports/html-reports',
            filename: 'report.html',
            reportTitle: 'My Test Report',
            showInBrowser: true,
        }]
    ],
  ...
```

Here's a preview of the HTML report this creates:

<img width="1431" alt="Screenshot 2025-01-13 at 2 52 50 PM" src="https://github.com/user-attachments/assets/ea3c18cd-adbf-4c49-9836-82377d26e389" />
