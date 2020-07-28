<?php

namespace App\Entity;

use App\Repository\PostRepository;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;

/**
 * @ORM\Entity(repositoryClass=PostRepository::class)
 */
class Post
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $firstName;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $lastName;

    /**
     * @ORM\Column(type="text")
     */
    private $contents;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fishName;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $fishSize;

    /**
     * @ORM\Column(type="decimal", precision=10, scale=2)
     */
    private $fishWeight;

    /**
     * @ORM\Column(type="string", length=255)
     */
    private $fishImage;

    /**
     * @ORM\OneToMany(targetEntity=Comment::class, mappedBy="post", orphanRemoval=true)
     */
    private $comments;

    public function __construct()
    {
        $this->comments = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getFirstName(): ?string
    {
        return $this->firstName;
    }

    public function setFirstName(string $firstName): self
    {
        $this->firstName = $firstName;

        return $this;
    }

    public function getLastName(): ?string
    {
        return $this->lastName;
    }

    public function setLastName(string $lastName): self
    {
        $this->lastName = $lastName;

        return $this;
    }

    public function getContents(): ?string
    {
        return $this->contents;
    }

    public function setContents(string $contents): self
    {
        $this->contents = $contents;

        return $this;
    }

    public function getFishName(): ?string
    {
        return $this->fishName;
    }

    public function setFishName(string $fishName): self
    {
        $this->fishName = $fishName;

        return $this;
    }

    public function getFishSize(): ?string
    {
        return $this->fishSize;
    }

    public function setFishSize(string $fishSize): self
    {
        $this->fishSize = $fishSize;

        return $this;
    }

    public function getFishWeight(): ?string
    {
        return $this->fishWeight;
    }

    public function setFishWeight(string $fishWeight): self
    {
        $this->fishWeight = $fishWeight;

        return $this;
    }

    public function getFishImage(): ?string
    {
        return $this->fishImage;
    }

    public function setFishImage(string $fishImage): self
    {
        $this->fishImage = $fishImage;

        return $this;
    }

    /**
     * @return Collection|Comment[]
     */
    public function getComments(): Collection
    {
        return $this->comments;
    }

    public function addComment(Comment $comment): self
    {
        if (!$this->comments->contains($comment)) {
            $this->comments[] = $comment;
            $comment->setPost($this);
        }

        return $this;
    }

    public function removeComment(Comment $comment): self
    {
        if ($this->comments->contains($comment)) {
            $this->comments->removeElement($comment);
            // set the owning side to null (unless already changed)
            if ($comment->getPost() === $this) {
                $comment->setPost(null);
            }
        }

        return $this;
    }
}
