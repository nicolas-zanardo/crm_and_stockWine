 # Fournisseur
 

- nom : _*"name"*_ **(not null)**
- contact : COLLECTION [[`supplierContact`](../../../shared/contact.md)]
- adresse de facturation : [[`facturationAddress`](../../../shared/addresse-de-facturation.md)] 
- adresse de livraison : COLLECTION [[`deliveryAddress`](../../../shared/adrdresse-de-livraison.md)]
- Franco : _*"carriagePaidDelivery"*_ 
- date de creation : _*"createAt"*_ **(not null)**
- date de modification : _*"updateAt"*_ **(not null)**