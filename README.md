# opery-sequelize-user-auth-service

> Sequelize user authentication service for opery


## Installation

```bash
npm install --save opery-sequelize-user-auth-service
```

## Requirements

- You need a Sequelize User Model to use this service.
- Sequelize User Model should have an username field.


## Methods

### db.models.User

#### `authenticate(username: String, password: String) -> Boolean`
Try to find an user to authenticate

#### `gerUserByUsername(username: String) -> Boolean`
Try to find an user by his username

## License

MIT © [Guillermo Lopez](http://www.guillermolopez.net)