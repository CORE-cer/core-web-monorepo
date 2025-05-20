schema "middleware_api" {}

table "users" {
  schema = schema.middleware_api
  column "id" {
    type = int
  }
  column "email" {
    type = varchar(255)
  }
  primary_key {
    columns = [
      column.id
    ]
  }
  unique "email" {
    columns = [
      column.email
    ]
  }
}
