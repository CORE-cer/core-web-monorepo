env "dev" {
  src = "file://db/middleware-api.pg.hcl"
  url = getenv("DATABASE_URL")
}
