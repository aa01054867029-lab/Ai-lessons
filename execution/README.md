# Execution Scripts

This directory contains deterministic Python scripts that handle:
- API calls
- Data processing
- File operations
- Database interactions

## Conventions
- Each script should be self-contained and well-commented
- Use `python-dotenv` to load environment variables from `../.env`
- Log errors clearly with stack traces
- Scripts should be idempotent when possible
