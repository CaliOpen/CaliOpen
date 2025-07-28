# Migrations

## Elasticsearch

How to apply an elasticsearch migration (mappings)

cf.
https://github.com/CaliOpen/Caliopen/blob/ef2121f29de188a4c01e4d1474c0e500c9a5a881/src/backend/tools/py.migrate/README.rst

```bash
caliopen -f caliopen.yaml migrate_index --input_script devtools/migrations/index_migration_v5_to_v6.py
```

cf. `src/backend/tools/py.CLI/caliopen_cli/cli.py`
