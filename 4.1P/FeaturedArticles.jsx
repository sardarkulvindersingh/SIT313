import React from "react";
import { Card, Image, Button, Rating } from "semantic-ui-react";

function FeaturedArticles() {
  const articles = [
    {
    id: 2,
    title: "Active people need ABW Leaves of Life",
    description: "Discover how ABW Leaves of Life can boost energy and overall wellness.",
    author: "Health Daily",
    rating: 5,
    image: "https://picsum.photos/seed/fitness/400/240", 
  },
   {
    id: 2,
    title: "Yoga for the Mind, Body and Soul",
    description: "Exploring how yoga promotes mental clarity, physical health, and spiritual balance.",
    author: "Mohan Das",
    rating: 4.7,
    image: "https://picsum.photos/seed/yoga/400/240",  
  },
   {
      id: 3,
      title: "How COVID-19 is Affecting People with Mental Health Disorders",
      description:
        "An in-depth look at the challenges faced by people with psychiatric disorders during the COVID-19 pandemic.",
      author: "Dr. Anish Shah, MD",
      rating: 5,
      image: "https://picsum.photos/seed/covidmentalhealth/400/240",
    },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h2>Featured Articles</h2>
      <Card.Group itemsPerRow={3}>
        {articles.map((article) => (
          <Card key={article.id}>
            <Image src={article.image} wrapped ui={false} />
            <Card.Content>
              <Card.Header>{article.title}</Card.Header>
              <Card.Description>{article.description}</Card.Description>
            </Card.Content>
            <Card.Content extra>
              <Rating
                icon="star"
                defaultRating={Math.round(article.rating)}
                maxRating={5}
                disabled
              />
              <span style={{ marginLeft: "10px" }}>by {article.author}</span>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
      <Button basic color="grey" style={{ marginTop: "15px" }}>
        See all articles
      </Button>
    </div>
  );
}

export default FeaturedArticles;
