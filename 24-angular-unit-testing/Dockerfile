FROM nginx:alpine
WORKDIR /usr/share/nginx/html
WORKDIR /etc/nginx/conf.dist
COPY nginx.conf .
COPY /dist/dap-mandiri-apps /usr/share/nginx/html/
EXPOSE 80