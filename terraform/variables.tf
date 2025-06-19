variable "aws_region" {
  default = "us-east-1"
}

variable "dockerhub_username" {
  description = "henriquedkr"
  type        = string
}

variable "subnet_id" {
  description = "Subnet pública onde o ECS será criado"
  type        = string
}

variable "security_group_id" {
  description = "Security Group permitindo acesso na porta 1337"
  type        = string
}
