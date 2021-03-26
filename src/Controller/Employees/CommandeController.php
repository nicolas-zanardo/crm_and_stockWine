<?php

namespace App\Controller\Employees;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class CommandeController extends AbstractController
{
    /**
     * @Route("/employees/commande", name="employees_commande")
     */
    public function index(): Response
    {
        return $this->render('employees/commande/index.html.twig', [
            'controller_name' => 'CommandeController',
        ]);
    }
}
