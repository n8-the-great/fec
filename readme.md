# Atelier Shopping App

## A web app built to provide you with access to the most stylish and up-to-date clothing options available!

**Table of Contents**
1. [ Description. ](#desc)
2. [ Installation Instructions. ](#installation)


<a name="desc"></a>
## 1. Description
  There are 3 main modules on the Atelier Shopping App, those being the Overview, Related Products, and Questions/Answers. In the Overview you will find product information including:
  - Images of the product
  - Different available styles for the product
  - Features of the product
  - Basic review information
  As well as being able to select from available sizes and quantity amounts, and adding the product to your cart!

  In the Related Products section, you will be presented with any products that our internal algorithm deems as similar to what you are currently viewing! As well as being able to add the products you like to, "My Outfit," and the quick ability to compare the product you are looking at with another related product!

  Last, but not least, in Questions/Answers you can view user submitted questions and answers about the selected product. You will be able to post your own questions, with the ability to upload images for more clarification. Besides asking questions, you also have the ability to post answers to questions presented by other users, as well as report inappropriate questions or answers, mark a question/answer combo as helpful, or even search the questions on the product for key words!


<a name="installation"></a>
## 2. Installation Instructions
  Once you have pulled our repo from github.com, the steps are very simple to get our web app up and running. Once navigated to the the folder where you have stored the app, all you need is a few commands.

  * `npm install` first to make sure that you have all the proper dependencies downloaded.
  * `npm run react-dev`, then once you recieve compilation confimation, you can hit `ctrl+c` to stop compilation.
  * `npm start` will start the server.

  Now as long as your machine can route public traffic to port 3000 properly, you're website is up and running!
  We also recommend using an AWS Ubunto 20.04 virtual machine to run the server for you in the background. If you do so, you can install the NPM package PM2 with `npm install --save pm2` and replace `npm start` with `pm2 start npm -- start`. If you need to stop the server and are using PM2, you will have to use the command `pm2 stop all`.
