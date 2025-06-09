schema "middleware_api" {}

table "users" {
  schema = schema.middleware_api
  column "id" {
    type = varchar(255)
  }
  primary_key {
    columns = [
      column.id
    ]
  }
}

table "queries" {
  schema = schema.middleware_api
  column "id" {
    type = int
  }
  primary_key {
    columns = [
      column.id
    ]
  }
}

table "user_queries" {
  schema = schema.middleware_api
  column "user_id" {
    type = varchar(255)
  }
  column "query_id" {
    type = int
  }
  primary_key {
    columns = [
      column.user_id,
      column.query_id
    ]
  }
  foreign_key "fk_user" {
    columns = [column.user_id]
    ref_columns = [table.users.column.id]
    on_update = CASCADE
    on_delete = CASCADE
  }
  foreign_key "fk_query" {
    columns = [column.query_id]
    ref_columns = [table.queries.column.id]
    on_update = CASCADE
    on_delete = CASCADE
  }
}
