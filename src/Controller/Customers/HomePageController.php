<?php

namespace App\Controller\Customers;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class HomePageController extends AbstractController
{
    /**
     * @Route("/", name="home_page")
     */
    public function index(): Response
    {
        return $this->render('global/home_page.html.twig');
    }

    /**
     * @Route("/domaine", name="domaine")
     */
    public function domaine(): Response
    {
        return $this->render('global/domaine.html.twig');
    }

    /**
     * @Route("/vins", name="vins")
     */
    public function vin(): Response
    {
        return $this->render('global/vins.html.twig');
    }

    /**
     * @Route("/flocs", name="flocs")
     */
    public function flocs(): Response
    {
        return $this->render('global/flocs.html.twig');
    }

    /**
     * @Route("/armagnacs", name="armagnacs")
     */
    public function armagnacs(): Response
    {
        return $this->render('global/armagnacs.html.twig');
    }

    /**
     * @Route("/contact", name="contact")
     */
    public function contact(): Response
    {
        return $this->render('global/contact.html.twig');
    }
}
