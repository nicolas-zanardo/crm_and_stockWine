# Produits

___ 

Creation d'un produit unique par client 

___


- stock : _*"stock"*_ **(not null)**
- ajustement des stock : [`inventoryAdjustment`](./gestion-des-stocks/ajustement-stock.md)
- inventaire : [`inventory`](./gestion-des-stocks/inventaire.md)
- catégorie : RELATION [`categoryProduct`](categorie-product.md) **(not null)**
- nom commercial : RELATION [`categoryProduct.commercialName`](nom-commerical.md) **( not null )**
- matières sèches : COLLECTION [[`dryMatter`]](matiere-seches/matiere-seches.md) 
- client : COLLECTION [[`customer.id`]](../../Users/user.md) **(not null)**
- palettisation : [`palette.id`](../palette/palettisation.md) 
- prix de vente unitaire: _*"priceProduct"*_
- Catégorie de produit pour la TVA : [`categoryProductTVA`](../../pays/categorie-produit-tva.md) **(not null)**
- coût des matières sèches : _*"totalDryMatter'*_
- coût d'estimation de la matière premiere : _*"rawMaterialCostEstimation"*_
- coût d'estimation de la main d'oeuvre : _*"manpowerCostEstimation"*_
- observation : _*"observation"*_
- zone de stockage : _*"storageArea"*_ 
- utilisateurs qui ont modifié : COLLECTION [[`user.id`](../../Users/user.md)]
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**
