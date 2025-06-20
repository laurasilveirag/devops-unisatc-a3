provider "aws" {
  region = var.aws_region
}

resource "aws_ecs_cluster" "strapi_cluster" {
  name = "strapi-cluster"
}

resource "aws_ecs_task_definition" "strapi_task" {
  family                   = "strapi-task"
  requires_compatibilities = ["FARGATE"]
  cpu                      = "512"
  memory                   = "1024"
  network_mode             = "awsvpc"

  container_definitions = jsonencode([
    {
      name      = "strapi"
      image     = "${var.dockerhub_username}/strapi-a3:latest"
      essential = true
      portMappings = [
        {
          containerPort = 1337
          hostPort      = 1337
        }
      ]
      environment = [
        {
          name  = "APP_KEYS"
          value = "ImJMpHjnCdJw4ii7jZzCXQ==,Jg239VoMach6Fh2LAH6ydA==,LAdmPTwE8oqyVjAV4pCkBQ==,f1gPGngKmE5xhyDktSpCVw=="
        },
        {
          name  = "API_TOKEN_SALT"
          value = "X2d0C6rgXwWgwEZCslZN0A=="
        },
        {
          name  = "ADMIN_JWT_SECRET"
          value = "deEi8rGl7WB43uXiaYPaOg=="
        },
        {
          name  = "TRANSFER_TOKEN_SALT"
          value = "vhsZEWfU3anLONbLZXZfqg=="
        },
        {
          name  = "JWT_SECRET"
          value = "U2Nh9O8oDdw6gzXqWbg5Eg=="
        },
        {
          name  = "DATABASE_CLIENT"
          value = "sqlite"
        },
        {
          name  = "DATABASE_FILENAME"
          value = ".tmp/data.db"
        },
        {
          name  = "HOST"
          value = "0.0.0.0"
        },
        {
          name  = "PORT"
          value = "1337"
        }
      ]
    }
  ])
}

resource "aws_ecs_service" "strapi_service" {
  name            = "strapi-service"
  cluster         = aws_ecs_cluster.strapi_cluster.id
  task_definition = aws_ecs_task_definition.strapi_task.arn
  desired_count   = 1
  launch_type     = "FARGATE"

  network_configuration {
    subnets         = [var.subnet_id]
    security_groups = [var.security_group_id]
    assign_public_ip = true
  }
}
