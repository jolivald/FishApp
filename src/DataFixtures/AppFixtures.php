<?php

namespace App\DataFixtures;

use App\Entity\Comment;
use App\Entity\Post;
use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager)
    {
        $date = new \DateTime();
        $fishes = [ 'Anguille', 'Brême', 'Brochet', 'Carassin', 'Carpe', 'Esturgeon', 'Tanche' ];
        foreach ($fishes as $i => $fishName){
            $post = new Post();
            $post->setFirstName('John');
            $post->setLastName('Doe');
            $post->setFishName($fishName);
            $post->setFishSize(12.34);
            $post->setFishWeight(3.14);
            $post->setFishImage("fixture-$i.jpg");
            $post->setCreatedAt($date);
            $post->setCreatedBy('fixture');
            $post->setUpdatedAt($date);
            $post->setUpdatedBy('fixture');
            $post->setContents('Ma plus belle prise, à ce jour... ;)');
            $manager->persist($post);

            $comm = new Comment();
            $comm->setPost($post);
            $comm->setFistName('Janet');
            $comm->setLastName('Jackson');
            $comm->setContents('Félicitations !!!');
            $comm->setCreatedAt($date);
            $comm->setCreatedBy('fixture');
            $comm->setUpdatedAt($date);
            $comm->setUpdatedBy('fixture');
            $manager->persist($comm);
        }

        $manager->flush();
    }
}
