# This tells Docker to install an OS (alpine) with Node installed
FROM node:alpine

# As soon as we have node installed add nodemon as a global dependency for development
RUN npm install -g nodemon

# Creates a Working Directory in the docker container called ‘app’
WORKDIR /app

# By adding this line, we make sure npm install runs only when dependencies are changed
ADD package.json package-lock.json ./

RUN npm install

# The rest of the source code gets added after the npm install line. 
# You should add all folders you need from your project. 
# Alternatively "ADD . ." will add all of the project files to the docker container.
# Note that files listed in .dockerignore won't be included.
ADD bin ./bin
#ADD src ./src

# not 'npm run start' now that nodemon is installed for development environment
CMD ["nodemon"]
