<?php

namespace App\Controller\Employees;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ProductionController extends AbstractController
{
    /**
     * @Route("/employees/production", name="employees_production")
     */
    public function index(): Response
    {
        return $this->render('employees/production/index.html.twig', [
            'controller_name' => 'ProductionController',
        ]);
    }
}
