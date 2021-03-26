<?php

namespace App\Controller\Employees;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class DashboardController extends AbstractController
{
    /**
     * @Route("/employees/dashboard", name="employees_dashboard")
     */
    public function index(): Response
    {
        return $this->render('employees/dashboard.html.twig', [
            'controller_name' => 'DashboardController',
        ]);
    }
}
