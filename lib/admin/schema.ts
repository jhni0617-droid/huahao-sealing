export const CREATE_TABLES = `
CREATE TABLE IF NOT EXISTS admins (
  id            INTEGER PRIMARY KEY AUTOINCREMENT,
  username      TEXT    NOT NULL UNIQUE,
  password_hash TEXT    NOT NULL,
  display_name  TEXT    NOT NULL,
  created_at    TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at    TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS products (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  slug         TEXT    NOT NULL UNIQUE,
  name         TEXT    NOT NULL,
  model        TEXT    NOT NULL DEFAULT '',
  category     TEXT    NOT NULL DEFAULT '',
  description  TEXT    NOT NULL DEFAULT '',
  short_desc   TEXT    NOT NULL DEFAULT '',
  specs        TEXT    NOT NULL DEFAULT '[]',
  applications TEXT    NOT NULL DEFAULT '[]',
  materials    TEXT    NOT NULL DEFAULT '[]',
  features     TEXT    NOT NULL DEFAULT '[]',
  faq          TEXT    NOT NULL DEFAULT '[]',
  image        TEXT    DEFAULT NULL,
  pdf_url      TEXT    DEFAULT NULL,
  published    INTEGER NOT NULL DEFAULT 1,
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS inquiries (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  name         TEXT    NOT NULL DEFAULT '',
  email        TEXT    NOT NULL,
  phone        TEXT    DEFAULT '',
  company      TEXT    DEFAULT '',
  product_type TEXT    DEFAULT '',
  industry     TEXT    DEFAULT '',
  temperature  TEXT    DEFAULT '',
  pressure     TEXT    DEFAULT '',
  medium       TEXT    DEFAULT '',
  speed        TEXT    DEFAULT '',
  quantity     TEXT    DEFAULT '',
  message      TEXT    NOT NULL DEFAULT '',
  product      TEXT    DEFAULT NULL,
  file_name    TEXT    DEFAULT NULL,
  file_content TEXT    DEFAULT NULL,
  status       TEXT    NOT NULL DEFAULT 'unread',
  created_at   TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at   TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS cases (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  title       TEXT    NOT NULL,
  company     TEXT    NOT NULL DEFAULT '',
  condition   TEXT    NOT NULL DEFAULT '',
  diagnosis   TEXT    NOT NULL DEFAULT '',
  solution    TEXT    NOT NULL DEFAULT '',
  result      TEXT    NOT NULL DEFAULT '',
  published   INTEGER NOT NULL DEFAULT 1,
  created_at  TEXT    NOT NULL DEFAULT (datetime('now')),
  updated_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);

CREATE TABLE IF NOT EXISTS page_views (
  id          INTEGER PRIMARY KEY AUTOINCREMENT,
  path        TEXT    NOT NULL,
  locale      TEXT    NOT NULL DEFAULT 'zh',
  visited_at  TEXT    NOT NULL DEFAULT (datetime('now'))
);
`
