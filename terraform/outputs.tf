output "rds_endpoint" {
  value = aws_db_instance.default.endpoint
}

output "s3_assets_bucket" {
  value = aws_s3_bucket.assets.bucket
}

output "n8n_public_ip" {
  value = aws_instance.n8n.public_ip
}
