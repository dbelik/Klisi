<p align="center">
  <img src="./assets/klisi-logo.svg" alt="Klisi" height="100px" title="Klisi" />
</p>

# Klisi
Klisi is a video communication tool that lets users to make video calls.

## Usage
Before starting project, you must first configure it. Note that you must remove ```.example``` from their names.
Files you have to configure include:
 - (API files)[./api/config/default.example.json];
 - (Client files)[./client/src/config/api.example.js];

You can run Klisi API and client using Docker compose.
Run the command in the terminal in Klisi repo root:
```
docker-compose up
```

## Development status
So far, Klisi API only supports OAuth2 authorization and yet not implemented WebRTC connection between clients.
Once it's implemented, you can expect API documentation (OpenAPI 3) in ./docs folder. 

## Credits
Thanks to all website designers who has inspired Klisi design.
You can find list of these websites in [./docs/design.md](./docs/design.md).

## License
Klisi is licensed under the [MIT license](./LICENSE).
