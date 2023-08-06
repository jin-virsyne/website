# Use the lighttpd image
FROM pdok/lighttpd
# Copy the configuration
COPY lighttpd.conf /srv/lighttpd/lighttpd.conf
# Copy the prerendered application
COPY ./public /var/www
# Export port 80
EXPOSE 80

