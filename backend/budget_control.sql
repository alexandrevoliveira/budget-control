-- DROP DATABASE IF REQUIRED --

DROP DATABASE IF EXISTS budget_control;
CREATE DATABASE budget_control;

-- DROP ONLY ROWS IN CASE U NEED TO USE SEED.JS --

truncate table orders RESTART IDENTITY cascade;

-- CREATE TABLES --

CREATE TABLE "orders" (
    "id" SERIAL PRIMARY KEY,
    "po" text,
    "ac" text,
    "status" text DEFAULT 'pendente',
    "budgetist" text,
    "weight" int,
    "stage" text DEFAULT 'acolhimento',
    "modality" text DEFAULT 'fechada',
    "object" text DEFAULT 'objeto',
    "company" text,
    "uf" text,
    "created_at" timestamp DEFAULT (now()),
    "updated_at" timestamp DEFAULT (now()),
    "delivered_at" timestamp DEFAULT (now())
);

-- FOREIGN KEYS --

-- TRIGGERS/PROCEDURES --

CREATE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = now();
    RETURN NEW;
END;
$$ language plpgsql;

CREATE TRIGGER set_orders_timestamp
BEFORE UPDATE ON orders
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();