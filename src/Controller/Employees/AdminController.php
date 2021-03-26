<?php

namespace App\Controller\Employees;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class AdminController extends AbstractController
{
    /**
     * @Route("/employees/admin", name="employees_admin")
     */
    public function index(): Response
    {
        return $this->render('employees/admin/index.html.twig', [
            'controller_name' => 'AdminController',
        ]);
    }
}
