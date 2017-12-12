# ARK CORE
This is a rewrite of ark-node to prepare the upcoming AIP11 fork

Still alpha

## Quickstart

### Installation
- Clone repo
- Windows PreRequsities:
  - install https://slproweb.com/download/Win64OpenSSL-1_0_2m.exe 
  - `npm install --global --production windows-build-tools` (pay atention to have correct msbuild tools).
  - if there is still a build error "missing CL.exe" --> create an empty C++ project in Microsoft Visual Studio. If missing it will reinstall correct build tools.

- `npm install -g nodemon`
- `npm install`
- Check `config/___network___/server.json` (above all database connection parameters)
  - Change database engine if required - set `db.dialect` to one of: `sqlite`, `mysql`, `mssql` or `postgres`
  - Install package (E.g. `npm install ...`: `sqlite3`, `mysql2`, `tedious` or `pg pg-hstore`)
    - sqlite also supports in memory. This can be done by setting uri to: `sqlite://:memory:`
  - The `docker-compose up` could be used to create and start the PostgreSQL database.
- Start relay: `npm run start:devnet` to start devnet (use mainnet or testnet as well)
- Start forger: `npm run forge:devnet` (check for passphrases in `config/devnet/delegate.json`)

## TODO: 

  - [x] rebuild devnet
  - [x] rebuild mainnet
  - [x] start independant testnet
  - [x] fast rebuild (with automatic switch to full rebuild when rebuild is close to network height)
  - [x] rotating and compressing log
  - [x] constants in config file, with progressive fork rules (to be improved to take into account rounds instead of height)
  - [x] support for mysql (not tested)
  - [x] support for postgresql
  - [x] support for sqlite3
  - [x] support for mssql (not tested)
  - [x] internal API for forger
  - [x] forger on independent core

Upcoming: 
  - [ ] testing
  - [ ] p2p API compatibility (60%)
  - [ ] Transaction Pool (20%)
  - [ ] Connect forger to Transaction Pool
  - [ ] new p2P API
  - [ ] support for mongodb
  - [ ] support for leveldb
  - [ ] fork management
  - [ ] bip38 encryption of delegate passphrase

