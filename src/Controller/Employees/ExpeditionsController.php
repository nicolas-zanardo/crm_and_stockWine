<?php

namespace App\Controller\Employees;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class ExpeditionsController extends AbstractController
{
    /**
     * @Route("/employees/expeditions", name="employees_expeditions")
     */
    public function index(): Response
    {
        return $this->render('employees/expeditions/index.html.twig');
    }
}
