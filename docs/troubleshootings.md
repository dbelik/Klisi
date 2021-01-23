## Troubleshootings
### Docker doesn't re-run when I make changes
You have to run ```docker-compose build --no-cache``` first, and then ```docker-compose up```.