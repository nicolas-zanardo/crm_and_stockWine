# Purchase Item

___

Produit attachée a une commande d'un client

___

- quantité : _*"quantity"*_ **(not null)**
- produit : RELATION [`produit.id`](produits/produits.md) **(not null)**
- quantité/prix de matières sèches par produits : JSON ARRAY "collectionDryMatter"  [{"id:","name:",
  "qty:","price"}] **(not null)**
- prix de vente : RELATION [`product.priceProduct`](produits/produits.md)
- Coût Total des matières-sèches : _*"totalCostDryMatter"*_
- quantité de palette : _*"quantityPalette"*_ **(not null)**
- quantité de carton : _*"quantityCardboard"*_ **(not null)**
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**