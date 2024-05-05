# Use an official Python runtime as a parent image
FROM python:3.12-slim

# Set the working directory in the container
WORKDIR /app

# Install any needed packages specified in requirements.txt
COPY requirements.txt /app/
RUN pip install --no-cache-dir -r requirements.txt

# Copy the current directory contents into the container at /app
COPY . /app

# Make port 8000 available to the world outside this container
EXPOSE 8000

# Set environment variables
ENV FLASK_ENV=production

# Run app.py when the container launches using Gunicorn
CMD ["gunicorn", "-w 4", "-b", "0.0.0.0:8000", "wsgi:app"]