# Use an official Python runtime as a parent image
FROM python:3.9-slim

# Set the working directory in the container
WORKDIR /usr/src/app

# Install any needed packages specified in requirements.txt
# Copy only the requirements.txt initially to leverage Docker cache
COPY ./requirements.txt ./
RUN pip3 install pika
RUN pip install --no-cache-dir -r requirements.txt


# Copy the rest of the application's code
COPY . .

# Make port 5000 available to the world outside this container
EXPOSE 5000

# Define environment variable
ENV FLASK_APP=app.py
# ENV FLASK_RUN_HOST=0.0.0.0

ENTRYPOINT ["python3"]
CMD ["app.py"]