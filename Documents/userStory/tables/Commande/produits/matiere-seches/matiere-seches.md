# Matières sèches

---

Creation des matières sèches 

---

- catégorie : RELATION [`categoryDryMatter.id`](categorie-matiere-seche.md) **(not null)**
- quantité utilisée pour la création du produit : _*"usedQuantity"*_ **(not null)**
- nom : _*"name"*_ **(not null)**
- GENCOD : _*"gencod"*_
- marquage : _*"mark"*_
- stock : _*"stock"*_
- stock mini : _*"miniStock"*_
- stock max : _*"maxStock"*_
- proposition de commande : COLLECTION [[`orderProposal`](proposition-de-commande.md)]
- ajustement des stock : [`stockAdjustment`](../gestion-des-stocks/ajustement-stock.md)
- inventaire : [`inventory`](../gestion-des-stocks/inventaire.md)
- observation: _*"observation"*_
- zone de stockage : _*"storageArea"*_
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**

