# Projet Lambda AWS avec Terraform et GitHub Actions

Ce projet déploie une fonction Lambda Node.js qui renvoie l'heure actuelle à Paris et un nom, exposée via API Gateway. L'ensemble est déployé automatiquement grâce à Terraform et GitHub Actions.

## Fonctionnalités

- Fonction Lambda Node.js qui affiche l'heure à Paris et un nom
- Exposition via API Gateway
- Déploiement automatique via Terraform et GitHub Actions
- Destruction automatique de l'infrastructure
- Sauvegarde du state Terraform dans une branche dédiée

## Structure du projet

```
.
├── .github/workflows/       # Workflows GitHub Actions
│   ├── deploy.yml           # Workflow de déploiement
│   └── destroy.yml          # Workflow de destruction
├── lambda/                  # Code de la fonction Lambda
│   └── index.js             # Fonction Lambda
├── backend.tf               # Configuration du backend Terraform
└── main.tf                  # Configuration principale Terraform
```

## Déploiement

Le déploiement se fait automatiquement via GitHub Actions lorsqu'un push est effectué sur la branche main.

### Prérequis

- Une branche Git nommée "state" pour stocker l'état Terraform dans le dossier "tfstate/"
- Les secrets GitHub suivants configurés dans le repository :
  - AWS_ACCESS_KEY_ID
  - AWS_SECRET_ACCESS_KEY

## Destruction de l'infrastructure

La destruction de l'infrastructure peut être déclenchée manuellement via l'interface GitHub Actions (workflow_dispatch).

## Détails techniques

- Région AWS : eu-west-3 (Paris)
- Runtime Lambda : Node.js 18.x
- Nom de la fonction Lambda : groupe8-hello-world-lambda
- Nom de l'API Gateway : groupe8-hello-world-api
- Endpoint API : /hello (méthode GET)
- Logs CloudWatch : rétention de 14 jours

## Exemple de réponse API

```json
{
  "message": "Hello World ! Ici Baptiste JULIENNE & Thomas CATROS, à 14:30"
}
```

## Outputs Terraform

- `api_url` : URL de l'endpoint API Gateway
- `cloudwatch_log_group` : Nom du groupe de logs CloudWatch pour la fonction Lambda