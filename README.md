# config.properties generator

## Description

Action that generates a `configuration/config.properties` used for test.

## Inputs

### `file-location`

Described where the file will be generated. Set by default to `configuration/config.properties`.

### `host`

The host where the mongo can be reached. Set by default to `mongo`.

### `port`

The port where the mongo can be reached. Set by default to `27017`.

### `database-name`

The mongo database to connect to. Set by default to `test`.

### `wait-time`

The wait time parameter for the mongo connection pool. Set by default to `1000`.

### `connection-timeout`

The timeout for the connection to the mongo to succeed. Set by default to `100`.