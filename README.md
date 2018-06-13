# Serverless OpenWhisk Node.js Template

Hello! 😎

This is a Node.js (v8) boilerplate/template for the IBM OpenWhisk platform using Serverless - it's set up with a basic `serveless.yml` to get up and running quickly with a Cloud Function and API Gateway.

Feel free to use this, but I only created this a a quick test and reference point.

I maily followed [this](https://serverless.com/framework/docs/providers/openwhisk/guide/intro/) guide on the serverless site, plus some other bits and pieces. Part of which is [installing the IBM Cloud CLI](https://serverless.com/framework/docs/providers/openwhisk/guide/credentials#install-the-ibm-cloud-cli).

### Credentials 🔑

Before the service can be deployed, you need to have an [IBM Bluemix account](https://console.bluemix.net/registration/?target=%2Fdashboard%2Fapps).

Once you have an account, you'll need to create an organisation and Cloud Foundry Space - this will be for a specific region.

Once you've done this, you can login via Terminal to create your `.wskprops` file - this will be used by Serverless to deploy to the platform.

`bx login -a "<region>" -o "<organisation>" -s "<cloud foundry space>"`

I initially had a few issues setting this up when I was following the Serverless guide, but following [these steps](https://console.bluemix.net/openwhisk/learn/cli) seemed to work.

### Deploying 🚀

I've included two simple NPM scripts to deploy to either a `dev` or `prod` version.

For example, to deploy to `dev`, run `npm run deploy/dev`.

Once Serverless is complete, in the output, you'll notice the API Gateway (`api-gw`) endpoint that you can use to hit the function.

### Plugins 🔌

To use Serverless with the OpenWhisk platform, the `serverless-openwhisk` is required. I've added this as a dev dependency. However, due to an open issue, this must be installed globally with Serverless.

`npm install --global serverless serverless-openwhisk`

### TODO 🤓

- Investigate the use of Webpack (v4) for bundling - I know it reduces the size of the package, but does it give any performance benefits? 🤔
