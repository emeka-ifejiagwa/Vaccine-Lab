\echo 'Delete and recreate database vaccine-hub database?'
\echo 'return for yes or Control-C to cancel (All data will be lost) >' answer


DROP DATABASE vaccine_hub;
CREATE DATABASE vaccine_hub;
\connect vaccine_hub;

\i vaccine-hub-schema.sql

