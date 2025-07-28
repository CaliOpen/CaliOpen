# Hack into datas: Cassandra / Scylla

## docker

When running docker, use this command to begin:

```
cd devtools
docker-compose exec cassandra cqlsh -k caliopen
```

## CQL

This is
[Cassandra Query Language](https://cassandra.apache.org/doc/latest/cql/index.html).
Or a [cheatsheet](https://www.baeldung.com/cassandra-query-cheat-sheet)

Some examples:

- describe keyspace: `DESCRIBE caliopen;`
- list tables: `DESCRIBE TABLES;`
- table info: `DESCRIBE TABLE user_identity;`
- select values: `SELECT * FROM identity_lookup LIMIT 20;`
- select value:
  `SELECT * FROM identity_lookup WHERE identity_id = <id> ALLOW FILTERING;`
- update an entry:
  `UPDATE user_identity SET infos = <value> WHERE identity_id = <id> AND user_id = <id>;`;
- select message for a user
  `select user_id, message_id from message where user_id = 61d81a4f-dc8f-4e0d-8ea1-14e4c5698007 limit 10;`
- search a user by name:

```cql
create index temp_search_user on user (name);
select * from user where name = '<name>';
drop index if exists temp_search_user;
```

- retrieve indexes: visible using table desc
