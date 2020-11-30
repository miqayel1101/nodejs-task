# Documentation for this task



## Installation

to get the app work you should follow these steps:


```bash
git clone https://github.com/miqayel1101/nodejs-task.git
```
open terminal from root folder and run server: ```node server.js```

then open your browser move to ```localhost:3000``` and upload a csv file with domains

the csv file must have this format: 

   |  domain  | 
   | ------------- | 
   | fb.com | 
   | google.com |
   | -vk.com(invalid) |
   | google.co|
   | .     .   .|
then the app will store the data in MySQL database.

```To connect to database you have to set your own env variables. DB_USERNAME DB_PASSWORD DB_DATABASE DB_HOST```

You have to create database named ```test_db``` and in the ```test_db``` create table named ```domains``` with ```id(primary key, AI), domain(VARCHAR), expiration_date(DATETIME), is_valid(BOOLEAN) columns```
