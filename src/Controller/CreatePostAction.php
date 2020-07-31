<?php

namespace App\Controller;

use App\Entity\Post;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpKernel\Exception\BadRequestHttpException;

final class CreatePostAction // extends AbstractController
{
    public function __invoke(Request $request): Post
    {
        $uploadedFile = $request->files->get('fishImage');
        if (!$uploadedFile) {
            throw new BadRequestHttpException('"fishImage" is required');
        }
        $date = new \DateTime();
        $post = new Post();
        $post->setFishFile($uploadedFile);
        $post->setFirstName($request->request->get('firstName'));
        $post->setLastName($request->request->get('lastName'));
        $post->setFishName($request->request->get('fishName'));
        $post->setFishSize($request->request->get('fishSize'));
        $post->setFishWeight($request->request->get('fishWeight'));
        $post->setContents($request->request->get('contents'));
        $post->setCreatedAt($date);
        $post->setCreatedBy('api platform');
        $post->setUpdatedAt($date);
        $post->setUpdatedBy('api platform');
        return $post;
    }
}