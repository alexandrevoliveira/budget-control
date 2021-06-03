# details about running propper the server of the application

# download postgres (https://www.postgresql.org/download/linux/ubuntu/) and run the following command line:
sudo -u postgres psql -c "ALTER USER postgres PASSWORD 'postgres';"

# after that go to budget_control.sql file and create the relations of the application

# development environment
https://www.notion.so/Ambiente-de-desenvolvimento-Trilha-ReactJS-e7a377d183134647a177b6a34785f8c3

# to install all dependencies of the project, run the following command:
yarn

# after going through all these steps u will need to run the seeds.js to inject fake data into the database so we can work on our application in this initial development.
node seed.js

# last but not least, start the server just running:
yarn start